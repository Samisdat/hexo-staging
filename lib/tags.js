'use strict';

function isStagingHelper(stagingName){

    if(undefined === this.config.staging){
        return false;
    }
    
    return (stagingName === this.config.staging);
}

exports.isStagingHelper = isStagingHelper;