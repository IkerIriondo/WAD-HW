
//online json (host is jsonbin)(Has only 10_000 free requests)(replace with 'posts.json'): https://api.jsonbin.io/v3/b/654503da54105e766fcaf308
fetch('posts.json')
    .then(response => response.json())
    .then(data => {
        const contentContainer = document.querySelector('.content'); // Get the content container

        //change to "data.record.posts.forEach..."  (how the jsonbin site is structured)
        //everything else if the same code as local json
        data.posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            const postHeader = document.createElement('div');
            postHeader.classList.add('post-header');

            const postCreator = document.createElement('span');
            postCreator.classList.add('post-creator');
            postCreator.innerHTML = `<img src="${post.profile_pic}" alt="ProfileImg">${post.username}`;

            const postDate = document.createElement('span');
            postDate.classList.add('post-date');
            postDate.textContent = post.date;

            postHeader.appendChild(postCreator);
            postHeader.appendChild(postDate);

            const postContent = document.createElement('div');
            postContent.classList.add('post-content');

            const postText = document.createElement('p');
            postText.textContent = post.text;

            const postImage = document.createElement('img');
            if (post.picture) {
                postImage.src = post.picture;
                postImage.alt = "post image";
            }

            postContent.appendChild(postText);

            if (post.picture) {
                postContent.appendChild(postImage);
            }

            postDiv.appendChild(postHeader);
            postDiv.appendChild(postContent);

            contentContainer.appendChild(postDiv);
        });
    });


