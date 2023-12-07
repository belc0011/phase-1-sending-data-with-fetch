/*const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/JSON",
        "Accept": "application/JSON",
    },
    body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle",
    })
}
fetch('http://localhost:3000/dogs', configurationObject)
.then(res => res.json())
.then(data => console.log(data));*/


function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com",
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const id = data.id;
        console.log(id);
        const divElement = document.createElement("div");
        divElement.innerHTML = "new element"
        divElement.setAttribute('id', 'userid');
        document.body.appendChild(divElement);
        const userID = document.createElement("p");
        userID.innerHTML = id;
        divElement.appendChild(userID);
    })
    .catch(error => {
        alert("Unauthorized Access");
        const message = error.message;
        const errorElement = document.createElement("p");
        errorElement.innerHTML = "Unauthorized Access"
        document.querySelector("#userid").appendChild(errorElement);
    })
    
    
}
submitData("steve", "steve@steve.com");
