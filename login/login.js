const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const open = document.querySelector(".btn-open");
const close = document.querySelector(".btn-close");

const openModal = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}


open.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//esc function
document.addEventListener("keydown", function(e){
    if(e.key === "Escape" && !modal.classList.contains("hidden")){
        closeModal()
    }
})