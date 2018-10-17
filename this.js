function x(){
    console.log(this);
    }
    
    x();



// =========================================================================================================================


var x={
    company:'tajawal',
    getCompany:function(){
            console.log(this);
        }
    }
    
    x.getCompany();

// =========================================================================================================================


    function x(){
        console.log(this);
        this.company='tajawal';
        }
        
        x();
        console.log(company);
        


// =========================================================================================================================


        function company(){

            this.name='tajawal';
            this.address='egypt';
            console.log(this);
        
        }
        
        company();
        new company();




// =========================================================================================================================


        var project = {
            projectName:'hotel',
            team:['salama','mostafa','osama'],
            getTeam(){
                this.team.forEach(function(member){
                    console.log(member,' in ', this.projectName , 'team :) ');
                });
            }
        }
        
        project.getTeam()   //salama  in  undefined team :)
                            //mostafa  in  undefined team :) 
                            //osama  in  undefined team :)


// =========================================================================================================================




        var project = {
            projectName:'hotel',
            team:['salama','mostafa','osama'],
            getTeam(){
                this.team.forEach((function(member){
                    console.log(member,' in ', this.projectName , 'team :) ');
                }).bind(this));  //when bind 
            }
        }
        
        project.getTeam()    // salama  in  hotel team :) 
                            // mostafa  in  hotel team :) 
                            // osama  in  hotel team :)

// =========================================================================================================================


function Vehicle(make, model, color) {
    this.make = make,
    this.model = model,
    this.color = color,
    this.getName = function() {
        return this.make + " " + this.model;
    }
    console.log(this.make)
    console.log(this.model)
    console.log(this.color)
}


Vehicle("toyota" , "corolla" , "black");


// <===============================================================>
                //  this here is implicit binding //
// <===============================================================>

function foo(){
    console.log(this.bar);
}
var bar = "bar1"
var O2 ={bar:"bar2" , foo:foo}
var O3 ={bar:"bar3" , foo:foo}

foo(); //bar1
O2.foo();//bar2
O3.foo();//bar3

// <===============================================================>
                //  this here is explicit binding //
// <===============================================================>

var O4 ={bar:"bar4"};

foo();
foo.call(O4) //bar4
foo.call(O2) //bar2

// <===============================================================>
                //  this here is hard binding //
// <===============================================================>


function foo(){
    console.log(this.bar);
}

var obj = {bar :"h-bar"};
var obj2 = {bar :"h2-bar"};

var orig = foo ;

foo = function(){
    orig.call(obj);
}

foo();
foo.call(obj2);