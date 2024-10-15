import { PreviewsOptions } from "../types/previews.types";

export const networksFormats = {

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
};
