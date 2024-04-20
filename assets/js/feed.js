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
/*getCountryData();*/
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

/*
=================================================================================
 Accordion
=================================================================================
*/

const accordion=document.getElementsByClassName("question-answer");

for(let i = 0;i<accordion.length;i++){
  accordion[i].addEventListener("click",function(){
    
    if(this.classList.contains("open")===false){
      for(let x =0; x<accordion.length;x++){
        accordion[x].classList.remove("open");
      }
      this.classList.toggle("open");
      this.querySelector(".bi").classList.remove("bi-chevron-down");
      this.querySelector(".bi").classList.add("bi-chevron-up");
    }else{
      this.classList.toggle("open");
      this.querySelector(".bi").classList.add("bi-chevron-down");
      this.querySelector(".bi").classList.remove("bi-chevron-up");
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
/*
=================================================================================
 profile view and closing
=================================================================================
*/

const profile = document.getElementById('profile-after-login');
const profileDropDown = document.getElementById('profile-info-after-login');
const closeProfile=document.getElementById('close-profile');
profile.addEventListener('click',function(){
  profileDropDown.classList.toggle('open');
  if (window.scrollY < 60 && profileDropDown.classList.contains('open')) {
    if(header.classList.contains('header-scrolled')===false){
      header.classList.add('header-scrolled');
    }
  }

});
closeProfile.addEventListener('click',function(){
  profileDropDown.classList.toggle('open');

});

/*
=================================================================================
 feed forms
=================================================================================
*/

const leftSideNav=document.getElementById('left');
const knownQuantityInfo=document.getElementById('left-known-quantity');

leftSideNav.addEventListener('click',function(){
  expert.classList.remove('show');
  
  if(knownQuantityInfo.classList.contains('show')==false){
    knownQuantityInfo.classList.add('show');
  }else{
    knownQuantityInfo.classList.remove('show');
  }
  
})
leftSideNav.addEventListener('mouseover',function(){
  knownQuantityInfo.classList.add('show');
})
leftSideNav.addEventListener('mouseout',function(){
  knownQuantityInfo.classList.remove('show');
})

const rightSideNav=document.getElementById('right');

const expert=document.getElementById('expert');
rightSideNav.addEventListener('click',function(){
  knownQuantityInfo.classList.remove('show');
  if(expert.classList.contains('show')==false){
    expert.classList.add('show');
  }else{
    expert.classList.remove('show');

  }
  
})
rightSideNav.addEventListener('mouseover',function(){
  expert.classList.add('show');
})
rightSideNav.addEventListener('mouseout',function(){
  expert.classList.remove('show');
})





