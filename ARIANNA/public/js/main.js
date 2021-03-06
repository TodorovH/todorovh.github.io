$(document).ready(function () {

    DataObjects.forEach(function(object) {

        var item = document.createElement("div");
        item.innerHTML = "<div id='" + object.id + "' class='offer'>" +
                            "<div class='offer-left'>" +
                                "<div>" +
                                    "<img src='" + object.img + "' alt='" + object.title + "'>" +
                                "</div>" +
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
                                    "<h5>" + object.reviews + "</h5>" +
                                    "<div class='price'>" + object.price + "</div>" +
                                "</div>" +
                            "</div>" +
                            "<div class='offer-right'>" +
                                "<div onclick=\"showPopup('" + object.id + "');\"><h4>ADD TO CART</h4></div>" +
                            "</div>" +
                        "</div>";
        document.getElementById("all-offers-container").appendChild(item);

        var item2 = document.createElement("div");
        item2.classList.add("carousel-offer");
        item2.setAttribute("onclick", "showPopup('" + object.id + "')");
        item2.innerHTML = "<div class='carouser-offer-container-img'>" +
                                "<img src='" + object.img + "' alt='" + object.title + "'>" +
                            "</div>" +
                            "<div class='carousel-offer-title'>" + object.title + "</div>" +
                            "<div class='carousel-offer-stars'>" +
                                "<img src='public/img/star.png'>" +
                                "<img src='public/img/star.png'>" +
                                "<img src='public/img/star.png'>" +
                                "<img src='public/img/star.png'>" +
                                "<img src='public/img/star.png'>" +
                            "</div>" +
                            "<div class='reviews'>" + object.reviews + "</div>" +
                            "<div class='carousel-offer-price'>" + object.price + "</div>" +
                            "<div class='fake-btn'>ADD TO CART</div>";
        document.getElementById("carousel-offers-container").appendChild(item2);
    });

    $('.carousel').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
        responsive: [{
            breakpoint: 950,
            settings: {
              slidesToShow: 2
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

function showPopup(objID) {
    var popupItem = document.getElementById("popup-container").innerHTML = "";
    DataObjects.forEach(function(object) {
        if (objID === object.id) {
            var item = document.createElement("div");
            item.innerHTML = "<div id='popup'>" +
                                "<div id='popup-left'>" +
                                    "<div class='popup-close' onclick=\"closePopup();\">X</div>" +
                                    "<div id='popup-left-img-container'>" +
                                        "<img src='" + object.img + "' alt='" + object.title + "'>" +
                                    "</div>" +
                                "</div>" +
                                "<div id='popup-right'>" +
                                    "<h2>" + object.title + "</h2>" +
                                    "<div id='stars-container'>" +
                                        "<img src='public/img/star.png'>" +
                                        "<img src='public/img/star.png'>" +
                                        "<img src='public/img/star.png'>" +
                                        "<img src='public/img/star.png'>" +
                                        "<img src='public/img/star.png'>" +
                                        "<div class='popup-reviews'>" + object.reviews + "</div>" +
                                    "</div>" +
                                    "<div id='price-availability'>" +
                                        "<div id='popup-price'>" +
                                            "<div>Price</div>" +
                                            "<div class='popup-price'>" + object.price + "</div>" +
                                        "</div>" +
                                        "<div id='popup-availability'>" +
                                            "<div class='avail'>" + object.availability + "</div>" +
                                            "<div id='sku'>SKU#: " + object.SKU + "</div>" +
                                        "</div>" +
                                    "</div>" +
                                    "<div id='features'></div>" +
                                    "<div id='desc'>" + object.description + "</div>" +
                                    "<div id='img-features'>" +
                                        "<img src='public/img/NATURAL-SKINCARE-ICONS-VEGAN.png' alt=''>" +
                                    "</div>" +
                                    "<form data-role='tocart-form' action='' method='POST'>" +
                                        "<input type='number' name='qty' id='quantity' value='1' min='0' inputmode='numeric' pattern='[0-9]*'>" +
                                        "<button onclick=\"addToCart(" + object.productId + ");  return false;\" id='popup-btn'>ADD TO CART</button>" +
                                    "</form>" +
                                    "<div id='popup-money-back'>" +
                                        "<img src='public/img/guarantee.png' alt=''>" +
                                    "</div>" +
                                "</div>" +
                            "</div>";

            var popupItem = document.getElementById("popup-container");
            popupItem.appendChild(item);
            var itemUl = document.createElement("ul");
            var strLis = '';

            object.features.forEach(function(feature) {
                strLis += "<li class='feature'>" + feature + "</li>";
            });

            itemUl.innerHTML = strLis;
            document.getElementById("features").appendChild(itemUl);
            popupItem.style.display = "block";
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        }
    });
}

function showPopup2() {
    document.getElementById("popup-container2").style.display = "block";
}

function closePopup() {
    document.getElementById("popup-container").style.display = "none";
}

function closePopup2() {
    document.getElementById("popup-container2").style.display = "none";
}

var productsInCart = [];
var numberOfItemsInCart = 0;
var baseURL = "https://www.arianna-skincare.com/dpa/add/tocart/id/";
var addToCartUrl = "";

function addToCart(productId) {

    var productQty = document.getElementById('quantity') ? parseInt(document.getElementById('quantity').value) : 0;
    var qtyHolder = document.getElementById('products-qty');

    var foundItem = productsInCart.filter(function(item) {
        return item.id === productId;
    })[0];
    
    if (foundItem) {
        foundItem.qty += productQty;
    } else {
        productsInCart.push({
            id: productId,
            qty: productQty
        });
    }

    numberOfItemsInCart += productQty;
    qtyHolder.innerHTML = "";
    qtyHolder.innerHTML = numberOfItemsInCart;
    closePopup();
    postParamsStrBuilder();
}

function postParamsStrBuilder() {
    var tempArr = [];
    productsInCart.forEach(function(item) {
        tempArr.push(item.id + "-" + item.qty);
    });

    var productsStr = tempArr.join(",");
    addToCartUrl = baseURL + productsStr;

    $('#tocartForm').attr('action', addToCartUrl);

    return productsStr;
}

function postRequest() {
    var hasProducts = document.getElementById('products-qty').innerHTML !== "0";

    if (!hasProducts) return;

    addToCartUrl = baseURL + postParamsStrBuilder();

    $("#f_submit").trigger( "click" );
}