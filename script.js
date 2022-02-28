function tiktok()
{

     var now = new Date();  
     var h = now.getHours();       
     var m = now.getMinutes();
     var s = now.getSeconds();

     m = checkTime(m);                                                                                                                                                                                    
     s = checkTime(s); 



     document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
     setTimeout(tiktok,1000);
   
     function checkTime(i) 
     {
          if (i < 10) return "0" + i;
          return i;

     }

var name = "Veronica";
    if (h <= 11)
    {
         
        var greet = "Good Morning" + " " + name + "." + " " + "Don't forget your coffee!";
    }

    if (h >= 12 && h <= 17)
    {
         
         var greet = "Good Afternoon"  + " " + name + "." + " "+ "Time to lift heavy.";
     }
 
     if (h >= 18 && h <= 24)
     {
         
         var greet = "Good evening"  + " " + name + "." + " " + "Sleep time is at 2200";
     }

     document.getElementById("greet").innerHTML = greet;


}

    


