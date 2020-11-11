import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={title} url= {url} />)


    test('Debe de mostrar el componente correctamente', () =>{
            
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de tener un parrafo el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })
    
    test('Debe contener la siguiente Imganen, igual a la url y alt de los props', () => {

        const img= wrapper.find( 'img');
        console.log( img);
        
    })
    
    
})
