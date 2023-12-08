let selectedOrder;
let orders = [
    {
        name: "Order 1",
        id: 1,
        billAmt: 2500,
        prod: [{
            name: "Order 1 - Magic practice book for Kids(4 book + 1 pen + 10 refills + 1 grip) practice book for Kids(4 book + 1 pen + 10 refills + 1 grip)",
            price: "$ 253",
            cart: 1,
            img: "https://i.ibb.co/0QVcjM2/product-img.jpg"
        },
        {
            name: "Order - 1 -Magic practice book for Kids(4 book + 1 pen + 10 refills + 1 grip) practice book for Kids(4 book + 1 pen + 10 refills + 1 grip)",
            price: "$ 253",
            cart: 1,
            img: "https://i.ibb.co/0QVcjM2/product-img.jpg"
        }]
    },
    {
        name: "Order 2",
        id: 2,
        billAmt: 3000,
        prod: [
            {
                name: "Order - 2 -Magic practice book for Kids(4 book + 1 pen + 10 refills + 1 grip) practice book for Kids(4 book + 1 pen + 10 refills + 1 grip)",
                price: "$ 253",
                cart: 1,
                img: "https://i.ibb.co/0QVcjM2/product-img.jpg"
            }]
    },
    {
        name: "Order 3",
        id: 3,
        billAmt: 1500,
        prod: [{
            name: "Order 3 - Magic practice book for Kids(4 book + 1 pen + 10 refills + 1 grip) practice book for Kids(4 book + 1 pen + 10 refills + 1 grip)",
            price: "$ 253",
            cart: 1,
            img: "https://i.ibb.co/0QVcjM2/product-img.jpg"
        }]
    },
    {
        name: "Order 4",
        id: 4,
        billAmt: 500,
        prod: [{
            name: "Order 4 - Magic practice book for Kids(4 book + 1 pen + 10 refills + 1 grip) practice book for Kids(4 book + 1 pen + 10 refills + 1 grip)",
            price: "$ 253",
            cart: 1,
            img: "https://i.ibb.co/0QVcjM2/product-img.jpg"
        },
        {
            name: "Order - 4 -Magic practice book for Kids(4 book + 1 pen + 10 refills + 1 grip) practice book for Kids(4 book + 1 pen + 10 refills + 1 grip)",
            price: "$ 253",
            cart: 1,
            img: "https://i.ibb.co/0QVcjM2/product-img.jpg"
        }]
    },
    {
        name: "Order 5",
        id: 5,
        billAmt: 1900,
        prod: [{
            name: "Order 5 - Magic practice book for Kids(4 book + 1 pen + 10 refills + 1 grip) practice book for Kids(4 book + 1 pen + 10 refills + 1 grip)",
            price: "$ 253",
            cart: 1,
            img: "https://i.ibb.co/0QVcjM2/product-img.jpg"
        }]
    }
]
function initialize() {
    orders.forEach((order) => {
        const content = document.createElement("div")
        content.classList.add("swiper-slide")
        content.innerHTML = `<button class='btn btn-white order-btn'>${order.name}</button>`;
        content.children[0].classList.add(order.id);
        content.children[0].addEventListener('click', () => {
            selectOrder(order);
        });
        $("#sliderDiv").append(content);
    });
    selectOrder(orders[0]);
    selectedOrder = orders[0];
}

function selectOrder(order) {
    console.log(JSON.stringify(order))
    selectedOrder = order;
    $("#orderSummary").text(`Order Summary: ${order.name} Billed Amount# ${order.billAmt}`);
    let pHtml = "";
    order.prod.forEach((product) => {
        pHtml += `<div class="row">
        <div class="col-md-3">
          <img src="${product.img}" alt="Product" />
        </div>
        <div class="col-md-9">
          <div>
            <label class="fw-500">${product.name}</label>
            <div class="fs-12 mt-1">In Stock</div>
            <div class="fs-14 mt-2">Gift option not available. <a href="#">more view</a></div>
            <div class="fs-14 mt-2">Return window closed on 06-Dec-2023</div>
            <div class="fs-14 fw-500 mt-2">${product.price}</div>
            <div class="d-flex align-items-center mt-2 actions-outer">
              <select class="form-select form-select-sm" aria-label="Quantity">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <div class="actions">
                <a class="fs-14">Delete</a>
                <a class="fs-14">Save to later</a>
                <a class="fs-14">See more like this</a>
                <a class="fs-14">Share</a>

              </div>

            </div>
          </div>
        </div>
      </div>
      <hr />`;

    });
    $("#productDiv").html(pHtml);
}
$(document).ready(function () {

    initialize();
    $('#product').show();
    var hvrClr = "#ffc107";
    var greyClr = "#adb5bd";

    $("#st1").hover(function () {
        $(".fa-star").css("color", greyClr);
        $("#st1").css("color", hvrClr);

    });
    $("#st2").hover(function () {
        $(".fa-star").css("color", greyClr);
        $("#st1, #st2").css("color", hvrClr);

    });
    $("#st3").hover(function () {
        $(".fa-star").css("color", greyClr)
        $("#st1, #st2, #st3").css("color", hvrClr);

    });
    $("#st4").hover(function () {
        $(".fa-star").css("color", greyClr);
        $("#st1, #st2, #st3, #st4").css("color", hvrClr);

    });
    $("#st5").hover(function () {
        $(".fa-star").css("color", greyClr);
        $("#st1, #st2, #st3, #st4, #st5").css("color", hvrClr);

    });


});

function goToContent(currentClass, nextClass, isBack = false) {
    $('.section').hide();
    $('#' + nextClass).show();
    $(".timeline ." + nextClass).addClass('active');
    if (isBack) {
        $(".timeline ." + currentClass).removeClass('active');
    }
    if (nextClass != "product") {
        $('.order-btn').prop('disabled', true);
        $('.' + selectedOrder.id).prop('disabled', false);
    } else {
        $('.order-btn').prop('disabled', false);
    }
}


