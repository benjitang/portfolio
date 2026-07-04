import { github_user } from '@/constants';
import type { Project } from '@/types';

const GITHUB_USERNAME = github_user ?? 'your-username';

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  topics: string[];
  language: string | null;
  fork: boolean;
  archived: boolean;
  private: boolean;
  created_at: string;
  html_url: string;
}

function humanizeTitle(name: string) {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function fetchGithubProjects(): Promise<Project[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=created`,
    {
      headers: {
        Accept: 'application/vnd.github+json',
        // optional but recommended: avoids GitHub's low rate limit
        ...(process.env.GITHUB_TOKEN && {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        }),
      },
      // revalidate once an hour instead of hammering the API on every request
      next: { revalidate: 3600 },
    }
  );
  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }
  const repos: GithubRepo[] = await res.json();

  const EXCLUDED_KEYWORDS = ['config', 'dotfiles', 'sandbox'];

  return repos
    .filter((repo) => {
      const name = repo.name.toLowerCase();
      return (
        !repo.fork &&
        !repo.archived &&
        !repo.private &&
        !EXCLUDED_KEYWORDS.some((keyword) => name.includes(keyword))
      );
    })
    .map((repo) => ({
      id: repo.id,
      title: humanizeTitle(repo.name),
      description: repo.description ?? 'No description provided.',
      tags: repo.topics.length ? repo.topics : [repo.language ?? 'Code'],
      year: new Date(repo.created_at).getFullYear(),
      url: repo.html_url,
    }))
    .sort((a, b) => b.year - a.year);
}