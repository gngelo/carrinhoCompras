import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './lista-produtos.css'
// import Item from '../Item'

const ListaProdutos = () => {

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];        
    const [produtos, setProdutos] =useState([])    

    useEffect(async() => {
        await axios.get('http://localhost:3001/produtos')
            .then((response)=>{
                setProdutos(response.data);
        });
    }, [])

    function adicionar(produto){  

        if(produto){
            carrinho.push(produto)
            localStorage.setItem('carrinho', JSON.stringify(carrinho));  
        } 
    }


    return (
        <div className="lista-produtos">
            <section className="produto">
                {produtos.map((produto, index)=>(
                    <div  key={index} className="item">
                        <div className="info">
                            <img src={produto.imageUrl} alt={produto.title}/>
                            <p>{produto.title}</p>
                            <span>{produto.price}</span>
                        </div>
                        <div className="button">                            
                            <button onClick={()=>adicionar(produto)}>Adicionar</button>
                        </div>
                    </div>

                ))}

            </section>   
            
        </div>
    )
}

export default ListaProdutos
