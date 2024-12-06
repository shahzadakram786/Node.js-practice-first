


const users = [
    { id: 1, name: "shahzad akram" },
    { id: 2, name: "ajaml islam" },
    { id: 3, name: "abbas khan" },
  ];

  // const usersId = [
  //   { name: "shahzad akram", lastName:'khan'},
  //   { name: "ajaml islam" ,  lastName:'ahmad'},
  //   { name: "abbas khan"  ,  lastName:'ali'},
  // ];
  



   for(let i = 0 ; i <= 3 ; i++){
    const prompt=require("prompt-sync")({sigint:true}); 

    let usersName = prompt("username");

    if(!users.id){
      users[users.length] = {id:users.length + 1 , name:usersName}
       console.log(users)
    }
    else{
      console.log('alredy exixts')
    }

 
   }

    // users[users.length] = {id:users.length + 1 , name:'ali akram'}
    // users[users.length] = {id:users.length + 1 , name:' akram'}

  // console.log(users)
 

  // }





  // console.log(users)

// users.push({id:4 , name: 'aliyan'})
// console.log(users)
  
// console.log(users[2])


// let id ;
// let id;

// for(let i = 0 ; i < users[i].length ; i++){

  
//   if(true){
//     console.log(users[i])
//   }
//  else{
//   console.log('no data')
//  }
// }

// adding data using lenth 


// users[users.length] = {id:4 , name:'ali akram'}
// console.log(users)


