window.onload = function () {
  $(function () {
    if (window.location.protocol === "https:")
      window.location.protocol = "http";
  });
};
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const cityName = document.getElementById("cityName");
const temp_status = document.getElementById("temp_status");
const temp_real_value = document.getElementById("temp");
const datahide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = `please enter your city name before you have pressed button`;
    datahide.classList.add("data-hide");
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=3d31fd8058b3d7d702f8d25b0512877d`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
      temp_real_value.innerText = arrData[0].main.temp;
      const tempMood = arrData[0].weather[0].main;

      if (tempMood == "Clear") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color:#eccc68'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
      } else if (tempMood == "Rain") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-rain' style='color:#a4b0be'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-clouds' style='color:#f1f2f6'></i>";
      }
      datahide.classList.remove("data_hide");
      cityVal = "";
    } catch {
      cityVal = "";
      datahide.classList.add("data_hide");
      city_name.innerText = "please enter some proper city Name";
    }
  }
};

submitBtn.addEventListener("click", getInfo);
