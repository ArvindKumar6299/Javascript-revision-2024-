const head = document.getElementById("head");
const button = document.getElementById("search");
const input = document.getElementById("city");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");


// async function getData (cityName){
//     const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=eb89671187174ebb923170139242810&q=${cityName}&aqi=yes`);

//     return await data.json();
// }

getData = async(cityName) =>{
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=eb89671187174ebb923170139242810&q=${cityName}&aqi=yes`);

    return await data.json();
}

button.addEventListener("click", async ()=>{
    // console.log(input.value);   //.value ==> to get user input value
    
    const value = input.value;

    const result = await getData(value);

    console.log(result);
    

    cityName.innerText = `Exact Location: ${result.location.name},  ${result.location.region} - ${result.location.country}`;
    cityTime.innerText  = ` Date and Time : ${result.location.localtime}`;
    cityTemp.innerText  = result.current.temp_c;
})


head.style.color = "green";

// http://api.weatherapi.com/v1/current.json?key=eb89671187174ebb923170139242810&q=London&aqi=yes