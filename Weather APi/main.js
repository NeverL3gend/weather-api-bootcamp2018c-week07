document.querySelector('form').addEventListener('submit', weather)

function weather(e){
  e.preventDefault()
  let city = document.querySelector('#city').value
  let country = document.querySelector('#country').value
  console.log(city)
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=350120fbca5bc537acad6db04686e0bd&units=imperial`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
        console.log(response)
          document.querySelector('span').innerHTML = response.main.temp
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
}
