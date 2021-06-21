const fs = require('fs');
const jsonPath = './static/json/antenna';


let antennaJsonNames = fs.readdirSync(jsonPath);

let antennaJsonContents = antennaJsonNames.map((name) => {
    let antennaJsonPath = `${jsonPath}/${name}`;
    let antennaJson = fs.readFileSync(antennaJsonPath, 'utf8');
    return antennaJson;
});

let modelNames = antennaJsonContents.map((content) => {
    return JSON.parse(content)[4];
})

/* fs.writeFileSync only parses JSON object if 
// 2nd argument is string
*/
modelNamesAsString = JSON.stringify(modelNames);

antennasJsonPath = `${jsonPath}/_antennas.json`

fs.writeFileSync(antennasJsonPath, modelNamesAsString);



