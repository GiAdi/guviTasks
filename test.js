
/*console.log('hi');
const John = {
    name: "John",
    calcAge: () => {},
}

//CLOSURE
function retirement(retirementAge){
    return( function(yearOfBirth){
        let age = 2020-1997;
        return (retirementAge-age);
    })
}


function ageAsOfYear(currentYear){
    return function (yearOfBirth){
        return currentYear-yearOfBirth;
    }
}

ageAsOf2020 = ageAsOfYear(2020);
console.log(ageAsOf2020(1997));



function ageAsOnYear (currentYear, yearOfBirth){
    return currentYear-yearOfBirth;
}

ageAsOn2020 = ageAsOnYear.bind(null, 2020);
console.log(ageAsOn2020(1997));

class Person {
    constructor(name){
        this.name = name;
    }

}

Person.name="Adiry";*/


// function calcAge(curyear){
//     return ((_) => _+curyear )
// }

// calcAge(2)(5);

var arr=[7,11,8,9,10];
console.log(arr);

for (var i=0; i<arr.length-1; i++)
{
    for (var j=0; j<arr.length-i-1; j++)
    {
        if(arr[j] < arr[j+1])
        {
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr);
