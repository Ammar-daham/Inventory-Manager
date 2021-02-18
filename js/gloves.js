


let obj1 = fetch('https://cors-anywhere.herokuapp.com/https://bad-api-assignment.reaktor.com/v2/products/gloves')
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

let obj2 = fetch('https://cors-anywhere.herokuapp.com/https://bad-api-assignment.reaktor.com/v2/availability/ippal')
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);
    }).catch(function(error){
        console.log(error);
    });
/*
var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) {
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("is object equal"+flag);
*/
