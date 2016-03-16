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
  }

  goToProductDetails(pid) {
    this.state.go('home.product', {pid: pid});      
  }
}
