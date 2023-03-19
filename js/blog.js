// const addBlog = async () => {
//   const title = document.querySelector("#title");
//   const desc = document.querySelector("#description");
//   const image = document.querySelector("#myFile");

//   const res = await fetch("http://localhost:3000/posts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       title,
//       desc,
//       image,
//     }),
//   });

//   document.querySelector("#title").value = "";
//   document.querySelector("#description").value = "";
//   document.querySelector("#myFile").value = "";

//   alert("blod has been successful added");
// };

const form = document.querySelector("#form");
const addBlog = async (event) => {
  event.preventDefault();
  const doc = {
    title: form.title.value,
    description: form.description.value,
    image: form.myFile.value,
  };
  await fetch(" http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify(doc),
    headers: {
      "Content-Type": "application/json",
    },
  });
  alert("blog added successful");
};

form.addEventListener("submit", addBlog);
