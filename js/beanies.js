fetch('https://cors-anywhere.herokuapp.com/https://bad-api-assignment.reaktor.com/v2/products/beanies')
    .then(function(response) {
        return response.json();
    }).then(function(json) {
    getData(json);
}).catch(function(error){
    console.log(error);
});

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
            </tr>
            `
        }
        document.getElementById('data').innerHTML = temp;
    }
}
