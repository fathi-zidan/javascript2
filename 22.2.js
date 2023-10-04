const box = document.getElementById('cBox');
const img = document.getElementById('photo');

box.addEventListener('change',()=>{
    if(box.checked){
        img.style.display = 'block';
    }else{
        img.style.display = 'none';
    }
});