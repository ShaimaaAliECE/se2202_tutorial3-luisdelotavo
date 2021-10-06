let getDictionary = function (lang)
{
    let englishDictionary = function (number)
    {
        switch(number){
        case(1): {return "one";}
        case(2): {return "two";}
        case(3): {return "three";}
        }
    }


    let frenchDictionary = function (number)
    {
            switch (number) {
            case (1): {return "un";}
            case (2): {return "deux";}
            case (3): {return "trois";}
            }
    }
    if (lang === "E") {
    return englishDictionary; }
    else if (lang === "F") {
    return frenchDictionary;
    }
}

let english = getDictionary("E"); 
let french = getDictionary("F");

console.log(english(1));
console.log(french(1));
console.log(english(2));
console.log(french(2));
console.log(english(3));
console.log(french(3));
