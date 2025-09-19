const apiKey = "7d5e74e7b112e34001dc87b79a2fc7c3";
const searchIcon=document.querySelector('.search');
var temp=document.querySelector('.temp');
var cityName=document.querySelector('.cityName');
var humidity=document.querySelector('.humidity');
var speed=document.querySelector('.speed');


async function getWeather(){
    const city=document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data)

        temp.innerHTML=data.main.temp;
        humidity.innerHTML=data.main.humidity;
        speed.innerHTML=data.wind.speed + 'km/h';
        cityName.innerHTML=data.name;
        document.querySelector('.second').style.display='block';
        document.querySelector('.error').style.display='none';
    }


searchIcon.addEventListener('click',getWeather);


// let y="umesh";
// let x=y.toUpperCase()
// console.log(x)