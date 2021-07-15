import { H1, Paragraph } from "../../styled"

const DefaultLayout = ({slideContent}) =>{
    return (
        <div className="default-layout">
            <H1>{slideContent.heading}</H1>
            <Paragraph>{slideContent.description}</Paragraph>
            <img src={slideContent.image.url} alt={slideContent.image.alt}/>
        </div>
    )
}
export default DefaultLayout;