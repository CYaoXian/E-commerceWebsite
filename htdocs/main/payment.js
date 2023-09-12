const Payment_E = document.querySelector(".fit");
const subtotal_E = document.querySelector(".price");
const saved_E = document.querySelector(".saved");

let cart = JSON.parse(localStorage.getItem("ShoppingCart")) || [];
updateCart();

function addtocart(id){
    if (cart.some((item) => item.id === id)){
        c_numberofunits("plus", id);
    }else{
        alert("Item Added To Your Cart!");
        const item = product.find ((product) => product.id === id);

        cart.push({
            ...item,
            numberofunits :1,
        });
    }

updateCart();
}

function updateCart(){
    renderCartProduct();
    renderTotal();
    renderSaved();

    //save to local storage
    localStorage.setItem("ShoppingCart", JSON.stringify(cart));
}

function renderTotal(){
    let totalPrice = 0

    cart.forEach((item) =>{
        if (item.D_Price >0){
            totalPrice += item.D_Price * item.numberofunits;
        }else{
            totalPrice += item.O_Price * item.numberofunits; 
        }
    });
    subtotal_E.innerHTML =`<h3>Sub Total: RM${totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>`
}
function renderSaved(){
    let TA_Saved = 0

    cart.forEach((item) =>{
        TA_Saved += item.A_Saved * item.numberofunits;
    });
    saved_E.innerHTML =`<h3>Amount Saved: RM${TA_Saved.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>`
}


function renderCartProduct(){
    cart.forEach((item) => {
        Payment_E.innerHTML +=`
        <tr>
            <td rowspan="3">	
                <a href="Homepage.html"><img class ="p_img" src="${item.image_src}"  alt="${item.name}"></a>
            </td>
        </tr>
        <tr>
            <td>
                <h3 class ="pp_details">${item.name}</h3>
                <h3 class ="pp_details">Colour: ${item.colour}</h3>
                <h3 class ="pp_details">Quantity: ${item.numberofunits}</h3>
            </td>
            <td>
                <h3 class ="pp_details">Original Price: RM${item.O_Price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                <h3 class ="pp_details">Discount Price: RM${item.D_Price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                <h3 class ="pp_details">Total Amount Saved: RM${item.A_Saved.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
            </td>
            <td>
                <h3 class ="pp_details">Price: RM${item.O_Price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
            </td>
        </tr>
        `;
    });
}
