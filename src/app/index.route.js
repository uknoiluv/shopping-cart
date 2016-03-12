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
      // params: {
      //   pid: {
      //     value: 'defaultValue',
      //     squash: false
      //   }
      // },
    	templateUrl: 'app/product-details/product-details.html',
    	controller: 'ProductDetailsController',
    	controllerAs: 'product'
      // resolve: {
      // // productDetails: (StoreItem, $stateParams) => StoreItem.getItem($stateParams.productName)
      //   productDetails: (StoreItem, $stateParams) => console.log('hit inside router')
      // }
    });

  $urlRouterProvider.when('/', 'list')
  $urlRouterProvider.otherwise('/');
}
