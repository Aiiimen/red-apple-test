// All the styled components

import styled from "styled-components";

//themes to be used for slide bg
const themes = [
    'linear-gradient(90deg, #4b6cb7 0%, #182848 100%);',
    'linear-gradient(to right, #a73737, #7a2828);',
    'linear-gradient(to right, #093028, #237a57);',
    'linear-gradient(to right, #000000, #434343);'
]

export const H4 = styled.h4`
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    margin-top: 25%;
`

export const Anchor = styled.a`
    font-weight: 700;
    font-size: 12px;
    margin-right: 20px;
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    &:hover{
        text-decoration: underline;
    }
`

export const Title = styled.div`
    font-weight: 300px;
    font-size: 12px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: white;
`

export const Button = styled.button`
    background-color: white;
    color: black;
    border: 1px solid black;
    outline: none;
    border-radius: 200px;
    padding: 15px 30px;
    margin-left: 30px;
    cursor: pointer;
    font-weight: 700;
`

export const CarouselWrapper = styled.div`
    background: ${props => props.theme > 0? themes[props.theme]: themes[0]};
    height: 100%;
    border-radius: 10px;
    margin-bottom: 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all .5s ease-in-out;

`

export const H1 = styled.h1`
    font-weight: 800;
    color: white;
    letter-spacing: 1px;
    @media only screen and (max-width: 768px){
        font-size: 20px;
    }
`

export const Paragraph = styled.p`
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: white;
`