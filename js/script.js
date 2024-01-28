function countdownstart()
{
    let count=10;
  function updatecountdown(){

  
    document.getElementById('countdown').innerText="count down start now:" +count;
    
    if(count === 0){
        document.getElementById('countdown').style.display='none';
        document.getElementById('message').style.display='block'
    }
else{
    count--;
    setTimeout(updatecountdown,1000)
}

    }
    updatecountdown();
}
