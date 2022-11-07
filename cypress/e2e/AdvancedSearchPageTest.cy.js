import AdvancedSearchPage from "../support/PageObjects/AdvancedSearchPage";

describe('Fluffy Cypress Test Evaluation - Advanced Search Page Test', function() {

    const advancedSearchPage=new AdvancedSearchPage();

    beforeEach(function(){
        cy.viewport(1024, 768);
        cy.visit(Cypress.env('advancedSearchUrl'));
    })

    it('Search for Publish in Future', function() {
        advancedSearchPage.getAllWordsTextInput().type("Ethnobotany of Asia");
        advancedSearchPage.getExactPhraseTextInput().type("Mountain Regions");
        advancedSearchPage.getOneOfTheWordsTextInput().type("Ethnobotany potato");
        advancedSearchPage.getWithoutWordsTextInput().type("cat");
        advancedSearchPage.getTitleContainsTextInput().type("Central Asia");
        advancedSearchPage.getAuthorEditorTextInput().type("Ketevan Batsatsashvili");
        advancedSearchPage.getStartYearTextInput().type("2027"); //insert a future year as startYear
        advancedSearchPage.getEndYearTextInput().type("2023") //insert a future year as endYear where startYear > endYear
        advancedSearchPage.getAdvancedSearchButton().click();
        advancedSearchPage.getSearchResultCount().then(($count) => {
            const count = $count.text();
            cy.convertTextToInteger(count).then( ($countInt) => {
                expect($countInt).to.be.eq(0);
            });
        });
    })
})

