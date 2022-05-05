function camelize(str) {
  let str2 = str.split('-');
  for (var i = 1; i < str2.length; i++) {
    str2[i] = str2[i].charAt(0).toUpperCase() + str2[i].slice(1);
  }
  return str2.join("");
}
