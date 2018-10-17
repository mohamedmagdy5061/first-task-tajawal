class User {

  constructor(name , email="abc.abc.com"){
    console.log(this)
    this.name = name;
    this.email = email;
    this.score = 0;
  }

  logIn(){
    console.log(`Welcome ${this.name} and  ${this.email} is Login`)
  }
  
  logOut(){
    console.log(`Welcome ${this.name} and  ${this.email} is logout`)
  }

  updateScore(){
    this.score ++;
  console.log(`${this.name} and my score is ${this.score}`)
  }
 }

 class Admin extends User{
 
   deleteUser(user,arr){
     users = users.filter(u =>{
       return u.name != user.name;
     })
   }
 }



 var userOne = new User("Ali" , "ali@abc.com");
 var userTwo = new User("Amr" , "amr@abc.com");
 var userThree = new User("ahmed");
 var adminUser = new Admin("megoo","megoo@AbortController.com")
 
 users = [userOne,userTwo,userThree]
