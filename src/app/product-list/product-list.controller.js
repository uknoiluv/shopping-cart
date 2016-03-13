export class ProductListController {
  constructor ($timeout, webDevTec, toastr, storeItem, $state) {
    'ngInject';

    this.state = $state;
    this.storeItems = storeItem.getItems().items;

  }

  goToProductDetails(pid) {
    this.state.go('home.product', {pid: pid});
  }
}
