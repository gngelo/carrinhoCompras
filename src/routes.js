import React from 'react';
import { Routes, Route } from 'react-router-dom'
import ListaProdutos from "./ListaProdutos";
import Item from './Item';
import Carrinho from './Carrinho'
import Pedido from './Pedido'

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<ListaProdutos/>}/>
            <Route path="/carrinho" element={<Carrinho/>}/>
            <Route path="/item" element={<Item/>}/>
            <Route path="/pedido" element={<Pedido/>}/>
        </Routes>
    )
}