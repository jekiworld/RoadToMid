function smallestChair(times, targetFriend) {
    // Массив для отслеживания времени, когда каждый стул станет свободным
    const levTime = new Array(times.length).fill(-1);

    // Получаем время прибытия целевого друга
    const tarFrndArrival = times[targetFriend][0];

    // Сортируем массив друзей по времени прибытия
    times.sort((a, b) => a[0] - b[0]);

    // Проходим по каждому другу
    for (let [arv, lev] of times) {
        let i = 0;
        
        // Ищем первый доступный стул
        while (levTime[i] !== -1 && levTime[i] > arv) {
            i++;
        }

        // Если время прибытия совпадает с целевым другом, возвращаем номер стула
        if (arv === tarFrndArrival) return i;

        // Помечаем стул занятым до момента ухода текущего друга
        levTime[i] = lev;
    }

    // Запасной вариант, если что-то пошло не так (но этого не должно происходить)
    return -1;
}


smallestChair([[1,4],[2,3],[4,6]], 0)