/// <reference types="cypress" />

import { customerPreferencesPage } from "../support/page/customerPreferencesPage";
import { homePage } from "../support/page/homePage";
import { searchResultPage } from "../support/page/searchResultPage";

describe('Amazon test', () => {

    beforeEach('visit home page', () => {
        homePage.visit();
    })

    it('Click \"all\" top menu button', () => {
        homePage.getHeader().getTopMenu().clickAllMenuButton();
        homePage.saveChosenLanguageAsVar('oldLanguage');
        homePage.getHeader().getTopMenu().getAllMenu().clickLanguageButton();
        customerPreferencesPage.isOpenedAssert();
        customerPreferencesPage.chooseLanguageRadioButton('Deutsch');
        customerPreferencesPage.clickSaveChangesButton();

        homePage.isOpenedAssert();
        homePage.getHeader().getTopMenu().clickAllMenuButton();
        homePage.getHeader().getTopMenu().getAllMenu().languageButtonText().then(newLanguage => {
            cy.get('@oldLanguage').then(oldLanguage => {
                expect(oldLanguage).not.equal(newLanguage);
            })
        })
       
    })

    it('Search', () => {
        homePage.searchProduct('Samsung');
        searchResultPage.getProducts().getTitles().should('contain', 'Samsung');
    })

    it('login', () => {
        cy.amazonLogin(Cypress.env('email'), Cypress.env('password'));
        homePage.visit();
    })

})