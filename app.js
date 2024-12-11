const searchicon1 = document.querySelector("#searchicon1");
const srchicon1 = document.querySelector("#srchicon1");
const search1 = document.querySelector("#searchinput1");

searchicon1.addEventListener("click",function(){
    search1.style.display = "flex";
    searchicon1.style.display = "none";

})

const searchicon2 = document.querySelector("#searchicon2");
const srchicon2 = document.querySelector("#srchicon2");
const search2 = document.querySelector("#searchinput2");

searchicon2.addEventListener("click",function(){
    search2.style.display = "flex";
    searchicon2.style.display = "none";

})

const bar = document.querySelector(".fa-bars");
const cross = document.querySelector("#cross");
const headerbar = document.querySelector(".headerbar");

bar.addEventListener("click",function(){
    setTimeout(()=>{
        cross.style.display = "block";
    },200);
    headerbar.style.right = "0%";
})

cross.addEventListener("click",function(){
    cross.style.display = "none";
    headerbar.style.right = "-100%";
})


// --------------------------menu section-------------------------------

const SectionCenter = document.querySelector(".menu-items-container");
const filterBtns = document.querySelectorAll(".btn-cat");

filterBtns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const Category = e.currentTarget.dataset.id;
        const menuCateogry = menu.filter(function(menuItem){
            if(menuItem.Category==Category){
                return menuItem;
            }
        });
        if(Category=="all"){
            displayMenusItem(menu);
        }
        else{
            displayMenusItem(menuCateogry);
        }
    })
    
});
const menu = [
    {
        id: 1,
        title: "VEJ THALI",
        Category: "dinner",
        price: 120,
        img: "./IMAGES/dinner1.jfif"
    },
    {
        id: 2,
        title: "CHOLE PURI",
        Category: "dinner",
        price: 140,
        img: "./IMAGES/dinner2.jfif"
    },
    {
        id: 3,
        title: "PALAK PANEER",
        Category: "dinner",
        price: 150,
        img: "./IMAGES/dinner3.jfif"
    },
    {
        id: 4,
        title: "KADHAI PANEER",
        Category: "dinner",
        price: 150,
        img: "./IMAGES/dinner4.jfif"
    },
    {
        id: 5,
        title: "LACCHA PARATHA",
        Category: "dinner",
        price: 120,
        img: "./IMAGES/dinner5.jfif"
    },
    {
        id: 6,
        title: "PANEER PAKODA",
        Category: "starter",
        price: 120,
        img: "./IMAGES/starter1.jfif"
    },
    {
        id: 7,
        title: "PANEER TIKKA",
        Category: "starter",
        price: 140,
        img: "./IMAGES/starter2.jfif"
    },
    {
        id: 8,
        title: "CHICKEN 65",
        Category: "starter",
        price: 150,
        img: "./IMAGES/starter3.jfif"
    },
    {
        id: 9,
        title: "HAKKA NOODLES",
        Category: "starter",
        price: 120,
        img: "./IMAGES/item3.jfif"
    },
    {
        id: 10,
        title: "FISH FRY",
        Category: "starter",
        price: 150,
        img: "./IMAGES/starter4.jfif"
    },
    {
        id: 11,
        title: "CHICKEN PAKODA",
        Category: "starter",
        price: 120,
        img: "./IMAGES/starter5.jfif"
    },
    {
        id: 12,
        title: "BIRYANI",
        Category: "dinner",
        price: 120,
        img: "./IMAGES/biryani.jfif"
    },
    {
        id: 13,
        title: "DRINKS",
        Category: "Drinks",
        price: 50,
        img: "./IMAGES/drink.jfif"
    },
    {
        id: 14,
        title: "DRINKS",
        Category: "Drinks",
        price: 80,
        img: "./IMAGES/drink2.jfif"
    },
    {
        id: 15,
        title: "Drinks",
        Category: "drinks",
        price: 50,
        img: "./IMAGES/drink3.jfif"
    },
    {
        id: 16,
        title: "Drinks",
        Category: "drinks",
        price: 70,
        img: "./IMAGES/drink4.jfif"
    },
    {
        id: 17,
        title: "Drinks",
        Category: "drinks",
        price: 60,
        img: "./IMAGES/MOCKTAIL2.jfif"
    },
    {
        id: 18,
        title: "PULAO",
        Category: "lunch",
        price:  160,
        img: "./IMAGES/lunch1.jfif"
    },
    {
        id: 19,
        title: "VEJ BIRYANI",
        Category: "lunch",
        price: 200,
        img: "./IMAGES/lunch2.jfif"
    },
    {
        id: 20,
        title: "PRAWN BIRYANI",
        Category: "lunch",
        price: 180,
        img: "./IMAGES/lunch3.jfif"
    },
    {
        id: 21,
        title: "MUTTON BIRYANI",
        Category: "lunch",
        price: 200,
        img: "./IMAGES/lunch4.jfif"
    },
    {
        id: 22,
        title: "MIXED FRIEDRICE",
        Category: "lunch",
        price: 240,
        img: "./IMAGES/lunch5.jfif"
    },
    {
        id: 23,
        title: "BUTTER NAN WITH MATAR PANEER",
        Category: "lunch",
        price: 200,
        img: "./IMAGES/lunch6.jfif"
    },
]

window.addEventListener("DOMContentLoaded",function(){
displayMenusItem(menu);
});

function displayMenusItem(menuItem){
    let displayMenusItem = menuItem.map(function(item){
        return `<div class="img-cards">
                        <img src=${item.img} alt=""/>
                        <p class="price">Only On &#8377 ${item.price}</p>
                        <p>${item.title}</p>
                    </div>`
    })
    displayMenusItem = displayMenusItem.join("");
    SectionCenter.innerHTML = displayMenusItem; 

    

    
}