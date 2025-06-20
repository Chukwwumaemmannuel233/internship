import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Props {
  images: string[];
}

export default function Carousel({ images }: Props) {
  return (
    <Swiper spaceBetween={10} slidesPerView={1}>
      {images.map((src) => (
        <SwiperSlide key={src}>
          <img
            src={src}
            alt="item"
            className="w-full h-64 object-contain bg-gray-200 rounded"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
