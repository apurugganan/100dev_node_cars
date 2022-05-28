document.querySelector('#clickMe').addEventListener('click', makeReq)


async function makeReq(){
  const results = document.getElementById('result')
  results.innerHTML = ''
  const carName = document.querySelector("#name").value.toLowerCase().trim();
  const res = await fetch(`/api?car=${carName}`)
  const data = await res.json()

  console.log(data);

  data.forEach(car =>{  
    let div = document.createElement('div')
    let name = document.createElement('h2')
    let miles = document.createElement('h3')
    let price = document.createElement('h4')
    results.appendChild(div)
    div.appendChild(name).innerText = car.name
    div.appendChild(miles).innerText = car.mpg
    div.appendChild(price).innerText = `MSRP: ${car.msrp}`
  })
  // document.querySelector("#carName").textContent = data.name
  // document.querySelector("#mpg").textContent = data.mpg
  // document.querySelector("#msrp").textContent = data.msrp
}