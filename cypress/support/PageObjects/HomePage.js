class HomePage {
    getSearchTextInput() {
        return cy.get('#query');}

    getSearchButton() {
        return cy.get('#search');
    }

    getSearchResultCount() {
        return cy.get('#number-of-search-results-and-search-terms > :nth-child(1)');
    }

    getSearchResultText() {
        return cy.get('#number-of-search-results-and-search-terms > :nth-child(2)');
    }

    getSearchOptionsButton() {
        return cy.get('#search-options');
    }

    getAdvancedSearchLink() {
        return cy.get('#advanced-search-link');
    }

    getCurrentLanguage() {
        return cy.get('.lang > button > div');
    }

    getChangeLanguageDeutsch() {
        return cy.get('.change-language-Deutsch > :nth-child(1)');
    }
}
export default HomePage