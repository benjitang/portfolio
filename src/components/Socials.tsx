import { socials } from '@/constants';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import Image from 'next/image';

const Socials = () => {
  return (
    <div className="text-white flex flex-row justify-between gap-6.5 sm:gap-8">
      {socials.map((social) => (
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          key={social.name}
          className="group border-white border-1 rounded-full flex justify-center items-center p-4 md:p-5 hover:bg-[#F8D752] hover:border-[#2E3F59] transition-colors duration-400 ease-in-out"
        >
          {social.name === 'Github' ? (
            <GithubIcon />
          ) : social.name === 'LinkedIn' ? (
            <LinkedInIcon />
          ) : social.name === 'Twitter' ? (
            <TwitterIcon />
          ) : social.name === 'Instagram' ? (
            <InstagramIcon />
          ) : (
            <Image src={social.src} alt={social.name} width={32} height={32} />
          )}
        </a>
      ))}
    </div>
  );
};

export default Socials;
