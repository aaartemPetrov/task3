export class AllMenu {
    
    constructor() {
        this.allMenuLocator = '#hmenu-canvas';

        this.languageButton = '#hmenu-icp-language';
    }

    languageButtonText() {
       return cy.get(this.languageButton).should('be.visible').invoke('text');
    }

    clickLanguageButton() {
        cy.get(this.languageButton).should('be.visible').should('exist').click();
    }

    locator() {
        return this.allMenuLocator;
    }

}

export const allMenu = new AllMenu();