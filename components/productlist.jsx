import React from 'react';

const ProductCard = ({addCarrinho, name, id, value, image}) => {
    return (
        <>
            <div>
                <img src={image} alt={name} />
                {console.log({image})}
                <div>
                    <button onClick={() => addCarrinho({name, id, value, image})}>Adicionar {name} ao carrinho</button>
                    <div>R$ {value} </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard