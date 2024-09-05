function Increment(initialvalue = 0){
    this.currentvalue=initialvalue;
    this.increment=function()
        {
            return ++this.currentvalue;
        };
}


const inc = new Increment(5);

console.log(inc.increment()); 
console.log(inc.increment()); 
console.log(inc.increment()+inc.increment())