import facebookView from "./facebookProfile";
import { PreviewsOptions } from "../types/previews.types";

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
        : null;
  const newPreview = facebookView(params[0], params[1], params[2], params[3]);
  return `
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 w-[500px]">
          <h4 class="text-lg font-semibold mb-2">${title}</h4>
          ${newPreview}
          <button class="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded text-sm">
            Descargar
          </button>
    </div>

        `;
};
