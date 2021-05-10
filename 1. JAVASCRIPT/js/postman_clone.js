console.log("postman clone by itvmh");

// initialize a variable for adding params
let addedParamsCount = 0;
// hide the parameter initially
let parametersBox = document.getElementById("parametersBox");
parametersBox.style.display = "none";

// if click on param box
let paramsRadio = document.getElementById("paramsRadio");
paramsRadio.addEventListener("click", () => {
  document.getElementById("requestJsonBox").style.display = "none";
  document.getElementById("parametersBox").style.display = "block";
});

// if click on json box
let jsonRadio = document.getElementById("jsonRadio");
jsonRadio.addEventListener("click", () => {
  document.getElementById("requestJsonBox").style.display = "block";
  document.getElementById("parametersBox").style.display = "none";
});

// if the user click on + button
let addParam = document.getElementById("addParam");
addParam.addEventListener("click", () => {
  let params = document.getElementById("params");
  let string = `<div class="form-row">
          <label for="url" class="col-sm-2 col-form-label">Parameter ${
            addedParamsCount + 2
          }</label>
          <div class="col-md-4">
            <input
              type="text"
              class="form-control"
              id="parameterKey${addedParamsCount + 2}"
              placeholder="Enter Parameter ${addedParamsCount + 2} Key"
            />
          </div>
          <div class="col-md-4">
            <input
              type="text"
              class="form-control"
              id="parameterValue${addedParamsCount + 2}"
              placeholder="Enter Parameter ${addedParamsCount + 2} Value"
            />
          </div>
          <button class="btn btn-primary deleteParams">-</button>
        </div>`;
  let paramElement = getElementFromString(string);
  //   console.log(paramElement);
  addedParamsCount++;
  params.appendChild(paramElement);
  //   add an event to remove the paramElement on click - button
  let deleteParams = document.getElementsByClassName("deleteParams");
  for (let item of deleteParams) {
    item.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  }
});

function getElementFromString(string) {
  let div = document.createElement("div");
  div.innerHTML = string;
  return div.firstElementChild;
}

// if user click on submit button
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  //   document.getElementById("responseJsonText").value =
  //     "please hold on some time your response will be fetched from server";
  document.getElementById("responsePrism").innerHTML =
    "please hold on some time your response will be fetched from server";

  let url = document.getElementById("url").value;
  let requestType = document.querySelector("input[name='requestType']:checked ")
    .value;
  let contentType = document.querySelector("input[name='contentType']:checked ")
    .value;

  console.log(url);
  console.log(requestType);
  console.log(contentType);

  //   if user has used params option instead of json collect all data id the parameter in an object
  if (contentType == "params") {
    let data = {};
    for (let i = 0; i < addedParamsCount + 1; i++) {
      if (document.getElementById("parameterKey" + (i + 1)) != undefined) {
        let key = document.getElementById("parameterKey" + (i + 1)).value;
        let Value = document.getElementById("parameterValue" + (i + 1)).value;
        data[key] = Value;
      }
      data = JSON.stringify(data);
      console.log(data);
    }
  } else {
    let data = document.getElementById("requestJsonText").value;
    console.log(data);
  }

  if (requestType == "GET") {
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.text())
      .then((text) => {
        // document.getElementById("responseJsonText").value = text;
        document.getElementById("responsePrism").innerHTML = text;
      });
  } else {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.text())
      .then((text) => {
        // document.getElementById("responseJsonText").value = text;
        document.getElementById("responsePrism").innerHTML = text;
      });
  }
});
