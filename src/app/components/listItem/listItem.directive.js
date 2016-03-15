export function ListItemDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/listItem/listItem.html',
    scope: true,
    controller: ListItemController,
    controllerAs: 'vm',
    bindToController: true,
    link: (scope, elem) => {
      elem.children().css({"background-color": scope.storeItem.attributes.productColor});
      elem.children().children().children().css({"color": scope.storeItem.attributes.titleColor})
    }
  };

  return directive;
}

class ListItemController {
  constructor (storeItem, $state) {
    'ngInject';

    this.state = $state;
    // this.data = storeItem.getItems();
    // this.storeItems = this.data.items;
    
  }

  goToProductDetails(pid) {
    console.log('hit inside goToProductDetails');
    this.state.go('home.product', {pid: pid});
  }
}
