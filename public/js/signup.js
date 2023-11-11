const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#signupUsername').value.trim();
  const password = document.querySelector('#signupPassword').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('#signup')
  .addEventListener('submit', signupFormHandler);


  // document.querySelector("#signup").addEventListener("submit", (event) => {
//   event.preventDefault();
//   const userData = {
//     username: document.querySelector("#signupUsername").value.trim(),
//     password: document.querySelector("#signupPassword").value.trim(),
//   };
//   console.log(userData);
//   fetch("/api/users/", {
//     method: "POST",
//     body: JSON.stringify(userData),
//     headers: { "Content-Type": "application/json" },
//   }).then((res) => {
//     if (res.ok) {
//       console.log("user is signed up");
//       location.href = "/dashboard";
//     } else {
//       alert("please try again");
//     }
//   });
// });

