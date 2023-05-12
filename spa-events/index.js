
// window events 

//  load event: dies wurde abgefeuert wenn das fenster loaded oder wenn wir herunterlade 

window.addEventListener('load',()=>{

});

// resize event: dies wurde abgefeuert wenn die größe des fenesters geändert wurde  

window.addEventListener('resize', ()=>{

});

// forms events 

// focus event wird abgefeuert wenn wit einen befehl in einem form selektieren 

const form = document.getElementById('input');

const userName = document.querySelector('.userName');

userName.addEventListener('focus', ()=>{
   
});

// blur event ist der gegenteil des focus events , dh : wird abgefeuert wenn wir den befehl verlassen

userName.addEventListener ('blur', ()=>{

});

// submit event : wird abgefeuert wenn wir den formular verschicken 

userName.addEventListener('submit',()=> {

});


// change event : wird abgefeuert wenn der benutzer was ändert , zb in einem feld schreiben.

userName.addEventListener('change', ()=>{

});

// click event : wird abgefeuert wenn wir auf einen element drücken 

userName.addEventListener('click', ()=>{

});


//  mouse events 

// mousemove event : wird abgefeuert wenn der benuzer das mouse innerhalb selektierte element bewegt 

userName.addEventListener('mousemove',()=>{
    console.log('text');
});

// mouseover event : wird abgefeuert wenn der benutzer auf einen seletierten element anhält.

userName.addEventListener('mousover' , ()=> {

});

// mouseout event : ist der gegenteil von mouseover event,dh : wird abgefeuert wenn den benutzer den element verlässt ;

userName.addEventListener('mouseout', ()=>{

});

// mousedown event : wird abgefeuert wenn die mousetaste gedückt wird ;

userName.addEventListener('mousedown',()=>{

})

// mouseup event : ist der gegenteil von mousedown event, dh : wird abgefeuert wenn der benutzer die mousetaste loslässt 

userName.addEventListener('mouseup',()=>{

})

// wheel event : wird abgefeuert wenn der benuzer den maouserad scrollt 

userName.addEventListener('wheel',()=>{

})


