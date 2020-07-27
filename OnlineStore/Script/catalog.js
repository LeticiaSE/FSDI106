var catalog = [];

function fetchData() {
    $.ajax({
      url: 'http://restclass.azurewebsites.net/api/points',
      type: 'GET',
      success: function(allItems){
        //travel allItems
        //check if the item belog to me
        //if also push to catalog array
        for (let i = 0; i < allItems.length; i++) {
            var item = allItems[i];
            if (item.user === "Lety") {
                catalog.push(item);
            }
            
        }

        displayCatalog();
      },
      error: function(details){
          console.error("Error getting data", details);
      }
    });
        //will do any instruction form here
        console.log("below be ajax");
}


function displayCatalog() {
    //travel the array of items
    //get each item
    //display the ite on HTML

    for (let i = 0; i < catalog.length; i++) {
        var item = catalog[i];

        //display on html
        var sintax = 
        `<div class="item">
            <img src="${item.image}">
            <div class="info">
                <label class="code">${item.code}</label>
                <label class="title">${item.title}</label>
                <label class="price">$ ${item.price}</label>

                <button class="btn btn-info btn sm"> Add </button>
            </div>
        </div>`;


        $('#catalog-container').append(sintax);
        
    }
    
}

function init(){
    console.log("Catalog Working..!!");

    fetchData();
    displayCatalog();
}


window.onload = init;


/*
    code
    title
    price
    imgUrl
    quantity
    category
*/
