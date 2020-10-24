import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp =() =>{

    //const categories = ['One Punch','SAmurai x', 'Dragon Ball'];
    //Comentarios
    
   const [categories, setcategories] = useState(['One Punch','SAmurai x', 'Dragon Ball']);

   //const handleAdd = () =>{
       //setCategories ([ 'HunterXHunter'...categories]);
      // setcategories(cats => [...cats, 'HunterXHunter']);
   //} 

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory/>
            <hr/>  
            
            <ol>
            {
                categories.map( category => {
                return <li key ={category}>{ category }</li>
                })
            } 
            </ol>        
        </>
    )    
}