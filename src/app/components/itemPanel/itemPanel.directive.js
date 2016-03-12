export function ItemPanelDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/itemPanel/itemPanel.html',
    scope: {
        details: '='
    },
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class ItemPanelController {
  constructor (moment, $state) {
    'ngInject';
    console.log('this.details', this.details);
    // "this.creation" is available by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).fromNow();
    this.state = $state;
  }

  goToProductDetails(pid) {
    // console.log('this.state.go', this.state.go);
    this.state.go('home.product', {pid: pid});
    // this.state.go();
  }
}
