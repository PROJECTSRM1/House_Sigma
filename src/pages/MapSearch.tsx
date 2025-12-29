import { useSearchParams } from "react-router-dom";

import { useTranslation } from "react-i18next";

const MapSearch = () => {
  const { t } = useTranslation();
  const [params] = useSearchParams();
  const city = params.get("city");

  console.log("Clicked City:", city);

  return <div>{t("map_search")}</div>;
};

export default MapSearch;
