const hashMap = new Map();

hashMap.set('name', 'Alice');
hashMap.set('surname', 'Zurg');


console.log(hashMap.get('name'));

// if (hashMap.has('surname')){
//     console.log('it is worlk')
// }


hashMap.delete('surname');

if (hashMap.has('surname')){
    console.log('it is worlk')
} else{
    console.log('no')
}




