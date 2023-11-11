const existingPosts = document.querySelector("#existingPosts");
const createNew = document.querySelector("#createNew");
const newComment = document.querySelector("#newComment");
const newPost = document.querySelector("#newPost");

function hideCreateNew() {
  createNew.hidden = true;
}

hideCreateNew();

newComment.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("click");
  existingPosts.hidden = true;
  newComment.hidden = true;
  createNew.hidden = false;
});

newPost.addEventListener("submit", (event) => {
  var title = document.querySelector("#title").value;
  var description = document.querySelector("#content").value;
  event.preventDefault();
  console.log("you clicked me");
  if (!title || !description) {
    alert("Please enter both title and content");
    return;
  }
  const postObj = {
    title: title,
    description: description,
  };
  fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify(postObj),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      createNew.setAttribute("hidden", "false");
      location.reload();
    } else {
      alert("Error - please try again");
    }
  });
});
