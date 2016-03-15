/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { ProductDetailsController } from './product-details/product-details.controller';
import { ProductListController } from './product-list/product-list.controller';
import { StoreItemService } from '../app/components/storeItem/storeItem.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { ListDirective } from '../app/components/list/list.directive';
import { ListItemDirective } from '../app/components/listItem/listItem.directive';
import { DetailsDirective } from '../app/components/details/details.directive';
import { TitleDirective } from '../app/components/title/title.directive';

angular.module('shoppingCart', ['ui.router', 'ngMaterial', 'toastr', 'ngSanitize', 'LocalStorageModule'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('storeItem', StoreItemService)
  .controller('MainController', MainController)
  .controller('ProductDetailsController', ProductDetailsController)
  .controller('ProductListController', ProductListController)
  .directive('fsNavbar', NavbarDirective)
  .directive('fsList', ListDirective)
  .directive('fsListItem', ListItemDirective)
  .directive('fsDetails', DetailsDirective)
  .directive('fsTitle', TitleDirective)