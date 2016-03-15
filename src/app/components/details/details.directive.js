export function DetailsDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/details/details.html',
    scope: true,
    controller: DetailsController,
    controllerAs: 'vm',
    bindToController: true,
    link: (scope, elem) => {
      elem.children().children().children().css({"background-color": scope.vm.item.attributes.productColor});
      elem.children().children().children().css({"color": scope.vm.item.attributes.titleColor});
    }
  };

  return directive;
}

class DetailsController {
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

  addToCart(name, quantity, pricevalue, quantityEditable) {    
    let cart = this.localStorageService.get('cart') || [];
    let found = false;
    cart = cart.map((element) => {
      if(element.name === name && element.quantityEditable) {
        found = true;
        element.quantity += quantity;
        return element
      }
      return element
    });
    if(!found) {
      cart.unshift({name: name, quantity: quantity, pricevalue: pricevalue, quantityEditable: quantityEditable})  
    }
    this.localStorageService.set('cart', cart);
    this.openSidenav();
  }
}
