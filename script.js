function areaTriangle(base,height){
	return base*(height/2);
}
console.log(areaTriangle(3,4).toFixed(1));
console.log(areaTriangle(5,7).toFixed(1));

function volumeSphere(radius){
	return 4/3 * Math.PI * radius ** 3;
}
console.log(volumeSphere(3).toFixed(1));
console.log(volumeSphere(5).toFixed(1));

function convertDistance(distance,unit){
	if(distance != 0 && unit != 'm'){
		switch(unit){
			case 'km':
				distance *= 1000;
				break;
			case 'y':
				distance *= 0.9144;
				break;
			case 'mi':
				distance *= 1609.344;
				break;
		}
			
	}
	return distance;
}
console.log(convertDistance(50,'m').toFixed(2));
console.log(convertDistance(100,'y').toFixed(2));
console.log(convertDistance(1,'mi').toFixed(2));
console.log(convertDistance(1.234,'km').toFixed(2));

function convertTime(time){
    time = time.split(':');
    length = time.length;
    let seconds = 0;
    switch (length){
        case 3:
            seconds += Number(time[0])*3600;
            seconds += Number(time[1])*60;
            seconds += Number(time[2]);
            break;
        case 2:
            seconds += Number(time[0])*60;
            seconds += Number(time[1]);
            break;
        case 1:
            seconds += Number(time[0]);
            break;  
    }
    return seconds;
    
}
console.log(convertTime('02:33:21'));
console.log(convertTime('00:04:51'));
console.log(convertTime('04:51'));
console.log(convertTime('00:13'));
console.log(convertTime('13'));
