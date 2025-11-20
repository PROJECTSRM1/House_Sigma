import { useSearchParams } from "react-router-dom";

const MapSearch = () => {
  const [params] = useSearchParams();
  const city = params.get("city");

  console.log("Clicked City:", city);

  return <div>Map Search</div>;
};

export default MapSearch;
