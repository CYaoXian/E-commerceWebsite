const product_E = document.querySelector(".all_product_con");
const Cart_E = document.querySelector(".Cart_Con");
const subtotal_E = document.querySelector(".total");

function getproduct(){
    product.forEach((product) =>{
        product_E.innerHTML +=`
        <div class = "product_con">
            <div class="pdetail_con">
                <a href=${product.href}><h2 class="p_name"><img class="product_img" src=${product.image_src} alt="${product.name}">${product.name}</h2></a>
                <div class = "padd_con">
                <button class="add-btn" onclick="addtocart(${product.id})">Add To Cart</button>
                </div>
            </div>
        </div>
        `;
    });

}
getproduct();

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
    subtotal_E.innerHTML =`Sub Total: RM${totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
}

function renderCartProduct(){
    Cart_E.innerHTML = "";
    cart.forEach((item) => {
        Cart_E.innerHTML +=`
        <div class = "Pro_D">
        <div>
            <a href="${item.href}"><img class ="cartp_img" src="${item.image_src}"  alt="${item.name}"></a>
        </div>
        <div class = "pp_info">
            <h2 class ="cart_details">${item.name}</h2>
            <h3 class ="cart_details">Colour: ${item.colour}</h3>
            <h3 class ="cart_details">Original Price: RM${item.O_Price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
            <h3 class ="cart_price">Discount Price: RM${item.D_Price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
            <h3 class ="cart_details">Total Amount Saved: RM${item.A_Saved.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>

            <div class="cart_quantity">
                <div class = "mquan_btn" onclick="c_numberofunits('minus',${item.id})">-</div>
                    <div class="cart_input">${item.numberofunits}</div>
                <div class = "pquan_btn" onclick="c_numberofunits('plus',${item.id})">+</div>
                <button class="remove_btn" onclick="removeitem(${item.id})">REMOVE</button>
            </div>
        </div>
        `;
    });
}
// remove
function removeitem(id){
    cart = cart.filter((item) => item.id !== id);

    updateCart();
}
// change unit
function c_numberofunits(action, id){
    cart = cart.map((item) =>{

        let numberofunits = item.numberofunits;

        if(item.id === id){
            if (action === "minus" && numberofunits > 1){
                numberofunits--;
            }else if (action === "plus"){
                numberofunits++;
            }
        }
        return {
            ...item,
            numberofunits,
        };
    });

    updateCart();
}