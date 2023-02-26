'use strict';

const title = document.querySelector('.input--title');
const author = document.querySelector('.input--author');
const content = document.querySelector('.content');

const dlt = document.querySelector('.btn--delete');
const submit = document.querySelector('.btn--submit');

const postList = document.querySelector('.post-list');

console.log(title, author, content);

let posts = [];
if (
  localStorage.getItem('posts') &&
  typeof JSON.parse(localStorage.getItem('posts')) === 'object'
)
  posts = JSON.parse(localStorage.getItem('posts'));

submit.addEventListener('click', e => {
  // e.preventDefault();

  if (!title.value || !author.value || !content.value) {
    console.log('Please fill all the fields');
    return;
  }

  //   Takes the content of author, title, and content and turns them into a post object which will be stringified later

  const post = {
    title: title.value,
    author: author.value,
    content: content.value
      .replace(/^\s{2,}|\s{2,}$/g, '')
      .replace(/\s{2,}/g, ' '),
    date: new Date().getTime(),
  };

  posts.push(post);

  localStorage.setItem('posts', JSON.stringify(posts));
  console.log(localStorage.getItem('posts'));
});

dlt.addEventListener('click', e => {
  e.preventDefault();

  if (!posts.find(post => post.title === title.value)) {
    console.log('This post does not exist');
    return;
  }

  posts.forEach((post, i) => {
    if (post.title === title.value) {
      posts.splice(i, 1);
    }
  });
  localStorage.setItem('posts', JSON.stringify(posts));
  console.log(localStorage.getItem('posts'));
});

console.log(posts);

posts.forEach(post => {
  postList.insertAdjacentHTML(
    'afterbegin',
    `
  <div class='post' data-post=${post.date}>
  <h2 class='post__title'>${post.title}</h2>
  <h4 class="post__author">${post.author}</h4>
  <button class='btn--delete-post'>Delete</button>
  </div>`
  );
});

const postQuery = [...document.querySelectorAll('.post')];
console.log(postQuery);

postList.addEventListener('click', e => {
  if (!e.target.classList.contains('btn--delete-post')) return;
  const dlt = e.target;
  const id = dlt.closest('.post').dataset.post;
  posts.forEach((pst, i) => {
    if (pst.date == id) posts.splice(i, 1);
  });
  console.log(posts);
  localStorage.setItem('posts', JSON.stringify(posts));

  location.reload();
});
