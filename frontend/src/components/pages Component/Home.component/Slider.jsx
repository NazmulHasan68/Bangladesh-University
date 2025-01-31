import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import home1 from '../../../assets/commonPhoto/home1.jpg';
import home2 from '../../../assets/commonPhoto/home2.jpg';
import home3 from '../../../assets/commonPhoto/home3.jpg';
import home4 from '../../../assets/commonPhoto/home4.jpg';
import home5 from '../../../assets/commonPhoto/home5.jpg';

const photos = [home1, home2, home3, home4, home5];

function CarouselPlugin() {
  return Autoplay({ delay: 1000, stopOnInteraction: true });
}

export default function Slider() {
  const plugin = React.useRef(CarouselPlugin());

  return (
    <div className="w-full mx-2 h-48 mt-16 md:mt-24 md:h-[300px] ">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.reset()}
      >
        <CarouselContent>
          {photos.map((photoSrc, index) => (
            <CarouselItem key={index}>
              <div className="max-w-7xl mx-auto h-[200px] md:h-[350px]">
                <img
                  src={photoSrc}
                  alt={`Carousel item ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
