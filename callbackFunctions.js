let even_predicat = function (value)
{
    if (value % 2 == 0) 
    return true;
    else return false;
};

let odd_predicat = function (value)
{
   if (value % 2 != 0)
       return true;
    else return false;
};

let undefined_predicate = function (value)
{
    if (typeof value === "undefined")
    return true;
    else return false;
};

let null_predicate = function (value)
{
    if (value == null)
        return true;
    else return false;
   
};


let check = function (predicat,value)
{
   return predicat(value);
};


console.log(check(even_predicat,9));
console.log(check(odd_predicat,9));
console.log(check(even_predicat,8));
console.log(check(odd_predicat,8);
let x;
console.log(check(undefined_predicate,x));
console.log(check(null_predicate,x));
