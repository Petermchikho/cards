
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
        
      } 
    }
    window.addEventListener('load', headerScrolled);
    document.addEventListener('scroll',headerScrolled);
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
 auto complete
=================================================================================
*/
//https://restcountries.com/v3.1/all

const inputField=document.getElementById('search-input');
inputField.addEventListener('input',onInputChange);

//an array to hold the data
let countryNames=["South Africa","Svalbard and Jan Mayen","Samoa","Gambia","Saint Kitts and Nevis","Monaco",
"Aruba","Guinea-Bissau","North Korea","Paraguay", "Bermuda", "Republic of the Congo", "United States Virgin Islands",
"Antigua and Barbuda", "United Kingdom", "Mozambique", "Martinique", "British Virgin Islands", "Somalia", "Montserrat",
"Northern Mariana Islands", "Singapore","Turks and Caicos Islands","Nicaragua","Norfolk Island","Saint Vincent and the Grenadines",
"Peru","Mexico","Equatorial Guinea","Bosnia and Herzegovina","Bahrain","Macau","Barbados","Uzbekistan","Réunion","China","Malawi",
"Zimbabwe","Spain","Kenya","Pakistan","Christmas Island","Fiji","Eswatini","Jersey","Taiwan","Sri Lanka","Belarus","United Arab Emirates",
"Curaçao","Costa Rica","Angola","Uruguay","DR Congo","Kuwait","Turkey","Mauritania","Tuvalu","Panama","Egypt","Saint Lucia","Azerbaijan",
"Rwanda","Senegal","India","Iceland","Suriname","Bulgaria","Micronesia","Kosovo","Sierra Leone","Tunisia","Cuba","Trinidad and Tobago",
"Comoros","Nauru","Saint Helena, Ascension and Tristan da Cunha","Romania","Marshall Islands","Nepal","Ecuador","Gabon","Saudi Arabia",
"Dominican Republic","Saint Pierre and Miquelon","Faroe Islands","Kiribati","Vanuatu","Hungary","South Georgia","Yemen","French Guiana",
"Seychelles","American Samoa","Cyprus","Libya","Israel","Vietnam","Slovenia","Iran","Namibia","Greece","Lebanon","Malaysia","Mongolia",
"Åland Islands","Georgia","Tajikistan","Albania","Dominica","Turkmenistan","Colombia","Heard Island and McDonald Islands",
"Venezuela","Guinea","South Sudan","Ukraine","Slovakia","Italy","Falkland Islands","Guadeloupe","Honduras","Montenegro","Estonia","Brazil","Mauritius","Thailand","Bolivia",
"Sweden","Guernsey","Zambia","Eritrea","Kazakhstan","Morocco","Jordan","Myanmar","San Marino","Palau","Mayotte","United States Minor Outlying Islands","Czechia","Jamaica",
"Kyrgyzstan","Sudan","São Tomé and Príncipe","Gibraltar","Niger","Caribbean Netherlands","Australia","Luxembourg","Sint Maarten","Lesotho","Poland","Guam","Japan","Liberia",
"Cape Verde","Isle of Man","Burundi","Papua New Guinea","Uganda","Afghanistan","Wallis and Futuna","Central African Republic","Vatican City","France","United States","Timor-Leste",
"Botswana","Austria","Belgium","Greenland","Portugal","Laos","Guatemala","Liechtenstein","Solomon Islands","Switzerland","Palestine","Ireland","Saint Martin","Syria","Bangladesh",
"Djibouti","Ghana","Denmark","Oman","Bouvet Island","Bahamas","Algeria","Haiti","Ivory Coast","El Salvador","Netherlands","Philippines","Grenada","Norway","Cook Islands","Andorra","Cocos (Keeling) Islands"
,"Mali","Tokelau","Tonga","Benin","Togo","Madagascar","Anguilla","Canada","Armenia","British Indian Ocean Territory","Nigeria","Belize","Saint Barthélemy","Lithuania","New Caledonia",
"Russia","Cayman Islands","Moldova","Croatia","Serbia","Malta","French Polynesia","Latvia","Chile","Finland","Germany","New Zealand","Antarctica","Indonesia","Maldives","Pitcairn Islands","Cameroon",
"Western Sahara","Brunei","Guyana","Tanzania","Chad","French Southern and Antarctic Lands","Cambodia","Qatar","Argentina","Iraq","Bhutan","Niue","South Korea","Hong Kong","North Macedonia","Burkina Faso","Puerto Rico","Ethiopia",
"kasungu","Dedza","Dowa","Lilongwe","Mchinji","Nkhotakota","Ntcheu","Ntchisi","Salima","Chitipa","Karonga","Likoma","Mzimba","Nkhata Bay",
"Rumphi","Balaka","Blantyre","Chikwawa","Chiradzulu","Machinga","Mangochi","Mulanje","Mwanza","Nsanje","Thyolo","Phalombe","Zomba","Neno"];
/*
let array=[];
async function getCountryData(){
  console.log('success');
  const countryResponse= await fetch("https://restcountries.com/v3.1/all");
  //pass the json data into a javascript array
  const data= await countryResponse.json();
  //this will loop over the countries
   countryNames= data.map((country)=>{
    //this will return just the strings of the name
    return country.name.common;

   });
   console.log(countryNames);
};*/

function onInputChange(){
  removeAutoCompleteDropdown();
  let value=inputField.value.toLowerCase();
  //if no input data dont show a list
  if(value.length===0){
    return;
  };
  let filteredNames=[];
  //this will pass the country with similar letter to the filtered names array
  countryNames.forEach((countryName)=>{
    if(countryName.substring(0,value.length).toLowerCase()===value){
      filteredNames.push(countryName);
    };
  });
  createAutoCompleteDropdown(filteredNames);
};
//this function list == filtered names 
function createAutoCompleteDropdown(list){
  const listElement=document.createElement("ul");
  listElement.id="auto-suggestion-list";
  list.forEach((country)=>{
    
    const listItem=document.createElement("li");
    listItem.innerText=country;
    listItem.addEventListener('click',onListItemClick);
    listElement.appendChild(listItem);
  });
  const autoSuggestionContainer=document.getElementById('auto-suggestion');
  autoSuggestionContainer.appendChild(listElement);

};
function removeAutoCompleteDropdown(){
  const listElement=document.getElementById("auto-suggestion-list");
  if(listElement){
    listElement.remove();
  }
};
function onListItemClick(e){
 const listItem=e.target;
 inputField.value=listItem.innerText;
 removeAutoCompleteDropdown();

}

//location js

const inputFieldLocation=document.querySelector('#id_location');
inputFieldLocation.addEventListener('input',onInputChangeLocation);
function onInputChangeLocation(){
  removeAutoCompleteDropdownLocation();
  let value=inputFieldLocation.value.toLowerCase();
  //if no input data dont show a list
  if(value.length===0){
    return;
  };
  let filteredNames=[];
  //this will pass the country with similar letter to the filtered names array
  countryNames.forEach((countryName)=>{
    if(countryName.substring(0,value.length).toLowerCase()===value){
      filteredNames.push(countryName);
    };
  });
  createAutoCompleteDropdownLocation(filteredNames);
};
//this function list == filtered names 
function createAutoCompleteDropdownLocation(list){
  const listElement=document.createElement("ul");
  listElement.id="auto-suggestion-list-location";
  list.forEach((country)=>{
    
    const listItem=document.createElement("li");
    listItem.innerText=country;
    listItem.addEventListener('click',onListItemClickLocation);
    listElement.appendChild(listItem);
  });
  const autoSuggestionContainer=document.getElementById('auto-suggestion-location');
  autoSuggestionContainer.appendChild(listElement);

};
function removeAutoCompleteDropdownLocation(){
  const listElement=document.getElementById("auto-suggestion-list-location");
  if(listElement){
    listElement.remove();
  }
};
function onListItemClickLocation(e){
 const listItem=e.target;
 inputFieldLocation.value=listItem.innerText;
 removeAutoCompleteDropdownLocation();

}
