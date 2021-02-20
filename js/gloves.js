let baseUrl = "https://cors-anywhere.herokuapp.com/https://bad-api-assignment.reaktor.com/v2/availability/"
let countOfBarndAvailablities = []
 fetch('https://cors-anywhere.herokuapp.com/https://bad-api-assignment.reaktor.com/v2/products/gloves')
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        json.map(b => {
                return countOfBarndAvailablities.push(b.id)
            })
        getData(json )
    }).catch(function(error) {
     console.log(error);
    })



function getData(jsonData) {
    if(jsonData.length > 0){
        let temp = "";
        for(let i = 0; i <jsonData.length; i++){
            temp += `
            <tr>
                <td>${jsonData[i].id}</td>
                <td>${jsonData[i].name}</td>
                <td>${jsonData[i].manufacturer}</td>
                <td>${jsonData[i].color}</td>
                <td>${jsonData[i].price}</td>
                <td>${jsonData[i].type}</td>
                <td >${countOfBarndAvailablities[i] === jsonData[i].id ?'In stock':null}</td>
                
            </tr>
            `
        }
        document.getElementById('data').innerHTML = temp;
    }
}


/*
function getStock(name)  {
        fetch(baseUrl + name)
            .then(response => response.json())
            .then(data => {
                return data
            })
            .catch(err => console.error(err));
}
*/
