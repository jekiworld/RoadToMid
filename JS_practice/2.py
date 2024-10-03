import numpy as np


def F(x):
    f1 = x[0] ** 3 + x[1] - 1
    f2 = x[1] ** 3 - x[0] + 1
    return np.array([f1, f2])


def J(x):
    df1_dx1 = 3 * x[0] ** 2
    df1_dx2 = 1
    df2_dx1 = -1
    df2_dx2 = 3 * x[1] ** 2
    return np.array([[df1_dx1, df1_dx2],
                     [df2_dx1, df2_dx2]])


def newton_method(F, J, x0, tol=1e-6, max_iter=100):
    """
    Параметры:
    F       : Функция системы уравнений
    J       : Якобиан системы
    x0      : Начальное приближение (массив numpy)
    tol     : Точность
    max_iter: Максимальное число итераций
    """

    x = x0

    for i in range(1, max_iter + 1):
        Fx = F(x)
        Jx = J(x)
        try:
            delta = np.linalg.solve(Jx, -Fx)
        except np.linalg.LinAlgError:
            print("Якобиан вырожден. Метод Ньютона не применим.")
            return x, i - 1
        x = x + delta
        if np.linalg.norm(F(x), ord=2) < tol:
            return x, i
    print("Достигнуто максимальное число итераций без сходимости.")
    return x, max_iter


if __name__ == "__main__":
    x0 = np.array([0.0, 1.0])

    tolerance = 1e-6
    max_iterations = 100

    solution, iterations = newton_method(F, J, x0, tol=tolerance, max_iter=max_iterations)

    print(f"Решение: x1 = {solution[0]:.6f}, x2 = {solution[1]:.6f}")
    print(f"Число итераций: {iterations}")