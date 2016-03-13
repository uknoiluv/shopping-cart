export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
      cartCount: '='
    },
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor ($mdSidenav) {
    'ngInject';    
    this.mdSidenav = $mdSidenav;
    console.log('this.cartCount', this.cartCount);
  }

  toggle() {
    this.mdSidenav('right').toggle();
  }
}
