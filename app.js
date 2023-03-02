let allDataUrl = `https://openapi.programming-hero.com/api/ai/tools`;
// let singleDataUrl = `https://openapi.programming-hero.com/api/ai/tool/01`;
let loadAPI = () => {
  fetch(allDataUrl)
    .then((res) => res.json())
    .then((data) => getProduct(data.data.tools));
};

let getProduct = (data) => {
  //   console.log(data.data.tools[0].image);
  //   console.log(data.data.tools[0].name);
  //   console.log(data.data.tools[0].features[0]);
  //   console.log(data.data.tools[0].features[1]);
  //   console.log(data.data.tools[0].published_in);
  data.forEach((element) => {
    // console.log(element);
    let getProductContainer = document.getElementById("productContainer");
    let crtDiv = document.createElement("div");
    crtDiv.innerHTML = `
    <div class="card m-5">
    <img
      src="${element.image}"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h4 class="card-title">Features</h4>
      <ol class="">
        <li class=" ">${element.features[0]}</li>
        <li class="">${element.features[2]}</li>
        <li class="">${element.features[3]}</li>
      </ol>
      <div class="cardFooter">
      <h4 class="card-title">${element.name}</h4>
        <div class="date d-flex align-items-center justify-content-between">
          <div class="img d-flex">
            <img
              src="./img/dateIMg.png"
              class="me-2"
              alt=""
              width="25px"
              height="25px"
            />
            <p>${element.published_in}</p>
          </div>
          <i
            class="fa-solid fa-arrow-right"
            data-bs-target="#exampleModalToggle"
            data-bs-toggle="modal"
          ></i>
        </div>
      </div>
    </div>
  </div>
</div>
    `;
    getProductContainer.appendChild(crtDiv);
  });
};

let allIdUrl = `https://openapi.programming-hero.com/api/ai/tool/01`;
let loadAPIid = () => {
  fetch(allIdUrl)
    .then((res) => res.json())
    .then((data) => getId(data));
};

let getId = (data) => {
  data.forEach((elm) => {
    let getModalContainer = document.getElementById("divModal");
    let crtDivForModal = document.createElement("div");
    crtDivForModal.innerHTML = `
        <div class="modal-body d-flex justify-content-around">
          <div class="card" style="width: 30rem">
            <div class="card-body">
              <h5 class="card-title">
                ChatGPT is an AI-powered chatbot platform that uses OpenAI's
                GPT technology to simulate human conversation.
              </h5>
            </div>
            <div class="d-flex">
              <div class="card m-5 bg-danger text-primary">
                <div class="card-body">
                  <h5>$10/month Basic</h5>
                </div>
              </div>
              <div class="card m-5 bg-danger-subtle text-success">
                <div class="card-body">
                  <h5>$10/month Basic</h5>
                </div>
              </div>
              <div class="card m-5 bg-warning-subtle text-danger">
                <div class="card-body">
                  <h5>$10/month Basic</h5>
                </div>
              </div>
            </div>
            <div class="d-flex">
              <div class="ul ms-3">
                <h5>Integrations</h5>
                <ul>
                  <li>Customizable responses</li>
                  <li>Customizable responses</li>
                  <li>Customizable responses</li>
                </ul>
              </div>
              <div class="ul ms-3">
                <h5>Features</h5>
                <ul>
                  <li>Customizable responses</li>
                  <li>Customizable responses</li>
                  <li>Customizable responses</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card" style="width: 30rem">
            <img
              src="./img/chatgpt_assistente 1-2.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h2>Hi, how are you doing today?</h2>
              <p class="card-text text-center">
                Some quick example text to build on the card title and make
                up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
    getModalContainer.appendChild(crtDivForModal);
  });
};

loadAPIid();
loadAPI();
