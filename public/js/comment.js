document.querySelector("#newComment").addEventListener("submit", (event) => {
  event.preventDefault();
  const comment = {
    description: document.querySelector("#comment").value,
    postId: document.querySelector("#hiddenCommentId").value,
  };
  fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify(comment),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    if (res.ok) {
      console.log("comment posted");
      location.reload();
    } else {
      alert("Try again");
    }
  });
});

// async function newCommentHandler(event) {
//     event.preventDefault();

//     const description = document.querySelector('#comment').value;
//     const postId = document.querySelector("#hiddenCommentId").value;

//     const response = await fetch(`/api/comments`, {
//         method: 'POST',
//         body: JSON.stringify({
//           description,
//           postId,
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

//     document.querySelector('#newComment').addEventListener('submit', newCommentHandler);
