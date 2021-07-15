import { H1, Paragraph } from "../../styled";
import './layouts.scss';

const ImageRightLockup = ({slideContent}) =>{

    return (
        // reverse the copy and asset for slide 2 by conditionally adding flex-reverse class
        <div className={`image-right-lockup ${slideContent.slideId === 2? 'flex-reverse':''}`} > 
            <div className="copy">
                <H1>{slideContent.heading}</H1>
                <Paragraph>{slideContent.description}</Paragraph>
            </div>
            <div className="asset">
                <img src={slideContent.image.url} alt={slideContent.image.alt} />
            </div>
        </div>
    )
}

export default ImageRightLockup;