var cnt = document.getElementsByClassName("counter")[0];
var btn_inc = document.getElementsByTagName("button")[0];
var btn_restart = document.getElementsByTagName("button")[1];
btn_inc.addEventListener('click', function()
{
    cnt.innerHTML = parseInt(cnt.innerHTML, 10) + 1;
});

btn_restart.addEventListener('click', function()
{
    cnt.innerHTML = 0;
});
