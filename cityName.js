
async function getCity(city) {
      let webPage = await fetch("https://geocode.xyz/"+ city +"?json=1");
      let jsonObject = await webPage.json();
      console.log(city + ": ");
      console.log("Longitude: " + jsonObject.longt);
      console.log("Latitude: " + jsonObject.latt);
}

getCity('Orlando');
getCity('Charlotte');

    
  
  