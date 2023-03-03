let loadAPI = () => {
  let allDataUrl = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(allDataUrl)
    .then((res) => res.json())
    .then((data) => displayProduct(data.data.tools));
  toggleSpinier(false);
};
let displayProduct = (data) => {
  // let arr = [data];
  data = data.slice(0, 6);
  let showMoreButton = document.getElementById("showMoreButton");
  // showMoreButton.removeClassList("d-none");
  data.forEach((element) => {
    console.log(element.id);
    let getProductContainer = document.getElementById("productContainer");
    // data = arr.slice(0, 5);
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
    loadWithId(element.id);
  });
};

let displayAllData = (data) => {
  data = data.slice(6, 12);
  data.forEach((element) => {
    console.log(element.id);
    let getProductContainer = document.getElementById("productContainer");
    // data = arr.slice(0, 5);
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
    loadWithId(element.id);
  });
};

let loadWithId = (id) => {
  fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then((res) => res.json())
    .then((data) => displayWithId(data));
};

let displayWithId = (data) => {
  console.log(data);
  let getModalContainer = document.getElementById("modalBody");
  getModalContainer.innerHTML = `
          <div class="card ms-5" style="width: 35rem">
            <div class="card-body">
              <h5 class="card-title">${data.data.tool_name}</h5>
            </div>
            <div class="d-flex">
              <div class="card m-2 bg-danger text-primary">
                <div class="card-body">
                  <h5>${
                    data.data.pricing[0].plan
                      ? data.data.pricing[0].plan
                      : "not Available"
                  }</h5>
                  <h5>${
                    data.data.pricing[0].price
                      ? data.data.pricing[0].price
                      : "not Available"
                  }</h5>
                </div>
              </div>
              <div class="card m-2 bg-danger-subtle text-success">
                <div class="card-body">
                <h5>${data.data.pricing[1].plan}</h5>
                <h5>${data.data.pricing[1].price}</h5>
                </div>
              </div>
              <div class="card m-2 bg-warning-subtle text-danger">
                <div class="card-body">
                <h5>${data.data.pricing[2].plan}</h5>
                <h5>${data.data.pricing[2].price}</h5>
                </div>
              </div>
            </div>
            <div class="d-flex">
              <div class="ul ms-3">
                <h5>Features</h5>
                <ul>
                  <li> ${data.data.features["1"].feature_name}</li>
                  <li> ${data.data.features["2"].feature_name}</li>
                  <li> ${data.data.features["3"].feature_name}</li>
                </ul>
              </div>
              <div class="ul ms-3">
                <h5>Integrations</h5>
                <ul>
                  <li> ${data.data.integrations[0]}</li>
                  <li>  ${data.data.integrations[1]}</li>
                  <li> ${data.data.integrations[2]}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card ms-5" style="width: 30rem">
            <img src="${data.data.image_link}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h2 class="text-sm">${
                data.data.input_output_examples[0].output
              }</h2>
              <p class="card-text text-center">${
                data.data.input_output_examples[0].input
              }</p>
            </div>
          </div>
            `;
};

// show all data
let loadAllData = () => {
  let allDataUrl = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(allDataUrl)
    .then((res) => res.json())
    .then((data) => displayAllData(data.data.tools));
  toggleSpinier(false);
};
// show more button
document.getElementById("seeMoreBtn").addEventListener("click", function () {
  loadAllData();
  let seeMoreBtn = document.getElementById("seeMoreBtn");
  seeMoreBtn.classList.add("d-none");
});

// spiner
let toggleSpinier = (isLodging) => {
  let getLoader = document.getElementById("loader");
  if (isLodging) {
    getLoader.classList.remove("d-none");
  } else {
    getLoader.classList.add("d-none");
  }
};
loadAPI();
// let loadAPIid = () => {
//   let allIdUrl = `https://openapi.programming-hero.com/api/ai/tools`;
//   fetch(allIdUrl)
//     .then((res) => res.json())
//     .then((id) => getProductWithId(id.data.tools));
// };

// let getProductWithId = (id) => {
//   id.forEach((element) => {
//     // let getAllIdUrl = ;
//     fetch(`https://openapi.programming-hero.com/api/ai/tool/${element.id}`)
//       .then((res) => res.json())
//       .then((data) => getInformationOnModal(data));
//   });

//   let getInformationOnModal = (data) => {
//     // console.log(data);
//     // console.log(data.data.tool_name);
//     // console.log(data.data.accuracy.description);
//     let getModalContainer = document.getElementById("modalBody");
//     // let convertOjbInToArray = Object.entries(data);
//     // console.log(convertOjbInToArray);
//     // convertOjbInToArray.forEach((data) => {
//     // console.log(elm);
//     getModalContainer.innerHTML = `
//         <div class="card ms-5" style="width: 35rem">
//           <div class="card-body">
//             <h5 class="card-title">{elm.tool_name}</h5>
//           </div>
//           <div class="d-flex">
//             <div class="card m-2 bg-danger text-primary">
//               <div class="card-body">
//                 <h5>$10/month Basic</h5>
//               </div>
//             </div>
//             <div class="card m-2 bg-danger-subtle text-success">
//               <div class="card-body">
//                 <h5>$10/month Basic</h5>
//               </div>
//             </div>
//             <div class="card m-2 bg-warning-subtle text-danger">
//               <div class="card-body">
//                 <h5>$10/month Basic</h5>
//               </div>
//             </div>
//           </div>
//           <div class="d-flex">
//             <div class="ul ms-3">
//               <h5>Features</h5>
//               <ul>
//                 <li> </li>
//                 <li> </li>
//                 <li> }</li>
//               </ul>
//             </div>
//             <div class="ul ms-3">
//               <h5>Integrations</h5>
//               <ul>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div class="card ms-5" style="width: 30rem">
//           <img src=" " class="card-img-top" alt="..." />
//           <div class="card-body">
//             <h2> </h2>
//             <p class="card-text text-center">$ </p>
//           </div>
//         </div>
//           `;
//     //   getModalContainer.appendChild(crtDivForModal);
//     // });
//   };
// };
// loadAPIid();
