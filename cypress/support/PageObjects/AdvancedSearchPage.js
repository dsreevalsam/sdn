class AdvancedSearchPage {

    getAllWordsTextInput() {
        return cy.get('#all-words');}

    getExactPhraseTextInput() {
        return cy.get('#exact-phrase');}

    getOneOfTheWordsTextInput() {
        return cy.get('#least-words');}

    getWithoutWordsTextInput() {
        return cy.get('#without-words');}

    getTitleContainsTextInput() {
        return cy.get('#title-is');}

    getAuthorEditorTextInput() {
        return cy.get('#author-is');}

    getStartYearTextInput() {
        return cy.get('#facet-start-year');}

    getEndYearTextInput() {
        return cy.get('#facet-end-year');}

    getAdvancedSearchButton() {
        return cy.get('#submit-advanced-search');}

    getSearchResultCount() {
        return cy.get('#number-of-search-results-and-search-terms > :nth-child(1)');
    }

}

export default AdvancedSearchPage