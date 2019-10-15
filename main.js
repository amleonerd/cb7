var faker = require('faker');
var fs = require('fs');
var str = "";

for (var i=0;i<100;i++)
  str += faker.name.firstName() + '\t' + faker.name.lastName() + '\t' + faker.internet.email() + '\t' + faker.name.jobTitle() + '\t' + faker.random.locale() +"\r\n";

fs.writeFile('c:/test.txt',str,function(err) { 
  if(err) return console.log(err); else console.log('file saved')
});