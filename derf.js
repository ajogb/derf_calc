export class DerfInt {
  constructor(b10) {
    this.b10Int = b10;
    this.derfInt = Derf.b10ToDerf(this.b10Int);
  }
}

export const Derf = {
  b10ToDerf(b10) {
    if (b10 === 0) return "0";
    let b = 11;
    let b11 = "";
    while (b10 > 0) {
      b11 = this.meta.DERF_DIGITS[b10 % b] + b11;
      b10 = Math.floor(b10 / b);
    }
    return b11;
  },
  derfToB10(derf_str) {
    let exp = 1;
    let b10 = 0;
    let dig;
    for (let i=(derf_str.length -1); i>=0; i--) {
      dig = this.meta.DERF_DIGITS.indexOf(derf_str[i]);
      b10 = b10 + (dig * exp)
      exp = exp * 11;
    }
    return b10;
  },
  derfAdd(op1, op2) {
    return new DerfInt(op1.b10Int + op2.b10Int);
  },
  derfSub(op1, op2) {
    return new DerfInt(op1.b10Int - op2.b10Int);
  },
  derfMul(op1, op2) {
    return new DerfInt(op1.b10Int * op2.b10Int);
  },
  derfDiv(op1, op2) {
    return new DerfInt(Math.floor(op1.b10Int / op2.b10Int));
  },
  derfMod(op1, op2) {
    return new DerfInt(op1.b10Int % op2.b10Int);
  },
  meta: Object.freeze({
    DERF_DIGITS: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "d",
      "6",
      "7",
      "8",
      "9"
    ]
  })
};