import { IconName } from "@/components/pieces/icon";

type SocialMediaConfig = Array<{
  title: string;
  url: string;
  icon: IconName;
}>;

export const socialMediaConfig: SocialMediaConfig = [
  {
    title: "YouTube",
    url: "https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ",
    icon: "youtube",
  },
  {
    title: "Facebook",
    url: "http://www.facebook.com/inteGIRLS",
    icon: "facebook",
  },
  {
    title: "Twitter / X",
    url: "https://twitter.com/integirls",
    icon: "twitter",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/inte.girls/",
    icon: "instagram",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/integirls/",
    icon: "linkedin",
  },
  {
    title: "GitHub",
    url: "https://github.com/IntegirlsHQ",
    icon: "github",
  },
];
