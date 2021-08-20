let request = require("request");
let cheerio=require("cheerio");
let fs=require("fs");
//data extract-cheerio*****

let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard"


console.log("Before");
request(url, cb); 
function cb (error, response, html) {
  //console.error('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', html); // Print the HTML for the Google homepage.
  if(error){
      console.log("error");
  }
  else if(response.statusCode==404){
console.log("PAGE NOT FOUND");
  }
  else{
      
  //console.log(html); // Print the response status code if a response 
  //console.log("html:",);
  dataExtracter(html);
  }
}
function dataExtracter(html){
  //search tool
  let searchTool=cheerio.load(html);
  //selector
  // you can not get always unique selector

let bowlers= searchTool(".table.bowler tbody tr");
//console.log(bowlerTables.length);
//let htmlData="";
//for(let i=0;i<bowlerTables.length;i++){
  //html funtion
 // htmlData += searchTool(bowlerTables[i]).html();

//fs.writeFileSync("table.html",htmlData);
  //cram this -> file
  //loop
  //name
  //highst wicket taker find
  let bowler="";
  let hwt=0;
  for(let i=0;i<bowlers.length;i++){
    let cols=searchTool(bowlers[i]).find("td");
    let name=searchTool(cols[0]).text();
    let wickets=searchTool(cols[4]).text();
    console.log(name+""+wickets);
    if(wickets>=hwt){
      bowler=name;
      hwt=wickets;
    }
  }
  console.log("````````````````````````````````````````");
  console.log(bowler+" " + hwt);
  //wicketb
}
console.log("After");