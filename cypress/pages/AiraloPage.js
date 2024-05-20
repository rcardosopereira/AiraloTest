/// <reference types="Cypress" />
import { SELECTORS } from '../support/selectors';

class AiraloPage {
  visit() {
    cy.visit("/");
  }

  acceptCookies() {
    cy.acceptCookies();
  }

  searchCountry(countryName) {
    cy.get(SELECTORS.searchInput).type(countryName).type('{enter}');
  }

  selectCountry(countryName) {
    cy.get(SELECTORS.countryName(countryName)).click();
  }

  selectFirstSimPackage() {
    cy.get(SELECTORS.firstSimPackageButton).click();
  }

  verifySimDetail(index, expectedValue) {
    cy.get(SELECTORS.simDetailInfoList(index)).contains(expectedValue);
  }

  verifySimDetails({ operatorTitle, country, dataAmount, validity, price }) {
    cy.get(SELECTORS.simDetailOperatorTitle).contains(operatorTitle);
    this.verifySimDetail(1, country);
    this.verifySimDetail(2, dataAmount);
    this.verifySimDetail(3, validity);
    this.verifySimDetail(4, price);
  }

}

export default new AiraloPage();