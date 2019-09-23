console.log(DataObjects);

$(document).ready(function () {
    
    DataObjects.forEach(function(object) {

        var item = document.createElement("div");
        item.innerHTML = "<div id='" + object.id + "' class='offer'>" +
                            "<div class='offer-left'>" +
                                "<img src='" + object.img + "' alt='" + object.title + "'>" +
                                "<h6>" + object.title + "</h6>" +
                            "</div>" +
                            "<div class='offer-center'>" +
                                "<div class='details'>" +
                                    "<h4>" + object.title + "</h4>" +
                                    "<div>" +
                                        "<img src='public/img/star.png'>" +
                                        "<img src='public/img/star.png'>" +
                                        "<img src='public/img/star.png'>" +
                                        "<img src='public/img/star.png'>" +
                                        "<img src='public/img/star.png'>" +
                                    "</div>" +
                                    "<div class='price'>" + object.price + "</div>" +
                                "</div>" +
                            "</div>" +
                            "<div class='offer-right'>" +
                                "<div onclick='showPopup(" + object.id + ");'><h4>ADD TO CART</h4></div>" +
                            "</div>" +
                        "</div>";
        document.getElementById("all-offers-container").appendChild(item);
    });
});
