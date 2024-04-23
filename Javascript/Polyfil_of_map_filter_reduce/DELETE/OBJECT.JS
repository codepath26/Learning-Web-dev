function d(a) {
  delete a; // delete keyword is only used for the boject when we wanted  to delete any properties from the object then we use this delete keyword. otherwise it's not effect on the other variable like this a.
  return a;
}

console.log(d(4));
