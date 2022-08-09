// let li_logo = document.querySelector(".li_logo");
// li_logo.innerHTML = "BrandName"
// .............................section_1
let ensure = document.querySelector(".ensure")
let hed = [
    {
        id:1,
        h1:"We Ensure A Best <br> Insurance Service",
        p:"We know how large objects will act, but things on a <br> small scale just do not act that way.",
        button1:"Get Quote Now",
        button2:"Learn More"
    }
]
hed.forEach((item) => {
    ensure.innerHTML +=`
    <header id="ensure_header">
    <h1 id="ensure_h1">${item.h1}</h1>
    <p id="header_all_p">${item.p}</p>
    <div class="ensure_btn">
        <button id="en_btn1">${item.button1}</button>
        <button id="en_btn2">${item.button2}</button>
    </div>
    </header>
`
});
// .............................section_2.....card1...3
let peace = document.querySelector(".peace")
let peace_header = [
    {
        id:1,
        h4:"Peace of Mind",
        p:"the quick fox jumps over the <br> lazy dog"
    },
    {
        id:2,
        h4:"Set For Life",
        p:"the quick fox jumps over the <br> lazy dog"

    },
    {
        id:2,
        h4:"100% Satisfaction",
        p:"the quick fox jumps over the <br> lazy dog"
    }
]
peace_header.forEach((card_1) => {
    peace.innerHTML +=`
        <div class="peace_card1">
            <img src="./icon/card3img.svg" alt="">
            <h4 id="peace_h4">${card_1.h4}</h4>
            <p id="all_p">${card_1.p}</p>
        </div>
    `
})
// .............................section_3.....card2...3
let set_for = document.querySelector(".set_for")
let set_for_card = [
    {
        id:1,
        img:`<img src="./icon/2card1.svg">`,
        h4:"Peace of Mind",
        p:"the quick fox jumps over the <br> lazy dog"
    },
    {
        id:2,
        img:`<img src="./icon/2card2.svg">`,
        h4:"Set For Life",
        p:"the quick fox jumps over the <br> lazy dog"

    },
    {
        id:3,
        img:`<img src="./icon/2card3.svg">`,
        h4:"100% Satisfaction",
        p:"the quick fox jumps over the <br> lazy dog"
    }
]
set_for_card.forEach((set_fr) => {
    set_for.innerHTML +=`
        <div class="set_card">
            <div>${set_fr.img}</div>
            <h4 id="peace_h4" class="set_for_h4">${set_fr.h4}</h4>
            <p id="all_p">${set_fr.p}</p>
        </div>
    `
})
// .............................section_4.....card3...3
let industry = document.querySelector(".industry")
let industry_header = [
    {
        id:1,
        h1:"Industry",
        p:"Problems trying to resolve the conflict between <br> the two major realms of Classical physics: Newtonian mechanics "
    }
]
industry_header.forEach((industry_hed) => {
    industry.innerHTML +=`
        <header class="industry_header">
            <h1 id="duo_h1">${industry_hed.h1}</h1>
            <p id="all_p">${industry_hed.p}</p>
        </header>
    `
})
let industry_cards5 = document.querySelector(".industry_cards")
let industry_cards = [
    {
        id:1,
        img:`<img src="./img/3crd_av1.jpg" alt="">`,
        p:"Slate helps you see how <br> many more days you need <br> to work to reach your financial <br> goal for the month and year.",
        img2:`<img src="./icon/stars.svg" alt="">`
    },
    {
        id:2,
        img:`<img src="./img/3crd_av2.jpg" alt="">`,
        p:"Slate helps you see how <br> many more days you need <br> to work to reach your financial <br> goal for the month and year.",
        img2:`<img src="./icon/stars.svg" alt="">`
    },
    {
        id:3,
        img:`<img src="./img/3card_av3.jpg" alt="">`,
        p:"Slate helps you see how <br> many more days you need <br> to work to reach your financial <br> goal for the month and year.",
        img2:`<img src="./icon/stars.svg" alt="">`
    }
]
industry_cards.forEach((industry_cards1) => {
    industry_cards5.innerHTML +=`
        <div class="industry_card">
            <div>${industry_cards1.img}</div>
            <p id="all_p" class="ind_p">${industry_cards1.p}</p>
            <div>${industry_cards1.img2}</div>
        </div>
    `
})
// .............................section_6.....card3...4
let pricing = document.querySelector(".pricing")
let pricing_header = [
    {
        id:1,
        h1:`Pricing`,
        p:"Problems trying to resolve the conflict between <br> the two major realms of Classical physics: Newtonian mechanics "
    }
]
pricing_header.forEach((pring) => {
    pricing.innerHTML +=`
        <header class="pricing_header">
            <h1 id="duo_h1">${pring.h1}</h1>
            <p id="all_p">${pring.p}</p>
        </header>
    `
})
let pricing_cardshed = document.querySelector(".pricing_cards")
let pricing_cards = [
    {
        id:1,
        h4:"FREE",
        p:`Organize across all <br> apps by hand`,
        li_p:`<span><img src="./icon/checked.svg"></span> Unlimited product updates`,
        li_p2:`<span><img src="./icon/chec.svg" alt=""></span>1GB  Cloud storage`,
        li_p3:`<span><img src="./icon/chec.svg" alt=""></span>Email and community support`,
        btn:"Try for free"
    },
    {
        id:1,
        h4:"STANDARD",
        p:`Organize across all <br> apps by hand`,
        li_p:`<span><img src="./icon/checked.svg"></span> Unlimited product updates`,
        li_p2:`<span><img src="./icon/chec.svg" alt=""></span>1GB  Cloud storage`,
        li_p3:`<span><img src="./icon/chec.svg" alt=""></span>Email and community support`,
        btn:"Try for free"
    },
    {
        id:1,
        h4:"PREMIUM",
        p:`Organize across all <br> apps by hand`,
        li_p:`<span><img src="./icon/checked.svg"></span> Unlimited product updates`,
        li_p2:`<span><img src="./icon/chec.svg" alt=""></span>1GB  Cloud storage`,
        li_p3:`<span><img src="./icon/chec.svg" alt=""></span>Email and community support`,
        btn:"Try for free"
    }
]
pricing_cards.forEach((pricing_cards) => {
    pricing_cardshed.innerHTML +=`
    <div class="pricing_card">
        <h4>${pricing_cards.h4}</h4>
        <p>${pricing_cards.p}</p>
        <ul class="pring_ul">
            <li class="pring_li">${pricing_cards.li_p}</li>
            <li class="pring_li">${pricing_cards.li_p}</li>
            <li class="pring_li">${pricing_cards.li_p}</li>
            <li class="pring_li">${pricing_cards.li_p2}</li>
            <li class="pring_li">${pricing_cards.li_p3}</li>
        </ul>
        <button>${pricing_cards.btn}</button>
    </div>
    `
})

const hamburger = document.querySelector(".hamburger");
const nav_gap = document.querySelector(".nav_gap");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav_gap.classList.toggle("active");
})