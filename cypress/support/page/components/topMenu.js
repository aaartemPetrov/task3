import { allMenu } from "./allMenu";

export class TopMenu {

    constructor() {
        this.topMenuLocator = '#nav-main';

        this.allMenuButton = '#nav-hamburger-menu';

        this.allMenu = allMenu;
    }

    clickAllMenuButton() {
        cy.get(this.allMenuButton).should('be.visible').should('exist').click();
    }

    getAllMenu() {
        return this.allMenu;
    }

    locator() {
        return this.topMenuLocator;
    }

}

export const topMenu = new TopMenu();