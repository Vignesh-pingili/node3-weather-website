const geocode = require('./utils/geocode')
const weatherapp = require('./utils/wetherapp')
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
//define path for express config
const publicDirpath = path.join(__dirname,'../public')
const viewpath = path.join(__dirname,'../vignesh/views/')
const partialspath = path.join(__dirname,'../vignesh/partials/')
//setup handlerbars engine and views locaton
app.set('view engine','hbs')
app.set('views',viewpath)
hbs.registerPartials(partialspath)

//setup static directory to serve
app.use(express.static(publicDirpath))

app.get('/',(req,res)=>{
  res.render('index',{
    title:"working",
    name:"vignesh reddy"
  })
})

app.get('/about',(req,res)=>{
  res.render('about',{
    title:'about',
    name:"its me again"
  })
})

app.get('/help',(req,res)=>{
  res.render('help',{
    title:'help',
    name:'vignesh'
  })
})
app.get('/weather',(req,res)=>{
  const address = req.query.address
 if(!address){
   return res.send({
     error:'you must provide an address value'
   })
 }else{
  geocode(address,(error,{latitude,longitude,location} = {})=>{
    if(error){
      return res.send(error)
    }
    weatherapp(latitude,longitude,(error,forcastData)=>{
      if(error){
        return res.send(error)
      }
      res.send({
        location :location,
        forcastData : forcastData
      })
     
    })
  
  })
 }
 

})
//  address:req.query.address


app.get('/products',(req,res)=>{
  if(!req.query.search){
    return res.send({
      error:'you must add a srearch term'
    })
  }
  res.send({
    products:[]
  })
})


app.get('/help/*',(req,res)=>{
  res.render('helperror',{
    error_name:'help artical not found'
  })
})
app.get('*',(req,res)=>{
  res.render('anyerror',{
    error_name:"error 404"
  })
})

// app.get('/', (req, res) => {
//   res.send('<h1>weather</h1>')
// })
// app.get('/about',(req,res)=>{
//   res.send("<h2>this is about title</h2>")
// })

app.get('')
app.listen(3000,()=>{
  console.log('server is up on port 3000')
})