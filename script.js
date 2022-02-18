const heder = document.querySelector("header")
// Get Container
const container = document.querySelector(".container");
// buttun select //
const createInput = document.createElement("input")
createInput.classList = "inpt"
createInput.type = "search"
createInput.placeholder = "search"
heder.append(createInput);
//label search//
const createLable = document.createElement("lable")
createLable.classList = "lable"
heder.append(createLable);

 const createButton = document.createElement("button");
 createButton.classList = "btn";
 createButton.innerHTML = "HOME"
 heder.append(createButton);


container.style.display = "grid";
container.style.grid = "auto-flow dense / 4fr 4fr 3fr";

const website = async () =>{
  try{
    const url = api();
    //create select//
    const createSelect = document.createElement("select");
    createSelect.classList = "select";
    heder.append(createSelect);

    for (let website1 of url) {
      //CREATE div CARTS
      const carts = document.createElement("div");
      carts.classList = "boxs";

      //CREATE h2
      const createH2 = document.createElement("h2");
      createH2.value = `S0${website1.season}E0${website1.number} - ${website1.name}`;
      createH2.innerHTML = `S0${website1.season}E0${website1.number} - ${website1.name}`;

      //CREATE IMAGE
      const createImg = document.createElement("img");
      createImg.classList = "img";
      createImg.src = website1.image.medium;

      //CREATE pTAGS
      const createP = document.createElement("p");
      createP.classList = "pTag";
      createP.innerHTML = website1.summary;

      //CREATE OPTION
      const createOption = document.createElement("option");
      createOption.innerHTML = `S0${website1.season}E0${website1.number} - ${website1.name}`;
      createOption.classList = "option";
      createSelect.append(createOption);

      //APPEND CONTAINER
      carts.append(createH2);
      carts.append(createImg);
      carts.append(createP);
      container.append(carts);
    }
  }
  catch(err){
    console.log(err);
  }
}
website()
 
//SEARCH
  const input = document.querySelector("input");
  input.addEventListener("keyup", () => {
    let input = document.querySelector(".inpt");
    input = input.value.toLowerCase();
    const carts = document.getElementsByClassName("boxs");
    let count = 0;
    for (let i = 0; i < carts.length; i++) {
      if (!carts[i].innerHTML.toLowerCase().includes(input)) {
        carts[i].style.display = "none";
      } else {
        carts[i].style.display = "block";
        count++;
      }
    }
    createLable.innerHTML = `${count} out of ${carts.length} words found`;
  });

      // SELECT
      const callSelect = document.querySelector(".select");

    callSelect.addEventListener("change", () => {
      const option = document.getElementsByClassName("option");
      const cart = document.getElementsByClassName("boxs");
      let selects1 = callSelect.options[callSelect.selectedIndex].value;
      for (let i = 0; i < callSelect.length; i++) {
        if (option[i].value === selects1) {
          cart[i].style.display = "block"
          container.style.display = "flex";
          container.style.flexWrap = "wrap"
          container.style.justifyContent = "center";
          
        } else {
          cart[i].style.display = "none"
        }
      }
    });

    //BUTTON
      const callButton = document.querySelector(".btn");

      callButton.addEventListener("click", () => {
        const option = document.getElementsByClassName("option");
        const cart = document.getElementsByClassName("boxs");
        for (let i = 0; i < cart.length; i++) {
            cart[i].style.display = "block";
        }
      });