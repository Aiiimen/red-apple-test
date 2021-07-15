import React from 'react';
import { useAppContext } from '../../context';
import { Button } from '../styled';
import './navigation.scss';

const Navigation = ({nextLabel, backLabel}) =>{

    const {slideIndex, setSlideIndex} = useAppContext();

    const goToNextSlide = (currentSlideIndex) =>{
        setSlideIndex(++currentSlideIndex)
    }

    const goToPreviousSlide = (currentSlideIndex) =>{
        setSlideIndex(--currentSlideIndex)
    }

    return (
        <div className="navigation-container">
            {backLabel && <Button onClick={()=>goToPreviousSlide(slideIndex)}>{backLabel}</Button>}
            {nextLabel && <Button onClick={()=>goToNextSlide(slideIndex)}>{nextLabel}</Button>}
        </div>
    )
}

export default Navigation;