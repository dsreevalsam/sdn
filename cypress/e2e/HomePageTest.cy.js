import HomePage from "../support/PageObjects/HomePage";

describe('Fluffy Cypress Test Evaluation - Home Page Test', function() {

    const homePage=new HomePage();

    beforeEach(function(){
        cy.viewport(1024, 768);
        cy.visit(Cypress.env('baseUrl'));
    })

    it('Search for text return results', function() {

        //Visit the Link Springer Demo Page and search for Corona Virus
        homePage.getSearchTextInput().type("Corona Virus");
        homePage.getSearchButton().click();
        homePage.getSearchResultCount().then(($count) => {
            const count = $count.text();
            cy.convertTextToInteger(count).then( ($countInt) => {
                expect($countInt).to.be.gt(0);
            });
        });
        homePage.getSearchResultText().then((element) => {
            expect(element.text().includes("Corona Virus")).to.be.true;
        })
    })

    //changing the language selector from homepage
   it('Check Change Language To Deutsch' , function () {
       homePage.getChangeLanguageDeutsch().click();
       homePage.getCurrentLanguage().should('have.value','Deutsch');
   })
})


