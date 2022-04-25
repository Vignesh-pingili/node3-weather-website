const request = require('request')

const weatherapp = (a,b,callback)=>{
  const url = "http://api.weatherstack.com/current?access_key=0fa7f7f3d27b418f0087acd72c56eb56&query="+a+","+b
request({url,json:true},(error,{body})=>{
  if(error){
    callback('unable to connect to weather app',undefined)
  }else if(body.error){
    callback("invalid location is passed!",undefined)
  }else{
    
  callback(undefined, body.current.weather_descriptions+".  it is currently  "+body.current.temperature+"  degress out . it feels like  "+body.current.feelslike+"  degress out   "+body.current.precip+"  % of chance of rain"+body.current.humidity+"humidity")
  }
})

}


module.exports = weatherapp



 // Goal: Wire up /weather
 
 // 1. Require geocode/forecast into app.js
 // 2. Use the address to geocode
 // 3. Use the coordinates to get forecast
 // 4. Send back the real forecast and location
 