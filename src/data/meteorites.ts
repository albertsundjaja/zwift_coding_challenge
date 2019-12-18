import fs from 'fs';
import path from 'path';

let data = fs.readFileSync(path.join(__dirname, 'nasa-meteorites.json'), 'utf8');
let jsonData = JSON.parse(data);

// parse the year for easier filtering
jsonData.forEach((meteorite:any) => {
    if (meteorite['year']) {
        meteorite['yearOnly'] = parseInt(meteorite['year'].substring(0,4));
    }
});

export default jsonData;