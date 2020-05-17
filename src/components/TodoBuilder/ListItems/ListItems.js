import React, { Component } from "react";
import style from "./ListItems.module.scss";
import Item from "./Item/Item";

class ListItems extends Component {
    render(){
        return(
            <div className={style.ListItems}>
                <Item/>
            </div>
        )
    }
}

export default ListItems;