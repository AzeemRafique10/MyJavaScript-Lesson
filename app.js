// const message: string = "Hello World";
const user = {
  name: "Azeem",
  age: 12,
};

const userToJson = JSON.stringify(user);

// console.log(">>>>>>>>>>>", userToJson);

const userToPerson = JSON.parse(userToJson);

//  console.log(userToPerson)
