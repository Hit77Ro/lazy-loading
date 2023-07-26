let boxes = document.querySelectorAll(".box")  ; 


let observer = new IntersectionObserver(enteries=> {

  enteries.forEach(entery =>  { 
    const box = entery.target;

    if(!entery.isIntersecting) return ; 

    box.firstElementChild.src=box.firstElementChild.dataset.src;
    observer.unobserve(box) ;
  })

},{
  threshold:1 ,
  rootMargin:"100px" 

})




boxes.forEach(box=>observer.observe(box)) ;