'use strict';

import component from './menu.component.js';

module.exports =
  function st2Menu(reactDirective) {
    var overrides = {
      restrict: 'C'
    };

    const a = reactDirective(component, null, overrides);

    return a;
  };
