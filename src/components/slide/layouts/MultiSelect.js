import { H1, Paragraph } from "../../styled"

const MultiSelect = ({slideContent}) =>{

    return (
        <div className="multiple-select">
            <H1>{slideContent.heading}</H1>
            <Paragraph>{slideContent.description}</Paragraph>
            <div className="radio-buttons">
                {slideContent.radioButtons.map((radioBtn)=>{
                    return <div key={radioBtn.id}>
                            {/* to keep track what radio is selected - add an onChange */}
                            <input name="radioBtn" type="radio"/> {radioBtn.label}
                         </div>
                })}
            </div>
        </div>
    )
}
export default MultiSelect;