export class Product {

    constructor() {
        this.productLocator = '.s-card-container';

        this.productTitle = '.s-card-container a.a-link-normal .a-text-normal';
    }

    getTitles() {
        return cy.get(this.productTitle);
    }

    locator() {
        return this.productLocator;
    }

}

export const products = new Product();
