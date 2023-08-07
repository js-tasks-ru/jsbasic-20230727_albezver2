function truncate(str, maxlength) {
  // ваш код...
  let newStr;
  if (str.length > maxlength) {
    newStr = str.slice(0, maxlength - 1) + "…";
    return newStr;
  } else {
    return str;
  }
}
