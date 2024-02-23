  const skills = ["HTML", "CSS", "JS", "React", "Nest-JS", "Next-JS"];
  let form = document.getElementById('form');
   form.addEventListener('submit',(e) => {
      e.preventDefault();


    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let messageInput = document.getElementById('message');

    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";


    alert("form has been submitted sucessfully");
});


  function showSkills() {
  
    let skillContainer = document.getElementById("skillsList");
    skills.forEach(skill => {
      let li = document.createElement("li");
      li.textContent = skill;
      skillContainer.appendChild(li);
    });
  
  }
  
  showSkills();
  

  