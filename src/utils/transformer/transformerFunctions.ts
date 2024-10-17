import { getCldImageUrl } from "astro-cloudinary/helpers";
import { descargarZip } from "../dowloader/downloader";
import { PreviewsOptions } from "../../types/previews.types";
import { previewsExecution } from "../renderManagement";

export const transformerFunctions = (state) => ({
  renderPreview: () => {
    const res = new Promise((resolve, reject) => {
      let images = [];
      const previewBefore = document.getElementById("results");

      // Crear las vistas previas (sin agregar las imágenes al DOM)
      state.previews.forEach((preview) => {
        // Generar la vista previa con `previewsExecution`
        const newPreview = previewsExecution(preview);
        previewBefore.innerHTML += newPreview;

        // Crear elementos de imagen pero no agregarlos al DOM
        const previewImage = document.createElement("img");
        previewImage.src = preview.url;
        images.push(previewImage); // Almacenar las imágenes para control de carga
      });

      // Esperar a que todas las imágenes se carguen
      let loadedCount = 0;
      images.forEach((img) => {
        img.addEventListener("load", () => {
          loadedCount++;
          if (loadedCount === images.length) {
            resolve(""); // Resolver la promesa cuando todas las imágenes hayan cargado
          }
        });
        img.addEventListener("error", (error) => {
          console.error("Error al cargar la imagen:", error);
          reject(error);
        });
      });
    });

    res
      .then(() => {
        // Una vez que todas las imágenes estén listas, se procede
        const loader = document.getElementById("loader");
        loader.style.display = "none";
        const previewReady = document.getElementById("preview-ready");
        previewReady.style.display = "flex";
        const lastContainer = document.getElementById("last");

        // Verificar si ya existe un botón de descarga
        let dowloadButton = document.getElementById("download-button-index");

        if (dowloadButton) {
          // Si el botón ya existe, lo reemplazamos con uno nuevo
          dowloadButton.remove();
        }
        const dowloadIcon = document.createElement("img")
        dowloadIcon.src = "./download.svg";
        dowloadIcon.className = "size-[42px]"

        // Crear el nuevo botón de descarga
        dowloadButton = document.createElement("button");
        dowloadButton.id = "download-button-index";
        dowloadButton.className = "flex gap-4 items-center bg-custom-linear uppercase transition-opacity duration-300 hover:opacity-80 text-white font-bold py-6 px-12 rounded-xl transition ease text-3xl mt-2";
        dowloadButton.textContent = "Descargar SuperSet";
        dowloadButton.appendChild(dowloadIcon);
        lastContainer.appendChild(dowloadButton);


        // Agregar el evento al botón
        dowloadButton.addEventListener("click", () => {
          descargarZip(state.downloads);
        });
      })
      .catch((error) => {
        console.error("Error en la carga de imágenes:", error);
      });

    return res;
  },




  showTransformerMenu: () => {

    const previewBefore = document.getElementById("preview-image-container");
    const previewImage = document.createElement("img");
    previewImage.id = "preview-img";
    previewImage.src = state.url;
    previewImage.className = "rounded-xl";
    previewBefore.appendChild(previewImage);
  }
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
