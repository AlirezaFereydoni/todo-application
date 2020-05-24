import React, { Component } from "react";
import style from "./ListItems.module.scss";
import Item from "./Item/Item";
import * as actions from "../../../store/actions/actions";
import { connect } from "react-redux";

class ListItems extends Component {


    itemRemoveHandler = (itemId) => {
        this.props.onDeleteItem(itemId)
        
    }

    render(){

        return(
            <div className={style.ListItems}>
                <h1 className={style.Title}>To-Do List</h1>
                {this.props.onAddTodo.map( item => {
                    return <Item value={item.text} key={item.id} removed={()=> this.itemRemoveHandler(item.id)}/>
                })}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        onAddTodo: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteItem: (id)=> dispatch(actions.deleteItem(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListItems) ;