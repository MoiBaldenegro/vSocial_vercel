import JSZip from "jszip";
import { saveAs } from "file-saver";

export const descargarZip = async (promises: []) => {
  const zip = new JSZip();

  try {
    // Crear un array de promesas para cada descarga
    const downloadPromises = promises.map(async (download) => {
      if (typeof download.title !== "string") {
        throw new TypeError("La URL de descarga no es una cadena");
      }
      const response = await fetch(download.url);
      if (!response.ok) {
        throw new Error(
          `Error al descargar ${download.tittle}: ${response.statusText}`
        );
      }

      const blob = await response.blob(); // Obtener el blob de la imagen
      zip.file(`${download.name}.webp`, blob); // Usar el nombre del objeto para el archivo en el ZIP
    });

    // Esperar a que todas las descargas terminen
    await Promise.all(downloadPromises);

    // Generar el contenido del ZIP
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "SocialPicsSuperSet.zip");
  } catch (error) {
    console.error("Error creando el ZIP:", error);
  }
};
