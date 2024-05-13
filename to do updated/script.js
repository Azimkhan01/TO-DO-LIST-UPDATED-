let listnames =[]
let dates = []
let descriptions = []
let i = 0 ;
let a=[],b=[],c=[];
document.getElementById("non").style.cssText = 'display:none'

function del(){
 document.getElementById("non").style.cssText = 'display:inline'
}
function add(){console.log(listname)
     a[i] =  document.getElementById("listname").value
 b[i]= document.getElementById("date").value
c[i]= document.getElementById("description").value  
listnames.push(a[i])
dates.push(b[i])
descriptions.push(c[i])
    let div = document.createElement("div")
    div.style.cssText = 'height:15%;width:98%;background-color:rgb(255,255,255,0.5);margin-left:20px;padding:10px;dispaly:flex;justify-content:space-evenly;flex-direction'
    div.id = "lists"+i
    document.getElementById("display").appendChild(div)
    let p = document.createElement("p")
    p.id = "para"+i
    document.getElementById("lists"+i).appendChild(p)
    document.querySelector("#para"+i).innerHTML = "List number:"+i+"<br>"+"List Name:"+listnames[i]+"<br>"+"Date:"+dates[i]+"<br>"+"Description:"+descriptions[i];
    ++i;
    del();
}
function dele(){
    let ask = prompt("Enter Which List Number You Want:")
    if(ask<=i){
      document.getElementById("lists"+ask).style.cssText = 'display:none'
    }
}
document.getElementById("prompt").style.cssText = 'display:none'
document.getElementById("error").style.cssText = 'display:none'
function upd(){
    document.getElementById("prompt").style.cssText = 'display:flex'
}
function updated(){
 let num = document.getElementById("listnum").value
    if(num<=i){

  let a =   document.getElementById("updatedlistname").value
   let b=  document.getElementById("updatedlistdate").value
   let c=  document.getElementById("updateddescription").value
   listnames[num] = a;
   dates[num] = b;
   descriptions[num] = c;
    document.querySelector("#para"+num).innerHTML = "List number:"+num+"<br>"+"List Name:"+a+"<br>"+"Date:"+b+"<br>"+"Description:"+c;
   setTimeout(()=>{document.getElementById("prompt").style.cssText = 'display:none'},1000) 
    }
    else{
        document.getElementById("error").style.cssText = 'display:flex'
        setTimeout(() => {
            document.getElementById("error").style.cssText = 'display:none'
            document.getElementById("prompt").style.cssText = 'display:none'
        },2000);
    }
}






