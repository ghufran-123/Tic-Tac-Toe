var chance=0
$(".box").click(function(e)
{ 
    var id=this.id;
    chance++;
    show(id);
})
function show(id)
{
    if((chance%2)==0)
    {
        console.log("#"+ id + "." + id + "X");
        $("#"+ id + "." + id + "X").removeclass("d-hn");
       }
    else
    {
        $("#"+ id + "." + id + "0").removeClass("d-hn");
    }
}