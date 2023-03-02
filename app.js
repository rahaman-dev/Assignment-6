let loadAPI = () => {
  let allDataUrl = `https://openapi.programming-hero.com/api/ai/tools`;
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
//   console.log(id);
  id.forEach((element) => {
    let allIdUrl = `https://openapi.programming-hero.com/api/ai/tool/${element.id}`;
  });
  const [{ name, description, image, features }] = id;
  let getModalContainer = (document.getElementById("modalBody").innerHTML = `
  <div class="card" style="width: 30rem">
  <div class="card-body">
    <h5 class="card-title">${name} </h5>
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
      <h5>Features</h5>
      <ul>
        <li>Customizable responses</li>
        <li>Customizable responses</li>
        <li>Customizable responses</li>
      </ul>
    </div>
    <div class="ul ms-3">
      <h5>Integrations</h5>
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
        src="${image}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h2>Hi, how are you doing today?</h2>
        <p class="card-text text-center">
         ${description}
        </p>
      </div>
    </div>
    `);
  //   getModalContainer.appendChild(crtDivForModal);
};

loadAPIid();
