 //forma validation 

 function validateForm() {
   var name = document.getElementById('name').value;
   var email = document.getElementById('email').value;
   var subject = document.getElementById('subject').value;
   var message = document.getElementById('message').value;

   // Check if any of the fields are empty
   if (name === '' || email === '' || subject === '' || message === '') {
     alert('Please fill in all fields');
     return false; // Prevent form submission
   }

   // Validate email format
   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(email)) {
     alert('Please enter a valid email address');
     return false; // Prevent form submission
   }

   // If all validations pass, return true to allow form submission
   return true;
 }

 