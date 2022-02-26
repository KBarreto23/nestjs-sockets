const array = [
  { id: 1, name: "hola" },
  { id: 2, name: "hola" },
  { id: 3, name: "hola" },
  { id: 3, name: "hola", phone: "sksksks" },
  { id: 4, name: "hola" },
  { id: 1, name: "hola", phone: "sksksks" },
];
const newA = [];
const arrayHashmap = array.reduce((obj, item) => {
  obj[item.id] ? (obj[item.id] = { ...item }) : (obj[item.id] = { ...item });
  return obj;
}, []);
console.log(arrayHashmap);
