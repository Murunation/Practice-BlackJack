//Arrays - ordered lists of items

let featuredPosts = [
  "Check out my Netflix Clone",
  "Here is my latest project",
  "I have just relaunched my protfolio",
];
console.log(featuredPosts[2]);
console.log(featuredPosts.length);

let murun = ["Battulga Murun", 22, true];



//Push Method // Add elements in last index of array
let cards = [7, 4, 5];
cards.push(1);
console.log(cards);
// Logged out [ 7, 4, 5, 1]

let messages = ["Hey, how's it going?",        
"I'm great, thank you! How about you?",
"All good. Been working on my portfolio lately."];

let newMessage =  "Same here!";

messages.push(newMessage);

console.log(messages);
//Added!!!
//[ "Hey, how's it going?",
// "I'm great, thank you! How about you?",
// 'All good. Been working on my portfolio lately.',
// 'Same here!'
// ]

//Pop Method //remove elements in last index of array //Alert u need to save that element for variables
messages.pop(newMessage);

console.log(messages);
//Remove last item