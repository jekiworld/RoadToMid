def F(x):
    return (1 - x**3)**3 + 1 - x

def F_prime(x):
    return -9*x**2 * (1 - x**3)**2 - 1


def newton_method_single_var(x_init, tol=1e-6, max_iter=100):
    x = x_init
    for i in range(max_iter):
        F_val = F(x)
        F_prime_val = F_prime(x)
        x_new = x - F_val / F_prime_val
        if abs(x_new - x) < tol:
            print(f"Converged in {i + 1} iterations.")
            return x_new, i + 1 
        x = x_new
    print("Did not converge within the maximum number of iterations.")
    return x, max_iter

x_initial = 0.5
root_x1, steps = newton_method_single_var(x_initial)

x2 = 1 - root_x1**3

print(f"Root x1: {root_x1}, Root x2: {x2}, Steps: {steps}")
