export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: false,
    controller: NavbarController,
    controllerAs: 'vm'
    // bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor (moment, $mdSidenav) {
    'ngInject';
    // "this.creation" is available by directive option "bindToController: true"
    // this.relativeDate = moment(this.creationDate).fromNow();
    this.mdSidenav = $mdSidenav;
    // console.log('this', this);
    // console.log('hit');
  }

  toggle() {
    // console.log('this', this);
    // this.toggleRight();
    // console.log('this', this);
    this.mdSidenav('right').toggle();
  }
}
