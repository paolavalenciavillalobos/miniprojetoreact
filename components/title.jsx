import React from 'react';

const Title = ({cart, children}) => {

const totalQuantity = cart.reduce((total, item) => total + item.quantidade, 0);

return (
    <>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4%' }}>
    <h1>{children}</h1>
    <div style={{ color: 'white', background: '#6950A1', width:'10%', height: '80%',  display:'flex', justifyContent: 'center' }}>{totalQuantity}</div> 
    </div>
    </>
)

}

export default Title