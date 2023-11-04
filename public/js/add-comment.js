async function newCommentHandler(event) {
    event.preventDefault();
  
    const description = document.querySelector('#description').value;
    const user_id = document.querySelector('#user_id').value;

    const response = await fetch(`/api/post`, { //--- verify path
        method: 'POST',
        body: JSON.stringify({
          description,
          user_id,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add comment');
      }
    }
    
    document.querySelector('.new-comment-form').addEventListener('submit', newCommentHandler);
    