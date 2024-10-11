#include <iostream>
#include <vector>

using namespace std;

// Проверяем, что координаты находятся в пределах поля
bool isValid(int x, int y, int n, int m) {
    return x >= 0 && x < n && y >= 0 && y < m;
}

int main() {
    int n, m, k;
    cin >> n >> m >> k;

    // Создаем пустое поле, заполненное символом '.'
    vector<vector<char>> field(n, vector<char>(m, '.'));

    // Вводим координаты мин и устанавливаем символ '*'
    vector<pair<int, int>> mines(k);
    for (int i = 0; i < k; i++) {
        int x, y;
        cin >> x >> y;
        field[x][y] = '*';
        mines[i] = {x, y};
    }

    // Векторы для направления движения (по 8 соседям)
    vector<int> dx = {-1, -1, -1, 0, 1, 1, 1, 0};
    vector<int> dy = {-1, 0, 1, 1, 1, 0, -1, -1};

    // Подсчет мин вокруг каждой клетки
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (field[i][j] == '*') continue;  // Пропускаем клетки с минами

            int mine_count = 0;
            // Проверяем всех соседей
            for (int dir = 0; dir < 8; dir++) {
                int ni = i + dx[dir];
                int nj = j + dy[dir];
                if (isValid(ni, nj, n, m) && field[ni][nj] == '*') {
                    mine_count++;
                }
            }

            // Если есть мины вокруг, ставим их количество, иначе оставляем '.'
            if (mine_count > 0) {
                field[i][j] = mine_count + '0';
            }
        }
    }

    // Выводим поле
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cout << field[i][j];
            if (j != m - 1) cout << " ";  // Разделяем пробелами, кроме последней ячейки в строке
        }
        cout << endl;
    }

    return 0;
}
