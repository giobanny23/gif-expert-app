import React, { useState, useEffect } from 'react'

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect( () =>{
        getGifs();
    }, [])

   const getGifs = async() => {  

    const url ='https://api.giphy.com/v1/gifs/search?q=rick+and+morty&limit=10&api_key=Zxnme4AmQGcmkgr7lTTO7tzn5gxjZMi2'
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return{
            id:img.id,
            title:img.title,
            url: img.images?.downsized_medium.url
        }

    })
    console.log(gifs);
    setImages( gifs);

   }




    return (
        <div>
            <h3>{category}</h3> 
           
                {
                    images.map( ({id, title }) =>(
                        <li key = {id}>{ title }</li>
                    ))
                }     
                 
               
        </div>
    )
}
