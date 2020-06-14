var slajder = document.getElementById('slajder');
var brojac = 1;
setInterval (function () {
  slajder.innerHTML = "<img src='slike/"+brojac+".jpg'>";
  brojac++;
  if (brojac == 11)
  brojac = 1;
}, 2000)
