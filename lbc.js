let request = require("request");
let cheerio=require("cheerio");
//data extract-cheerio*****

let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary";


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

  let elemRepArr= searchTool(".match-comment-wrapper .match-comment-long-text");
  //console.log(elemRepArr.length);

  //cram this -> file
  let lbc = searchTool(elemRepArr[1]).text();
  console.log("lbc",lbc);

}
console.log("After");