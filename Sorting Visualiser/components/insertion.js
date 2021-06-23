async function insertion(){
    console.log('In Insertion function');
    const ele = document.querySelectorAll('.bar');
    ele[0].style.background = 'rgb(5, 250, 30)';                //light green

    for(let i=1;i<ele.length;++i){
        console.log(`In ${i}th loop`);    
        let j=i-1;
        let key=ele[i].style.height;

        ele[i].style.background = 'rgb(255, 115, 3)';           //orange

        await waitforme(delay);
        await waitforme(delay);

        while(j>=0 && (parseInt(ele[j].style.height)> parseInt(key))){
            console.log('In While loop');
            // ele[j].style.background = 'rgb(242, 255, 3)';       //yellow
            ele[j].style.background = 'yellow';
            ele[j+1].style.height = ele[j].style.height;
            --j;

            await waitforme(delay);
            await waitforme(delay);

            for(let k=i-1; k>=0;--k)
            ele[k].style.background = 'rgb(5, 250, 30)';            //lightgreen
        }
        ele[j+1].style.height = key;
        ele[i].style.background = 'rgb(5, 250, 30)';                //lightgreen
    }
}

const inSortbtn = document.querySelector(".insertion");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
