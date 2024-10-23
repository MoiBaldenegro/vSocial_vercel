import { networksFormats } from "../configs/formats";
import { PreviewsOptions } from "../types/previews.types";


export const renameFormat = (name) => {

    if (name === PreviewsOptions.FACEBOOK_PROFILE) {
        return "Facebook profile: 720 x 720px";
    }
    if (name === PreviewsOptions.FACEBOOK_BIO) {
        return "Facebook bio: 820 x 312px";
    }
    if (name === PreviewsOptions.INSTAGRAM_PROFILE) {
        return "Instagram profile: 320 x 320px";
    }
    if (name === PreviewsOptions.LINKEDIN_PROFILE) {
        return "Linkedin profile: 800 x 800px";
    }
    if (name === PreviewsOptions.DISCORD_PROFILE) {
        return "Discord profile: 600 x 600px";
    }
    if (name === PreviewsOptions.TWITCH_PROFILE) {
        return "Twitch profile: 112 x 112px";
    }
    if (name === PreviewsOptions.TWITTER_PROFILE) {
        return "Twitter profile: 500 x 500px";
    }
    if (name === PreviewsOptions.WHATSAPP_PROFILE) {
        return "Whatsapp profile: 360 x 360px";
    }
    if (name === PreviewsOptions.YOUTUBE_PROFILE) {
        return "Youtube profile: 800 x 800px";
    }
    if (name === PreviewsOptions.YOUTUBE_BANNER) {
        return "Youtube banner: 1152 x 2048px";
    }
    if (name === PreviewsOptions.YOUTUBE_BANNER) {
        return "Youtube banner: 1152 x 2048px";
    }
    if (name === PreviewsOptions.LINKEDIN_BANNER) {
        return "Linkedin banner 1776 x 444px";
    }
    if (name === PreviewsOptions.TWITTER_BANNER) {
        return "Twitter banner: 500 x 1500px";
    }

    return "";
};