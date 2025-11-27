const toggle = document.getElementById('toggle');
const navigation = document.getElementById('navigation');





// affichage du menu de navigation avec toggle

toggle.addEventListener('click', ()=>{
    navigation.classList.toggle("active");
    // navigation.style.display='flex';
    if (toggle.classList.contains('fa-bars')){
        toggle.classList.replace('fa-bars','fa-times')
    }
    else{
        toggle.classList.replace('fa-times','fa-bars')
    }
})





