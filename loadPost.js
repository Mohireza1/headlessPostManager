'use strict';

const postContainer = document.querySelector('.posts');
// const closeBtn = document.createElement('button');
// closeBtn.innerText = 'close';

// const moreBtnFunction = () => {
//   moreBtn.addEventListener('click', () => {
//     container.innerHTML = ``;
//     prgs.forEach(prg =>
//       container.insertAdjacentHTML('beforeend', `<p>${prg.textContent}</p>`)
//     );
//     container.append(closeBtn);
//   });
// };

// const prgsContent = prgs
//   .map(prg => prg.textContent)
//   .map(prg => prg.replace(/\s{2,}/g, ''));

// const first10 = prgsContent[0].split(' ').splice(0, 10);

// container.innerHTML = '';
// container.innerHTML = `
// <p>${first10.join(' ')}...<button class='btn--more'>more</button></p>
// `;
// let moreBtn = document.querySelector('.btn--more');
// moreBtnFunction();

// closeBtn.addEventListener('click', () => {
//   container.innerHTML = `
// <p>${first10.join(' ')}...<button class='btn--more'>more</button></p>
// `;
//   moreBtn = document.querySelector('.btn--more');
//   moreBtnFunction();
// });

// const msnry = new Masonry(container, {
//   itemSelector: '.post',
//   columnWidth: 200,
// });

// const posts = JSON.parse();
const posts = JSON.parse(localStorage.getItem('posts'));

posts.forEach(post => {
  const { title, author, content, date } = post;

  const contentArr = content.split('\n');
  const contentHTML = contentArr.reduce(
    (fin, prg) => (fin += `<p>${prg}</p>`),
    ''
  );
  console.log(contentHTML);

  const newPost = document.createElement('section');
  newPost.classList.add('post');
  newPost.innerHTML = `
        <h2 class="post__title">${title}</h2>
        <div class="post__content">
       ${contentHTML}
        </div>
        <div class="post__footer">
          <div class="footer__author">
            <img src="https://placedog.net/102/102" alt="" />
            <h5 class="post__author">${author}</h5>
          </div>
          <ion-icon name="chatbubbles-outline"></ion-icon>
        </div>`;

  newPost.setAttribute(
    'data-time',
    new Intl.DateTimeFormat('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(date)
  );
  postContainer.append(newPost);

  // postContainer.insertAdjacentHTML(
  //   'afterbegin',
  //   `<section class="post">
  //       <h2 class="post__title">${title}</h2>
  //       <div class="post__content">
  //      ${contentHTML}
  //       </div>
  //       <div class="post__footer">
  //         <div class="footer__author">
  //           <img src="https://placedog.net/102/102" alt="" />
  //           <h5 class="post__author">${author}</h5>
  //         </div>
  //         <ion-icon name="chatbubbles-outline"></ion-icon>
  //       </div>
  //     </section>`
  // );
});

// const post1 = [];
