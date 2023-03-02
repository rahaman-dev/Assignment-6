let allDataUrl = `https://openapi.programming-hero.com/api/ai/tools`;
let loadAPI = () => {
  fetch(allDataUrl)
    .then((res) => res.json())
    .then((data) => getProduct(data.data));
};

let getProduct = (data) => {
  data.tools.forEach((element) => {
    // console.log(element.id);
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
    // let allIdUrl = `https://openapi.programming-hero.com/api/ai/tool/${element.id}`;
  });
};
loadAPI();

let loadAPIid = () => {
  let allIdUrl = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(allIdUrl)
    .then((res) => res.json())
    .then((id) => getProductWithId(id.data.tools));
};

let getProductWithId = (id) => {
  id.forEach((element) => {
    let allIdUrl = `https://openapi.programming-hero.com/api/ai/tool/${element.id}`;
    console.log(allIdUrl);
    // let crtDivForModal = document.createElement("div");
    // crtDivForModal.innerHTML = `
    // <h1>Rs Rahaman</h1>
    // `;
    // getModalContainer.appendChild(crtDivForModal);
  });
};

loadAPIid();
//   console.log(data.data.tools[0].image);
//   console.log(data.data.tools[0].name);
//   console.log(data.data.tools[0].features[0]);
//   console.log(data.data.tools[0].features[1]);
//   console.log(data.data.tools[0].published_in);
