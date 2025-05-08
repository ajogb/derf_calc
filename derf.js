export class DerfInt {
  constructor(b10) {
    this.b10Int = b10;
    this.b11Int = Derf.b10Tob11(this.b10Int);
    this.derfInt = Derf.b11ToDerf(this.b11Int);
  }
}
export class Derf {
  constructor () {}
  b10Tob11(b10) {
    let x = b10;
    let b = 11;
    let b11 = "";
    while (x > 0) {
      b11 = B11_DIGITS[x % b] + b11;
      x = Math.floor(x / b);
    }
    return b11;
  }
  b11ToDerf(b11) {
    let derf = "";
    for (i = 0; i < b11.length; i++) {
      derf = derf + b11[i];
    }
    return derf;
  }
  b10ToDerf(b10) {
    return this.b11ToDerf(this.b10Tob11(b10));
  }
  derfAdd(op1, op2) {
    return new DerfInt(op1.b10Int + op2.b10Int);
  }
  derfSub(op1, op2) {
    return new DerfInt(op1.b10Int - op2.b10Int);
  }
  derfMul(op1, op2) {
    return new DerfInt(op1.b10Int * op2.b10Int);
  }
  derfDiv(op1, op2) {
    return new DerfInt(Math.floor(op1.b10Int / op2.b10Int));
  }
  derfMod(op1, op2) {
    return new DerfInt(op1.b10Int % op2.b10Int);
  }

  static DERF_SYMBOL = "߈";
  static B11_DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a"];
  static DERF_DIGITS = ["0", "1", "2", "3", "4", "5", this.DERF_SYMBOL, "6", "7", "8", "9",];
};

