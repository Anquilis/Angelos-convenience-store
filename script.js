var photo = [];
var itemName = [];
var itemPrice = [];    
var total = 0;
$("#add").click(function(){
    var item = $("#name").val();
    var price = $("#price").val();
    var photoUrl = $("#picture").val();
    
    if (item==="" || price==="" || photoUrl===""){
        alert("It looks like you haven't filled one of the fields, please try again.");
    } else {
        itemName.push(item);
        itemPrice.push(price);
        photo.push(photoUrl);
        $("#number").text(itemName.length);
        $(".shopping-cart").append("<div class='item'><img src='"+photoUrl+"'><p>" +item+ "</p><p>$" +price+ "</p></div");
        $(".shopping-cart").hide();
        $(".shopping-cart").fadeIn();
        $("input").val("");
        price = parseInt(price);
        total = total + price; 
        console.log(total);
        $("#total").text(total);
    }

});


$("#confirm").click(function(){
    if( photo.length === 0 && itemName.length === 0 && itemPrice.length === 0) {
        alert("You haven't placed anything in your cart, please try again.");
    } else{
        alert("Your total is $" +total+ ". You have ordered" +itemName[0]+"! Thank you come again!");
        $("#total").text("");
    }
});