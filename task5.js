const posts = [
    { title: 'Post one', body: 'This is post one', createAt: new Date().getTime() },
    { title: 'Post two', body: 'This is post two', createAt: new Date().getTime() }
];

let intervalId = 0;
function getPosts() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title} edited at ${(new Date().getTime() - post.createAt) / 1000} seconds ago</li>`;
            console.log(`${post.title},${post.body},${post.createAt}`);
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ ...post, createAt: new Date().getTime() });
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject("Something went wrong");
            }
        }, 2000)
    });
}

createPost({ title: 'Post three', body: 'This is post three' })
    .then(getPosts)
    .catch(err => console.log(err));

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                resolve();
            }
            else {
                reject("Array is empty");
            }
        }, 1000)
    })
}

let timerId = setInterval(() => {
    deletePost()
        .then(() => {
            posts.pop();
        })
        .catch(err => {
            console.log(err);
            clearInterval(timerId);
        });
}, 2000)


function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Date().getTime());
        }, 1000)
    })
}

updateLastUserActivityTime()
.then((time1)=>{
    console.log(`Last active ${time1} seconds ago`);
})
.catch((err)=>{
    console.log(err);
})

Promise.all([createPost, updateLastUserActivityTime])
    .then((time1) => {
        getPosts()
        deletePost()       
    })
    .catch(err => console.log(err));
