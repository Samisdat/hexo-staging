'use strict';

var changeConfig = function(stagingName, config){
    var staging = config.stagings[stagingName];

    for(var key in staging){
        if(undefined === config[key]){
            continue;
        }
        config[key] = staging[key];
    }
};

var checkStaging = function(stagingName, config){
    if(undefined === stagingName){
        return false;
    }
    if(undefined === config.stagings[stagingName]){
        return false;
    }
    return stagingName;
};

(function(){
    var stagingByArgv = false;

    for(var i = 0, x = process.argv.length; i < x; i += 1){
        if('--staging' === process.argv[i] && undefined !== process.argv[(i + 1)]){
            stagingByArgv = process.argv[(i + 1)];
        }
    }

    if(false === stagingByArgv){
        return false;
    }
    if(undefined === hexo.config.stagings[stagingByArgv]){
        return false;
    }
    hexo.config.staging = stagingByArgv;
})();

var staging = checkStaging(hexo.config.staging, hexo.config);

if(false !== staging){
    changeConfig(staging, hexo.config);
}

hexo.extend.console.store.generate.options.options.push(
    { name: '--staging', desc: 'Switch staging' }
);
hexo.extend.console.store.generate.options.arguments = [
    { name: '--staging', desc: 'Switch staging' }
];

console.log(hexo.extend.console.store.generate.options);
