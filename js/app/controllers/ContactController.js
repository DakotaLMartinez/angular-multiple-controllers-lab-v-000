angular 
  .module('app')
  .controller('ContactController', ContactController);
  
function ContactController() {
  var vm = this;
  
  vm.name = 'Steve Jobs';
  vm.email = 'steve@apple.com';
  vm.phone = '111-111-1111';
  
  this.changeName = function() {
    vm.name = 'Something else!';
  }
}