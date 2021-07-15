// Carousel is the main component that hold the Slides, pagination title, buttons to navigate between slides

import React from 'react';
import { useAppContext } from '../../context';
import {CarouselWrapper} from '../styled';

//Components
import PaginationTitle from '../paginationTitle';
import Navigation from '../navigation';
import Slide from '../slide';

const Carousel = () =>{

    const {data, slideIndex} = useAppContext();

    const paginationId = data.response.slides[slideIndex].pagination_id; 
    const nextLabel = data.response.slides[slideIndex].content?.next?.label || data.response.slides[slideIndex].next?.label;
    const backLabel = data.response.slides[slideIndex].content?.back?.label || data.response.slides[slideIndex].back?.label;
    const theme = data.response.slides[slideIndex].theme;
    const template = data.response.slides[slideIndex].template || "";
    
    
    return (
        //theme here is used to changed the background colour- all themes are defined in ../styled
        <CarouselWrapper theme={theme}> 
            <PaginationTitle titles={data.response.pagination.titles} paginationId={paginationId}/>
            <Slide template={template}/>
            <Navigation nextLabel={nextLabel} backLabel={backLabel}/>
        </CarouselWrapper>
    )
}

export default Carousel;