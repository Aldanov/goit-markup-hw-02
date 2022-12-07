// масив з об'єктами
const allPages = [
    {
        image: photo,
        name: "Технокряк",
        type: "Веб-сайт"
    },
    {
        image: photo1,
        name: "Постер New Orlean vs Golden Star",
        type: "Дизайн"
    },
    {
        image: photo2,
        name: "Ресторан Seafood",
        type: "Додаток"
    },
    {
        image: photo3,
        name: "Проєкт Prime",
        type: "Маркетинг"
    },
    {
        image: photo4,
        name: "Проєкт Boxes",
        type: "Додаток"
    },
    {
        image: photo5,
        name: "Inspiration has no Borders",
        type: "Веб-сайт"
    },
    {
        image: photo6,
        name: "Видання Limited Edition",
        type: "Дизайн"
    },
    {
        image: photo7,
        name: "Проєкт LAB",
        type: "Маркетинг"
    },
    {
        image: photo8,
        name: "Growing Business",
        type: "Додаток"
    },
];

// функція
function filter (allPages, typeName){
    const newMassiv = [];
    for (i=0; i<allPages.langth; i++) {
        if(type === typeName){
            newMassiv.push([type: typeName]);
            console.log(newMassiv);
        } 
        return newMassiv;
    }
    return "Сторінки з таким типон не знайдено"
}

filter (allPages, "Додаток");

console.log('first')