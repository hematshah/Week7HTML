var x = 0;
        
function runSomeTestData()
{
    x++;
    alert('the value of x is ' + x);
   var genius = confirm('are you a computer genius');
   var name = prompt('OK then fine! what is your name??')
    if (genius) {
        alert('Thanks,' + name + ', I will come to you for advice!!!');
    }
    else
    {
        alert('No Problem thanks for your help')
    }
    console.log(genius);
    console.log(name);
    
}
