import { networksFormats } from "../configs/formats";
import { PreviewsOptions } from "../types/previews.types";


export const renameFormat = (name) => {

    if (name === PreviewsOptions.FACEBOOK_PROFILE) {
        return "Facebook profile: 720 x 720px";
    }
    if (name === PreviewsOptions.FACEBOOK_BIO) {
        return "Facebook bio: 820 x 312px";
    }

    return "";
};