import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp =() =>{

    //const categories = ['One Punch','SAmurai x', 'Dragon Ball'];
    //Comentarios
    
   const [categories, setCategories] = useState(['One Punch', 'Goku']);

   //const handleAdd = () =>{
       //setCategories ([ 'HunterXHunter'...categories]);
      // setcategories(cats => [...cats, 'HunterXHunter']);
   //} 

    return (
        <>
            <h2>GifExpertApp Creado por Giobanny</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>  
            
            <ol>
            {
                categories.map( category => (
                <GifGrid 
                    key ={category}
                    category={category } />
            ))
            } 
            </ol>        
        </>
    )    
}