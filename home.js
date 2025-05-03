document.getElementById("st").addEventListener("click", function(){
    document.getElementById("str").style.display="none";
    document.getElementById("container").style.display="flex";
});
let ind = parseInt(document.getElementById("question").getAttribute("class"));
let ind1 = parseInt(document.getElementById("op1").getAttribute("class"));
document.getElementById("option").addEventListener("click", function(event){
    if(event.target.type === "radio")
    {
        
        if(ind === 5) 
        {
            document.getElementById("btn2").style.display="block";
        }
        else
        {

            
            document.getElementById("btn").style.display="block";
        }
    }
});
const arr = ["2.Who will be the Next Prime Minister ? ","3.How many IPL cups have RCB won ? ","4.Mubai Indians Another Name ? ","5.who is the Best ODI player ?","6.Who is the Best Captain of all Time ? "];
const ans = ["Dhoni MS","Virat King","Rohit Hitu","Lolipop","404 Error","zero","Umpires Team","paltans","Ambani Money","Chase Master","Hitman","cool finisher","Aggresive Virat","tactical Sharma", "Captain Cool"];
const answer = ["A","A","A","B","B","C"];
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
            
            document.getElementById("hover").setAttribute("class",ind2+1);
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
    let wro = 6-points;
    document.getElementById("scores").innerHTML=points;
    document.getElementById("wrong").innerHTML=wro;
});


