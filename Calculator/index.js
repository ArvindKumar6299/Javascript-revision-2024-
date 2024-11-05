const button = document.getElementsByClassName("buttons")
const inputField = document.getElementById("input-number")
const result = document.getElementById("result")
const clear = document.getElementById("clear")

handleClickButton = (el)=>{
    const key = el.innerText;
//    console.log(el.innerText);
const exp = `${inputField.value}${el.innerText}`
// const expression = inputField.value + key;
//   inputField.value = inputField.value+key;
  inputField.value = exp;
//    if(['*', '+','/','-'].includes(el.innerText))
  result.value = eval(exp)   //solving expression
}

// function reset(){
//     inputField.value = '';
//     result.value = "";
// }

// clear.addEventListener('click',()=>{
//     inputField.value = '';
//     result.value = "";
// })


empty = ()=>{
    inputField.value = '';
    result.value = "";
}