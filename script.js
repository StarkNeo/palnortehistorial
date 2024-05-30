import { list2024,list2023, years } from "./lists.js";


//ON WINDOW LOADS, CREATE A LIST OF BANDS OF RECENT YEAR
const getImage=(e)=>{
    let setArea = document.getElementById('poster');
    let id = e.target.id.slice(0,4);
    let elementFound;
    switch (id) {
        case '2024':
            elementFound = list2024.filter(element=>element.id === Number(e.target.id))
            setArea.src = elementFound[0].image;        
            break;
        case '2023':
            elementFound = list2023.filter(element=>element.id === Number(e.target.id))
            setArea.src = elementFound[0].image;
        default:
            break;
    }
    
}

list2024.forEach(element=>{
    let listElement = document.createElement("li");
    listElement.id= element.id;
    listElement.onclick = getImage;
    listElement.innerHTML=element.name;
    let setArea;
    if (element.day==='friday') {
        setArea = document.getElementById('friday');
        setArea.appendChild(listElement);
    }
    else if(element.day === 'saturday'){
        setArea = document.getElementById('saturday');
        setArea.appendChild(listElement);
    }
    else {
        setArea = document.getElementById('sunday');
        setArea.appendChild(listElement);
    }
});

//Function to create a list of bandas and images depends on year selected
const buildEvent = (list)=>{
    let setArea = document.getElementById('poster');
    setArea.src="https://prismic-images.tmol.io/ticketmaster-tm-mx/ca0d3029-846f-4980-be55-e2529db5a5b1_900X600.png?auto=compress,format&rect=0,0,900,600&w=900&h=600"
    //Clear Area
    let clearAreaFriday = document.getElementById('friday');
    let clearAreaSaturday = document.getElementById('saturday');
    let clearAreaSunday = document.getElementById('sunday');
    clearAreaFriday.innerHTML='';
    clearAreaSaturday.innerHTML='';
    clearAreaSunday.innerHTML='';
    //Set schedule
    list.forEach(element=>{
        let listElement = document.createElement("li");
        listElement.id= element.id;
        listElement.onclick = getImage;
        listElement.innerHTML=element.name;
        let setArea;
        if (element.day==='friday') {
            setArea = document.getElementById('friday');            
            setArea.appendChild(listElement);
        }
        else if(element.day === 'saturday'){
            setArea = document.getElementById('saturday');
            setArea.appendChild(listElement);
        }
        else {
            setArea = document.getElementById('sunday');
            setArea.appendChild(listElement);
        }
    });
    
}

//ASIDE YEARS MENU
years.forEach(element=>{
    let listElement =  document.createElement('li');
    listElement.id=element;
    listElement.className='year'
    listElement.innerHTML= element;
    let setArea = document.getElementById('years');
    setArea.appendChild(listElement);

})

let year = document.querySelectorAll('.year');
console.log(year)
year.forEach(element=>{
    element.addEventListener('click',()=>{
        console.log(element.id)
        switch (element.id) {
            case '2024':
                buildEvent(list2024)
                break;
            case '2023':
                buildEvent(list2023)
                break;
            default:
                break;
        }
    })
})
