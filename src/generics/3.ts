function merge<T extends Object, U extends Object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

console.log("------------Generics 3------------");
console.log(
  `🚀 ~ merge({ name: "Task", color: "Red" }, { position: 10, weight: 100 }):`,
  merge({ name: "Task", color: "Red" }, { position: 10, weight: 100 })
);
