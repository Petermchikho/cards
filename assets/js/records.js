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
/**/
const header=document.getElementById('header');

if (header) {
    const headerScrolled = () => {
      if (window.scrollY > 30) {
        if(header.classList.contains('header-scrolled')===false){
          header.classList.add('header-scrolled');
        }
        
      } else {
        if(profileDropDown.classList.contains('open')){
          header.classList.add('header-scrolled');
        }else{
          header.classList.remove('header-scrolled');
        }
        
      }
    }
    window.addEventListener('load', headerScrolled);
    document.addEventListener('scroll',headerScrolled);
}
header.addEventListener('click',function(){
    if (window.scrollY < 60 && profileDropDown.classList.contains('open')) {
      if(header.classList.contains('header-scrolled')===false){
        header.classList.add('header-scrolled');
      }
    }
  
  });
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
   else if(e.target === clearArea){
    profileDropDown.classList.remove('open');
  }else if(e.target === section){
    profileDropDown.classList.remove('open');
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
const marketNav=document.querySelector(".market-nav");
function scrollEventThrottle(fn) {
    let last_known_scroll_position = 0;
    let ticking = false;
    window.addEventListener("scroll", function () {
      let previous_known_scroll_position = last_known_scroll_position;
      last_known_scroll_position = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          fn(last_known_scroll_position, previous_known_scroll_position);
          ticking = false;
        });
        ticking = true;
      }
    });
  }
  
  // ## function invocation
  scrollEventThrottle((scrollPos, previousScrollPos) => {
      if (previousScrollPos > scrollPos) {
        marketNav.classList.add("show");
      } else {
        marketNav.classList.remove("show");
      }
  });
  const dropDownRecords= document.querySelectorAll(".bi-three-dots");
  for(let i =0 ;i<dropDownRecords.length;i++){
    dropDownRecords[i].addEventListener("click",function(){
         const parent=this.parentElement;
         if(parent.querySelector(".drop-down-record").classList.contains("show")===false){
              for(let x =0;x<dropDownRecords.length;x++){
                dropDownRecords[x].parentElement.querySelector(".drop-down-record").classList.remove("show");
              }
              parent.querySelector(".drop-down-record").classList.add("show");
          }else{
            parent.querySelector(".drop-down-record").classList.remove("show");
          }
        
        
    })
  }
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




