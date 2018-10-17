/*lodash momentjs TDZ searching what is that???
Phase 1:
  search for hotels available for selected dates
Phase 2:
  sorting and search functionality
Phase 3:
  add styling using css
Bonus:
  implement filters for price and rate
*/
const hotels = [
    {
      name: "Media One Hotel",
      price: 102.2,
      city: "dubai",
      rate: 4.1,
      availability: [
        {
          from: "10-10-2018",
          to: "15-10-2018"
        },
        {
          from: "25-10-2018",
          to: "15-11-2018"
        },
        {
          from: "10-12-2018",
          to: "15-12-2018"
        }
      ]
    },
    {
      name: "Rotana Hotel",
      price: 80.6,
      city: "cairo",
      rate: 4.0,
      availability: [
        {
          from: "10-10-2018",
          to: "12-10-2018"
        },
        {
          from: "25-10-2018",
          to: "10-11-2018"
        },
        {
          from: "05-12-2018",
          to: "18-12-2018"
        }
      ]
    },
    {
      name: "Le Meridien",
      price: 89.6,
      city: "london",
      rate: 4.5,
      availability: [
        {
          from: "01-10-2018",
          to: "12-10-2018"
        },
        {
          from: "05-10-2018",
          to: "10-11-2018"
        },
        {
          from: "05-12-2018",
          to: "28-12-2018"
        }
      ]
    },
    {
      name: "Golden Tulip",
      price: 109.6,
      city: "paris",
      rate: 4.4,
      availability: [
        {
          from: "04-10-2018",
          to: "17-10-2018"
        },
        {
          from: "16-10-2018",
          to: "11-11-2018"
        },
        {
          from: "01-12-2018",
          to: "09-12-2018"
        }
      ]
    },
    {
      name: "Novotel Hotel",
      price: 111,
      city: "Vienna",
      rate: 4.8,
      availability: [
        {
          from: "20-10-2018",
          to: "28-10-2018"
        },
        {
          from: "04-11-2018",
          to: "20-11-2018"
        },
        {
          from: "08-12-2018",
          to: "24-12-2018"
        }
      ]
    },
    {
      name: "Concorde Hotel",
      price: 79.4,
      city: "Manila",
      rate: 4.2,
      availability: [
        {
          from: "10-10-2018",
          to: "19-10-2018"
        },
        {
          from: "22-10-2018",
          to: "22-11-2018"
        },
        {
          from: "03-12-2018",
          to: "20-12-2018"
        }
      ]
    }
  ];
  
let $ = (string) => document.getElementById(string);
let $$ = (strings) => document.querySelector(strings);
const dateFrom = $("from");
const dateTo = $("to");
const btnSearchByDate = $("search-btn");
const inputSearch = $("hotel-name");
const btnSearchByName = $("filter-name-btn");
const btnSelectBy = $ ("sort");

const inputRange = $$(".slider")

var resultHotel = [];
var days = 1;




//this method for searching by Name ===========================================>
function SearchByName(){
  if(inputSearch.value !== ""){
    setTimeout(responsiveVoice.speak(inputSearch.value),0);
      resultHotel= [];
       result = hotels.filter((hotel) =>{
          if( hotel.name.toLocaleLowerCase().indexOf(inputSearch.value.toLocaleLowerCase()) > -1){
              return hotel;
          }
      })
      inputSearch.value="";
      resultHotel = result;
      display(result);
  }else{
    alerts("Add your Search",3000);
  }
  range();
  filterByPrice()
}



//this method for searching by Date ===========================================>
function searchHotelsByDate(){
   totalNight();
    resultHotel= [];
   const start = new Date (dateFrom.value).getTime();
   const end = new Date (dateTo.value).getTime();
    if(start <= end){
      resultHotel = hotels.filter((hotel)=>{
         let available = false
            hotel.availability.forEach( date =>{
              var availableFrom = new Date(date.from.split('-').reverse().join('-')).getTime();
              var availableTo = new Date(date.to.split('-').reverse().join('-')).getTime();
              if(start <= availableFrom && end >= availableTo ){
                return available = true
              }
                // let fromString = date.from.split('-');
                // let toString = date.to.split('-');
                // let fromDate = new Date(fromString[2], fromString[1]-1, fromString[0]);
                // let toDate = new Date(toString[2], toString[1]-1, toString[0]);
                // if(fromDate.getTime() >= start && toDate.getTime() <= end)
                // {
                //     // resultHotel.push(hotel);
                //     return available = true;
                // }

            })
            return available;
        })            
    }else{
        alerts("Select Correct Range",3000);
    }
    // console.log(resultHotel)
    display(resultHotel);
    range();
    filterByPrice();
}



//this method for Know num of day between two dates Alert ===========================================>
 function totalNight(){
  const start = new Date (dateFrom.value).getTime();
   const end = new Date (dateTo.value).getTime();
  let Night=start-end
  days = Math.round(Math.abs(Night/(1000*60*60*24)));
    if(days==0){
      days=1
    }
    // console.log(days)
    result =  resultHotel.forEach((hotel)=>{
       Math.floor(hotel.price = hotel.price*days);
      //  console.log(hotel);
    })
}



//this method for Sorting ===========================================>
function sortBy(){
  var option = btnSelectBy.options[btnSelectBy.selectedIndex].value;
  resultHotel = resultHotel.sort((a, b)=>{
      var itemA = a[option];
      var itemB = b[option];
      return itemA < itemB ? -1 : itemA > itemB ? 1 : 0;
    });
    display(resultHotel);
}

 
//this method for Filter By price Alert ===========================================>
function filterByPrice(){
  // inputRange = document.querySelector(".slider")
    inputRange.setAttribute("min",min);
    inputRange.setAttribute("max",max)
    // console.log(min ,max )
    var result = resultHotel.filter((hotel)=> {
      return hotel.price >= inputRange.value;
    })
      display(result);
}


//this method for know min & max Range ===========================================>
function range(){
min =Math.floor( Math.min.apply(null, resultHotel.map((item)=> {
  return item.price;
}))),
max = Math.round( Math.max.apply(null,resultHotel.map((item)=> {
  return item.price;
})));
// console.log(min , max)
}


//this method for Display Data ===========================================>
function display(arr){
  const hotelsDisplayTable =  document.querySelector(".hotels");
  // console.log(hotelsDisplayTable);
  let result = "";
  arr.forEach(hotel => {result +=`<tr>
  <td>${hotel.name}</td>
  <td>${Math.floor(hotel.price*days)}</td>
  <td>${hotel.rate}</td>
  </tr>` })
  hotelsDisplayTable.innerHTML= result;
}


//this method for general Alert ===========================================>
function alerts(alrtMsgs , time){
  const alrt = document.querySelector(".alerts");
  const alrtMsg = document.querySelector(".alrtMsg")
  console.log(alrt);
  alrt.style.opacity = "1";
  alrt.style.transform= "translateY(300px)"
  alrtMsg.textContent = alrtMsgs; 
  setTimeout(function(){ alrt.style.opacity = "0"; }, time); 
}



btnSearchByDate.addEventListener("click", searchHotelsByDate)
btnSearchByName.addEventListener("click" , SearchByName)
inputRange.addEventListener("change" , filterByPrice)


// =========================================================================================================================
