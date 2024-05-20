export const SELECTORS = {
    acceptCookiesButton: '#onetrust-accept-btn-handler',
    searchInput: '[data-testid="search-input"]',
    countryName: (countryName) => `[data-testid="${countryName}-name"]`,
    firstSimPackageButton: ':nth-child(1) > [data-testid="sim-package-item"] > .c--sim_item > .sim-item-bottom > [data-testid="esim-button"] > .btn',
    simDetailOperatorTitle: '[data-testid="sim-detail-operator-title"] > p',
    simDetailInfoList: (index) => `[data-testid="sim-detail-info-list"] > :nth-child(${index}) > .c--sim_item-row > [data-testid="promotional-price-value"]`
  };