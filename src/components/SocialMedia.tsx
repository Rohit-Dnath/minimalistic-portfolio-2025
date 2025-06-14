import Link from "next/link";
import Codepen from "./icons/Codepen";
import Email from "./icons/Email";
import Github from "./icons/Github";
import X from "./icons/X";
import Instagram from "./icons/Instagram";
import LinkedIn from "./icons/LinkedIn";
import React from "react";
import socialMedia from "@/utilities/socialMedia";

type IconProps = { name: string; className: string };

const Icon: React.FC<IconProps> = ({ name, className }) => {
  const icons: { [key: string]: React.JSX.Element } = {
    instagram: <Instagram className={className} />,
    linkedin: <LinkedIn className={className} />,
    codepen: <Codepen className={className} />,
    email: <Email className={className} />,
    github: <Github className={className} />,
    x: <X className={className} />,
  };

  return icons[name];
};

const SocialMedia: React.FC = () => {
  return (
    <div className="flex flex-row gap-4">
      {socialMedia.map((link) => (
        <Link
          key={link.name}
          href={link.link}
          target="_blank"
          className="overflow-hidden transition-all text-zinc-900/60 dark:text-zinc-100/60 hover:text-zinc-900/100 dark:hover:text-zinc-100/100"
        >
          <p className="sr-only">{link.name}</p>
          <Icon name={link.name} className="transition-all h-5 w-5" />
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
