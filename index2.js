const button = document.getElementById("btn");
const box = document.getElementById("emptyresume");

button.addEventListener("click", function() {

  box.innerHTML = ""; 

  const myName = document.createElement("h2");
  myName.textContent = "Shagun Chaudhary";
  box.appendChild(myName);

  const myEdu = document.createElement("p");
  myEdu.textContent = "Education: B.Tech at ABESEC";
  box.appendChild(myEdu);

  const myCgpa = document.createElement("p");
  myCgpa.textContent = "CGPA: 8.52";
  box.appendChild(myCgpa);
  
  const myHobbies = document.createElement("p");
  myHobbies.textContent = "Hobbies: Coding, Reading, Sports";
  box.appendChild(myHobbies);

  const image = document.createElement("img");
  image.src = "C:\\Users\\ASUS\\OneDrive\\Documents\\profile pic.jpeg";
  box.appendChild(image);

});
