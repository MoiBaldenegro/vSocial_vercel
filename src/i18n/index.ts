import spanish from "./es.json";
import english from "./en.json";

const locale = "en";

export const translations = {
    EN: english,
    ES: spanish,
};
export const getI18n = ({ currentLocale }: { currentLocale: string }) => {
    if (currentLocale === "en") {
        return english;
    }
    if (currentLocale === "es") {
        return spanish;
    }
    return english;
};