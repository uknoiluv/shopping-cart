export function runBlock ($log, $rootScope, $state) {
  'ngInject';

  let onStateChange = (event, toState, toStateParams, fromState, fromStateParams) => {
  	console.log('event', event);
  	console.log('toState', toState);
  	console.log('toStateParams', toStateParams);
  	console.log('fromState', fromState);
  	console.log('fromStateParams', fromStateParams);
    // event.preventDefault();
  }


  $log.debug('runBlock end');

  $rootScope.$state = $state;
  $rootScope.$on('$stateChangeStart', onStateChange);
}
