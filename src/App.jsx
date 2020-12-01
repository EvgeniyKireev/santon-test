import React from "react";
import "./state/stores/ProductsStore";
import './state/stores/AuthorizationStore'
import './index.scss';
import ProductList from "./components/productList";
import Autorization from "./components/Authorization";
import Button from "@material-ui/core/Button";


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isModal: false, login: false};
    }

    render() {
        const openModal = () => {
            this.setState({isModal: true})
        }
        const closeModal = () => {
            this.setState({isModal: false})
        }
        const login = () => {
            this.setState({login: true})
        }
        const logout = () => {
            this.setState({login: false})
        }
        return (
            <main className={'appMain'}>
                {!this.state.login && <div className={'login'}><Button onClick={openModal} variant="contained" color="primary">
                    Войти
                </Button></div>}
                {this.state.login && <div className={'login'}><Button onClick={logout} variant="contained" color="primary">
                    Выйти
                </Button></div>}
                {this.state.isModal && <Autorization closeModal={closeModal} authorized={login}/>}
                <ProductList login={this.state.login}/>
            </main>
        );
    }
}
