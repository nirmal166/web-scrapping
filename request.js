let request = require("request");
let cheerio=require("cheerio");
//data extract-cheerio*****
console.log("before");
request('https://www.npmjs.com/package/cheerio', cb); 
function cb (error, response, html) {
  //console.error('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', html); // Print the HTML for the Google homepage.
  if(error){
      console.log(error);
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
  // css selector
  let elemRep =searchTool("#readme>h1");
  //text
  let moduleName=elemRep.text().trim();
  console.log("moduleName",moduleName);

}
console.log("after");