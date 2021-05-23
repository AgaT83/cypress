/// <reference types = "Cypress" />
Cypress.config().waitForAnimations = true;

const phrase = "Angular"
const expectedPhrase = "Programista front-end z Angular"

describe("WSB search for Angular", () => {
    it("should open wsb page", () => {
        cy.visit('www.wsb.pl/chorzow');
    })

    //x z przodu powoduje,że ten test nie będzie odpalany,jest pending,można dać też przed describe
    xit("should check tab with studies", () => {
        // cy.get('.links').contains("Studiowanie");
        //inny sposób:
        cy.get('.links > .expandable > :nth-child(1)').should('contain', "Studia i szkolenia");
    })

    it("should open search icon and find phrase",() => {
        cy.get('.search-icon > a').click(); //{force:true}
        cy.get('#header-search > .grid-wrapper > .search-input > .search').type(phrase).type("{enter}");
        //wymuszanie oczekiwania
        cy.wait(2000);
    })

    it("should find expected phrase", () => {
        cy.get('.listing-content').should('contain', expectedPhrase);
    })
})