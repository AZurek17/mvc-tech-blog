
document.querySelector("#login").addEventListener("submit",event=>{
  event.preventDefault();
  const userData = {
      username:document.querySelector("#loginUsername").value,
      password:document.querySelector("#loginPassword").value,
  }
  console.log(userData)
  fetch("/api/users/login",{
      method:"POST",
      body:JSON.stringify(userData),
      headers:{ "Content-Type":"application/json" },
  }).then(res=>{
      if(res.ok){
          console.log("user is logged in")
          location.href="/dashboard"
      } else {
          alert("please try again")
      }
  })
})


// const loginFormHandler = async (event) => {
//     event.preventDefault();
  
//     const username = document.querySelector('#username-login').value.trim();
//     const password = document.querySelector('#password-login').value.trim();
//     // const signup = document.querySelector('#signup');
  
//     if (username && password) {
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ username, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert('Failed to log in.');
//       }
//     }
//   };
  
  
//   document
//     .querySelector('.login-form')
//     .addEventListener('submit', loginFormHandler);

