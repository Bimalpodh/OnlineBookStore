# OnlineBookStore


## Project Description
The **Online Bookstore** is a responsive web application that allows users to browse books, add them to a cart, and place orders seamlessly. Built with **HTML**, **CSS**, and **JavaScript**, this project provides a smooth shopping experience and dynamically handles user data using `localStorage`.

---

## Features
### Book Catalog
- Browse a list of books with details like title, price, discount, and cover image.
- Add books to the shopping cart for purchase.

### Shopping Cart
- View selected books with their prices and applied discounts.
- Automatically calculate the total cost of selected books.
- Proceed to the order summary page.

### Order Summary
- Displays the selected books with their total cost.
- Shows the user's saved delivery address.
- Includes a QR code for payment (optional).

### Delivery Address
- Automatically fetches and displays user details (name, address, phone) from `localStorage`.

---

## Technologies Used
- **HTML**: Page structure and layout.
- **CSS**: Styling and responsiveness.
- **JavaScript**: Interactivity, dynamic data handling, and local storage management.

---

## How It Works
### Book Selection
Users can browse the catalog and add books to their cart. The book details are saved as objects in an array stored in `localStorage`.

### Cart Overview
- Displays the list of selected books, their prices, discounts, and the total amount.
- Users can proceed to the order summary page.

### Order Page
- Displays the cart items, the calculated total, and the user's delivery address.
- Dynamically retrieves the data from `localStorage`.

### Address Display
Pre-saved user address details are automatically displayed on the order page.

---




## Data Structure





# Future Enhancements
Backend Integration: Replace localStorage with a backend database for persistent storage.
Authentication: Add user login and signup functionality.
Payment Gateway: Integrate a secure payment gateway for real transactions.
Improved UI/UX: Enhance the design with advanced CSS and animations.


## Conclusion

The Online Bookstore is an e-commerce prototype that demonstrates essential functionalities such as catalog browsing, cart management, and order summary. It’s a perfect learning project for understanding web development concepts and managing dynamic data using localStorage.




### 1. **Cart Items**
The selected books are stored in `localStorage` under the key `cart`:
```json
[
  {
    "title": "Book Title 1",
    "price": "499",
    "discount": "10%",
    "imageSrc": "path_to_image1"
  },
  {
    "title": "Book Title 2",
    "price": "349",
    "discount": "15%",
    "imageSrc": "path_to_image2"
  }
]

# 


