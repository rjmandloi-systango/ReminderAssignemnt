function clickHere() {
  var message = document.getElementById("txtid").value;
  if (message !== '') {
    let x = document.getElementById("printMessage");
    let time = document.getElementById("time").value;
    let totaltime = document.getElementById("totaltime").value;
    totaltime = totaltime * 60 * 1000;
    time = time * 1000;
    x.innerHTML = message;
    let myInput = message;

    
    let myUL = document.getElementsById("myUL");

    myUL.innerHTML = myUL.innerHTML+`<li>${message}</li>`;


    /*
    let li = document.createElement("li");
    let txtNode = document.createTextNode(myInput);
    li.appendChild(txtNode);
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";
    




    let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u274C");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
      
      document.getElementsByClassName("close").addEventListner("click",function (this){
        alert("alert chala");
      })
    */
        
        

    let k = setInterval(() => {

      let d = new Date();
      let t = d.getHours() + " :" + d.getMinutes() + " :" + d.getSeconds();
      x.innerHTML = x.innerHTML + "<br>" + message + " " + t;

    }, time);

    setTimeout(function () {
    
      clearInterval(k);
    }, totaltime);

  }
  else {
    alert("please enter something");
  }

}

