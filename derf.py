import numpy as np
DERF_SYMBOL = "߈"
DERF_DIGITS = ("0","1","2","3","4","5",DERF_SYMBOL,"6","7","8","9")

class derf_int():
    def __init__(self,b10_int):
        self.b10 = b10_int
        self.b11 = np.base_repr(b10_int,11)
        self.derf = b11_to_derf(self.b11)

    def __str__(self):
        return self.derf
    
    def __add__(self,other):
        return derf_int(self.b10 + other.b10)
    
    def __sub__(self,other):
        return derf_int(self.b10 - other.b10)
    
    def __mul__(self,other):
        return derf_int(self.b10 * other.b10)
    
    def __floordiv__(self,other):
        return derf_int(self.b10 // other.b10)

def b10_to_derf(input: int):
    return b11_to_derf(np.base_repr(input,11))

def b11_to_derf(input: str):
    output = ""
    for i in range(len(input)):
        if input[i] == "A":
            output = output + DERF_DIGITS[10]
        else: output = output + DERF_DIGITS[int(input[i])]
    return output