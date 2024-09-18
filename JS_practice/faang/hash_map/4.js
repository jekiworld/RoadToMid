const hashMap = {};

hashMap['ключ1'] = 'значение1';
hashMap['ключ2'] = 'значение2';

console.log(hashMap['ключ1']);

if('ключ2' in hashMap){
    console.log('существует');
}


