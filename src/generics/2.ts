type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

console.log("------------Generics 2------------");
console.log(
  `🚀 ~ 
compare({name:"Task",color:"Red"},{position:10,weight:100}):`,
  compare({ name: "Task", color: "Red" }, { position: 10, weight: 100 })
);
