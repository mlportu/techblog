async function editFormHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const title = document.querySelector('input[name="post-title"]').value.trim();
    console.log(id);
    console.log(title);

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title
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