import { transformerFunctions } from "./transformerFunctions";

export const transformerModel = (url) => {
  let state = {
    originalUrl: url,
    transformedUrl: "",
    state: ["Probando funcionamiento"],
  };

  return { state, ...transformerFunctions(state) };
};
