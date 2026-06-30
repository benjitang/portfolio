import Image from "next/image";

interface SkillCardProps {
  title: string;
  tools: string[];
}

export default function SkillCard({ title, tools }: SkillCardProps) {
  const showGear = title.toLowerCase().includes('language');
  const showBot = title.toLowerCase().includes('machine');
  const showDatabase = title.toLowerCase().includes('database');
  const showCloud = title.toLowerCase().includes('cloud');
  const showGraphic = title.toLowerCase().includes('graphic');
  const showStyle = title.toLowerCase().includes('ui');

  return (
    <div className="p-5 pb-4 flex flex-col lg:gap-20 gap-24">
      <div className="flex flex-col lg:gap-16 gap-20">
        {showGear && (
          <Image src="/gear.svg" alt="" width={64} height={64} className="w-20 h-auto lg:w-16" />
        )}
        {showBot && (
          <Image src="/bot.svg" alt="" width={64} height={64} className="w-20 h-auto lg:w-16" />
        )}

        {showDatabase && (
          <Image src="/database.svg" alt="" width={64} height={64} className="w-20 h-auto lg:w-16" />
        )}


        {showCloud && (
          <Image src="/cloud.svg" alt="" width={64} height={64} className="w-20 h-auto lg:w-16" />
        )}

        {showGraphic && (
          <Image src="/graphic.svg" alt="" width={64} height={64} className="w-20 h-auto lg:w-16" />
        )}

        {showStyle && (
          <Image src="/style.svg" alt="" width={64} height={64} className="w-20 h-auto lg:w-16" />
        )}


      <h4 className="text-4xl lg:text-3xl text-[#2E3F59] font-victory-striker-sans">
        {title}
      </h4>
      </div>

      <div className="flex text-end justify-end">
        <h3 className="uppercase text-[#2E3F59]/90 underline underline-offset-4 lg:text-xl text-lg text-base">
          {' '}
          See All{' '}
        </h3>
      </div>
    </div>
  );
}
