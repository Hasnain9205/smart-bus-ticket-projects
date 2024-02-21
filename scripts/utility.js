
function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}



function bookingSuccessByHidden(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function bookingSuccessByShow(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
