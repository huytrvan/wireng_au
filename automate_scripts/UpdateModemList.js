const fs = require('fs');
const jsonPath = './static/json';

// create modems array
fileNames = fs.readdirSync(jsonPath);

modems = fileNames
    .filter((fileName) => {
        isModel = fileName.includes("_");
        isNotBrandJson = fileName !== "_brands.json";
        return isModel && isNotBrandJson;
    });

modems = modems
    .map((modem) => {
        modemJsonPath = `${jsonPath}/${modem}`;
        modemAsString = fs.readFileSync(modemJsonPath, 'utf-8');
        return modemAsString;
    });

modems = modems
    .map((modem) => {
        modemAsJsonArray = JSON.parse(modem);
        return modemAsJsonArray;
    });

// Update brand list
// brands = modems
//     .map((modem) => {
//         brandName = modem.slice(1, 2)[0][1];
//         return brandName;
//     });

// brands = new Set(brands);

// brands = Array
//     .from(brands)
//     .map((brand) => {
//         return ['Brand', brand];
//     });

// brandsAsString = JSON.stringify(brands);
// brandsJsonPath = `${jsonPath}/_brands.json`;

// fs.writeFileSync(brandsJsonPath, brandsAsString);

// Update modem list
modems = modems
    .map((modem) => {
        model = modem.slice(1, 3);
        return model;
    });

modemsAsString = JSON.stringify(modems);
modemsJsonPath = `${jsonPath}/_modems.json`;

fs.writeFileSync(modemsJsonPath, modemsAsString);
// console.log(modems);

