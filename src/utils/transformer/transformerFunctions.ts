export const transformerFunctions = (state) => ({
  renderPreview: () => {
    const res = new Promise((resolve, reject) => {
      const previewBefore = document.getElementById("preview-image-container");
      previewBefore.innerHTML = "";

      const previewImage = document.createElement("img");
      previewImage.src = state.url;
      previewBefore.appendChild(previewImage);

      // Cargar la imagen principal y luego las previews
      let images = [previewImage];

      // Crear las imágenes de las vistas previas
      state.previews.forEach((preview) => {
        const previewImage = document.createElement("img");
        previewImage.src = preview;
        previewBefore.appendChild(previewImage);
        images.push(previewImage); // Agregarlas al array de imágenes a esperar
      });

      // Esperar a que todas las imágenes se carguen
      let loadedCount = 0;
      images.forEach((img) => {
        img.addEventListener("load", () => {
          loadedCount++;
          // Si todas las imágenes se han cargado, resolver la promesa
          if (loadedCount === images.length) {
            resolve("");
          }
        });

        img.addEventListener("error", (error) => {
          console.error("Error al cargar la imagen:", error);
          reject(error); // Rechazar la promesa si hay un error en alguna imagen
        });
      });
    });

    res
      .then(() => {
        const loader = document.getElementById("loader");
        loader.style.display = "none";

        const previewReady = document.getElementById("preview-ready");
        previewReady.style.display = "block";
      })
      .catch((error) => {
        console.error("Error en la carga de imágenes:", error);
      });

    return res;
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
