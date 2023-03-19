
let blogId = '';


const fetchData = async () => {
  const res = await fetch("http://localhost:3000/posts");

  const postData = await res.json();

  const blogAdd = document.querySelector("#container");

  let template = "";

  postData.forEach((element) => {
    template += `
          <article id="blog" class="blog">
          <img src="${element.image}" id="image" alt="">
          <h3>${element.title}</h3>
          <p>${element.description}</p>
  
          <button type="submit" onclick="openForm(${element.id})" id="modify" class="modify">Modify</button>
          
          <button type="submit" onclick='deleteblog(${element.id});' class="delete">Delete</button>
      </article>
          
          `;
  });

  blogAdd.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", fetchData);

const deleteblog = async (article_id) => {
  await fetch(`http://localhost:3000/posts/${article_id}`, {
    method: "DELETE",
  });
};


const formContainer = document.getElementById("formContainer");
const formInput = document.getElementById("formModify");

formContainer.style.display = 'none';

const openForm = async(article_id) => {
  const response = await fetch(`http://localhost:3000/posts/${article_id}`);
  const data = await response.json();

  formContainer.style.display = 'block';

  formInput.title.value = data.title;
  formInput.description.value = data.description;
  formInput.myFile.value = data.image;
  blogId = data.id
};


const update = async() => {
  const post = {
    title: formInput.title.value,
    description: formInput.description.value,
    image: formInput.myFile.value

  }
  const response = await fetch(`http://localhost:3000/posts/${blogId}}`,
  {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(post),

  }
 
  );
}

if (formInput != null){

  formInput.addEventListener("submit", (e) => {
    e.preventDefault();
    update();
})
}





    // function openForm() {
    //     document.getElementById("formModify").style.display = "block";
    // }


    // function closeForm() {
    //     document.getElementById("formContainer").style.display = "none";

    // }



// const modifyblog =  async (article_id) => {
//   await fetch(`http://localhost:3000/posts/${article_id}`, {
 
// getElementById:("modify") =

// addEventListener("click",contentEditable =true)}
// )};