let p1button=document.querySelector('#p1button');
let p2button=document.querySelector('#p2button');
let p1score=document.querySelector('#p1score')
let p2score=document.querySelector('#p2score')
let resetbutton=document.querySelector('#reset')
let winningscore=document.querySelector('#playto')
let p1count=0,winningcount=3,p2count=0;
let isgame=false;
p1button.addEventListener('click',function()
{
    if(!isgame){
   p1count+=1;
   if(p1count===winningcount)
   {
    isgame=true;
    p1score.classList.add('winner')
    p2score.classList.add('loser')
    p1button.disabled=true;
    p2button.disabled=true;
   }
   p1score.textContent=p1count;
    }
})
p2button.addEventListener('click',function()
{
    if(!isgame){
   p2count+=1;
   if(p2count===winningcount)
   {
    isgame=true;
    p1score.classList.add('winner')
    p2score.classList.add('loser')
    p1button.disabled=true;
    p2button.disabled=true;

   }
   p2score.textContent=p2count;
    }
})


function reset()
{
    isgame=false;
    p1count=0;
    p2count=0;
    p1score.textContent=0;
    p2score.textContent=0;
    p1score.classList.remove('winner','loser')
    p2score.classList.remove('loser','winner')
    p1button.disabled=false;
    p2button.disabled=false;
    
}
resetbutton.addEventListener('click',reset)
winningscore.addEventListener('change', function()
{
    winningcount=parseInt(this.value)
    reset();
})