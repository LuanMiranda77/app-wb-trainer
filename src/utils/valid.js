export class Valid {
  static isValidNenorIdade = (ano) => {
    return parseInt(new Date().getFullYear()) - parseInt(ano) < 12 ? false : true;
  };

  static isValidDateNasc = (dia, mes, ano) => {
    return parseInt(dia) > 31 ||
      parseInt(mes) > 12 ||
      parseInt(ano) < 1950 ||
      (parseInt(dia) > 29 && parseInt(mes) == 2) ||
      ano >= new Date().getFullYear()
      ? false
      : true;
  };
}
