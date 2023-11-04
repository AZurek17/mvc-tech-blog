
async function editFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const user_name = document.querySelector('#user_name')
    
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    const response = await fetch (`api/post/${id}`,{
        method: 'PUT',
        body: JSON.stringify({
            title,
            description,
            user_name,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace(`/post/${id}`);
    } else {
        alert('Failed to edit post')
    }
}

document.querySelector('.edit-post-form').
addEventListener('submit', editFormHandler);