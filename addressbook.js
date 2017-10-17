$(document).ready(function() {
   $('#newContact').on('click', function() {
       $('#dataSection').slideToggle();
       $('#buttonSave').delay(400).fadeToggle();
   })
});