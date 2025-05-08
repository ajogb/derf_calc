class DerfInt {
    constructor(b10) {
        this.b10Int = b10
        this.b11Int = b10Tob11(this.b10Int)
        this.derfInt = b11ToDerf(this.b11Int)
    };
};

function b10Tob11(b10) {
    let x = b10;
    let b = 11;
    let b11 = "";
    while (x > 0) {
        b11 = B11_DIGITS[x % b] + b11;
        x = Math.floor(x/b);
    };
    return b11;
};

function b11ToDerf(b11) {
    let derf = "";
    for (i=0; i<b11.length; i++) {
        derf = derf + b11[i]
    };
    return derf
};

function b10ToDerf(b10) {
    return b11ToDerf(b10Tob11);
};

function derfAdd(op1,op2) {
    return DerfInt(op1.b10Int + op2.b10Int);
};

function derfSub(op1,op2) {
    return DerfInt(op1.b10Int - op2.b10Int);
};

function derfMul(op1,op2) {
    return DerfInt(op1.b10Int * op2.b10Int);
};

function derfDiv(op1,op2) {
    return DerfInt(Math.floor(op1.b10Int / op2.b10Int))
};

function derfMod(op1,op2) {
    return DerfInt(op1.b10Int % op2.b10Int);
}

const DERF_SYMBOL = "߈";
const B11_DIGITS = ["0","1","2","3","4","5","6","7","8","9","a"];
const DERF_DIGITS = ["0","1","2","3","4","5",DERF_SYMBOL,"6","7","8","9"];