import { useData } from "../../contexApi/FatchData";
import ImageSlider from "./ImageSlider";

const Slider = () => {
  const { Api1, Api2 } = useData();

  const combinedApi = [
    ...Api1.map((item) => ({ ...item, key: `api1-${item.id}` })),
    ...Api2.map((item) => ({ ...item, key: `api2-${item.id}` })),
  ].slice(5, 15);

  console.log(combinedApi);
  return <ImageSlider data={combinedApi} />;
};

export default Slider;
