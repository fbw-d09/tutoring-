async function fetchPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
  
      const postList = document.getElementById('postList');
  
      // Erstelle einen Listeneintrag für jeden Beitrag und füge ihn der Liste hinzu
      posts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.textContent = `ID: ${post.id} - Titel: ${post.title}`;
        postList.appendChild(listItem);
      });
  
    } catch (error) {
      console.log('Fehler beim Abrufen der Beiträge:', error);
    }
  }
  
  fetchPosts();