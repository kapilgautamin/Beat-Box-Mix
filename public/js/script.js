// Drum Arrays
function initialize(arr,size){
    for (let i=0;i<16;i++)
        arr[i] = false;
    return arr;
}

let kicks = initialize([],16);
let snares = initialize([], 16);
let hiHats = initialize([], 16);
let rideCymbals = initialize([], 16);

const toggleDrum = (name,index) => {
    // console.log(name,index);
    if(index >=0 && index < 16){
        switch(name){
            case 'kicks': kicks[index] = !kicks[index]; 
            break;
            case 'snares': snares[index] = !snares[index]; 
            break;
            case 'hiHats': hiHats[index] = !hiHats[index]; 
            break;
            case 'rideCymbals': rideCymbals[index] = !rideCymbals[index]; 
            break;
        }
    }
};

const clear = (name) => {
    switch(name){
        case 'kicks': kicks = kicks.map(beat => false);
        break;
        case 'snares': snares = snares.map(beat => false);
        break;
        case 'hiHats': hiHats = hiHats.map(beat => false);
        break;
        case 'rideCymbals': rideCymbals = rideCymbals.map(beat => false);
        break;
        default:
            break;
    }
};

const invert = (name) => {
    switch(name){
        case 'kicks': kicks = kicks.map(beat => !beat);
        break;
        case 'snares': snares = snares.map(beat => !beat);
        break;
        case 'hiHats': hiHats = hiHats.map(beat => !beat);
        break;
        case 'rideCymbals': rideCymbals = rideCymbals.map(beat => !beat);
        break;
    }
};

const getNeighborPads = (x,y,size) => {
    console.log(x,y,size);
    press = [];
    if(x-1 >= 0)
        press.push([x-1,y]);
    if(x+1 < size)
        press.push([x+1,y]);
    if(y+1 < size)
        press.push([x,y+1])
    if(y-1 >= 0)
        press.push([x,y-1])
    if (size == 5)
        return press;
    return [];
};