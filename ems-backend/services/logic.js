//import db
 const db = require('./db')

 //get all employee details from mongodb

 const allEmployees = ()=>{
  return db.Employee.find().then((result)=>{
    if(result){
      return{
        statusCode:200,
        employee:result
      }
    }
    else{
      return{
        statusCode:404,
      message:"no data found"
      }
      
    }
  })
 }


 //add all employee details

 const addEmployees=(id,name,age,designation,salary)=>{
    return db.Employee.findOne({id}).then((result)=>{
      if(result){
        return{
          statusCode:401,
          message:'employee already exists'
        }
      }
      else{
        const newEmployee = new db.Employee({id,name,age,designation,salary})
        newEmployee.save()
        return{
          statusCode:200,
          message:'Employee added successfully'
        }
      }
    })
 }


 //delete a particular employee from database

 const deleteEmployee=(id)=>{
  return db.Employee.deleteOne({id}).then((result)=>{
    if(result){
    return{
      statusCode:200,
      message:'Employee details removed successfully'
    }
  }
  else{
    return{
      statusCode:404,
      message:'employee not found'
    }
  }
  })
 }

 //edit employee details

 const getAnEmp=(id)=>{
  return db.Employee.findOne({id}).then((result)=>{
    if(result){
      return{
        statusCode:200,
        employee:result
      }
    }
  })
 }

 //update details
 const updateAnEmp=(empId,id,name,age,designation,salary)=>{
  return db.Employee.findOne({id:empId}).then((result)=>{
    if(result){
      result.id = id
      result.name = name
      result.age = age
      result.designation = designation
      result.salary = salary
      result.save();//update in mongodb
        return{
          statusCode:200,
          message:'Employee details has been updated successfully'
        }
    }
    else{
      return{
        statusCode:401,
        message:'invalid Operation'
      }
    }
  })
 }





 module.exports={
  allEmployees,
  addEmployees,
  deleteEmployee,
  getAnEmp,
  updateAnEmp,
 }