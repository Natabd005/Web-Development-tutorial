let pen = {   //{ } indicates object with key-value pair
    type: 'ballpoint', //properties are the keys i.e. type,color while ballpoint,black are the values 
    color:'black',
    cost : '10'
};

//two ways to access object
//object_name.property_name
//object_name['property_name']

console.log(pen.cost);

//EXAMPLE
let emily = {
    age:10,
    school:'KV',
    class:'10th std',
    subjects: ['physics','biology','chemistry']
};

console.log(emily.subjects[2]);