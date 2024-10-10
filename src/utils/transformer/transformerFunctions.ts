export const transformerFunctions = (state) => ({
  renderPreview: () => {
    const previewBefore = document.getElementById("preview-image-container");
    const previewImage = document.createElement("img");
    previewImage.className = "w-[250px] h-[250px] object-cover rounded";
    previewImage.src = state.url;
    previewBefore.appendChild(previewImage);
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
