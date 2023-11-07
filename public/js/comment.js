 
document.querySelector("#newComment").addEventListener("submit",event=>{
  event.preventDefault();
  const comment = {
      description:document.querySelector("#comment").value,
      postId:document.querySelector("#hiddenCommentId").value,
  }
  fetch("/api/comments",{
      method:"POST",
      body:JSON.stringify(comment),
      headers:{
          "Content-Type":"application/json"
      }
  }).then(res=>{
      if(res.ok){
          console.log("comment posted")
          location.reload()
      } else {
          alert("please try again")
      }
  })
})


// async function newCommentHandler(event) {
//     event.preventDefault();
  
//     const description = document.querySelector('#description').value;
//     const user_id = document.querySelector('#user_id').value;

//     const response = await fetch(`/api/comments`, { 
//         method: 'POST',
//         body: JSON.stringify({
//           description,
//           user_id,
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
    
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert('Failed to add comment');
//       }
//     }
    
//     document.querySelector('.new-comment-form').addEventListener('submit', newCommentHandler);
   