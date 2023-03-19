

// select the login form
const loginForm = document.querySelector('#login_user');
// const loader = document.querySelector('#loader');
// add a submit event listener to the form
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // get the email and password values from the form inputs
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  try {
    // fetch the list of users from the API endpoint
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();
    // find the user with the matching email and password
    const user = users.find((user) => user.email === email && user.password === password);

    if (!user) {
      // if the user is not found, show an error message
      alert('Invalid email or password');
      // loginForm.innerHTML = 'Login';
      window.location.href = '/my-brand/login.html';
      return;
    }

    // if the user is found, store their information in local storage
    localStorage.setItem('currentUser', JSON.stringify(user));

       // redirect the user to the dashboard page
       window.location.href = "/my-brand/dashboard/dashboard.html";
      } catch (error) {
        console.error(error);
        alert('An error occurred during login');
        window.location.href = '/my-brand/login.html';
      }
    });