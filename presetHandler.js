// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (type,index,newPresetArray) => {
    if(type === 'GET' || type === 'PUT'){
        if (!presets[index])
            return [404];   //Not Found
        else if( type === 'GET')
            return [200, presets[index]];   //OK
        else{
            presets[index] = newPresetArray;
            return [200, newPresetArray]; //OK
        }
    } else{
        return [400];   //Bad Request
    }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
