export class MainController {
  constructor (storeItem, $mdSidenav, $scope, localStorageService) {
    'ngInject';
    this.mdSidenav = $mdSidenav;
    this.localStorageService = localStorageService;

    this.storeItems = storeItem.getItems().items;
    this.total = 0;
    this.cartCount = 0;

    this.cart = [];

    $scope.$watch(() => {
      return $mdSidenav('right').isOpen();
    }, (oldValue, newValue) => {
      if (!oldValue && !newValue) {
         this.cart = this.localStorageService.get('cart');
      } else if(oldValue && !newValue) {
         this.cart = this.localStorageService.get('cart');
      } else {
         this.localStorageService.set('cart', this.cart);
      }
    });
  }

  closeSidenav() {
    this.mdSidenav('right').close();
  }

  getTotal() {
    let total = 0;
    const cartLen = this.cart ? this.cart.length : 0;
    for(var i = 0; i < cartLen; i++) {
      let item = this.cart[i];
      total += item.pricevalue * item.quantity;
    }
    if(isNaN(total)) {
      total = 'N/A'
    }
    return Math.round(total * 100) / 100;
  }

  getCartTotal() {
    let total = 0;
    const cartLen = this.cart ? this.cart.length : 0;
    for(var i = 0; i < cartLen; i++) {
      let item = this.cart[i];
      total += item.quantity;
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
