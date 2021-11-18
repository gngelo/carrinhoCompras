

import React from 'react'
import './item.css'

const DetalheItem = (produto) => {
console.log(produto)
    return (
        <div className="detalhe">            
            <div className="detalhe-item">
                <img src="https://cdn.gatry.com/gatry-static/promocao/imagem/fe0a1e4ddcbd8f9a99a05908b6d29ea2.png"
                alt="Geladeira muito boa mesmo, 800rds"/>
                <p>Geladeira muito boa mesmo, 800rds</p>
                <span>R$ {100.00}</span>                
                <button>Comprar</button>                        
            </div>         
            
        </div>
    )
}

export default DetalheItem