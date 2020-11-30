
function productionNumber(number){

    if (number <= 999){

        hundreds = Math.floor(number / 100);
        decades = Math.floor((number / 10) % 10);
        units = number % 10;

        let result = {hundreds: hundreds, decades: decades, units: units};
        return result;
    }
    else {
        return 'Сори, число больше 999';
    }
};


console.log(productionNumber(876));
console.log(productionNumber(1122));
