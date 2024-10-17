import numpy as np
import matplotlib.pyplot as plt

t_size = 5000
betaA = 0.0005  # Infection rate
mu = 0.001  # Death rate
gammaa = 0.05  # Recidivism rate
nu = 0.002  # Recovery rate
N = 1000  # Total population
A = 1  # Some constant (e.g., birth rate)
dt = 1e-3  # Time step

S = np.zeros(t_size + 1)
I = np.zeros(t_size + 1)
R = np.zeros(t_size + 1)

I[0] = 0.2 * N
R[0] = 0
S[0] = N - I[0] - R[0]

R_0 = (betaA * A / mu) * (1 / (nu + mu))
print(R_0)

for i in range(t_size):
    S[i + 1] = S[i] + dt * (A - betaA * S[i] * I[i] + gammaa * R[i] - mu * S[i])
    I[i + 1] = I[i] + dt * (betaA * S[i] * I[i] + (nu + mu) * I[i])
    R[i + 1] = R[i] + dt * (nu * I[i] - (gammaa + mu) * R[i])

time = np.linspace(0, t_size * dt, t_size + 1)

plt.figure(figsize=(12, 6))
plt.plot(time, S, label="Susceptible (S)", color="blue")
plt.plot(time, I, label="Infected (I)", color="red")
plt.plot(time, R, label="Recovered (R)", color="green")
plt.xlabel("Time")
plt.ylabel("Population")
plt.title("SIR Model Simulation")
plt.legend()
plt.grid(True)
plt.tight_layout()
plt.show()
