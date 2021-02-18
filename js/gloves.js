


fetch('https://cors-anywhere.herokuapp.com/https://bad-api-assignment.reaktor.com/v2/products/gloves')
        .then(function(response) {
        return response.json();
    }).then(function(json) {
        naytaVastaus(json);
    }).catch(function(error){
        console.log(error);
    });

function naytaVastaus(jsonData) {
    let htmlKoodi = ``;
    if(jsonData.length > 0){
        var temp = "";
        var temp1 = "";
        for(let i = 0; i <jsonData.length; i++){
            temp += "<tr>";
            temp += "<td>" + jsonData[i].name+ "</td>";
            temp += "<td>" + jsonData[i].manufacturer+ "</td>";
            temp += "<td>" + jsonData[i].color+ "</td>";
            temp += "<td>" + jsonData[i].price+ "</td>";
            temp += "<td>" + jsonData[i].type+ "</td></tr>";

            let newTemp = `
            <tr>
                <td>${jsonData[i].name}</td>
            </tr>
            `
        }
        document.getElementById('data').innerHTML = temp;
    }
}
