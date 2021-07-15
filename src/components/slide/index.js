import React from 'react';
import './layouts/layouts.scss'

//layouts
import ImageRightLockup from './layouts/ImageRightLockup';
import MultiSelect from './layouts/MultiSelect';
import DefaultLayout from './layouts/DefaultLayout';
import { useAppContext } from '../../context';

const Slide = ({template}) =>{

    const {data, slideIndex} = useAppContext();

    //slide content
    const slideId = data.response.slides[slideIndex].id;
    const heading = data.response.slides[slideIndex].content?.heading || data.response.slides[slideIndex].heading;
    const description = data.response.slides[slideIndex].content?.description || data.response.slides[slideIndex].description;
    const image = data.response.slides[slideIndex].content?.image || data.response.slides[slideIndex].image;
    const radioButtons = data.response.slides[slideIndex].content?.groups || data.response.slides[slideIndex].groups;


    switch(template){
        case "ImageRightLockup":
           return <ImageRightLockup slideContent={{heading, description, image, slideId}}/>
        case "ImageLeftLockup":
            return <ImageRightLockup className='flex-reverse' slideContent={{heading, description, image, slideId}}/>
        case "MultiSelect":
            return <MultiSelect slideContent={{heading, description, radioButtons, slideId}}/>
        default:
            return <DefaultLayout  slideContent={{heading, description, image, slideId}}/>
    }
}

export default Slide;