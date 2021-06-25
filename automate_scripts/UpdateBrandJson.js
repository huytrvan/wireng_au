const fs = require('fs');
const jsonPath = './static/json';

// create brands array
files = fs.readdirSync(jsonPath);

brands = files
    .filter((file) => {
        return !file.includes("_");
    });

brands = brands
    .map((brand) => {
        return brand.split('.json')[0];
    });

// create brands Json Array
brands = brands.map((brand) => {
    return ["Brand", brand];
});

brands = JSON.stringify(brands);

// write brands to _brands.json
const brandJsonPath = jsonPath + '/_brand.json';

fs.writeFileSync(brandJsonPath, brands);