import React from 'react';
import Logo from '../src/assets/image 1.svg'
import DivBanner from '../stylecomponents/banner';

const header = () => {
    return(
        <>
        <DivBanner>
            <img src={Logo}/>
            <p>Loja virtual</p>
        </DivBanner>
        </>
    )
}

export default header