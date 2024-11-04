let currentPlayer = "X";
let array = Array(9).fill(null);

checkWinner = () =>{
  if(
    (array[0]!== null && array[1] == array[2] && array[2] == array[3]) ||
    (array[4]!== null && array[4] == array[5] && array[5] == array[6]) ||
    (array[7]!== null && array[7] == array[8] && array[8] == array[9]) ||
    (array[1]!== null && array[1] == array[4] && array[4] == array[7]) ||
    (array[2]!== null && array[2] == array[5] && array[5] == array[8]) ||
    (array[3]!== null && array[3] == array[6] && array[6] == array[9]) ||
    (array[1]!== null && array[1] == array[5] && array[5] == array[9]) ||
    (array[3]!== null && array[3] == array[5] && array[5] == array[7])
  ){
    // console.log(currentPlayer ," is [Winner]")
    document.write(` ${currentPlayer} is Winner!`)
  }
   
  //logic for draw
  if(!array.find((e) => e === null)){
    document.write(`Draw!!`);
  }
}

handleClick = (el)=>{
  const id = Number(el.id);
  if (array[id] !== null) return;  //to avoid rewrite
  array[id] = currentPlayer;
  // console.log(array[id]);
  el.innerText = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === 'X'? "0":"X";
  //agar current player X hai to use wapas se 0 kr do and 0 hai toh X kr do
  // console.log(array);

}

//now to check after every move