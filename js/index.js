// const likes = document.querySelector("#like");
// const addlike = async (event) => {
//   event.preventDefault();
//   const doc = {
//     like: likes.saveLike.value,
//   };
//   await fetch(" http://localhost:3000/likes", {
//     method: "POST",
//     body: JSON.stringify(doc),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   console.log("like added successful");
// };

let likes = document.getElementById('no_likes')

async function renderArticle() {
    let res = await fetch(`http://localhost:3000/blogs/id/${article_id}`)
    article = await res.json()

    likes.innerText = article.likes

    
window.addEventListener('DOMContentLoaded', renderArticle)


let refresh_likes = async () => {
    likes.innerHTML = `<p class="no_likes" id="no_likes">${article.likes}</p>`
}

let like_icon = document.getElementById("like_icon");
let likes_div = document.getElementById("likes_div");

like_icon.addEventListener("click", (e) => {
  e.preventDefault();
  if (localStorage.getItem("user") === null) {
    popup_container.style.visibility = "visible";
  } else {
    let liked = document.createElement("i");
    liked.innerHTML = '<i class="fa-solid fa-heart"></i>';
    likes_div.replaceChild(liked, like_icon);

    article.likes += 1;
    fetch(`http://localhost:3000/post/id/${article_id}`, {
      method: "PATCH",
      body: JSON.stringify({ likes: article.likes }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => (likes.innerText = article.likes));
  }
})
}
likes.addEventListener('like', renderArticle);
