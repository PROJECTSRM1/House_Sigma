import { propertyData } from "./propertyDetailsData";

export const getPropertyDetailById = (id?: string) => {
  if (!id) return null;
  return propertyData.find(p => p.id === id);
};
