import React from "react";
import cls from './Items.module.css'
import Item from '../Item/Item'

const Items=()=>{
    const mPosts=[
        {id:0,text:'123',img:'ava.jpeg' ,cnt:10},
        {id:1,text:'321',img:'ava2.jpeg',cnt:2 },
        {id:2,text:'456',img:'ava.jpeg' ,cnt:0 },
        {id:3,text:'654',img:'ava2.jpeg',cnt:-5}
    ];
    let mJSXPosts = mPosts.map(x => <Item text={x.text} img={x.img} cnt={x.cnt} id={x.id}/>);

    return (
        <div className>
            { mJSXPosts }
        </div>
    );
}

export default Items;