const root = document.getElementById("container");
const button = document.getElementById("btn");
const div=document.createElement("div");
const h2 = document.createElement("h2");
const img = document.createElement("img"); 

function showData() {
    try{
    h2.innerText = "Welcome to DOM";
    h2.style.color = "blue";
    h2.style.backgroundColor = "pink";
    root.appendChild(h2);

    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtmz9yz7SBuEYDWi_kXjrbMbGUoc2d6wbbfWf4XxANOVX2oFD6RVAYWlf&s=10'; 
    img.setAttribute('height', '200px');
    img.setAttribute('width', '200px');
    root.appendChild(img);
    }
    catch(e){
        console.log("Error", e);
    }
    finally{
        console.log("Execution completed");
        document.body.removeChild(button);
    }
}

button.addEventListener("click", showData);