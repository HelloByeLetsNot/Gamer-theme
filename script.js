document.addEventListener("DOMContentLoaded", function() {
    fetch("blog_posts.json")
        .then(response => response.json())
        .then(data => {
            const blogPostsContainer = document.querySelector(".blog-posts");
            data.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("blog-post");
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                    <span>${post.date}</span>
                `;
                blogPostsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error("Error fetching blog posts:", error));
});