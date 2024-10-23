import { PreviewsOptions } from "../types/previews.types";

export const networksFormats = {
  [PreviewsOptions.INSTAGRAM_PROFILE]: {
    crop: {
      height: 320,
      width: 320,
      source: true,
      type: "fill",
      gravity: "face",
    },
  },
  [PreviewsOptions.FACEBOOK_PROFILE]: {
    crop: {
      height: 720,
      width: 720,
      source: true,
      type: "fill",
      gravity: "face",
    },
  },
  [PreviewsOptions.FACEBOOK_BIO]: {
    crop: {
      height: 312,
      width: 820,
      source: true,
      type: "fill",
      gravity: "face",
    },

  },
  [PreviewsOptions.LINKEDIN_PROFILE]: {
    crop: {
      height: 800,
      width: 800,
      source: true,
      type: "fill",
      gravity: "face",
    },
  },
  [PreviewsOptions.LINKEDIN_BANNER]: {
    crop: {
      height: 444,
      width: 1776,
      source: true,
      type: "fill",
      gravity: "face",
    },
  },

  [PreviewsOptions.TWITTER_PROFILE]: {
    crop: {
      height: 500,
      width: 500,
      source: true,
      type: "fill",
      gravity: "face",
    },
  },
  [PreviewsOptions.TWITTER_BANNER]: {
    crop: {
      height: 500,
      width: 1500,
      source: true,
      type: "fill",
      gravity: "face",
    },
  },
  [PreviewsOptions.WHATSAPP_PROFILE]: {
    crop: {
      height: 360,
      width: 360,
      source: true,
      type: "fill",
      gravity: "face",
    },
  },
  [PreviewsOptions.DISCORD_PROFILE]: {
    crop: {
      height: 600,
      width: 600,
      source: true,
      type: "fill",
      gravity: "face",
    },
  },
  [PreviewsOptions.TWITCH_PROFILE]: {
    crop: {
      height: 112,
      width: 112,
      source: true,
      type: "fill",
      gravity: "face",
    },
  },
  [PreviewsOptions.YOUTUBE_PROFILE]: {
    crop: {
      height: 800,
      width: 800,
      source: true,
      type: "fill",
      gravity: "face",
    },
  },
  [PreviewsOptions.YOUTUBE_BANNER]: {
    crop: {
      height: 1152,
      width: 2048,
      source: true,
      type: "fill",
      gravity: "face",
    },
  },


}