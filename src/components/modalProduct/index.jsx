import ReactDOM from 'react-dom';
import './modal.scss'
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

export default class Index extends React.Component {
    render() {

        return ReactDOM.createPortal(<div className={'main'}>
            <form className={'form'}>
                <h3 className={'formHeader'}>Добавить товар</h3>
                <div className={'el'}><TextField onChange={this.props.setTitle} id="standard-basic" label="Название товара"/></div>
                <div className={'el'}><TextField onChange={this.props.setDescription} id="standard-basic" label="Описание товара"/></div>
                <div className={'el'}><TextField onChange={this.props.setPrice} id="standard-basic" label="Стоимость товара"/></div>
                <div onClick={this.props.addProduct} className={'btn'}><Button variant="contained" color="primary">
                    Добавить товар
                </Button></div>
            </form>
            {this.props.children}
        </div>, document.getElementById("portal"));
    }
}