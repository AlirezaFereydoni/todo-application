import React, { Component } from 'react'
import style from "./TodoBuilder.module.scss";
import ListItems from "./ListItems/ListItems";

export default class TodoBuilder extends Component {
    render() {
        return (
            <div className={style.TodoBuilder}>
                <ListItems/>
                
            </div>
        )
    }
}
