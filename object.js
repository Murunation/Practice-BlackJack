// Objects - store date in-depth - composite / complex data type
// key value pairs
let course = {
    title: "Learn CS Crid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}


// console.log(course.tags);


// Same old ways 
// console.log(course["tags"]);

// Create object
let castle = {
    title: "Live like a King in my Castle",
    price: 190,
    isSuperHost: true,
    images: ["img/castle.png"],
    star: 4.95,
    guests: ["1 bedroom", "2 beds", "4 guests", "Private half-bath"]
}

console.log(castle.title);
console.log(castle.price);
console.log(castle.isSuperHost);
