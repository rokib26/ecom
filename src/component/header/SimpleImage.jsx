import { useData } from "../../contexApi/FatchData";

const SimpleImage = () => {
  const { Api1, Api2 } = useData();

  const combinedApi = [
    ...Api1.map((item) => ({ ...item, key: `api1-${item.id}` })),
    ...Api2.map((item) => ({ ...item, key: `api2-${item.id}` })),
  ].slice(15, 16);
  console.log(combinedApi);
  return (
    <div className="mt-12  text-center w-full pt-0 pr-36 pb-0 pl-36 ">
      <ul>
        {combinedApi.map((item) => (
          <li key={item.key}>
            <img
              className=" w-full h-80 "
              src={item.imageUrl || "/path/to/placeholder-image.jpg"}
              alt={item.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleImage;
