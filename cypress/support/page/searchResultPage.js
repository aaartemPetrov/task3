import { products } from "./components/product";

export class SearchResultPage {

    constructor() {
        this.products = products;
    }

    getProducts() {
        return this.products;
    }

}

export const searchResultPage = new SearchResultPage();