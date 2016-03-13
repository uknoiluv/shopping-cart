export class MainController {
  constructor ($timeout, webDevTec, toastr, storeItem, $state, $mdSidenav, $scope, localStorageService) {
    'ngInject';
    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1457757557997;
    this.toastr = toastr;
    this.state = $state;
    this.mdSidenav = $mdSidenav;
    this.localStorageService = localStorageService;

    this.storeItems = storeItem.getItems().items;

    this.activate($timeout, webDevTec);

    this.cart = [];

    $scope.$watch(() => {
      return $mdSidenav('right').isOpen();
    }, (oldValue, newValue) => {
      console.log('this', this);
      if(!oldValue && !newValue) {
         this.cart = this.localStorageService.get('cart');
      }else if(oldValue && !newValue) {
         this.cart = this.localStorageService.get('cart');
      }else {
         this.localStorageService.set('cart', this.cart);
      }
      console.log('oldValue', oldValue);
      console.log('newValue', newValue);
      console.log('this.cart', this.cart);
      // $scope.$apply();
    });
  }

  activate($timeout, webDevTec) {
    this.getWebDevTec(webDevTec);
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }

  goToProductDetails(pid) {
    this.state.go('product', {pid: pid});
  }

  closeSidenav() {
    this.mdSidenav('right').close();
  }
}
