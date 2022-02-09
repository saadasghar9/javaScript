let cap = {
    name: "saad",
    lastName: "Asghar",
    brothers: ["mahd", "junaid", "fahad", "naveed"],
    IsAlive: true,
    sayhi: function () {
        console.log("hi from say hi")
    }

}

// Get
// console.log(cap.name);
// console.log(cap.brothers);
// console.log(cap.IsAlive);
// console.log(cap.brothers[1]);
// cap.sayhi()

// Set / Update
// console.log("cap ",cap)
cap.IsAlive = false;
cap.name = "junaid";
cap.age = 10;
cap.friends = ["jun", "rao", "waqas", "rana"];
// console.log("cap ",cap)

// Delete
delete cap.age

for (let key in cap) {
    console.log(key, " : ", cap[key]);

}

// prop key
let bname = "name"
console.log(cap[bname])

let prokey = "lastName"
console.log(cap[prokey])
