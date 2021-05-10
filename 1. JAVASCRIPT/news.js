console.log("This is my index js file");
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

// xhr.open(
//   "GET",
//   "https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw"
// );
// xhr.setRequestHeader("x-bingapis-sdk", "true");
// xhr.setRequestHeader(
//   "x-rapidapi-key",
//   "8ab159e8a8msh1f20374cc7aeb0bp1d4ddajsnf9fb0fba56bd"
// );
// xhr.setRequestHeader("x-rapidapi-host", "bing-news-search1.p.rapidapi.com");

xhr.open(
  "GET",
  "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null"
);
xhr.setRequestHeader(
  "x-rapidapi-key",
  "8ab159e8a8msh1f20374cc7aeb0bp1d4ddajsnf9fb0fba56bd"
);
xhr.setRequestHeader(
  "x-rapidapi-host",
  "contextualwebsearch-websearch-v1.p.rapidapi.com"
);
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let value = json.value;
    console.log(value);
    let newsHtml = "";
    value.forEach(function (element, index) {
      // console.log(element, index)
      let news = `<div class="card">
                              <div class="card-header" id="heading${index}">
                                  <h2 class="mb-0">
                                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                      aria-expanded="false" aria-controls="collapse${index}">
                                     <b>Breaking News ${index + 1}:</b> ${
        element["title"]
      }
                                  </button>
                                  </h2>
                              </div>

                              <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                  <div class="card-body"> ${
                                    element["description"]
                                  }. <a href="${
        element["link"]
      }" target="_blank" >Read more here</a>  </div>
                              </div>
                          </div>`;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
};

xhr.send(data);
