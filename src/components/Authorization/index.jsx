import {withStore} from "../../state/withStore";
import ReactDOM from 'react-dom';
import './authorization.scss'
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

class Authorization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login:'', password: ''}
    }
    render() {
        const {dispatch} = this.props;
        const changeLogin = (e) => {
            this.setState({login: e.target.value})
        }
        const changePassword = (e) => {
            this.setState({password: e.target.value})
        }
        const onLogin = () => {
            dispatch('LOGIN', {login: this.state.login, password: this.state.password})
            this.setState({login: '', password: ''})
            this.props.closeModal()
            this.props.authorized()
        }
        return ReactDOM.createPortal(<div className={'main'}>
            <form className={'form'}>
                <h3 className={'formHeader'}>Войти</h3>
                <div className={'el'}><TextField onChange={changeLogin} id="standard-basic" label="Логин"/></div>
                <div className={'el'}><TextField onChange={changePassword} id="standard-basic" label="Пароль"/></div>
                <div onClick={this.props.addProduct} className={'btn'}><Button onClick={onLogin} variant="contained" color="primary">
                    Войти
                </Button></div>
            </form>
            {this.props.children}
        </div>, document.getElementById("portal"));
    }
}

export default withStore("authorization", (data) => data)(Authorization);
