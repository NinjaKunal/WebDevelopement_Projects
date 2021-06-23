async function bubble(){
    console.log('In Bubble()');
    const ele = document.querySelectorAll('.bar');
    for(let i=0; i<ele.length-1; ++i){
        console.log(`In ${i}th loop`);
        for(let j=0; j<ele.length-i-1;++j){
        console.log('In jth loop');
        ele[j].style.background= 'rgb(242, 255, 3)';                        //yellow
        ele[j+1].style.background= 'rgb(242, 255, 3)';                      //yellow
        await waitforme(delay+60);


        if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
            console.log('In if condition');
            swap(ele[j], ele[j+1]);
        }
        ele[j].style.background = 'rgb(0, 255, 255)';                          //cyan
        ele[j+1].style.background = 'rgb(0, 255, 255)';                        //cyan
        }
        ele[ele.length-i-1].style.background = 'rgb(5, 250, 30)';               //lightgreen
    }
    ele[0].style.background = 'rgb(5, 250, 30)';                                //lightgreen
}


const bubbleBtn = document.querySelector('.bubble');
bubbleBtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});