angular
  .module('app')
  .controller('StaffController', StaffController);
  
function StaffController() {
  var vm = this;
  
  vm.name = 'Bill Gates';
  vm.email = 'bill@microsoft.com';
  vm.phone = '01234567890';
}