'use strict';

// add tag
hexo.extend.helper.register('is_staging', function(stagingName){
    if(undefined === this.config.staging){
        return false;
    }

    return (stagingName === this.config.staging);
});

/**
 * get staging name from config or argv
 */
var getStagingName = function(){

    // get staging form config
    var stagingName = hexo.config.staging;

    if(undefined === stagingName){
        stagingName = false;
    }

    var stagingByArgv = false;

    for(var i = 0, x = process.argv.length; i < x; i += 1){
        if('--staging' === process.argv[i] && undefined !== process.argv[(i + 1)]){
            stagingByArgv = process.argv[(i + 1)];
        }
    }

    if(false !== stagingByArgv){
        stagingName = stagingByArgv;
    }
    if(undefined === hexo.config.stagings[stagingName]){
        return false;
    }

    return stagingName;

};

/**
 * overwrite config by active staging
 */
var changeConfig = function(stagingName){
    hexo.config.staging = stagingName;
    var staging = hexo.config.stagings[stagingName];

    for(var key in staging){
        if(undefined === hexo.config[key]){
            continue;
        }
        hexo.config[key] = staging[key];
    }
};


/**
 * if staging is defined, change the config
 */
if(undefined !== hexo.config.stagings){
    require('./lib/cli.js')(hexo);

    var stagingName = getStagingName();

    changeConfig(stagingName);

}

