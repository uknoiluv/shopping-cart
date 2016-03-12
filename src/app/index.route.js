export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('product', {
    	// url: '/product/:productName',
      url: '/product',
    	templateUrl: 'app/product-details/product-details.html',
    	controller: 'ProductDetailsController',
    	controllerAs: 'product'
      // resolve: {
      //   productDetails: (StoreItem, $stateParams) => StoreItem.getItem($stateParams.productName)
      // }
    });

  $urlRouterProvider.otherwise('/');
}
