
// const filterList = {
//     all: true,
//     web: false,
//     app: false,
//     design: false,
//     market: false
// }

// масив з об'єктами
const allPages = [
    {
        image: "./images/portfolio/tehnokryk.jpg",
        name: "Технокряк",
        type: "Веб-сайт"
    },
    {
        image: "./images/portfolio/basketbool.jpg",
        name: "Постер New Orlean vs Golden Star",
        type: "Дизайн"
    },
    {
        image: "./images/portfolio/seafood.jpg",
        name: "Ресторан Seafood",
        type: "Додаток"
    },
    {
        image: "./images/portfolio/prime.jpg",
        name: "Проєкт Prime",
        type: "Маркетинг"
    },
    {
        image: "./images/portfolio/boxes.jpg",
        name: "Проєкт Boxes",
        type: "Додаток"
    },
    {
        image: "./images/portfolio/noborders.jpg",
        name: "Inspiration has no Borders",
        type: "Веб-сайт"
    },
    {
        image: "./images/portfolio/limedition.jpg",
        name: "Видання Limited Edition",
        type: "Дизайн"
    },
    {
        image: "./images/portfolio/lab.jpg",
        name: "Проєкт LAB",
        type: "Маркетинг"
    },
    {
        image: "./images/portfolio/growing.jpg",
        name: "Growing Business",
        type: "Додаток"
    },
];

// функція

function init() { 
    const ulList = document.querySelector('.portfolio-items');
    
// створення списку
    // for (const card of allPages) { 
    //    ulList.insertAdjacentElement("beforeend", createLiElement(card.image, card.name, card.type))
    // }

    
    // console.log(ulList);




                        const filterBox = document.querySelectorAll('.portfolio-items>li');

                        document.querySelector(".portfolio-buttons").addEventListener('click', event => {


                        // if (event.target.tagName !== "button") return false;
                        let filterClass = event.target.dataset['f'];

                        filterBox.forEach(elem => { 
                        console.log(elem);
                        elem.classList.remove("hide");
                        if (!elem.classList.contains(filterClass) && filterClass !== "all") { 
                            elem.classList.add("hide");
                        }

                        })

                        })
    

    
}
init()

function createLiElement(src, name, type) { 
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("alt", name);
    img.setAttribute("width", "370");

    const h2 = document.createElement("h2");
    h2.innerText = name;
    const p = document.createElement("p");
    p.innerText = type;

    li.appendChild(img);
    li.appendChild(h2);
    li.appendChild(p);

    return li;
}






// console.log(createLiElement("./images/portfolio/tehnokryk.jpg", "Технокряк", "Веб-сайт"));

// const filterBox = document.querySelectorAll('.main-portfolio>');

// document.querySelector('.portfolio-buttons').addEventListener('click', event => { 
//     if (event.target.tagName !== "LI") return false;
//     let filterClass = event.target.dataset['f'];

//     filterBox.forEach(elem => { 
//         elem.classList.remove("hide");
//         if (!elem.classList.contains(filterClass) && filterClass !== "all") { 
//             elem.classList.add("hide");
//         }

//     })
// })