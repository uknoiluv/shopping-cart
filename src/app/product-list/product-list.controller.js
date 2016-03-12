export class ProductListController {
  constructor ($timeout, webDevTec, toastr, storeItem, $state) {
    'ngInject';

    // this.awesomeThings = [];
    // this.classAnimation = '';
    // this.creationDate = 1457757557997;
    // this.toastr = toastr;
    this.state = $state;

    this.storeItems = storeItem.getItems().items;
    console.log('this.storeItems', this.storeItems);

    this.activate($timeout, webDevTec);
  }

  activate($timeout, webDevTec) {
    this.getWebDevTec(webDevTec);
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }

  goToProductDetails(pid) {
    console.log('hit', pid);
    // console.log('this.state.go', this.state.go);
    this.state.go('home.product', {pid: pid});
    // this.state.go();
  }
}
