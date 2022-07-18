
const path = require('path');
const home = (req,res) => {
    res.sendFile(path.join(process.cwd(),'views','index.html'))
    //res.sendFile('D:\\code\\node\\expressStaticFile\\views\\index.html');
    //console.log(path.join(process.cwd(),'views','index.html'));
}

module.exports = {home};