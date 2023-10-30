var firstname="Harish";
var lastname="V";
console.log('First Name is',firstname);
console.log('Last Name is',lastname);


var cities=['Hyd','Bangalore','Mumbai'];
for( i in cities)
{
    console.log(cities[i]);
}
for ( j of cities)
{
    console.log(j);
}

console.log(('bangalore' in cities)?'Yes':'No');
console.log(cities.find(1));