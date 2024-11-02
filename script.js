let scrollContainer = document.querySelector(".gallary");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn")

scrollContainer.addEventListener("wheel",(e) =>{
    e.preventDefault();
    scrollContainer.scrollLeft -= e.deltaY;
    
    //this is for scrolling smoothly using wheel
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () =>{
    //this is for changing the page smoothly
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () =>{
        //this is for changing the page smoothly
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});