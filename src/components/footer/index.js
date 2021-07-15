import React, {useEffect, useState} from 'react';
import { useAppContext } from '../../context';
import { Anchor } from '../styled';
import './footer.scss'

const Footer = () =>{

    const {data} = useAppContext();

    const [footer, setFooter] = useState([])

    //convert the footer object into an array for it will be easier to loop through it and display it on the page
    //not 100% necessary but it makes the component easy to read;
    useEffect(()=>{
        if(data.isLoading) return; // don't processed with rest of the code if the fetch is still loading

        const tempFooter = [];
        Object.keys(data.response.footer).map((link, index)=>{
            return tempFooter.push(data.response.footer[link]);
        })
        setFooter(tempFooter);

    }, [data])

    return (
        <div className="footer-container">
          {footer && footer.map((link, index)=>{
              return <Anchor key={index} href={link.url}> {link.label}</Anchor>
          })}
        </div>
    )
}

export default Footer;