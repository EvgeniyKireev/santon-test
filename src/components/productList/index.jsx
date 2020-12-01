import React from "react";
import {withStore} from "../../state/withStore";
import {Product} from "../product";
import "./product-list.scss";
import Modal from "../modalProduct/Modal";


class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isModal: false, title: '', description: '', price: ''};
    }

    render() {
        const setTitle = (e) => {
            this.setState({title: e.target.value})
        }
        const setDescription = (e) => {
            this.setState({description: e.target.value})
        }
        const setPrice = (e) => {
            this.setState({price: e.target.value})
        }
        const {products, dispatch} = this.props;
        const openModal = () => {
            this.setState({isModal: true})
            console.log('whatsapp')
        }
        const addProduct = () => {
            dispatch('ADD_PRODUCT', {
                product: {
                    id: Math.floor(Math.random() * (200000 - 10000)) + 10000,
                    title: this.state.title,
                    description:
                    this.state.description,
                    price: Number(this.state.price),
                }
            })
            this.setState({isModal: false})
        }
        const removeProduct = (productId) => {
            dispatch('REMOVE_PRODUCT', {
                id: productId
            })
        }
        return (
            <div className="product-list">
                {this.props.login && <button onClick={openModal}>добавить товар</button>}
                {products.map((product) => (
                    <Product login={this.props.login} key={product.id} product={product} removeProduct={removeProduct}/>
                ))}
                {products.length === 0 && <h3>Вы ничего не добавили</h3>}
                {this.state.isModal && <Modal setTitle={setTitle} setDescription={setDescription}
                                              setPrice={setPrice}
                                              addProduct={addProduct}/>}
            </div>
        );
    }
}

export default withStore("products", (data) => data)(ProductList);
