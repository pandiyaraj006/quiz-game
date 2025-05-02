let ind = parseInt(document.getElementById("question").getAttribute("class"));
let ind1 = parseInt(document.getElementById("op1").getAttribute("class"));
document.getElementById("option").addEventListener("click", function(event){
    if(event.target.type === "radio")
    {
        
        if(ind === 4) 
        {
            document.getElementById("btn2").style.display="block";
        }
        else
        {

            
            document.getElementById("btn").style.display="block";
        }
    }
});
const arr = ["Who will be the Next Prime Minister ? ","How many IPL cups have RCB won ? ","Mubai Indians Another Name ? ","who is the Best ODI player ?","Who is the Best Captain of all Time ? "];
const ans = ["Dhoni MS","Virat King","Rohit Hitu","Lolipop","404 Error","zero","Umpires Team","paltans","Ambani Money","Chase Master","Hitman","cool finisher","Aggresive Virat","tactical Sharma", "Captain Cool"];
const answer = ["A","A","B","B","C"];
document.getElementById("btn").addEventListener("click",function()
{
    document.getElementById("btn").style.display="none";
    document.getElementById("question").innerHTML=arr[ind];
   
    document.getElementById("op1").innerHTML=ans[ind1];
    document.getElementById("op2").innerHTML=ans[ind1+1];
    document.getElementById("op3").innerHTML=ans[ind1+2];
    ind1+=3;
    let radios = document.getElementsByName("option");
    for (let i = 0; i < radios.length; i++) 
    {
        if(radios[i].checked)
        {
            let val = radios[i].value;
            let ind2 = parseInt(document.getElementById("hover").getAttribute("class"));
            if(val===answer[ind2]) 
            {
               let m = parseInt(document.getElementById("zero").getAttribute("class"));
               m++;
               document.getElementById("zero").setAttribute("class",m);
            }
            radios[i].checked = false;
            ind2++;
            document.getElementById("hover").setAttribute("class",ind2);
            break;
        }
    }
    ind++;
    document.getElementById("question").setAttribute("class",ind);
    document.getElementById("op1").setAttribute("class",ind1);
});
document.getElementById("btn2").addEventListener("click" , function(){
    document.getElementById("container").style.display="none";
    document.getElementById("final").style.display="flex";
    let points = document.getElementById("zero").getAttribute("class");
    let wro = 5-points;
    document.getElementById("scores").innerHTML=points;
    document.getElementById("wrong").innerHTML=wro;
});


