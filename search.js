let inpuval=document.getElementById('searchval');

inpuval.addEventListener("input",fun1);
export function fun1()
{    var count=0;
    // debugger;
    let ele=inpuval.value.toLowerCase();
    // console.log(ele);
    let trr=document.getElementsByTagName('tr');
    Array.from(trr).forEach(function(item)
    {   if(count==0)
        {
            count=count+1;
        }
        else{
        let tdd=item.querySelector('.name').innerText.toLowerCase();
            if(tdd.includes(ele))
            item.style.display=""; 
            else
            item.style.display="none";

     } });
};
