const request =require('request')

const forecast =(latitude,longtitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=ebe2809a4c9a40376360f138688d5253&query='+latitude+','+longtitude+'&units=f'

    request({url,json:true},(error ,{body})=>{
    if(error){
     callback('Unable to connect to weather service!',undefined)
    }else if (body.error){
      callback('Unable to find location',undefined)
    } else{
        callback(undefined,body.current.weather_descriptions[0]+".It is currently "+body.current.temperature+" degrees out. It feels like "+body.current.feelslike+" degrees out.The humidity is " + body.current.humidity + "%.")
    }
    })
     
}

module.exports=forecast