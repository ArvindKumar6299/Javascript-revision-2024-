const buttonstart = document.getElementById("button-start")
const buttonstop = document.getElementById("button-stop")
const buttonreset = document.getElementById("button-reset")
const realtime = document.getElementById("realtime")
const userinput = document.getElementById("userinput")

showTime = () =>{
    const currentTime = new Date();

    const time = `${currentTime.getHours()}hr: ${currentTime.getMinutes()}min: ${currentTime.getSeconds()}sec`;
   
    // console.log("time");
    realtime.innerText = time;
}

// showTime();

setInterval(showTime, 1000);


