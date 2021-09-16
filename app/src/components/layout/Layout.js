import React from 'react'
import { AddClass } from '../../hoc/AddClass'
import { Header } from '../header/Header'
import './layout.css'

 const Layout = ()=>{
    return(
        <Header></Header>
    )
}

export default AddClass(Layout,'layout')