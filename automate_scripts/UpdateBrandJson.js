const fs = require('fs');

fs.readdir('./static/json/', (error, files) => {
    brands = files.filter((fileName) => {
        return !fileName.includes('_');
    });

    brands = brands.map((brand) => {
        return brand.split('.json')[0];
    });
    console.log(brands);
});