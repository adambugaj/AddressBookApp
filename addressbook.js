$('#dataSection').show();
$('#buttonSave').show();
//$(document).ready(function() {
//   $('#newContact').on('click', function() {
//       $('#dataSection').slideToggle();
//       $('#buttonSave').delay(400).fadeToggle();
//   });
//});
//
//
//var contacts = [];
//
////function printPerson(person) {
////    console.log(person.firstName);
////};
//
//var firstName = document.getElementById("firstName").value;
//var lastName = document.getElementById("lastName").value;
//
//function addFirstName(firstName, lastName, phoneNumber, email) {
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.phoneNumber = phoneNumber;
//    this.email = email;
//};
//
//function saveContact() {
//    var getFirstName = document.getElementById("firstName").value;
//    var getLastName = document.getElementById("lastName").value;
//    var getPhoneNumber = document.getElementById("phoneNumber").value;
//    var getEmail = document.getElementById("email").value;
//    
//    
//    contacts[contacts.length] = new addFirstName(getFirstName, getLastName, getPhoneNumber, getEmail);
//    document.getElementById("output").innerHTML = contacts[0].firstName + " " + contacts[0].lastName + " " + contacts[0].phoneNumber + " " + contacts[0].email;
//};





document.getElementById('buttonSave').addEventListener("click", function(e){
    var firstName = document.getElementById("inputFirstName").value;
    var lastName = document.getElementById('inputLastName').value;
    var numberPhone = document.getElementById('phoneNumber').value;
    var email = document.getElementById('inputEmail').value;
    
    
    var idStore = {
        firstName: firstName,
        lastName: lastName,
        numberPhone: numberPhone,
        email: email
    }
    
    if(localStorage.getItem('idStorage') === null) {
        var idStorage = [];
        idStorage.push(idStore);
        
        localStorage.setItem('idStorage', JSON.stringify(idStorage));
        
    } else {
        var idStorage = JSON.parse(localStorage.getItem('idStorage'));
        idStorage.push(idStore);
        localStorage.setItem('idStorage', JSON.stringify(idStorage));
    }
    
    /* localstorage test
    localStorage.setItem('test','My browser wants to fuck');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    */
    e.preventDefault();
});

function deleteBookmark(showEmail) {
    console.log(showEmail);
}



//fetch address and show
function fetchAddress(){
    var idStorage = JSON.parse(localStorage.getItem('idStorage'));
    var getResult = document.getElementById('getResult'); 
    
    for(var i = 0; i < idStorage.length; i++) {
        var showFirstName = idStorage[i].firstName;
        var showLastName = idStorage[i].lastName;
        var showEmail = idStorage[i].email;
        var showNumberPhone = idStorage[i].numberPhone;
        
        getResult.innerHTML += '<div class="alert alert-success">'+
                                '<h3>'+showFirstName+'</h3>' + " " +
                                '<h5>'+showLastName+'</h5>'+
                                '<a class="btn btn-warning" target="_blank" href="'+showNumberPhone+'"> Call </a>' + " " + showNumberPhone + '</br>' + 
                                '<a class="btn btn-success" target="_blank" href="'+showEmail+'">Visit</a>'+ " " + showEmail + '</br>' +
                                '<a onclick="deleteBookmark(\''+showEmail+'\')" class="btn btn-danger" href="#"> Delete </a>' + '</div>'
            
            
            showFirstName + " " + showLastName;
        console.log(idStorage[i].lastName);
    }
}










