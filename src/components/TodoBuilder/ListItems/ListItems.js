import React, { Component } from "react";
import style from "./ListItems.module.scss";
import Item from "./Item/Item";

class ListItems extends Component {
    render(){
        return(
            <div className={style.ListItems}>
                <h1 className={style.Title}>To-Do List</h1>
                <Item/>
                <Item/>
            </div>
        )
    }
}

export default ListItems;