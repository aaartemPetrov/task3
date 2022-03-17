/// <reference types="cypress" />

import { customerPreferencesPage } from "../support/page/customerPreferencesPage";
import { homePage } from "../support/page/homePage";
import { searchResultPage } from "../support/page/searchResultPage";
const testData = require('../fixtures/testData.json');


describe('Amazon test', () => {

    beforeEach('visit home page', () => {
        homePage.visit();
    })

    it('Change language check', () => {
        homePage.getHeader().getTopMenu().clickAllMenuButton();
        homePage.saveChosenLanguageAsVar('oldLanguage');
        homePage.getHeader().getTopMenu().getAllMenu().clickLanguageButton();
        customerPreferencesPage.isOpenedAssert();
        customerPreferencesPage.chooseLanguageRadioButton(testData.language);
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
        homePage.searchProduct(testData.searchedBrand);
        searchResultPage.getProducts().getTitles().should('contain', testData.searchedBrand);
    })

    it('login', () => {
        cy.amazonLogin(Cypress.env('email'), Cypress.env('password'));
        homePage.visit();
    })

})