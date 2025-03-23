/// <reference types="cypress" />

describe('API Test', () => {
    it('Should return status 200 when searching for a valid term', () => {
        cy.request('GET', '/?s=FGTS').then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});
