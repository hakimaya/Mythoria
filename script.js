const menubutton = document.querySelector("#menu-toggle");
//menu button ka tkhlina nwslo ldak element html li fih id menu-toggle
const menu=document.queryselector("#menu");
//lmenu li ayban 
menubutton.addEventListener("click",function(){
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");

    const isopen = !menu.classList.contains("hidden");
    menubutton.setAttribute("aria-expanded",String(isOpen))
})
lucide.createIcons();