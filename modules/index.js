'use strict';

module.exports = angular.module('main.modules', [
  require('./st2-action-reporter').name,
  require('./st2-api').name,
  require('./st2-auto-form').name,
  require('./st2-criteria').name,
  require('./st2-filter').name,
  require('./st2-filter-expandable').name,
  require('./st2-flex-table').name,
  require('./st2-flow').name,
  require('./st2-highlight').name,
  require('./st2-history-child').name,
  require('./st2-label').name,
  require('./st2-menu').name,
  require('./st2-notification').name,
  require('./st2-panel').name,
  require('./st2-proportional').name,
  require('./st2-remote-form').name,
  require('./st2-scroll-into-view').name,
  require('./st2-select-on-click').name,
  require('./st2-value-format').name,
  require('./st2-view').name,
  require('./st2-time').name,
]);
