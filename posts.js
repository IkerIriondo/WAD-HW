// function to create post
function createPost(post) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    const postHeader = document.createElement('div');
    postHeader.classList.add('post-header');

    const postCreator = createPostCreator(post);
    const postDate = createPostDate(post);

    postHeader.appendChild(postCreator);
    postHeader.appendChild(postDate);

    const postContent = createPostContent(post);

    postDiv.appendChild(postHeader);
    postDiv.appendChild(postContent);

    return postDiv;
}

// function to create the post creator element
function createPostCreator(post) {
    const postCreator = document.createElement('span');
    postCreator.classList.add('post-creator');
    postCreator.innerHTML = `<img src="${post.profile_pic}" alt="ProfileImg">${post.username}`;
    return postCreator;
}

// function to create the post date element
function createPostDate(post) {
    const postDate = document.createElement('span');
    postDate.classList.add('post-date');
    postDate.textContent = post.date;
    return postDate;
}

// function to create the post content element
function createPostContent(post) {
    const postContent = document.createElement('div');
    postContent.classList.add('post-content');

    const postText = document.createElement('p');
    postText.textContent = post.text;

    postContent.appendChild(postText);

    if (post.picture) {
        const postImage = createPostImage(post.picture);
        postContent.appendChild(postImage);
    }
    return postContent;
}

// function to create the post image element
function createPostImage(pictureSrc) {
    const postImage = document.createElement('img');
    postImage.src = pictureSrc;
    postImage.alt = "post image";
    return postImage;
}

// HTTP request to the JSON file
fetch('posts.json')
//online json (host is jsonbin)(Has only 10_000 free requests)(replace with 'posts.json'): https://api.jsonbin.io/v3/b/654503da54105e766fcaf308
// fetch('https://api.jsonbin.io/v3/b/654503da54105e766fcaf308')
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
        const contentContainer = document.querySelector('.content'); // Get the content container

        // Loop through each post in the 'posts' array from the JSON data
        data.posts.forEach(post => {
        // change to "data.record.posts.forEach..."  (how the jsonbin site is structured), everything else is the same code as local json
        // data.record.posts.forEach(post => {
            // Create a post element and append it to the container
            const postElement = createPost(post);
            contentContainer.appendChild(postElement);
        });
    });