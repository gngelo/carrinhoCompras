

import React, { useEffect, useState } from 'react'

import './pedido.css'


const Pedido = () => {

    const [ pedido, setPedido ] = useState([]);  
    
   useEffect(() => {
        const dados = localStorage.getItem('pedido')
        if(dados){
            setPedido(JSON.parse(dados))
        }
    }, [])
    
    return (    
        <div className="pedido">
            {pedido.map((produto, index)=>(
                <div key={index} className="item-pedido">
                    <img src={produto.imageUrl} alt={produto.title}/>
                    <p>{produto.title}</p>
                    <span>{produto.price}</span>                   
                </div>
            ))}
        </div>
    )
}

export default Pedido
