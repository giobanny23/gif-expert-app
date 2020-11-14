import React from 'react'
import { shallow} from 'enzyme';
import { GifGrid } from '../../components/GifGrid';

describe('Pruebas en el <GifGrid />', () => {

    const category = 'One Punch';
    
    test('debe mostrar correctamente', () => {

        const wrapper = shallow( <GifGrid category = {category}/>);
        console.log(GifGrid);
    })
    
})
