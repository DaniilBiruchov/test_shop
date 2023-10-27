import products from '@/data/data.json';
import names from '@/data/names.json';

export default class Api {
    static fetchProducts() {
        return Promise.resolve(products);
    }

    static fetchProductsNames() {
        return Promise.resolve(names);
    }
}
