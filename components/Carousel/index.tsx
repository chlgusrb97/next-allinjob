import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useRef } from "react";
import Slider from "react-slick";

export default function Carousel() {
  const slickRef = useRef<Slider>(null);
  const previous = useCallback(
    () => slickRef?.current && slickRef.current.slickPrev(),
    [],
  );
  const next = useCallback(
    () => slickRef?.current && slickRef.current.slickNext(),
    [],
  );

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dotsClass: "slick-dots",
    arrows: false,
    cursor: "pointer",
  };

  const images = [
    "/carousel/lake.jpg",
    "/carousel/lake.jpg",
    "/carousel/lake.jpg",
  ];

  return (
    <div className="slider-container relative col-span-12">
      <Slider
        ref={slickRef}
        {...settings}
        dotsClass="slick-dots"
        className="relative"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-[400px] w-[1200px] bg-orange-400"
          >
            <Image fill src={image} alt="carousel image" />
          </div>
        ))}
      </Slider>
      <div onClick={previous} className="absolute top-1/2">
        <ChevronLeft className="text-white" />
      </div>
      <div onClick={next} className="absolute right-0 top-1/2">
        <ChevronRight className="text-white" />
      </div>
    </div>
  );
}
