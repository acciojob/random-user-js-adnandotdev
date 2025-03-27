// Select elements
const image = document.querySelector('.image'); // Directly selects the <img> element
const userName = document.querySelector('.user-name');
const details = document.querySelector('.details');
const ageBtn = document.querySelector('.age');
const emailBtn = document.querySelector('.email');
const phoneBtn = document.querySelector('.phone');
const getUserBtn = document.querySelector('#getUser');

let currentUser = {}; // Store current user details

// Fetch user from API
async function fetchUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0]; // Extract user from response

        // Store user details
        currentUser = {
            name: `${user.name.first} ${user.name.last}`,
            image: user.picture.large, // ✅ Set the image from response
            age: user.dob.age,
            email: user.email,
            phone: user.phone
        };

        // Display user name
        userName.textContent = currentUser.name;

        // Display user image ✅ (Directly updates the <img> src attribute)
        image.src = currentUser.image;
        image.alt = `Picture of ${currentUser.name}`;

        // Reset additional details
        details.textContent = 'Click a button to see details';
    } catch (error) {
        console.error('Error fetching user:', error);
        details.textContent = "Error fetching user!";
    }
}

// Event listeners for buttons
ageBtn.addEventListener('click', () => {
    details.textContent = `Age: ${currentUser.age}`;
});

emailBtn.addEventListener('click', () => {
    details.textContent = `Email: ${currentUser.email}`;
});

phoneBtn.addEventListener('click', () => {
    details.textContent = `Phone: ${currentUser.phone}`;
});

getUserBtn.addEventListener('click', fetchUser);

// Fetch initial user on page load
fetchUser();
