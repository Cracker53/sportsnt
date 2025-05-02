document.getElementById('profileForm').addEventListener('submit', function(event) {

    event.preventDefault();

    const username = document.getElementById('username').value;

    localStorage.setItem('username', username);

    displayUser Info();

});


function displayUser Info() {

    const userInfo = document.getElementById('userInfo');

    const username = localStorage.getItem('username');

    if (username) {

        userInfo.innerHTML = `<p>Welcome, ${username}!</p>`;

    } else {

        userInfo.innerHTML = `<p>No user information found.</p>`;

    }

}


// Display user info on page load

window.onload = displayUser Info;
