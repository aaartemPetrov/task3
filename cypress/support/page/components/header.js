import { topMenu } from "./topMenu";

export class Header {

    constructor() {
        this.headerLocator = '#navbar-main';

        this.topMenu = topMenu;

        this.logo = '#nav-logo-sprites';
        this.cart = '#nav-cart';
        this.searchLine = '#twotabsearchtextbox';
        this.searchSubmitButton = '#nav-search-submit-button';
    }

    typeSearchLine(string) {
        cy.get(this.searchLine).should('exist').clear().type(string);
    }

    clickSubmitButton() {
        cy.get(this.searchSubmitButton).should('exist').click();
    }

    clickLogo() {
        cy.get(this.logo).should('exist').click();
    }

    clickCart() {
        cy.get(this.cart).should('exist').click();
    }

    getTopMenu() {
        return this.topMenu;
    }

    locator() {
        return this.headerLocator;
    }

}

export const header = new Header();