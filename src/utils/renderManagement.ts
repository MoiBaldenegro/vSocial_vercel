import { facebookPreview } from "../templates/preview";
import { PreviewsOptions } from "../types/previews.types";

export function previewsExecution(preview) {
    console.log(preview)
    if (preview.title === PreviewsOptions.FACEBOOK_PROFILE) {
        const newPreview = facebookPreview(preview.url, preview.title, preview.name,);
        return newPreview;
    }

    if (preview.title === PreviewsOptions.FACEBOOK_BIO) {
        const newPreview = facebookPreview(preview.url, preview.title, preview.name,);
        return newPreview;
    }
    if (preview.title === PreviewsOptions.INSTAGRAM_PROFILE) {
        const newPreview = facebookPreview(preview.url, preview.title, preview.name,);
        return newPreview;
    }
    if (preview.title === PreviewsOptions.LINKEDIN_PROFILE) {
        const newPreview = facebookPreview(preview.url, preview.title, preview.name,);
        return newPreview;
    }
    if (preview.title === PreviewsOptions.DISCORD_PROFILE) {
        const newPreview = facebookPreview(preview.url, preview.title, preview.name,);
        return newPreview;
    }
    if (preview.title === PreviewsOptions.TWITCH_PROFILE) {
        const newPreview = facebookPreview(preview.url, preview.title, preview.name,);
        return newPreview;
    }
    if (preview.title === PreviewsOptions.TWITTER_PROFILE) {
        const newPreview = facebookPreview(preview.url, preview.title, preview.name,);
        return newPreview;
    }
    if (preview.title === PreviewsOptions.WHATSAPP_PROFILE) {
        const newPreview = facebookPreview(preview.url, preview.title, preview.name,);
        return newPreview;
    }
    if (preview.title === PreviewsOptions.YOUTUBE_PROFILE) {
        const newPreview = facebookPreview(preview.url, preview.title, preview.name,);
        return newPreview;
    }
    if (preview.title === PreviewsOptions.YOUTUBE_BANNER) {
        const newPreview = facebookPreview(preview.url, preview.title, preview.name,);
        return newPreview;

    }
    if (preview.title === PreviewsOptions.LINKEDIN_BANNER) {

        const newPreview = facebookPreview(preview.url, preview.title, preview.name,);
        return newPreview;
    }
    if (preview.title === PreviewsOptions.TWITTER_BANNER) {
        const newPreview = facebookPreview(preview.url, preview.title, preview.name,);
        return newPreview;

    }
    return "";

}