//for cart
const totalProductsPriceElement = document.getElementById('total-products-price')
const totalProductsQuantityElement = document.getElementById('total-products-quantity')
const cart = []
let totalPrice = 0
let totalquantity = 0

//for cart
let seletedQuentity = document.getElementById('quantity');
let seletedColor = ''
let seletedSize = ''
let seletedProductImage = ''
let defaultPrice = 99

// product color changer
const productImageElement = document.getElementById('product-image');
const colorVerientButtons = document.querySelectorAll('.color-verient-button')
const sizeVerientElements = document.querySelectorAll('.size') 
const cartProductTableElement = document.getElementById('cart-product-list')
const productListCount = document.getElementById("product-list-count")

// reusable function. it's help change dynamicaly product iamge and verient button ring color.
const handleProductChange = (currentElement, url) => {
    seletedProductImage = url;
    productImageElement.setAttribute('src', url);
    colorVerientButtons.forEach(item => {
        item.classList.remove('ring-1');
        if (currentElement == item) {
            currentElement.classList.add('ring-1')
        }
    });
}

//this event liestenr function works when the onColorChangeHandle called from HTML document.
function onColorChangeHandle(currentElement, value) {
    seletedColor = value;
    switch (value) {
        case 'purple':
            handleProductChange(currentElement, 'image/product_1.png');
            break;
        case 'black':
            handleProductChange(currentElement, 'image/product_2.png');
            break;
        case 'blue':
            handleProductChange(currentElement, 'image/product_3.png');
            break;
        case 'cyen':
            handleProductChange(currentElement, 'image/product_4.png');
            break;
        default:
            handleProductChange(currentElement, 'image/product_1.png');
            break;
    }

}
// size change
function sizeChange(currentElement, size){
    seletedSize = size
    sizeVerientElements.forEach((item) => {
        item.classList.remove('!border-[#6576FF]')
        item.firstElementChild.classList.remove('!text-[#6576FF]')
        if (currentElement == item) {
            currentElement.classList.add("!border-[#6576FF]")
            currentElement.firstElementChild.classList.add('!text-[#6576FF]')
        }
    })
}
// quentity 
const quentityFieldElement = document.getElementById('quantity');

const increment = () => {
    let currentValue = Number(quentityFieldElement.value)
    quentityFieldElement.value = currentValue + 1
}

const decrement = () => {
    let currentValue = Number(quentityFieldElement.value)
    if (currentValue > 1) {
        quentityFieldElement.value = currentValue - 1
    } else window.alert("You can't do this")

}

// show modal cart
const cartInfo = document.getElementById("cartInfo")

const showCartModal = () => {
    cartInfo.classList.remove("hidden")
    cartProductTableElement.innerHTML = productListComponents(cart).join('');
}
const removeCartModal = () => {
    cartInfo.classList.add("hidden")
}

// add to cart funtion.
const addToCart = () => {
    cart.push({
        quentity: Number(seletedQuentity.value),
        color: seletedColor || 'purple',
        image: seletedProductImage || 'image/product_1.png',
        size: seletedSize || 'S',
        price: defaultPrice * Number(seletedQuentity.value),
    });
    totalPrice = (Number(totalPrice) + (defaultPrice * Number(seletedQuentity.value))).toString();
    totalquantity = Number(totalquantity) + Number(seletedQuentity.value);
    totalProductsPriceElement.innerText = totalPrice;
    totalProductsQuantityElement.innerText = totalquantity;
    productListCount.innerHTML = cart.length
}

// reuseable element for product list
const productListComponents = (cart) => {
   return cart.map(item => 
       `<tr class=" h-[68px] border-solid border-b border-borderColor ">
            <td class="flex gap-2 items-center h-[68px]">
                <img src="${item.image}" alt="${item.image}" class="w-9 rounded-[3px]">
                <p class="font-fontName font-normal text-[14px] text-lightColor w-auto md:w-[234px]">Classy Modern Smart watch ${item.color}</p>
            </td>
            <td class="font-fontName font-normal text-[14px] text-darkColor text-center">${item.color}</td>
            <td class="font-fontName font-bold text-[14px] text-darkColor text-center">${item.size}</td>
            <td class="font-fontName font-bold text-[14px] text-darkColor text-center">${item.quentity}</td>
            <td class="font-fontName font-bold text-[14px] text-darkColor text-center md:text-right">${item.price}</td>
        </tr>`
    )
}
    


