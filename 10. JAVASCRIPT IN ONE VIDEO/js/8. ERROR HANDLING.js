* console.log("Error Handling & Try Catch in Javascript");

//   // Pretend this is coming from a server as response
  let a = "sncoasklncijsancaslbcsij";
//   a = undefined;
  if (a != undefined) {
    throw new Error("This is not undefined");
  } else {
    console.log("This is undefined");
  }

try {
  console.log("We are inside try block");
  // this is only use for raised error its not any component or method or constructor or function;
  null.console;
  functionHarry();
} catch (error) {
  console.log(error);
  console.log("Are you okay?");
  console.log(error.name);
  console.log(error.message);
} finally {
  console.log("Finally we will run this");
}
