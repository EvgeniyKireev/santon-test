import { Store } from "../common/store/store";
import { Registry } from "../common/store/registry";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const ProductsStore = new Store("products", {
  data: {
    products: [],
  },
  options: {
    shouldInitFromState: true,
    stateKey: "products",
  },
  reducers: [
    {
      type: ADD_PRODUCT,
      action(state, payload) {
        // разобраться
        return {
          ...state,
          products: [...state.products, payload.product],
        };
      },
    },
    {
      type: REMOVE_PRODUCT,
      action(state, payload) {


        const products = [...state.products];
        const index = products.findIndex((product) => product.id === payload.id);

        if (index !== -1) {
          products.splice(index, 1);
        }
        return {
          ...state,
          products,
        };
      },
    },
  ],
});

Registry.addStore(ProductsStore);
window.store = ProductsStore;
export { ProductsStore };
