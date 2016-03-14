export class ProductDetailsController {
  constructor ($stateParams, storeItem, $mdSidenav, localStorageService) {
    'ngInject';
    this.mdSidenav = $mdSidenav;
    this.localStorageService = localStorageService;

    this.item = storeItem.getItem($stateParams.pid);    
    this.name = this.item.display;
    this.quantity = this.item.quantity;
    this.pricevalue = this.item.pricevalue;

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

}
