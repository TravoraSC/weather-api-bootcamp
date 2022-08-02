// Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit

function findWorldWeather() {
  let city = document.querySelector('.city').value
  let country = ',' + document.querySelector('.country').value
  let geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}${country}&limit=5&appid=1b8d291de17835c9292b5eb0ff61b21d`

  fetch(geoUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = `${data[0].name} ${data[0].country}`
      let lat = data[0].lat
      let lon = data[0].lon                                          
      let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1b8d291de17835c9292b5eb0ff61b21d&units=imperial`

      fetch(weatherUrl)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          document.querySelector('h3').innerText = `Temperature: ${data.main.temp} f ˚, Feels like: ${data.main.feels_like} f˚, Weather: ${data.weather[0].description}`       
        })
        .catch(err => {
          console.log(`error ${err}`)
        });
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

document.querySelector('button').addEventListener('click', findWorldWeather)


// Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit

// class FindWorldWeather {
//   constructor(city, country) {

//   this.city = document.querySelector('.city').value
//   this.country = ',' + document.querySelector('.country').value
//   this.geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}${country}&limit=5&appid=1b8d291de17835c9292b5eb0ff61b21d`
//   }
//   // console.log(city)
//   // console.log(country)

//   fetchFunction(){
//    fetch(this.geoUrl)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//       document.querySelector('h2').innerText = `${data[0].name} ${data[0].country}`
//       let lat = data[0].lat
//       let lon = data[0].lon                                          
//       this.weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1b8d291de17835c9292b5eb0ff61b21d&units=imperial`


//       fetch(weatherUrl)
//         .then(res => res.json())
//         .then(data => {
//           console.log(data)
//           document.querySelector('h3').innerText = `Temperature: ${data.main.temp} f ˚, Feels like: ${data.main.feels_like} f˚, Weather: ${data.weather[0].description}`       
//         })
//         .catch(err => {
//           console.log(`error ${err}`)
//         });
//     })
//     .catch(err => {
//       console.log(`error ${err}`)
//     }); 
//   }
  
// }
// let s = new FindWorldWeather()

// document.querySelector('button').addEventListener('click', s.fetchFunction)
// //cors error