import facebookView from "./facebookProfile";
import { PreviewsOptions } from "../types/previews.types";
import { renderInstagramProfile } from "./instagramProfile";
import { linkedinProfileCard } from "./linkedinProfile";
import { discordProfileCard } from "./discordProfile";
import { twitchProfileCard } from "./twitchProfile";
import { twitterProfileCard } from "./twitterProfile";
import { whatsappProfileCard } from "./whatsapp";
import { youtubeProfileCard } from "./youtubeProfile";

export const facebookPreview = (
  url: string,
  preview: string,
  title: string
) => {
  const params =
    preview === PreviewsOptions.FACEBOOK_PROFILE
      ? ["Profile Name", url, null, 666]
      : preview === PreviewsOptions.FACEBOOK_BIO
        ? ["Profile Name", null, url, 666]
        : preview === PreviewsOptions.INSTAGRAM_PROFILE
          ? ["Profile Name", url, null, 666]
          : null;
  const newPreview = preview === PreviewsOptions.FACEBOOK_PROFILE
    ? facebookView(params[0], params[1], params[2], params[3])
    : preview === PreviewsOptions.FACEBOOK_BIO
      ? facebookView(params[0], params[1], params[2], params[3])
      : preview === PreviewsOptions.INSTAGRAM_PROFILE
        ? renderInstagramProfile(url)
        : preview === PreviewsOptions.LINKEDIN_PROFILE
          ? linkedinProfileCard(url)
          : preview === PreviewsOptions.DISCORD_PROFILE
            ? discordProfileCard(url)
            : preview === PreviewsOptions.TWITCH_PROFILE
              ? twitchProfileCard(url)
              : preview === PreviewsOptions.TWITTER_PROFILE
                ? twitterProfileCard(url)
                : preview === PreviewsOptions.WHATSAPP_PROFILE
                  ? whatsappProfileCard(url)
                  : preview === PreviewsOptions.YOUTUBE_PROFILE
                    ? youtubeProfileCard(url)
                    : null;
  return `
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 w-[500px]" h-fit>
          <h4 class="text-lg font-semibold mb-2">${title}</h4>
          ${newPreview}
          
    </div>

        `;
};
