document.querySelector('#convert').addEventListener('click', function (e) { 

    fromNo = document.querySelector('#value').value;
    unit =  document.querySelector('#unit').value;

    if(unit === 'cm'){
        document.querySelector('#cm').innerText = `Centimetre: ${fromNo}cm` ;
        document.querySelector('#m').innerText = `Metre: ${fromNo/100}m` ;
        document.querySelector('#km').innerText = `Kilometre: ${fromNo/100000}km` ;
    }
    if(unit === 'm'){
        document.querySelector('#cm').innerText = `Centimetre: ${fromNo*100}cm` ;
        document.querySelector('#m').innerText = `Metre: ${fromNo}m` ;
        document.querySelector('#km').innerText = `Kilometre: ${fromNo/1000}km` ;
    }
    if(unit === 'km'){
        document.querySelector('#cm').innerText = `Centimetre: ${fromNo*100000}cm` ;
        document.querySelector('#m').innerText = `Metre: ${fromNo*1000}m` ;
        document.querySelector('#km').innerText = `Kilometre: ${fromNo}km` ;
    }
e.preventDefault();
 })