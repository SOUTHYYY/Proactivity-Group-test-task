This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Идея тестового задания: 

Сверстать две страницы по макетам (доступны по ссылке). Не обязательно pixel perfect, но выглядеть должно как на макете. Реализовать пути страниц используя react-router. Настроить работу с методом API. Ниже подробнее о каждом экране.

### Инструменты
Роут: /instruments/
Страница предсталяет собой таблицу со списком CMS. Нужно реализовать:
возможность этот список отсортировать по столбцам (проекты, партнеры, оценка пользователей). Сортировка осуществляется в API, нужно передать параметры в метод, ниже об этом будет написано подробнее;
выбрать несколько вариантов из списка, тем самым добавив их к сравнению (в избранное). При чём после перезагрузки страницы список выбранных CMS должен сохраниться;
отображать спонсора иначе, чем другие записи (для этого приходит флаг из метода API). Само отображение на макете;
если инструмент не имеет логотипа, выводим на его месте символьное лого (см. ниже в описании к методу API);
название инструмента является ссылкой на его страницу (саму страницу выполнять не нужно), роут для страницы (ссылка по названию) должен быть таким: /instrument/CODE/, где CODE — поле из метода API.

###  Избранное
Роут: /favorites/
Страница должна выводить список выбранных CMS, на странице с таблицей. Добавление в /favorites/ должно работать через redux.

Для реализации сортировки, нужно передавать в метод параметры sort и sort_direction. Поле sort_direction принимает значения asc и desc. Поле sort принимает значения:
#### works_count (кол-во работ);
#### partners_count (кол-во партнеров);
#### rate (средняя оценка).
Параметры instrument_type_code и page обязательные. Ваша реализация должна менять значение page для реализации пагинации.



