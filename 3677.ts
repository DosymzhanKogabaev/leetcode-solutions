function countBinaryPalindromes(n: number): number {
    // нулевой случай
    if (n === 0) return 1; // только "0"
  
    // 0 считаем отдельно (его бинарная форма "0" — палиндром)
    let res = 1;
  
    // длина в битах для n
    const L = Math.floor(Math.log2(n)) + 1;
  
    // посчитать все палиндромы длины < L (только те, у которых старший бит = 1)
    for (let d = 1; d < L; d++) {
      const half = Math.ceil(d / 2);
      res += Math.pow(2, half - 1); // свободных бит в первой половине = half-1 (первый бит = 1)
    }
  
    // теперь обработаем длину == L
    const half = Math.ceil(L / 2);
    // prefix = первые 'half' битов числа n
    const prefix = Math.floor(n / Math.pow(2, L - half));
    const minPrefix = Math.pow(2, half - 1); // минимальный допустимый префикс (старший бит = 1)
  
    // функция строит палиндром из префикса (арифметически, без битовых операций)
    function makePalindrome(x: number, odd: boolean): number {
      let res = x;
      let toMirror = odd ? Math.floor(x / 2) : x;
      while (toMirror > 0) {
        res = res * 2 + (toMirror % 2);
        toMirror = Math.floor(toMirror / 2);
      }
      return res;
    }
  
    const pal = makePalindrome(prefix, L % 2 === 1);
    // количество префиксов, которые < prefix
    let countThisLen = prefix - minPrefix;
    // если палиндром, построенный из prefix, не превышает n — учитываем и его
    if (pal <= n) countThisLen++;
  
    res += countThisLen;
    return res;
  }