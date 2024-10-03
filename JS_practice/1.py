import matplotlib.pyplot as plt

dt = 0.001  
l = 0.1  
T_cap = 1000000  
t_final = 100  
t_size = int(t_final / dt)  

T = [0.0] * (t_size + 1)
T[0] = 1000  


for i in range(t_size):  
    T[i + 1] = T[i] + dt * l * T[i] * (1 - T[i] / T_cap)

time = [i * dt for i in range(t_size + 1)]

plt.plot(time, T, label='Tumor Population')

plt.xlabel('Time (t)')
plt.ylabel('Tumor Population (T)')
plt.title('Tumor Population Growth Over Time')


plt.legend()
plt.grid(True)

plt.show()

