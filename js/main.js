document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const carName = document.querySelector("#name").value;
  const res = await fetch(`/api?car=${carName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#carName").textContent = data.name
  document.querySelector("#mpg").textContent = data.mpg
  document.querySelector("#msrp").textContent = data.msrp
}