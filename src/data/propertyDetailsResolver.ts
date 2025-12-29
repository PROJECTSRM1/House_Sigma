import { propertyData } from "./propertyDetailsData";

import { useTranslation } from "react-i18next";

export const getPropertyDetailById = (id?: string) => {
  if (!id) return null;
  return propertyData.find(p => p.id === id);
};
