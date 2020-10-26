console.log('World!');

function rollDice()
{
    var dice1 = document.getElementById('dice1');
    var dice2 = document.getElementById('dice2');
    var score = document.getElementById('score');

    var d1 = Math.round(Math.random() * 6);
    var d2 = Math.round(Math.random() * 6);
    dice1.innerHTML = d1;
    dice2.innerHTML = d2;
    var sum = d1 + d2;

    if(sum == 7)
    {
      alert("woooww !! you won");
      score.innerHTML = "Your score is 100";
    }
}