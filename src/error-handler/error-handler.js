const errorHandler = (error, vm, info) => {
  console.log("报错");
  console.error(error);
  console.log(vm);
  console.log(info);
};

export default errorHandler;
