//main.js for learing JS in Day 2
var x = 2;
var htmlBuilder = '<tr><th>Team</th><th>Wins</th><th>Losses</th></tr>';


teams = new Array([]);
teams = ["Braves", "Nationals","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dogers","Diamondbacks","Giants","Padres","Rockies",];
wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];


var tablebuilder = "";

var table = document.getElementById("teams");

//var temphighwin = wins[0];

var highWinIndex = 0;

for (var i=0; i<teams.length; i++) {

    if (wins[i] > wins[highWinIndex]) {
      highWinIndex = i;
    }
   htmlBuilder += `<tr><td>${teams[i]}</td><td>${wins[i]}</td><td>${losses[i]}</td></tr>`

}
document.getElementById('teams').innerHTML=htmlBuilder;
var table = document.getElementById('teams'); 
var row = table.getElementsByTagName('tr')[highWinIndex + 1];
var texts = row.getElementsByTagName('td');
console.log(texts);
for (var i=0; i<texts.length; i++) {
    texts[i].innerHTML = `<strong>${texts[i].innerHTML}</strong>`
    console.log(texts[i].innerHTML)
}
console.log(table);
    
//    var team = teams[i];
//    var win = wins[i];
//    var loss = losses[i];
    
  //htmlBuilder += `<tr><td>${team}</td><td>${win}</td><td>${loss}</td></tr>`

//    if (wins[i] > temphighwin) {
//        temphighwin = wins[i];
//        temploss = losses[i];
//       // tempteam = teams[i];
//        var boldteam = teams[i].bold();
//        var boldwin = "<strong>" + temphighwin + "</strong>"
//        var boldloss = "<strong>" + temploss + "</strong>"
//        
//        htmlBuilder += `<tr><td>${boldteam}</td><td>${boldwin}</td><td>${boldloss}</td></tr>`
//    }else {
//        htmlBuilder += `<tr><td>${teams[i]}</td><td>${wins[i]}</td><td>${losses[i]}</td></tr>` 
//    }
//   
//
//    
//}
//
//var rows = document.getElementById('teams').getElementsByTagName('tr');
//rows[11] = '<strong></strong>';
//var t = document.getElementById('teams'); 
//var d = t.getElementsByTagName('tr')[0];

    
//console.log(htmlBuilder);
//document.getElementById('teams').innerHTML=htmlBuilder;
//
//
//var tempHighWins = 0;
//var tempLeader = 0;
//
//for (var i=0; i<teams.length; i++){
//  if(wins[i] >= tempHighWins){
//    tempHighWins = wins[i];
//    tempLeader = i;
//  }
//}





//console.log(teams);
//console.log(wins);
//console.log(wins[x]);
//
//htmlBuilder = '<h2></h2>';
//htmlBuilder += '<div class="team-list">';
//
//for (var i=0; i<teams.length; i++){
//  //console.log("inside the loop " + i);
//  console.log(teams[i]);
//
//  if (losses[i] >= 60){
//    console.log("This team is horrible!");
//  }else{
//    console.log('This team is not that bad');
//  }
//
//
//  htmlBuilder += teams[i] + " wins: " + wins[i] + " Losses: " + losses[i] + "</br>";
//  console.log(htmlBuilder);
//}
//htmlBuilder += "</div>";
//document.getElementById('teams').innerHTML=htmlBuilder;
//
//
////logic to determin the team with the most wins.
//
//var tempHighWins = 0;
//var tempLeader = 0;
//
//for (var i=0; i<teams.length; i++){
//  if(wins[i] >= tempHighWins){
//    tempHighWins = wins[i];
//    tempLeader = i;
//  }
//}
//
//console.log("The team with the most wins of " + tempHighWins + " is " + teams[tempLeader]);


