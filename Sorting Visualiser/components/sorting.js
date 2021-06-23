// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(ele1, ele2) {
    console.log('In swap()');
    
    let temp = ele1.style.height;
    ele1.style.height = ele2.style.height;
    ele2.style.height = temp;    
}

// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSortingBtn(){
    document.querySelector(".bubble").disabled = true;
    document.querySelector(".insertion").disabled = true;
    document.querySelector(".selection").disabled = true;
    document.querySelector(".merge").disabled = true;
    document.querySelector(".quick").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn(){
    document.querySelector(".bubble").disabled = false;
    document.querySelector(".insertion").disabled = false;
    document.querySelector(".selection").disabled = false;
    document.querySelector(".merge").disabled = false;
    document.querySelector(".quick").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSizeSlider(){
    document.querySelector("#size_input").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSizeSlider(){
    document.querySelector("#size_input").disabled = false;
}

// Disables New Array button used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}

// Enables New Array button used in conjunction with disable
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}

// Used in async function so that we can do animations of sorting, takes input time in ms (1000ms = 1s)
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

//Default input for waitforme function (260ms)
let delay = 225;

// Selecting size from slider using DOM
let arraySize = document.querySelector('#size_input');

//Event listener to update the bars on UI
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
})

//Selecting speed from slider using DOM
let delayElement = document.querySelector('#speed_input');

//Event listener to update delay time
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 350 - parseInt(delayElement.value);
});

//Creating array to store randomly generated numbers for creating bars
let array = [];

//Call to display bars right when you visit the site
createNewArray();

//Creating a new array of default size(75)
function createNewArray(noOfBars=75){
    // Helper function call to delete (if any) old bars from DOM
    deleteBars();

    //generating random numbers array
    array=[];

    for(let i=0; i<noOfBars; ++i){
        //Generating random numbers between 5 to 250 (both inclusive)
        array.push(Math.floor(Math.random()*250)+5);
        // array.push(Math.floor(Math.random() * 250) + 1);
    }

    console.log(array);

    //select the div element having id 'bars'
    const bars = document.querySelector('#bars');

    // creating multiple div elements using loop and adding multiple class
    for(let i=0; i<noOfBars; ++i){
        const bar = document.createElement("div");

        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);    
    }
}

//Helper function to delete all the the previous bars using DOM
function deleteBars(){
    const bar = document.querySelector('#bars');
    bar.innerHTML = ' ';
}

//Selecting and adding event listener using DOM
const newArray= document.querySelector('.newArray');
newArray.addEventListener('click', function(){
    console.log("From New Array " + arraySize.value);
    console.log("From New Array " + delay);
    enableSizeSlider();
    enableSortingBtn();
    createNewArray(arraySize.value);
});