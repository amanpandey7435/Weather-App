let para1 = document.querySelector(".Temperature");
let para2 = document.querySelector(".feelsLike");
let btn = document.querySelector(".btn");
let inp = document.querySelector(".inp input");

async function getUpdates(city) {
  let result = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=75e9d2652e44ac8c353d1892d8078318&units=metric`
  );
  return result.data;
}

btn.addEventListener("click", async () => {
  try {
    let city = inp.value.trim();
    if (city === "") {
      alert("Please enter a city name");
      return;
    }

    let res = await getUpdates(city);

    para1.innerText = `Temperature: ${res.main.temp} °C`;
    para2.innerText = `Feels Like: ${res.main.feels_like} °C`;

  } catch (err) {
    alert("City not found ❌");
    console.error(err);
  }
});
