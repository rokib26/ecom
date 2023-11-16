import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Categories from "./Categories";
import NaveBar from "./NaveBar";
import SimpleImage from "./SimpleImage";

const ImageSlider = ({ data }) => {

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div>
        <NaveBar />
      </div>

      <div className=" flex mt-14">
        <div className="flex-1 flex flex-col">
          <Categories />
        </div>

        <div className=" h-96 w-1/2 mt-7 float-right mr-36  shadow-xl rounded-lg">
          <Slider {...settings} className=" h-80 rounded-lg border-none ">
            {data.map((item, index) => (
              <div key={index} className="rounded-lg p-4">
                <img
                  src={item.images[0]}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-72 rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div>
        <SimpleImage />
      </div>
    </>
  );
};

export default ImageSlider;
