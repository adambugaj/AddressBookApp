$(document).ready(function() {
   $('#newContact').on('click', function() {
       $('#dataSection').slideToggle();
       $('#buttonSave').delay(400).fadeToggle();
   });
});


var contacts = [];

//function printPerson(person) {
//    console.log(person.firstName);
//};

var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;

function addFirstName(firstName, lastName, phoneNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
};

function saveContact() {
    var getFirstName = document.getElementById("firstName").value;
    var getLastName = document.getElementById("lastName").value;
    var getPhoneNumber = document.getElementById("phoneNumber").value;
    var getEmail = document.getElementById("email").value;
    
    contacts[contacts.length] = new addFirstName(getFirstName, getLastName, getPhoneNumber, getEmail);
    document.getElementById("output").innerHTML = contacts[0].firstName + " " + contacts[0].lastName + " " + contacts[0].phoneNumber + " " + contacts[0].email;
};


