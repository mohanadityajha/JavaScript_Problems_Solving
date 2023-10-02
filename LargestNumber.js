function myFunction(p, q, r) {
  if (p >= q && p >= r) {
    return p;
  } else if (q >= p && q >= r) {
    return q;
  } else {
    return r;
  }

}
console.log(myFunction(12, 14, 17));