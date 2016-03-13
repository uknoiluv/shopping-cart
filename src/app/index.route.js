export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      abstract: true,
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('home.list', {
      url: 'list',
      templateUrl: 'app/product-list/product-list.html',
      controller: 'ProductListController',
      controllerAs: 'list'
    })
    .state('home.product', {
    	url: 'product/:pid',
    	templateUrl: 'app/product-details/product-details.html',
    	controller: 'ProductDetailsController',
    	controllerAs: 'product'
    });

  $urlRouterProvider.when('/', 'list')
  $urlRouterProvider.otherwise('/');
}
