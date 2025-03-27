
const image = document.querySelector('.image'); 
const userName = document.querySelector('.user-name');
const details = document.querySelector('.details');
const ageBtn = document.querySelector('.age');
const emailBtn = document.querySelector('.email');
const phoneBtn = document.querySelector('.phone');
const getUserBtn = document.querySelector('#getUser');

let currentUser = {};


async function fetchUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];

     
        currentUser = {
            name: `${user.name.first} ${user.name.last}`,
            image: user.picture.large, 
            age: user.dob.age,
            email: user.email,
            phone: user.phone
        };

        userName.textContent = currentUser.name;

        image.src = currentUser.image;
        image.alt = `Picture of ${currentUser.name}`;


        details.textContent = '';
    } catch (error) {
        console.error('Error fetching user:', error);
        details.textContent = "Error fetching user!";
    }
}


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


fetchUser();
