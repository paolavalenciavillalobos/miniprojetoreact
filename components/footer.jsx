import React from 'react';
import Visa from '../src/assets/visa 1.svg'
import Hipercard from '../src/assets/hipercard 1.svg'
import Boleto from '../src/assets/boleto 1.svg'
import Mastercard from '../src/assets/master_card 1.svg'
import DivFooter from '../stylecomponents/footer';

const footer = () => {
    return(
        <>
        <DivFooter>
        <p>This is the footer</p>
        <div style= {{ display: 'flex', flexDirection: 'row'}}>
            <img src={Visa}/>
            <img src={Hipercard}/>
            <img src={Boleto}/>
            <img src={Mastercard}/>
        </div>
        </DivFooter>
        </>
    )
}

export default footer