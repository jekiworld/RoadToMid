const userVisits = new Map();

userVisits.set('Alice', 5);
userVisits.set('Madik', 7);

for(const [user, visit] of userVisits){
    console.log(`${user} посетил сайт ${visit}`)
}


