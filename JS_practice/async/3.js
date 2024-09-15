const myPromise = new Promise((resolve, reject) => {
    if (true) {
      resolve('Результат');
    } else {
      reject('Ошибка');
    }
  });


  myPromise
  .then(result => {
    console.log('Успех:', result);
  })
  .catch(error => {
    console.log('Ошибка:', error);
  });