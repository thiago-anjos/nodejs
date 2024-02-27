const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("timer is done - last");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text) => {
      console.log(text);
    });
}, 1);

console.log("hello - first");
console.log("bye - second");
