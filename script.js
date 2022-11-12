const api_url = "https://dev-api-qgbqlzpekq-et.a.run.app/"
async function increment(url) {
  const response = await fetch(url)
  let data = await response.json()
  console.log(data)
  update_counter(data)
}

function update_counter(data){
  console.log(data.counter)
  console.log(data.counter.count)
  let counter  = "You are the " + data.counter.count + "th Visitor"
  var theDiv = document.getElementById("visitor-counter")
  // let text = document.createTextNode(counter)
  // theDiv.appendChild(text)
  var paa = document.createElement('h2');
  paa.textContent=counter;
  paa.id='visitor';
  theDiv.appendChild(paa);
}


increment(api_url)
