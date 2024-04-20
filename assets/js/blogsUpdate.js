/**
 * =================================================================================
 * RULE OF THUMB ALWAYS CREATE YOUR VARIABLES WITH THE ID ,CLASSES GET CHANGED OFTENLY
 * =================================================================================
 */


/**
 * =================================================================================
 * header style 
 * =================================================================================
 * */

const header=document.getElementById('header');

if (header) {
    const headerScrolled = () => {
      if (window.scrollY > 30) {
          header.classList.add('header-scrolled');
      } else {
          header.classList.remove('header-scrolled');
      }
    }
    window.addEventListener('load', headerScrolled);
    document.addEventListener('scroll',headerScrolled);
}
/**
   * Back to top button
   */
const backtotop =document.getElementById('back-to-top');
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active')
    } else {
      backtotop.classList.remove('active')
    }
  }
  window.addEventListener('load', toggleBacktotop)
  document.addEventListener('scroll',toggleBacktotop);
}



/*
=================================================================================
 opening and closing the navigation for small screens 
=================================================================================
*/
const closeNav=document.getElementById('close-nav');
const openNav=document.getElementById('harmburger');

const nav=document.getElementById('nav-container');

openNav.addEventListener('click',function(){
  nav.classList.toggle('show');
})

closeNav.addEventListener('click',function(){
  nav.classList.toggle('show');
})
/*
=================================================================================
 closing the navigation for small screens on click on the transparent area
 closing the profile for small screens on click on the transparent area
=================================================================================
*/
const clearArea=document.querySelector('.click-area');
const section=document.querySelector('section');
window.addEventListener('click',function(e){
  if(e.target === nav){
    nav.classList.remove('show');
  }
  
})
/*
=================================================================================
 search
=================================================================================
*/
const searchOpen=document.getElementById('search-open');
const searchClose=document.getElementById('search-close');
const searchForm=document.getElementById('search-form');

searchOpen.addEventListener('click',function(){
  searchForm.classList.toggle('show');
});
searchClose.addEventListener('click',function(){
  searchForm.classList.remove('show');
});
window.addEventListener("click",function(e){
  if(e.target === searchForm.querySelector(".filter")){
    searchForm.classList.remove('show');
  }
})
/*
=================================================================================
 small screen nav
=================================================================================
*/
const dropDowns=document.getElementsByClassName("dropdown");

for(let i = 0;i<dropDowns.length;i++){
  dropDowns[i].addEventListener("click",function(){
    
     if(this.querySelector(".dropDown-inner").classList.contains('dropdown-active')===false){
         for(let x = 0;x<dropDowns.length;x++){
            dropDowns[x].querySelector(".dropDown-inner").classList.remove('dropdown-active');
         }
      this.querySelector(".dropDown-inner").classList.add('dropdown-active');
     }else{
      this.querySelector(".dropDown-inner").classList.remove('dropdown-active')
     }
  })
}
/*
===
document.getElementById("dropdown").addEventListener("click",function(){
  document.getElementById("DropDown").classList.toggle('dropdown-active')
})
*/
/*
=================================================================================
  view and closing
=================================================================================
*/


let eyeIcon=document.querySelector('.image-container').querySelector("img");
let eyeClose=document.querySelector(".eye-x");
let sectionImage=document.querySelector(".full-image");

eyeIcon.addEventListener("click",function(e){
  let dummy=document.querySelector(".dummy-view");
  dummy.innerHTML="";
  let SRC=this.getAttribute("src");
  console.log(SRC);
  let imageCopy=document.createElement("img");
  imageCopy.src=SRC;
  let imageHolder=document.createElement("div");
  imageHolder.className="image-holder-full";
  imageHolder.id="image-holder-full";
  imageHolder.appendChild(imageCopy);
  dummy.appendChild(imageHolder);
  sectionImage.classList.toggle("show"); 
})
let imageHolder=document.querySelector("#image-holder-full");
eyeClose.addEventListener("click",function(){
  sectionImage.classList.toggle("show");
});
window.addEventListener("click",function(e){
  if(e.target==sectionImage){
    sectionImage.classList.toggle("show");
  }
})
let authorShow=document.querySelector('#author-show');
let eyeCloseAuthor=document.querySelector(".eye-x-author");
let sectionImageAuthor=document.querySelector(".full-image-author");
authorShow.addEventListener("click",function(e){
  sectionImageAuthor.classList.toggle("show"); 
})
eyeCloseAuthor.addEventListener("click",function(){
  sectionImageAuthor.classList.toggle("show");
});
window.addEventListener("click",function(e){
  if(e.target==sectionImageAuthor){
    sectionImageAuthor.classList.toggle("show");
  }
})

/*
============================== PROGRESS BAR ====================================
*/
const progressBar=document.querySelector(".progress-bar");

function updateBar(){
  progressBar.style.width=`${((window.scrollY)/(document.body.scrollHeight-window.innerHeight) *100)}%`
  requestAnimationFrame(updateBar);
}
updateBar();
/*
=================================================================================
 preloader
=================================================================================
*/
const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }
