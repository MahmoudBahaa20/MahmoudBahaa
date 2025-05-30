let Links =document.querySelectorAll("nav ul a");
let sections=document.querySelectorAll("section")
var typed=new Typed("#element",{
    strings:["Mahmoud Bahaa","Developer","Designer","Communication Engineer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})




const x=$("#About").offset().top;

$(window).on("scroll",function(){
    if($(window).scrollTop()>x){
$(".navbar").addClass("nav-fixed")
$(".scroll-top").fadeIn(500)
    }else{
$(".navbar").removeClass("nav-fixed")
$(".scroll-top").fadeOut(500)

    }
})
$(".scroll-top").on("click",function(){
    $("html").animate({scrollTop : 0},20)
})
$(".navbar ul a").on("click",function(){
    const currentSection=$(this).attr("href");
const sections=$(currentSection).offset().top
    $("html,body").animate({scrollTop:sections},200)
})
jQuery(function(){
    $(".loading").fadeOut(3000,function(){
        $("body").css({overflow:"auto"})
    })
})
 
for(var i=0;i<Links.length;i++){
    Links[i].addEventListener("click",function(e){
var activeLinks=document.querySelector("nav ul .active");
activeLinks.classList.remove("active");
e.target.classList.add("active");
    })
}
function scrollTracker(){
    const currentYscroll=window.scrollY;
    sections.forEach((sec)=>{
        const sectionHeight=sec.offsetHeight;
        const sectionTop=sec.offsetTop;
        const sectionId=sec.getAttribute("id");
        const navLinks=document.querySelector(`.navbar ul a[href*="#${sectionId}"]`)
        if(currentYscroll>sectionTop && currentYscroll <= sectionTop + sectionHeight){
            
            navLinks.classList.add("active")
        }else{
            navLinks.classList.remove("active")  
        }
    })
}
window.addEventListener("scroll",scrollTracker);

$("aside ul li").on("click",function(){
   $(".icon").fadeIn(20)
    let iconsWidth=$(".icon").outerWidth(true);
    if($("aside").css("left")==`0px`){
         
        $("aside").animate({"left":-iconsWidth},50)
    }else{
        $("aside").animate({"left":0},50)
    }   
})
$(".icon span").on("click",function(e){
    let color=$(e.target).css("backgroundColor")
    $("p,h2,h3,h4,h5").css("color",color)
})

$(".icon img").on("click",function(e){
    let image=$(e.target).attr("src")
    $("header").css("backgroundImage",`url(${image})`)
})
