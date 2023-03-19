const ContactUS = document.querySelector("#form");
const Contact = async (event) => {
  event.preventDefault();
  const Con = {
    email: ContactUS.email.value,
    subject:ContactUS.subject.value,
    description: ContactUS.description.value,
  };
  await fetch(" http://localhost:3000/Contact", {
    method: "POST",
    body: JSON.stringify(Con),
    headers: {
      "Content-Type": "application/json",
    },
  });
//   alert("thank you for commenting, <br> your Contact will help us to improve");
};

ContactUS.addEventListener("submit", Contact);