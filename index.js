// function cardHandeler(data){
//     const itemName = data.parentNode.childNodes[1].childNodes[3].childNodes[3].innerText;
//     const ol = document.createElement("ol");
//     ol.innerText = itemName;
//     document.getElementById("selected-items").append(ol);
    
//     const selectedItemsList = document.getElementById("selected-items");
//     const olList = Array.from(selectedItemsList.getElementsByTagName("ol"));
//     const listNumber = olList.indexOf(ol) + 1;
//     console.log(listNumber, ol);
//     for (var i = 1; i <= 5; i++) {
//         var li = document.createElement("li");
//         li.textContent = "Item " + i;
//         ol.appendChild(li);
//     }
//     div.appendChild(ol);
// }
// function cardHandeler(data) {
//     const itemName = data.parentNode.childNodes[1].childNodes[3].childNodes[3].innerText;
//     const ol = document.createElement("ol");
//     const li = document.createElement("li");
//     li.textContent = itemName;
//     ol.appendChild(li);
    
//     const selectedItemsList = document.getElementById("selected-items");
//     selectedItemsList.appendChild(ol);
    
//     const olList = Array.from(selectedItemsList.getElementsByTagName("ol"));
//     const listNumber = olList.indexOf(ol) + 1;
//     console.log(listNumber, ol);
// }

// function cardHandeler(data) {
//     const itemName = data.parentNode.querySelector(".card-title").textContent;
    
//     const ol = document.createElement("ol");
//     const li = document.createElement("li");
//     li.textContent = `${itemName} (${olList.length + 1})`; // Include list number in item text
//     ol.appendChild(li);

//     const selectedItemsList = document.getElementById("selected-items");
//     selectedItemsList.appendChild(ol);

//     const olList = Array.from(selectedItemsList.getElementsByTagName("ol"));
    
//     console.log("List Number:", olList.length, "OL Element:", ol);
// }



// function cardHandeler(data) {
//     const itemName = data.parentNode.querySelector(".card-title").textContent;
    
//     const ol = document.createElement("ol");
//     const li = document.createElement("li");
//     li.textContent = itemName;
//     ol.appendChild(li);

//     const selectedItemsList = document.getElementById("selected-items");
//     selectedItemsList.appendChild(ol);

//     const olList = Array.from(selectedItemsList.getElementsByTagName("ol"));
    
//     const listNumber = olList.length;

//     const resultDiv = document.createElement("div");
//     resultDiv.textContent = `List Number: ${listNumber}, Item Name: ${itemName}`;
//     selectedItemsList.appendChild(resultDiv);
// }


// function cardHandeler(data) {
//     const itemName = data.parentNode.querySelector(".card-title").textContent;
    
//     const selectedItemsList = document.getElementById("selected-items");
//     const li = document.createElement("li");
//     li.textContent = `${selectedItemsList.children.length + 1}. ${itemName}`;
//     selectedItemsList.appendChild(li);
// }

// function cardHandeler(data) {
//     const itemName = data.parentNode.querySelector(".card-title").textContent;

//     const selectedItemsList = document.getElementById("selected-items");
//     const li = document.createElement("li");
//     li.textContent = `${selectedItemsList.children.length + 1} ${itemName}`;
//     selectedItemsList.appendChild(li);
// }


let serialNumber = 1;

function cardHandeler(data) {
    const itemName = data.parentNode.querySelector(".card-title").textContent;

    const selectedItemsList = document.querySelector(".selected-list");
    const li = document.createElement("li");
    li.textContent = `${serialNumber}. ${itemName}`;
    selectedItemsList.appendChild(li);
    
    serialNumber++;
    
}





