let cat = {
    name: "Paul",
    breed: "Siamese",
    lostCat: function() {
        if(this.owner === undefined) {
            console.log("Stray cat!");
        }
        else {
            console.log(`Please return ${this.name} to ${this.owner.name} in ${this.owner.city}.`);
        }
    },
    meow: function() {
        console.log(`${this.name} says me ow...`);
    }
};

let owner = {
    name: "Will",
    city: "Madison",
};

cat.owner = owner

cat.meow();
cat.lostCat();