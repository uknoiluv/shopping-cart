export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: true,
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
  }

  toggle() {
    this.mdSidenav('right').toggle();
  }
}
