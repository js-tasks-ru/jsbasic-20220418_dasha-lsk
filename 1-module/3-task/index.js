function ucFirst(str) {
  str = str.toLowerCase();
  str = str.substring(0, 1).toUpperCase() + str.substring(1, str.length);
  return str;
}
