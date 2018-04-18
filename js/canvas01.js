/* jshint esversion: 6 */
const canvasElem = document.getElementById('canvas');
const ctx = canvasElem.getContext('2d');
// x, y width, high
ctx.fillRect(25,25,100,100);
// czyszczenie
ctx.clearRect(45,45,60,60);
//
ctx. strokeRect(50,50,50,50);
for (i = 0; i <10; i++){
  ctx.strokeRect(50 + i * 2,50 + i * 2,50 - i * 2,50 - i * 2);
}

// określenie czcionki
ctx.font = 'italic bold 15px arial';
// top bottom
ctx.textBaseline = "middle";
ctx. fillText('Witoj w światu canvasu',5, 145);
// określenie koloru
ctx.fillStyle='green';
// określenie czcionki
ctx.font = 'italic bold 15px arial';
// top bottom
ctx.textBaseline = "middle";
ctx. fillText('wstawiam tekst',90, 180);
ctx.textAlign = 'center';

//rysowanie koła
ctx.fillStyle="white";
ctx.beginPath();
//
ctx.arc(150, 150, 50,0, 2*Math.PI);
ctx.fill();
ctx.fillStyle="gray";
ctx.beginPath();
ctx.arc(150,150, 40,0, 1,5*Math.PI);
ctx.fill();
