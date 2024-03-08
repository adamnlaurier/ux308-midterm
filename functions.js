function coinCalc(nickels, dimes, quarters, loonies, toonies){
    let total = nickels * 0.05;
    total += dimes*0.1;
    total += quarters*0.25;
    total += loonies;
    total += toonies*2;
    return total;
}

function fahrenheit2Celsius(fahrenheit){
    const convertedTemp = (fahrenheit-32)*5/9;
    return convertedTemp;
}

function cubeHeight2volume(height){
    const volume = height ** 3;
    return(volume);
}

function gymMembershipCost(cost, friends){
    let total = cost / (1 + (friends * 0.05));
    if(friends >= 3) total = cost / 1.15;

    return(total);
}

function earthquakeDamage(intensity){
    let result = "Little or no damage";
    if(intensity >= 7.5){
        result = "Catastrophe: most buildings destroyed";
    }else if(intensity >= 6.5){
        result = "Disaster: buildings may collapse";
    }else if(intensity >= 5.5){
        result = "Serious damage: walls may crack or fall";
    }else if (intensity >= 5){
        result = "Some damage";
    }

    return result;
}

export {coinCalc, fahrenheit2Celsius, cubeHeight2volume, gymMembershipCost, earthquakeDamage}
