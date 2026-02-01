import { useContext } from "react";
import { CarouselContext } from "../CarouselContext"

export const useCarouselContext = () => {
    const context =  useContext(CarouselContext);
    if(!context){
        throw new Error('use Carousel provider');
    }

    return context;
}
