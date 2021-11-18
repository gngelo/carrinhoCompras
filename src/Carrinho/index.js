

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import './carrinho.css'

const CarrinhoCompras = () => {

    const [ carrinho, setCarrinho ] = useState([]);  
    
    useEffect(() => {
         const dados = localStorage.getItem('carrinho')
         if(dados){
             setCarrinho(JSON.parse(dados))
         }
     }, [carrinho])

//    useEffect(() => {
//         Axios.get('http://localhost:3001/carrinho')
//             .then((response)=>{
//                 setCarrinho(response.data);
//         });

//     }, [carrinho])

    function apagar(produto){   
        const index = carrinho.indexOf(produto)
        carrinho.splice(index,1)
        localStorage.setItem('carrinho', JSON.stringify(carrinho))
        setCarrinho('')
        
        //Axios.delete(`http://localhost:3001/carrinho/${produto}`)        
    }
    
    function finalizarPedido(){
        localStorage.setItem("pedido", JSON.stringify(carrinho));
        localStorage.removeItem('carrinho');
        setCarrinho([])
        //Axios.post('http://localhost:3001/pedido',carrinho)
    }
    
    return (
        <div className="lista-carrinho">
            {carrinho.map((produto, index)=>(
                <div key={index} className="item-carrinho">

                    <img src={produto.imageUrl} alt={produto.title}/>
                    <p>{produto.title}</p>
                    <span>{produto.price}</span>

                    <div className="remover">
                       <button 
                            onClick={()=> apagar(produto.id)}>
                            Remover
                        </button>
                    </div>
                    
                </div>
            ))}
            
            <div>
                <Link to={'/pedido'}>
                    <button 
                        onClick={()=> finalizarPedido(carrinho)} 
                        className="finalizar-pedido">
                        Finalizar Pedido
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default CarrinhoCompras