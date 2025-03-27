// Select elements
const image = document.querySelector('.image');
const userName = document.querySelector('.user-name');
const details = document.querySelector('.details');
const ageBtn = document.querySelector('.age');
const emailBtn = document.querySelector('.email');
const phoneBtn = document.querySelector('.phone');
const getUserBtn = document.querySelector('.get-user');

let currentUser = {}; // Store the current user details

// Fetch user from API
async function fetchUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0]; // Extract user from response

        // Store user details
        currentUser = {
            name: `${user.name.first} ${user.name.last}`,
            image: user.picture.large,
            age: user.dob.age,
            email: user.email,
            phone: user.phone
        };

        // Display user name & image
        image.style.backgroundImage = `url(${currentUser.image})`;
        userName.textContent = currentUser.name;
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
