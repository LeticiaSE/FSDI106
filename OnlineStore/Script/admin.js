function register() {
    var code = $("#txtCode").val();
    var title = $("#txtTitle").val();
    var price = $("#txtPrice").val();
    var category = $("#txtCategory").val();
    var image = $("#txtImage").val();

    console.log(code, title, category, price, image);
}

function init() {
    // Hook events
    $("#btnSave").click(register);
    //load data
}


window.onload = init;