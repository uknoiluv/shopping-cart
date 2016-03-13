export class ProductDetailsController {
  constructor ($stateParams, storeItem, $mdSidenav, localStorageService) {
    'ngInject';
    this.mdSidenav = $mdSidenav;

    this.item = storeItem.getItem($stateParams.pid);
    this.localStorageService = localStorageService;
    this.name = this.item.display;
    this.quantity = this.item.quantity;
    this.pricevalue = this.item.pricevalue;

    // this.awesomeThings = [];
    // this.classAnimation = '';
    // this.creationDate = 1457757557997;
    // this.toastr = toastr;

    // this.storeItems = storeItem.getItems().items;

    // this.activate($timeout, webDevTec);
  }

  openSidenav() {
    this.mdSidenav('right').toggle();
  }

  addToCart(name, quantity, pricevalue) {
    console.log('typeof cart', this.localStorageService.get('cart'))
    let cart = this.localStorageService.get('cart') || [];
    let found = false;
    cart = cart.map((element) => {
      if(element.name === name) {
        found = true;
        element.quantity += quantity;
        return element
      }
      return element
    });
    if(!found) {
      cart.unshift({name: name, quantity: quantity, pricevalue: pricevalue})  
    }
    this.localStorageService.set('cart', cart);
    this.openSidenav();
  }

  // activate($timeout, webDevTec) {
  //   this.getWebDevTec(webDevTec);
  //   $timeout(() => {
  //     this.classAnimation = 'rubberBand';
  //   }, 4000);
  // }

  // getWebDevTec(webDevTec) {
  //   this.awesomeThings = webDevTec.getTec();

  //   angular.forEach(this.awesomeThings, (awesomeThing) => {
  //     awesomeThing.rank = Math.random();
  //   });
  // }

  // showToastr() {
  //   this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
  //   this.classAnimation = '';
  // }
}
