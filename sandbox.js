console.log(1);
console.log(2);

setTimeout(() => {
  console.log('callback function fired');
}, 2000);

coneol.log(3);
console.log(4);
// AS JS 1 ^ //

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  //console.log(request, request.readyState);
  if (request.readyState === 4 && request.status === 200) {
    console.log(request, request.responseText);
  } else if (request.readyState === 4) {
    console.log('could not fetch the data');
  }
});
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();
// AS JS 2/3 ^ //

const getTodoes = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback('could not fetch the data', undefined);
    }
  });
  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
  request.send();
};

console.log(1);
console.log(2);

getTodos((err, data) => {
  console.log('callback fired');
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);
// AS JS 4 ^ //

const getTodoes = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback('could not fetch the data', undefined);
    }
  });
  request.open('GET', 'todos.json');
  request.send();
};

console.log(1);
console.log(2);

getTodos((err, data) => {
  console.log('callback fired');
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);
// AS JS 5 ^//