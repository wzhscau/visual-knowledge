(function() {
  'use strict';

  angular.module('neograph.node.controller', [])
    .controller('NodeCtrl', controller);

  function controller($scope, $stateParams, $state, nodeManager) {
    var vm = this;
    vm.node = {};

    vm.onTabChanged = onTabChanged;
    vm.onToggleEdit = onToggleEdit;

    activate();
    function activate() {
      nodeManager.load($stateParams.node).then(function(node) {
        vm.node = node;
      });
    }

    function onTabChanged(tab) {
      nodeManager.setNodeActiveTab(tab);
    }

    function onToggleEdit(editing) {
      vm.editing = editing;
      nodeManager.setNodeEditing(editing);
    }

  }

})();