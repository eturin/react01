import React from "react";
import cls from './Items.module.css'
import Item from './Item/Item'

const Items=()=>{
    return (
        <div className>
            <Item text='123' img='ava.jpeg' cnt='10'/>
            <Item text='321' img='ava2.jpeg' cnt='2'/>
            <Item text='456' img='ava.jpeg' cnt='0'/>
            <Item text='654' img='ava2.jpeg' cnt='-5'/>
        </div>
    );
}

export default Items;