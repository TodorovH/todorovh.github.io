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
                                // "<div onclick='showPopup(" + object.id + ");'><h4>ADD TO CART</h4></div>" +
                                "<div onclick='showPopup(66);'><h4>ADD TO CART</h4></div>" +
                            "</div>" +
                        "</div>";
        document.getElementById("all-offers-container").appendChild(item);
    });
});

var addToCartUrl = 'https://www.arianna-skincare.com/checkout/cart/add/uenc/aHR0cDovLzEyNy4wLjAuMS9uZXN0by9jb29sb3IuaHRtbA%2C%2C/product/66/';
var myData = {
    'form_key': 'CwXVQbS39ntxYJKc' 
};
var addToCartUrl2 = 'https://www.arianna-skincare.com/checkout/cart/add?product=66&qty=1&form_key=CwXVQbS39ntxYJKc&uenc=aHR0cDovLzEyNy4wLjAuMS9uZXN0by9jb29sb3IuaHRtbA%2C%2C'

function showPopup(objID) {
    $.ajax({
        url: addToCartUrl,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Authority": "www.arianna-skincare.com",
            'Host': 'www.arianna-skincare.com',
            'Origin': 'todorovh.github.io',
            'Access-Control-Request-Method': 'put',
            'Access-Control-Allow-Credentials': 'true',
            "Access-Control-Allow-Headers": "Content-Length",
            "Access-Control-Expose-Headers": "Content-Length",
            "Referer": "https://www.arianna-skincare.com/ultra-rich-mineral-body-butter.html",
            "User-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36",
            //"Sec-fetch-mode": "no-cors",
            //"Cookie": document.cookie
        },
        method: 'POST',
        dataType: 'json',
        //data: myData,
        success: function(data){
            console.log('success: ' + data);
        }
    });

    // var xhr = new XMLHttpRequest();

    // xhr.open('POST', addToCartUrl, true);
    // xhr.setRequestHeader('Content-Type', 'text/x-magento-init');
    // //xhr.setRequestHeader('Host', 'https://www.arianna-skincare.com');
    // //xhr.setRequestHeader('Origin', 'https://www.arianna-skincare.com');
    // xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://www.arianna-skincare.com');
    // xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
    // xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Length');
    // xhr.setRequestHeader('Access-Control-Expose-Headers', 'Content-Length');
    // xhr.onload = function() {
    //     if (xhr.status === 200 && xhr.responseText !== '') {
    //         alert('Something went wrong.  Name is now ' + xhr.responseText);
    //     }
    //     else if (xhr.status !== 200) {
    //         alert('Request failed.  Returned status of ' + xhr.status);
    //     }
    // };
    // xhr.send(null);

    // fetch(
    //     addToCartUrl,
    //     {   method: 'POST',
    //         mode: 'cors',
    //         headers: new Headers(
    //            {
    //                 "Content-Type":                 "application/json",
    //                 "Accept":                       "application/json",
    //                 "Access-Control-Allow-Origin":  "https://www.arianna-skincare.com",
    //                 "Origin":                       "https://www.arianna-skincare.com",
    //                 "set-cookie": "PHPSESSID=5h3ps20a5fk0rd7lga5fv9vud4; Max-Age=3600; path=/; domain=www.arianna-skincare.com; secure; HttpOnly"
    //             }
    //         ),
    //         body: JSON.stringify(
    //            {'form_key': 'CwXVQbS39ntxYJKc'}
    //         )
    //      }
    //    ).then( response => { console.log(response);})
    //     .catch(err => console.log(err))
}
