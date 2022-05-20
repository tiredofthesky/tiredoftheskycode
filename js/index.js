const scroller = document.querySelector('.slider');
const itemWidth = document.querySelector('.slider-item').clientWidth;
var pogresh = 110;
setInterval(()=>{
    
    if (Math.ceil(scroller.scrollLeft) + pogresh < scroller.scrollWidth - itemWidth) {
        scroller.scrollBy({ left: itemWidth, top: 0, behavior: 'smooth' });
    } else {
        scroller.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    }
},2000)

