from derf import derf_int

print(derf_int(21).b11)
derf21 = derf_int(21)
derf6 = derf_int(6)
derf7 = derf_int(7)

print(derf21 + derf6)
print(derf21 - derf_int(4))
print(derf21 * derf6)
print(derf21 // derf7)
print(derf_int(18) // derf_int(4))