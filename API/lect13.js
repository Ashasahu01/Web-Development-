constURL = "https://cat-fact.herokuapp.com/facts";
constfactPara = document.querySelector("#fact");
const btn = document.querySelector("btn");


// -- --asunc await is better way
const getFacts = async() => {
    console.log("getting data....");
    let response = await fetch(URL);
    console.log(response); //JSON format -> not in readable format
    let data = await response.json(); //this func make it in readable format
    factPara.innerText = data[0].text; //random text from api
};

function getFacts() {
    fetch(URL).then((response) => {
            returnresponse.json();
        })
        .then((data) => {
            console.log(data);
            factPara.innerText = data[0].text; //same work as above but in different way but as compare to this code prev code is easier to understand
        });
}
btn.addEventListener("click", getFact);