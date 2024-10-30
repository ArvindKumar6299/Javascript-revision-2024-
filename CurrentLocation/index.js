const button = document.getElementById("button");



getData = async(lat,log) =>{
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=eb89671187174ebb923170139242810&q=${lat,log}&aqi=yes`);

    return await data.json();
}

async function getLocation(position){

    const result = await getData(position.coords.latitude, position.coords.longitude);
    console.log(result);
}
function failedToGet(){
    console.log('there was some issue');
}

button.addEventListener("click" , async ()=>{
  

    const result = navigator.geolocation.getCurrentPosition();
})