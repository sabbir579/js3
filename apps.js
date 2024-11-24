function search(){
    var potato=document.getElementById("potatoes").value;
    var show=document.getElementById("show");
    var potatoes=50;
    var tottalPrice=potatoes*potato;
    show.innerText=tottalPrice;
    document.body.style.backgroundColor="white"
}