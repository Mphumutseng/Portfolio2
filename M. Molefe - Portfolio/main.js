
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCSP51TzUD2Pt5oPYfJjsG0peCUhoBZXCw",
    authDomain: "contact-form-77d73.firebaseapp.com",
    databaseURL: "https://contact-form-77d73.firebaseio.com",
    projectId: "contact-form-77d73",
    storageBucket: "contact-form-77d73.appspot.com",
    messagingSenderId: "579764470694",
    appId: "1:579764470694:web:c4ac085157f059551e4567",
    measurementId: "G-ZYMC8RDX2W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// Listen for form
document.getElementById('contactForm').addEventListener('Submit, SubmitForm');

// Submit form
function submitForm(e){
    e.preventDefault();

// Get values
var name = getInputVal('name')
var surname = getInputVal('surname')
var email = getInputVal('email')
var female = getInputVal('female')
var male = getInputVal('male')
var comment = getInputVal('comment')

// Save message
saveMessage(name, surname, email, female, male, comment);

// Show alert
document.querySelector('.alert').style.display = 'block';

// Hide alert after 5 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
,3000);

// Clear form
document.getElementById('contactForm').reset();
}
// Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, surname, email, female, male, comment){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      surname:surname,
      email:email,
      female:female,
      male:male,
      comment:comment
    });
  }












}