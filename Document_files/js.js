/*
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
  
let $ = (string) => document.getElementById(string)
const dateFrom = $("from");
const dateTo = $("to");
const btnSearchByDate = $("search-btn");
const inputSearch = $("hotel-name");
const btnSearchByName = $("filter-name-btn");
const btnSelectBy = $ ("sort");

var resultHotel = [];




function sortBy(){
    var e = document.getElementById("sort");
    var value = btnSelectBy.options[btnSelectBy.selectedIndex].value;
    // var text = btnSelectBy.options[btnSelectBy.selectedIndex].text;

    if(value == "name"){
        sortingBy("name");
    }else if(value == "price"){
        sortingBy("price");
    }else{
        sortingBy("rate");
    }
}



//this method for Sorting ===========================================>
function sortingBy(option){
  resultHotel = resultHotel.sort((a, b)=>{
      var itemA = a[option];
      var itemB = b[option];
      return itemA < itemB ? -1 : itemA > itemB ? 1 : 0;
    });
    // console.log(resultHotel)
    display();
}





//this method for searching by Date ===========================================>
function filterHotels(){
    resultHotel= [];
   const start = new Date (dateFrom.value).getTime();
   const end = new Date (dateTo.value).getTime();
    if(start <= end){
        hotels.filter((hotel)=>{
            hotel.availability.map(date =>{
                let fromString = date.from.split('-');
                let toString = date.to.split('-');
                // console.log(fromString)
                let fromDate = new Date(fromString[2], fromString[1]-1, fromString[0]);
                let toDate = new Date(toString[2], toString[1]-1, toString[0]);
                // console.log("fffrommmmmm", fromDate.getTime() > start)     
                // console.log("tttttt00000", toDate.getTime() < end)     
                if(fromDate.getTime() >= start && toDate.getTime() <= end)
                {
                    // console.log("1111111111111111111111111",hotel)
                    resultHotel.push(hotel);
                }
            })
        })            
    }else{
        alert("Select Correct Range")
    }
    console.log(resultHotel)
    display();
}

//this method for searching by Name ===========================================>
function filterByName(){
    if(inputSearch.value !== ""){
        resultHotel= [];
        console.log(inputSearch.value);
         result = hotels.filter((hotel) =>{
            if( hotel.name.toLocaleLowerCase().indexOf(inputSearch.value.toLocaleLowerCase())>-1){
                return hotel;
            }
        })
        inputSearch.value="";
        console.log(result);
        resultHotel = result
        display();
    }else{
      alerts("Add your Search")
    }
    
}

//this method for Display Data ===========================================>
function display(){
    const hotelsDisplayTable =  document.querySelector(".hotels");
    // console.log(hotelsDisplayTable);
    let result = "";
    resultHotel.forEach(hotel => {result +=`<tr>
    <td>${hotel.name}</td>
    <td>${hotel.price}</td>
    <td>${hotel.rate}</td>
    </tr>` })
    // console.log(result);
    hotelsDisplayTable.innerHTML= result;
    
}

function alerts(alrtMsg , time){
  // const alerts = document.querySelector(".alerts");
  // console.log(alerts);
var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function(){ div.style.display = "none"; }, 600);
    }
}
}

const alertss = document.querySelector(".alerts");
  console.log(alertss);


btnSearchByDate.addEventListener("click", filterHotels)
btnSearchByName.addEventListener("click" , filterByName)