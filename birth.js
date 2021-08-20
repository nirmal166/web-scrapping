let request = require("request");
let cheerio=require("cheerio");

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

 
  for(let i=0;i<bowlers.length;i++){
    let cols=searchTool(bowlers[i]).find("td");
    let aElem=searchTool(cols[0]).find("a");
    let link=aElem.attr("href");
    let fulllink=`https://www.espncricinfo.com/${link}`;
    //console.log(fulllink);
    request(fulllink,newcb);
  }
}
function newcb (error, response, html) {
    if(error){
        console.log("error");
    }
    else if(response.statusCode==404){
  console.log("PAGE NOT FOUND");
    }
    else{
        
    //console.log(html); // Print the response status code if a response 
    //console.log("html:",);
    //dataExtracter(html);
    console.log("```````````````");
    getBirthDay(html);
    }
}
function getBirthDay(html){
    let searchTool=cheerio.load(html);
    let headingsArr=searchTool(".player-card-description");
    let age=searchTool(headingsArr[2]).text();
    let name=searchTool(headingsArr[0]).text();
    console.log(name, " ", age);
}

console.log("After");