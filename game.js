var yoda = {
  name : "Yoda",
  health : 150,
  attack : 10,
  counter : 20,
};

var rey = {
  name : "Rey",
  health : 75,
  attack : 5,
  counter : 5
};

var vader = {
  name : "Darth Vader",
  health : 125,
  attack : 15,
  counter : 25
};

var kylo = {
  name : "Kylo Ren",
  health : 100,
  attack : 10,
  counter : 10
};

var yourChoice = false;
var enemyChoice = false;
var chosenOne;
var enemy;
var attackPoints;
var hp;
var counterAttack;
var opposingHp;
var oppenentName;
var enemiesDefeated = 0;  

function updateHealth() {
  $('.health1').text(yoda.health);
  $('.health2').text(rey.health);
  $('.health3').text(vader.health);
  $('.health4').text(kylo.health);
}



$( document ).ready(function() {

// Yoda selected
$("#yoda").on('click', function() {
  $('#Reset').hide();
  if (yourChoice === false) {
    $('#yoda').removeClass('character').addClass("hero");
    $('#chosen').append($(this));
    chosenOne = yoda;
    attackPoints = chosenOne.attack;
    hp = chosenOne.health;
    yourChoice = true;
    moveToEnemies();
  }
  else {
    if (enemy != null) {
      alert("Attack Current Opponent");
      return;
    }
    if (chosenOne === yoda) {
      return;
    }
    $('#chosenEnemy').empty();
    $('#chosenEnemy').append($(this));
    $('#yoda').removeClass('character').addClass('villain');
    enemy = yoda;
    oppenentName = enemy.name;
    counterAttack = enemy.counter;
    opposingHp = enemy.health;
    enemyChoice = true;
  }
});

//Rey selected
$("#rey").on('click', function() {
  $('#Reset').hide();
  if (yourChoice === false) {
    $('#rey').removeClass('character').addClass("hero");
    $('#chosen').append($(this));
    chosenOne = rey;
    attackPoints = chosenOne.attack;
    hp = chosenOne.health;
    yourChoice = true;
    moveToEnemies();
  }
  else {
    if (enemy != null) {
      alert("Attack Current Opponent");
      return;
    }
    if (chosenOne === rey) {
      return;
    }
    $('#chosenEnemy').empty();
    $('#chosenEnemy').append($(this));
    $('#rey').removeClass('character').addClass('villain');
    enemy = rey;
    oppenentName = enemy.name;
    counterAttack = enemy.counter;
    opposingHp = enemy.health;
    enemyChoice = true;
  }
});

//Darth Vader selected
$("#vader").on('click', function() {
  $('#Reset').hide();
  if (yourChoice === false) {
    $('#vader').removeClass('character').addClass("hero");
    $('#chosen').append($(this));
    chosenOne = vader;
    attackPoints = chosenOne.attack;
    hp = chosenOne.health;
    yourChoice = true;
    moveToEnemies();
    }
  else {
    if (enemy != null) {
      alert("Attack Current Opponent");
      return;
    }
    if (chosenOne === vader) {
      return;
    }
    $('#chosenEnemy').empty();
    $('#chosenEnemy').append($(this));
    $('#vader').removeClass('character').addClass('villain');
    enemy = vader;
    oppenentName = enemy.name;
    counterAttack = enemy.counter;
    opposingHp = enemy.health;
    enemyChoice = true;
    }
  });

//kylo Ren selected
$("#kylo").on('click', function() {
  $('#Reset').hide();
  if (yourChoice === false) {
      $('#kylo').removeClass('character').addClass("hero");
      $('#chosen').append($(this));
      chosenOne = kylo;
      attackPoints = chosenOne.attack;
      hp = chosenOne.health;
      yourChoice = true;
      moveToEnemies();
    }
    else {
      if (enemy != null) {
        alert("Attack Current Opponent");
        return;
      }
      if (chosenOne === kylo) {
        return;
      }
      $('#chosenEnemy').empty();
      $('#chosenEnemy').append($(this));
      $('#kylo').removeClass('character').addClass('villain');
      enemy = kylo;
      oppenentName = enemy.name;
      counterAttack = enemy.counter;
      opposingHp = enemy.health;
      enemyChoice = true;
    }
  });

});

// move non-chosen elements to enemies
function moveToEnemies () {
  if (yourChoice === true) {
    $('.character').appendTo($('#AvailEnemies'));
  }
}

//Attack Button Function
$('#attack').on('click', function() {

// Calculating health points
if (hp > 0) {
  opposingHp = opposingHp - attackPoints;
  hp = hp - counterAttack;
  $('#info').text("You attacked with " + attackPoints + " power");
  $('#counterInfo').text(enemy.name + " counter attacked with " + enemy.counter + " power");
  attackPoints = attackPoints + chosenOne.attack;
  chosenOne.health = hp;
  enemy.health = opposingHp;
  updateHealth();

  //user choice wins
  if (opposingHp <= 0) {
    $('.villain').appendTo('#placeholder');
    $('#info').text("You have defeated " + oppenentName + "! Pick new Enemy");
    $('#counterInfo').empty();
    enemyChoice = false;
    enemy = null;
    opposingHp = opposingHp;
    enemiesDefeated++;
    if (enemiesDefeated >= 3) {
      $('#info').empty();
      $('#chosenEnemy').text("Congrats! You have defeated all the Enemies. You are victorious!");
      $('#Reset').show();
    }
  }
  // user choice loses
  else if (hp <= 0) {
    $('.villain').appendTo('#placeholder');
    $('#chosenEnemy').text("Game Over");
    $('#Reset').show();
  }

}
});

//Reset button
$('#Reset').on('click', function() {
  $('#yoda').removeClass('villain hero').addClass('character').appendTo($('.selection'));
  $('#rey').removeClass('villain hero').addClass('character').appendTo($('.selection'));
  $('#vader').removeClass('villain hero').addClass('character').appendTo($('.selection'));
  $('#kylo').removeClass('villain hero').addClass('character').appendTo($('.selection'));
  $('#info').empty();
  $('#counterInfo').empty();
  $('#chosenEnemy').empty();
  enemyChoice = false;
  yoda.health = 150;
  rey.health = 75;
  vader.health = 125;
  kylo.health = 100;
  updateHealth();
  enemiesDefeated = 0;
  enemy = null;
  chosenOne = null;
  yourChoice = false;
  }); 