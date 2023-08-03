function ucFirst(str) {
  if (str) {
    str = str.at(0).toUpperCase() + str.slice(1);
    return str;
  } else if (!str) {
    return str;
  }
}
