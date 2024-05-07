
        function eidCountDown(){
            var currentDate = new Date()
        var eidulDha = new Date('2024-06-16')

var difference = (eidulDha - currentDate)/1000

var days = Math.floor(difference/3600/24)
var hours = Math.floor(difference/3600)%24
var minutes = Math.floor(difference/60)%60
var seconds= Math.floor(difference)%60



document.getElementById('minutes').innerHTML = minutes
document.getElementById('hours').innerHTML = hours
document.getElementById('days').innerHTML = days
document.getElementById('seconds').innerHTML = seconds


        }
        eidCountDown()
       
      