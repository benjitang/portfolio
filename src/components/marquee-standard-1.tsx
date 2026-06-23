import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";

export const title = "Standard marquee";

const items = ["React", "Next.js", "Tailwind", "TypeScript", "shadcn/ui"];

const Example = () => (
  <div className="w-full max-w-md">
    <Marquee>
      <MarqueeContent>
        {items.map((item) => (
          <MarqueeItem key={item}>
            <span className="px-4 text-sm font-medium">{item}</span>
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </div>
);

export default Example;
