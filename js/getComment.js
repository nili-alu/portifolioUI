
const fetchData = async () => {
    const res = await fetch("http://localhost:3000/comment");
    const response = await fetch("http://localhost:3000/posts");
  
    const postData = await res.json();
  
    const comment = document.querySelector("#tableValue");
  
    let template = "";
  
    postData.forEach((element) => {   
      template += `
 
    <tr>
      <td>${element.id}</td>
      <td>${element.email}</td>
      <td>${element.description}</td>
      <td>20</td>
      <td>
          <button id="reply"><i class="fa fa-reply"></i>Reply</button>
          <button onClick="deleteComment(${element.id})" id="delete"><i class='fa fa-trash'></i>Delete</button>
       </td>
    </tr>    
   
          `;
    });
  
    comment.innerHTML =template;
  };
  
  window.addEventListener('DOMContentLoaded', fetchData);
  
  const deleteComment = async (comment_id) => {
      await fetch(`http://localhost:3000/comment/${comment_id}`, {
          method: "DELETE",
  
      });
  }
  