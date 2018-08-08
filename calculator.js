let buttoncal=document.querySelectorAll(".btn");
let text=document.querySelector("#text");
for(let i of buttoncal)
{
	i.addEventListener("click",(event)=>{
text.value+=event.target.value;
 })
}
let equal =document.querySelector(".equal");
equal.addEventListener("click",(event)=>{
	text.value=(eval(text.value))
    
})
let reset =document.querySelector(".reset");
reset.addEventListener("click",(event)=>{
	text.value='';
    
})
