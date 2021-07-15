//Using React ContextAPI here is a bit of an overkill as this app isn't very complex
//however - by using the ContextAPI, it makes the code a lot cleaner and there's no 3 level deep prop drilling

import React, {createContext, useContext, useEffect, useState} from 'react';

const CarouselContext = createContext();

const AppContext = (props) =>{

    //used to store the fetch data from API 
    //includes isLoading and error for conditional rendering and error handling 
    const [data, setData] = useState({isLoading: true, error: null, response: {}});
    const [slideIndex, setSlideIndex] = useState(0); //used to track what slide we're on 

    //fetch content from API
    useEffect(()=>{
        fetch('http://my-json-server.typicode.com/aiiimen/mock-api/content')
        .then(async res => {
            if(!res.ok) throw res.statusText;
            const response = await res.json();
            setData({isLoading: false, response})
        })
        .catch(error =>{
            setData({isLoading: false, error})
        })
    },[])


    return (
        <CarouselContext.Provider value={{data, setData, slideIndex, setSlideIndex}}>
            {props.children}
        </CarouselContext.Provider>
    )

}

export const useAppContext = ()=>{
    return useContext(CarouselContext)
}

export default AppContext;