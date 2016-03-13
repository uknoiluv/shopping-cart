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
    this.total = 0;

    this.cart = [];

    $scope.$watch(() => {
      return $mdSidenav('right').isOpen();
    }, (oldValue, newValue) => {
      if(!oldValue && !newValue) {
         this.cart = this.localStorageService.get('cart');
      }else if(oldValue && !newValue) {
         this.cart = this.localStorageService.get('cart');
      }else {
         this.localStorageService.set('cart', this.cart);
      }
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

  getTotal() {
    let total = 0;
    
    for(var i = 0; i < this.cart.length; i++) {
      let item = this.cart[i];
      total += item.pricevalue * item.quantity;
    }
    if(isNaN(total)) {
      total = 'N/A'
    }
    return total;
  }

  deleteItem(index) {
    this.cart.splice(index, 1);
  }
}
