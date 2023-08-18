import React from 'react';
import DivCardProduct from '../stylecomponents/card';

const ProductCard = ({addCarrinho, name, id, value, image}) => {
    return (
        <>
            <DivCardProduct>
                <img src={image} alt={name} style={{ widht: '170px', height: '100px',  display: 'flex', alignItems: 'center' }} />
                {console.log({image})}
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <button onClick={() => addCarrinho({name, id, value, image})} style={{ widht: '1px', background: '#6950A1' }}></button>
                    <div>R$ {value} </div>
                </div>
            </DivCardProduct>
        </>
    )
}

export default ProductCard