const Togglebtn = document.querySelector('.toggle-icon');
const Navlinks = document.querySelector('.navbar-links');
 
// Togglebtn.addEventListener('click',()=>{
//     if(Navlinks.classList.contains('show-links') === false ){
//         Navlinks.classList.add('show-links')
//     }else{
//         Navlinks.classList.remove('show-links')
//     }
    
// })

Togglebtn.addEventListener('click',()=>{
    Navlinks.classList.toggle('show-links')
})