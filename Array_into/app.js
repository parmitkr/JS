let fruits=['Apple','Banana','Pear','Orange','TOBE'];//define a array

//fruits.push('Mango');//insert array at the end

//fruits.pop();//delete from last

//fruits.shift();//delete from first

//fruits.unshift('Mango');//add at the front

//let removeUnwanted=fruits.slice(1,2); //slice from pos=1 upto n-1


//Instance methods
/************ concat two array and return  */

let vegitables=['Potato','Tomato','Radish'];

//let mix=fruits.concat(vegitables);
/************ fill */
//fruits.fill('TOBE',1,3);

/******Filter */
//output:return filter array
//let filterFruits=fruits.filter(fruits=>fruits.length>4)

/*****Find */
//output:return first element which matching
//console.log(fruits.find(fruits=>fruits.length>2));

/***** include */
//return true or false if match
//console.log(fruits.includes('Apple'));

/********JOIN */
//console.log(fruits.join());
//console.log(fruits.join(''));
//console.log(fruits.join('-'));

/****** MAP */
console.log(fruits.map(fruits=>fruits+'s'));



//fruits.forEach(function(item,index,array){console.log(item)});