function camelize(str) {
  let splitted = str.split('');
  
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i] === "-") {
      splitted.splice(i, 1);
      if (i < splitted.length) {
        splitted[i] = splitted[i].toUpperCase();
      }
    }
  }
  return splitted.join("");
}

