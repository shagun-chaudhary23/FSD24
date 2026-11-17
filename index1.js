const container=document.getElementById('container');
const button=document.getElementById('btn');
const h1=document.createElement('h1');
const img=document.createElement('img');
console.log(h1);
h1.innerText="ABES Engineering College";
const loader=document.createElement('h2');
container.appendChild (loader)


function ping(){
    try{
        loader.innerHTML="<h2>Loading...</h2>";
        container.innerHTML="<h2 style='color:red'>Welcome to DOM</h2>";
        h1.style.backgroundColor="yellow";
        h1.style.color="blue";
        container.appendChild(h1);
        img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbA6fgJDHod91QLodmlGEW5vBV1bqmdfh0MxKYySfpBp3vjRYvWssETyU&s=10";
        img.setAttribute("height",200);
        img.setAttribute("width",200);
        container.appendChild(img);
    }catch(e){
        loader.innerHTML="<h2 style='color:red'>Error in Loading data</h2>";
    }finally{
        loader.innerHTML="";
    }
}
button.addEventListener('click', ping);
