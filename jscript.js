var e = new Date();

var da = e.getDay();
var day = ["Sun,","Mon,","Tue,","Wed,","Thu,","Fri,","Sat,"];
document.getElementById("day").innerHTML=day[da];

var dt = e.getDate();
document.getElementById("date").innerHTML=dt;

var mo = e.getMonth();
var mon = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
document.getElementById("month").innerHTML=mon[mo];

function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
    }
    throw new Error('Bad Hex');
}

function clock(){
    var a = new Date()
    var h = a.getHours();
    if(h > 12){
        h -= 12 ;
    };
    if(h < 10){
        h = "0"+h;
    };
    document.getElementById('hour').innerHTML=h;
    var red = Math.abs(Math.sin(a.getSeconds()) * 255);
    var green = Math.abs(Math.cos(a.getSeconds()) * 255);
    var blue = Math.abs(Math.cos(a.getSeconds()) * 255);
    console.log(red, green, blue);
    document.getElementById('hour').style.color = 'rgba(' + [red.toString(10), green.toString(10), blue.toString(10)].join(',') + ',1)';
    
    //document.getElementById('hour').style.color = hexToRgbA("#6DD89D") 255;
    var m = a.getMinutes();
    if(m < 10){
        m = "0"+m;
    };
    document.getElementById('minute').innerHTML=m;
    var red = Math.abs(Math.sin(a.getSeconds()) * 255);
    var green = Math.abs(Math.cos(a.getSeconds()) * 255);
    var blue = Math.abs(Math.sin(a.getSeconds()) * 255);
    document.getElementById('minute').style.color = 'rgba(' + [red.toString(10), green.toString(10), blue.toString(10)].join(',') + ',1)';
    var s = a.getSeconds();
    if(s < 10){
        s = "0"+s;
    };
    document.getElementById('sec').innerHTML=s;
    var red = Math.abs(Math.sin(a.getSeconds()) * 255);
    var green = Math.abs(Math.cos(a.getSeconds()) * 255);
    var blue = Math.abs(Math.sin(a.getSeconds()) * 255);
    document.getElementById('sec').style.color = 'rgba(' + [red.toString(10), green.toString(10), blue.toString(10)].join(',') + ',1)';

    var amp = a.getHours();
    if(amp >= 12 ){
        amp = "PM"
    }else{
        amp = "AM"
    };
    document.getElementById('meridian').innerHTML=amp;
    var red = Math.abs(Math.sin(a.getSeconds()) * 255);
    var green = Math.abs(Math.cos(a.getSeconds()) * 255);
    var blue = Math.abs(Math.cos(a.getSeconds()) * 255);
    document.getElementById('meridian').style.color = 'rgba(' + [red.toString(10), green.toString(10), blue.toString(10)].join(',') + ',1)';

 }
 
 setInterval(clock,1000);