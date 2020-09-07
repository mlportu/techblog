async function editFormHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const post_content = document.querySelector('textarea[name="post_content"]').value.trim();
    console.log(id);
    console.log(post_content);

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          post_content
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if(response.ok){
        console.log('updated')
        document.location.reload();
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);