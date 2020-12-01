import React from "react";
import {withStore} from "../../state/withStore";
import {Product} from "../product";
import "./product-list.scss";


class ProductList extends React.Component {


    render() {
        const {products, dispatch} = this.props;
        const addTovar = () => {
            dispatch('ADD_PRODUCT', {
                product: {
                    id: 4232455,
                    title: "Игрушка Король яяя",
                    description:
                        "Игрушка Король. Возвраст 5+. Материал плюш. Страна производства - Болгария",
                    price: 11990,
                }
            })
        }
        return (
            <div className="product-list">
                <button onClick={addTovar}>добавить товар</button>
                {products.map((product) => (
                    <Product key={product.id} product={product}/>
                ))}
            </div>
        );
    }
}

export default withStore("products", (data) => data)(ProductList);
