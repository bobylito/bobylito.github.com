import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconMail from "@/assets/icons/IconMail.svg";
import IconMastodon from "@/assets/icons/IconMastodon.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import { SITE } from "@/config";

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/bobylito",
    linkTitle: `${SITE.title} on Github`,
    icon: IconGitHub,
  },
  {
    name: "Mastodon",
    href: "https://hachyderm.io/@bobylito",
    linkTitle: `${SITE.title} on Mastodon`,
    icon: IconMastodon,
  },
  {
    name: "LinkedIn",
    href: "http://lnkd.in/pGpKxY",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: IconLinkedin,
  },
] as const;

export const SHARE_LINKS = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: IconWhatsapp,
  },
  {
    name: "Mastodon",
    href: "https://mastodonshare.com/?text=",
    linkTitle: `Share this post on Mastodon`,
    icon: IconMastodon,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Share this post via Telegram`,
    icon: IconTelegram,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
