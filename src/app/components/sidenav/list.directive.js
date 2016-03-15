export function ListDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/list/list.html',
    scope: true,
    controller: ListController,
    controllerAs: 'vm',
    bindToController: true,
    link: (scope, elem) => {
      elem.children().css({"background-color": scope.vm.data.attributes.productColor});
      elem.children().children().css({"color": scope.vm.data.attributes.titleColor})
    }
  };

  return directive;
}

class ListController {
  constructor (storeItem, $state) {
    'ngInject';

    this.state = $state;
    this.data = storeItem.getItems();
    this.storeItems = this.data.items;
    
  }

  goToProductDetails(pid) {
    this.state.go('home.product', {pid: pid});
  }
}
