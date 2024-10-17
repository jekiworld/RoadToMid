import numpy as np
import matplotlib.pyplot as plt

def N(t, A, u, N0):
    return (A/u) + (N0 - A/u) * np.exp(-u * t)

A = 5      # Пример значения A
u = 2      # Пример значения u
N0 = 0     # Начальное условие N(0) = 0

t = np.linspace(0, 5, 100)

Nt = N(t, A, u, N0)

plt.plot(t, Nt, label='N(t)')
plt.title('Решение дифференциального уравнения dN/dt = A - uN')
plt.xlabel('Время t')
plt.ylabel('N(t)')
plt.legend()
plt.grid(True)
plt.show()
