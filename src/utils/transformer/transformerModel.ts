import type { Promt } from "../../types/promt";
import { transformerFunctions } from "./transformerFunctions";
import { transformerService } from "./transformerService";

export const transformerModel = (publicId, promt: Promt) => {
  let state = {
    public: publicId,
    url: "",
    transformedUrl: "",
    promt: promt,
    previews: [],
    downloads: []
  };

  return {
    state,
    ...transformerFunctions(state),
    ...transformerService(state),
  };
};
