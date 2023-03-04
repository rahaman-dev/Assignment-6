const loadData = (card) => {
  fetch(`https://openapi.programming-hero.com/api/ai/${card}`)
    .then((res) => res.json())
    .then((data) => displayData(data.data.tools.slice(0, 6)));
};
// display ai universe hub

const displayData = (data) => {
  // console.log(data)
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerText = "";
  data.forEach((element) => {
    // console.log(element)
    const { image, name, id, features } = element;
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
          <div class="card">
              <img src="${image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Features</h5>
                <ul style="list-style:none;">
                  <li>1 ${features[0]}</li>
                  <li>2 ${features[1]}</li>
                  <li>3 ${features[2]}</li>
                </ul>
               
              
              <div class="card-footer d-flex justify-content-between align-items-center">
                 <div>
                    <h4>${name}</h4>
                    <p id="list">${element.published_in}</p>
                 </div>
               <div onclick="modal_section('${id}')" type="button" class="text-end" data-bs-toggle="modal" data-bs-target="#detailsUniverse">
               <i class="fa-solid  fa-arrow-right"></i>
                </div>
              </div>
              </div>
            </div>
    `;
    cardContainer.appendChild(div);
  });
};

const modal_section = (id) => {
  fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then((res) => res.json())
    .then((data) => showModelDetails(data.data));
};

const showModelDetails = (data) => {
  const { pricing } = data;
  // first container
  const modelfirst = document.getElementById("model-first");
  modelfirst.innerHTML = `
    <h4>${data.description}</h4>
    <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card">
         <p>${pricing ? data.pricing[0].price : "free of /cost"}</p> <br >
         <p>${data.pricing[0].plan}</p>
      </div>
    </div>
    <div class="col">
      <div class="card">
      <p>${pricing ? data.pricing[1].price : "free of /cost"}</p> <br >
      <p>${data.pricing[1].plan}</p>
      </div>
    </div>
    <div class="col">
      <div class="card">
      <p>${pricing ? data.pricing[2].price : "free of /cost"}</p> <br >
      <p>${data.pricing[2].plan}</p>
      </div>
    </div>
    
  </div>

  <div class="d-flex justify-content-between">
    <div>
      <h1>Features</h1>
      <ul>
        <li>${data.features[1].feature_name} </li>
        <li>${data.features[2].feature_name} </li>
        <li>${data.features[3].feature_name} </li>
      </ul>
    </div>
    <div>
    <h1>Integrations</h1>
    <ul>
    <li>${data.integrations[0]} </li>
    <li>${data.integrations[1]} </li>
    <li>${data.integrations[2]} </li>
  </ul>
    </div>
  </div>
  `;
  const modelsecond = document.getElementById("model-second");
  modelsecond.innerHTML = `
  <div class="text-end">
  <button class="  btn btn-danger">${data.accuracy.score}% accuracy</button>
  </div>
  <img class="img-fluid" src="${data.image_link[0]}" alt="">
  <h1>${data.input_output_examples[0].input}</h1>
  <p>${data.input_output_examples[0].output}</p>
  `;
};

loadData("tools");
