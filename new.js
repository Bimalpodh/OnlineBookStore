// JavaScript to handle "Add to Cart" functionality
document.addEventListener("DOMContentLoaded", () => {
  // Select all "Add to cart" buttons
  const addToCartButtons = document.querySelectorAll(".car-btn");

  // Attach click event to each "Add to cart" button
  addToCartButtons.forEach(button => {
      button.addEventListener("click", function(event) {
          event.preventDefault();

          // Find the parent box to get book details
          const bookBox = button.closest(".box");
          const title = bookBox.querySelector("h3").innerText;
          const imageSrc=bookBox.querySelector("img").getAttribute("src");
          const price = bookBox.querySelector(".pice").innerText.split(" ")[1];
          const discount = bookBox.querySelector(".discount").innerText;

          // Book object to store in cart
          const book = {
              title,
              price,
              imageSrc,
              discount,
          };
          // Get cart from localStorage
          let cart = JSON.parse(localStorage.getItem("cart")) || [];

          // Add the selected book to the cart
          cart.push(book);

          // Update the cart in localStorage
          localStorage.setItem("cart", JSON.stringify(cart));

          // Notify the user
          alert(`${title} has been added to your cart.`);

      });
  });
});
const shopingcart=document.querySelector("#shopingcart").addEventListener("click",()=>{
  window.location.href="cart1.html"
})

// After login the profile is update in  webpage and shows his name who currently logs in
    async function login(email, password) {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            updateUserProfile(data.user.name);
        } else {
            console.error('Login failed:', data.error);
        }
    }

    function updateUserProfile(userName) {
        const profileIcon = document.getElementById('profile-icon');
        profileIcon.innerHTML = `<i class="fa-solid fa-user"></i> ${userName}`;
    }

    window.addEventListener('load', () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.name) {
            updateUserProfile(user.name);
        }
    });

