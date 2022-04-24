const request = require("request")

const geocode =  (address,callback) =>{
  const url= "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoidmlnbmVzaHJlZGR5IiwiYSI6ImNsMXl2ZGJmZDBnbGMzYnFmOXA3aXF0ZjIifQ.pXk2vXAM5qdJWPE7JRtMNw&limit=1"

  // const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/hyderabad.json?access_token=pk.eyJ1IjoidmlnbmVzaHJlZGR5IiwiYSI6ImNsMXl2ZGJmZDBnbGMzYnFmOXA3aXF0ZjIifQ.pXk2vXAM5qdJWPE7JRtMNw&limit=1"
  request({url,json:true},(error,{body})=>{
    if(error){
      callback('unable to connect to the service!',undefined)
    }else if(body.features.length === 0){
      callback('unable to find the location vignesh',undefined)
    }else{
      callback(undefined,{
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location : body.features[0].place_name
      })
    }
  })

}

module.exports = geocode


// // const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmlnbmVzaHJlZGR5IiwiYSI6ImNsMXl2ZGJmZDBnbGMzYnFmOXA3aXF0ZjIifQ.pXk2vXAM5qdJWPE7JRtMNw"

// const geocodeURL="https://api.mapbox.com/geocoding/v5/mapbox.places/hyderabad.json?access_token=pk.eyJ1IjoidmlnbmVzaHJlZGR5IiwiYSI6ImNsMXl2ZGJmZDBnbGMzYnFmOXA3aXF0ZjIifQ.pXk2vXAM5qdJWPE7JRtMNw&limit=1"

// request({url:geocodeURL,json:true},(error,response)=>{
//   if(error){
//     console.log("unable to connect weather app")
//   }else if(response.body.features.length ===0){
//     console.log("unable to find location")
//   }else{
//   const longitude = response.body.features[0].center[0]
//   const latitude = response.body.features[0].center[0]
//   console.log(longitude)
//   console.log(latitude)
//   }
// })



