function factorial(n) {
  i = 1;

  while (n > 1) {
    i = i * n;
    n = n - 1;
  }
  return i;
}

