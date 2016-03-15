export function TitleDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/title/title.html',
    scope: {
      data: "="
    },
    controller: TitleController,
    controllerAs: 'vm',
    bindToController: true,
    link: (scope, elem) => {    
      elem.children().css({"background-color": scope.vm.data.attributes.productColor});
      elem.children().css({"color": scope.vm.data.attributes.titleColor})
    }
  };

  return directive;
}

class TitleController {
  constructor () {
    'ngInject';
    
  }

}
