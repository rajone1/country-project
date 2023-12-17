const loadcountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((resp) => resp.json())
    .then((data) => displaycountries(data))
    .catch((Error) => console.log(Error));
};

const displaycountries = (get) => {
  const setcountries = document.getElementById("all-countries");

  //   for (const country of get) {
  //     console.log(country);
  //   }

  get.forEach((country) => {
    // console.log(country.cca2);

    const setelement = document.createElement("div");
    setelement.classList.add("country");

    setelement.innerHTML = `
<h1>name: ${country.name.common} </h1>
<p
>capital: ${country.capital ? country.capital[0] : "dont have capital"}</p>


<button onclick="loadcountrydetails('${country.cca2}')">code</button> 

`;
    setcountries.appendChild(setelement);
  });

  //   country.innerHTML = get.name;
};

// const loadcountrydetails = (code) => {
//   //   console.log("datails");
//   const url = `https://restcountries.com/v3.1/alpha/${code}`;
//   fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => console.log(data[0]));
// };

//

const loadcountrydetails = (code) => {
  // https://restcountries.com/v3.1/alpha/{code}
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  // console.log(url)
  fetch(url)
    .then((res) => res.json())
    .then((data) => showCountryDetail(data[0]));
};

const showCountryDetail = (country) => {
  console.log(country);
  const detailContainer = document.getElementById("country-detail");
  detailContainer.innerHTML = `
         <h3>Name: ${country.name.common} </h3>
         <img src="${country.flags.png}">
     `;
};

loadcountries();
