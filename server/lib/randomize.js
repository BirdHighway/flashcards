// shuffles array in place and returns it
const randomizeArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    let randomIndex = Math.floor(Math.random() * array.length);
    let a = array[i];
    let b = array[randomIndex];
    array[i] = b;
    array[randomIndex] = a;
  }
  return array;
};

module.exports = randomizeArray;
