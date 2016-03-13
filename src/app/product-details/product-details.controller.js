export class ProductDetailsController {
  constructor ($stateParams, storeItem, $mdSidenav) {
    'ngInject';
    
    this.mdSidenav = $mdSidenav;

    this.item = storeItem.getItem($stateParams.pid);
    

    // this.awesomeThings = [];
    // this.classAnimation = '';
    // this.creationDate = 1457757557997;
    // this.toastr = toastr;

    // this.storeItems = storeItem.getItems().items;

    // this.activate($timeout, webDevTec);
  }

  openSidenav() {
    this.mdSidenav('right').toggle();
  }
  // activate($timeout, webDevTec) {
  //   this.getWebDevTec(webDevTec);
  //   $timeout(() => {
  //     this.classAnimation = 'rubberBand';
  //   }, 4000);
  // }

  // getWebDevTec(webDevTec) {
  //   this.awesomeThings = webDevTec.getTec();

  //   angular.forEach(this.awesomeThings, (awesomeThing) => {
  //     awesomeThing.rank = Math.random();
  //   });
  // }

  // showToastr() {
  //   this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
  //   this.classAnimation = '';
  // }
}
