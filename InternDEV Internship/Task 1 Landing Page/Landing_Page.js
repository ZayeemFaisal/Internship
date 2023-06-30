document.getElementById('newsletterForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.querySelector('input[type="email"]').value;
  // Do something with the email value, e.g., send it to a server or display a success message
  alert('Subscribed successfully!');
});

document.querySelector('#product button').addEventListener('click', function() {
  // Add functionality to add the product to the cart
  alert('Product added to cart!');
});
