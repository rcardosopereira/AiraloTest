/// <reference types="Cypress" />
import AiraloPage from '../pages/AiraloPage';

describe('Airalo eSIM Purchase Flow', () => {
  beforeEach(() => {
    AiraloPage.visit();
    AiraloPage.acceptCookies();
  });

  it('should display correct SIM details for Japan', () => {
    AiraloPage.searchCountry('Japan');
    AiraloPage.selectCountry('Japan');
    AiraloPage.selectFirstSimPackage();
    AiraloPage.verifySimDetails({
      operatorTitle: 'Moshi Moshi',
      country: 'Japan',
      dataAmount: '1 GB',
      validity: '7 Days',
      price: '$4.50'
    });
  });
});
