async function merge(ele, l, m, h){
    console.log('In merge');
    console.log(`low=${l}, mid=${m}, high=${h}`);
    const n1 = m-l+1;
    const n2 = h-m;
    console.log(`n1=${n1}, n2=${n2}`);
    let left= new Array(n1);
    let right= new Array(n2);

    //Left Side of the Array
    for(let i=0; i<n1; ++i){
        await waitforme(delay);
        ele[l+i].style.background = 'rgb(255, 115, 3)';                 //Orange
        left[i]=ele[l+i].style.height;
    }
    
    //Right Side of the Array
    for(let i=0;i<n2; ++i){
        await waitforme(delay);
        ele[m+1+i].style.background = 'rgb(242, 255, 3)';               //Yellow
        right[i]=ele[m+1+i].style.height;
    }

    await waitforme(delay);
    let i=0;j=0;k=l;


    while(i<n1 && j<n2){
        await waitforme(delay);
        console.log('In merge while loop');
        console.log(parseInt(left[i]), parseInt(right[j]));

          //To add color if the element is at its actual position after sorting
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'rgb(5, 250, 30)';                //Lightgreen
        }
        //To add color if the element is temporarily sorted
        else{
            ele[k].style.background = 'rgb(77, 250, 77)';               //OffGreen
        }

        if(parseInt(left[i])<=parseInt(right[j])){
            ele[k].style.height = left[i]; 
            ++i;
        }
        else{
            ele[k].style.height = right[j];
            ++j;
        }
        ++k;
    }
    //To copy the remaining elements of left array
    while(i < n1){
        await waitforme(delay);
        //To add color if the element is at its actual position after sorting
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'rgb(5, 250, 30)';                        //LightGreen
        }
        //To add color if the element is temporarily sorted
        else{
            ele[k].style.background = 'rgb(77, 250, 77)';                       //OffGreen
        }
        ele[k].style.height = left[i];
        ++i;
        ++k;
    }
    //To copy the remaining elements of right array
    while(j < n2){
        await waitforme(delay);
        //To add color if the element is at its actual position after sorting
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'rgb(5, 250, 30)';                        //Lightgreen
        }
        //To add color if the element is temporarily sorted
        else{
            ele[k].style.background = 'rgb(77, 250, 77)';                       //Offgreen
        }
        ele[k].style.height = right[j];
        ++j;
        ++k;
    }
}


async function mergeSort(ele, l, r){
    console.log('In mergeSort');
    if(l>=r){
        console.log(`Only one element remaining l=${l}, r=${r}`);
        return;
    }
    const m=l+Math.floor((r-l)/2);
    console.log(`mid=${m}`);
    await mergeSort(ele, l, m);
    await mergeSort(ele, m+1, r);
    await merge(ele, l, m, r);
}


const mergeSortbtn = document.querySelector(".merge");
mergeSortbtn.addEventListener('click', async function(){
    const ele= document.querySelectorAll('.bar');
    let l=0;
    let r=parseInt(ele.length)-1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});