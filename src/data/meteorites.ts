import fs from 'fs';
import path from 'path';

let data = fs.readFileSync(path.join(__dirname, 'nasa-meteorites.json'), 'utf8');
let jsonData = JSON.parse(data);

jsonData.forEach((meteorite:any) => {
    // parse the year for easier filtering
    if (meteorite['year']) {
        meteorite['yearOnly'] = parseInt(meteorite['year'].substring(0,4));
    }
    // set mass of meteorite to zero when it has no mass
    if (!meteorite['mass']) {
        meteorite['mass'] = 0;
    }
});

export default jsonData;