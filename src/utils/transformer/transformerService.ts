import { getCldImageUrl } from "astro-cloudinary/helpers";
import { networksFormats } from "../../configs/formats";
import axios from "axios";

export const transformerService = (state) => ({
  getImageUrl: async () => {
    const config = {
      src: state.public,
      ...state.promt,
    };
    try {
      const originalImageUrl = getCldImageUrl({ src: state.public });
      state.url = originalImageUrl;

      Object.entries(networksFormats).forEach(([key, value]) => {
        const configIn = {
          ...config,
          ...value,
        };
        const previewImageUrl = getCldImageUrl(configIn);
        state.previews.push(previewImageUrl);
      });
    } catch (error) {
      console.error("Error getting image URL:", error);
      throw error;
    }
  },
});

/*
 const options = {
        ...networksFormats[PreviewsOptions.FACEBOOK_PROFILE],
        src: public_id,
        ...selectedPromt,
      };
      const urlFacebook = getCldImageUrl(options);
      console.log(urlFacebook);

      const urlFacebookBio = getCldImageUrl({
        src: public_id,
        ...networksFormats[PreviewsOptions.FACEBOOK_BIO],
        ...selectedPromt,
      });

      const resultsContainer = document.getElementById("results");
      resultsContainer.innerHTML = "";
      const socialNetworks = [
        {
          name: PreviewsOptions.FACEBOOK_PROFILE,
          url: urlFacebook,
          title: "Facebook profile: 720 x 720px",
        },
        {
          name: PreviewsOptions.FACEBOOK_BIO,
          url: urlFacebookBio,
          title: "Facebook bio: 820 x 312px",
        },
      ];

      socialNetworks.forEach((network) => {
        downloads.push(network);
        const card = document.createElement("div");
        card.className = "bg-white dark:bg-gray-800 rounded-lg shadow-md p-4";
        card.innerHTML = facebookPreview(
          network.url,
          network.name,
          network.title
        );

        // Agregar el evento de descarga al botón creado
        const button = card.querySelector("button");
        button.addEventListener("click", () => {
          const downloadLink = document.createElement("a");
          downloadLink.href = urlFacebook;
          downloadLink.download = `${network}.png`;
          downloadLink.click();
        });
        resultsContainer.appendChild(card);
      });

*/
