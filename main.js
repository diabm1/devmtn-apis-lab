const btn = document.querySelector("button");
// console.log(btn)

function btnClicked() {
  //   console.log("button clicked!");
  axios
    .get("https://swapi.dev/api/planets/2")
    .then((res) => {
      for (let i in res.data.residents) {// data here represents property residents (which is an array) in planet object in array position 2
        //   console.log(res.data.residents[i]);
        axios.get(res.data.residents[i]).then((res) => { //accessing each alement of residents array response.data.name
          let h2 = document.createElement("h2");
          h2.textContent = res.data.name; 
          document.body.appendChild(h2);
        });
        // axios.get("https://swapi.dev/api/people/68/");
        // axios.get("https://swapi.dev/api/people/81/");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

btn.addEventListener("click", btnClicked);
