import { transformerFunctions } from "./transformerFunctions";
import { transformerService } from "./transformerService";

export const transformerModel = (publicId) => {
  let state = {
    public: publicId,
    url: "",
    transformedUrl: "",
  };

  return {
    state,
    ...transformerFunctions(state),
    ...transformerService(state),
  };
};
