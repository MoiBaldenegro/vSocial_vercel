import { facebookPreview } from "../templates/preview";
import { PreviewsOptions } from "../types/previews.types";

export function previewsExecution(preview) {
    console.log(preview)
    if (preview.title === PreviewsOptions.FACEBOOK_PROFILE) {
        const newPreview = facebookPreview(preview.url, preview.title, preview.name,);
        return newPreview;
    }
    return "";

}