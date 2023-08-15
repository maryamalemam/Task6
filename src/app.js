 const mongodb = require ('mongodb')

 const mongoClient = mongodb.MongoClient

 const connectionUrl = 'mongodb://127.0.0.1:27017' 

 const dbname = 'proj-1'

 mongoClient.connect(connectionUrl , (error , res1) =>{
    if(error) {
      return console.log('error')
    }
     console.log('ok')

     const db = res1.db(dbname)
 

 ////////////////////////////////////////////////////////////

 //1
 
 db.collection ('persons').insertOne(
 
     {
      name : 'Hassan',
      age : 35
     }
  

  ) , (error , data)=>{
    if(error){
      console.log('Unable to insert data')
    }
    console.log(data.insertedCount)
  }
   
  db.collection ('persons').insertOne(
 
   
    {
      name : 'Maged',
      age : 28
    }

  ) , (error , data)=>{
    if(error){
      console.log('Unable to insert data')
    }
    console.log(data.insertedCount)
  }

 ////////////////////////////////////////////////////////////////

 //2 

 db.collection ('persons').insertMany(
  [
    {
      name : 'khalil',
      age : 25
      
    },
    {
      name : 'Noor',
      age : 29
      
    },
    {
      name : 'Hend',
      age : 25
      
    },
    {
      name : 'Esraa',
      age : 27
      
    },
    {
      name : 'Ahmad',
      age : 25
      
    }, 
    {
      name : 'Ziad',
      age : 26
      
    },
    {
      name : 'Gammal',
      age : 30
      
    },
    {
      name : 'khalel',
      age : 21
      
    },
    {
      name : 'Mahmoud',
      age : 25
      
    },
    {
      name : 'yassin',
      age : 25
      
    },

  ]) , (error , data)=>{
    if(error){
      console.log('Unable to insert data')
    }
    console.log(data.insertedCount)
  }

  //////////////////////////////////////////////////////////
 
  //3
  db.collection('persons').find({age:25}).toArray((error , persons)=>{
    if(error) {
      console.log(error)
    }
    console.log(persons)
  })

  //////////////////////////////////////////////////////////

  //4
  db.collection('persons').find({age:25}).limit(3).toArray((error , persons)=>{
    if(error) {
      return console.log('error has occured')
    }
    console.log(persons)
  })

 ///////////////////////////////////////////////////////////

 //5
//  db.collection('persons').updateMany({},{
//   $set :{name : 'Asis' } ,
//   $set :{name : 'Marwa' } ,
//    $set :{name : 'Marwa' } ,
//   $set :{name : 'Hannen' }, 

//  })

db.collection('persons').updateOne({_id:mongodb.ObjectId("64db56f18f7e4d40f7d7c18f")},{
  $set :{name : 'Asis' } 
 })
 
 .then((data1)=>{console.log(data1.modifiedCount)})
 .catch((error)=> {console.log(error)})

 db.collection('persons').updateOne({_id:mongodb.ObjectId("64db56f18f7e4d40f7d7c190")},{
  $set :{name : 'Marwa' } 
 })

 .then((data1)=>{console.log(data1.modifiedCount)})
 .catch((error)=> {console.log(error)})

 db.collection('persons').updateOne({_id:mongodb.ObjectId("64db56f18f7e4d40f7d7c191")},{
  $set :{name : 'Hannen' }
 })

 .then((data1)=>{console.log(data1.modifiedCount)})
 .catch((error)=> {console.log(error)})

 db.collection('persons').updateOne({_id:mongodb.ObjectId("64db56f18f7e4d40f7d7c192")},{
  $set :{name : 'Kholod' }
 })

 .then((data1)=>{console.log(data1.modifiedCount)})
 .catch((error)=> {console.log(error)})


 ///////////////////////////////////////////////////////////

 //6
 db.collection('persons').updateOne({_id:mongodb.ObjectId("64db52ee117abcb840fbf698")},{
  $inc : {age:20}
 })

 .then((data1)=>{console.log(data1.modifiedCount)})
 .catch((error)=> {console.log(error)})


 ////////////////////////////////////////////////////////////
 
 //7
 db.collection('persons').updateMany({},{
  $inc : {age:10}
 })

 .then((data1)=>{console.log(data1.modifiedCount)})
 .catch((error)=> {console.log(error)})


 //////////////////////////////////////////////////////////////

//8 
db.collection('persons').deleteOne({_id:mongodb.ObjectId("64db52ee117abcb840fbf698")})
 .then((data1)=>{console.log(data1.deletedCount)})
 .catch((error)=> {console.log(error)})

////////////////////////////////////////////////////////////////

//9
db.collection('persons').deleteMany({age:35})
 .then((data1)=>{console.log(data1.deletedCount)})
 .catch((error)=> {console.log(error)})
















  })