import fs = require('fs');
export class Screeshot {

    // abstract writing screen shot to a file
        writeScreenShot(data, filename) {
        var stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }
}