var config = require('./');
var newConf = {};
//人肉deep copy 
//:P 懒得写lib
newConf.baseSrcDirectory  = config.baseSrcDirectory;
newConf.srcDirectory  = config.srcDirectory;
newConf.destDirectory = config.destDirectory;
newConf.confDirectory = config.confDirectory;
newConf.tmpDirectory  = config.deployTmpDirectory;

module.exports = newConf;