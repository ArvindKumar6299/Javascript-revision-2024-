const uName = document.getElementById("userName");
const button = document.getElementById("button");

button.addEventListener("click" , ()=>{
    const value = uName.value;

    localStorage.setItem("name", value);
})