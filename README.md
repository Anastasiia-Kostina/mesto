# Проект: Место

## Обзор
* [Общее описание](#intro-part)
* [Содержательная часть](#semantic-part)
* [Дополнения из спринта 5](#Sp5-addition)
* [Дополнения из спринта 6](#Sp6-addition)
* [Figma](#figma_link-part)
* [Картинки](#pics-part)
* [Ссылка на сайт в Git](#site_link-part)

<a id="intro-part">**Общее описание**</a>

*Проект является начальной частью блока ознакомления с JavaScript. На этой интернет-странице мы видим интерактивную фото-галерею, которую пользователь может создавать и редактировать сам.*

<a id="semantic-part">***Описание содержательной части и особенностей***</a>

У проекта одна страница, поделённая на два основных брейкпоинта: `320, 1280 пикселей`. Для повышения адаптивности были добавлены промежуточные `@media`, позволившие сделать переходы между разными размерами экранов плавнее. 

Для отображения текста мы вспервы применили такую связку свойств CSS, как: `text-overflow: ellipsis; white-space: nowrap; overflow: hidden;`. Это позволило скрыть лишний текст на странице. Помимо этого, активно применялись свойства `opacity`,`transition`, `hover`и др., позволяющие сделать взаимодействие со страницей интереснее. 

Работа с JS на этапе 4-ого спринта заключалась в создании и регулировании всплывающего интерактивной `popup` формы, с помощью которой, можно редактировать данные о пользователе. Эти данные передаются на страницу и становятся описанием профиля.
Как уже упоминалось, пользователь может создавать собственную галерею. На этом этапе мы написали программу для проставления лайков фотографиям. Далее, предположительно, нам предстоит создать код для добавления в галерею картинок и редактирования их описания, смены аватара пользователя.

<a id="Sp5-addition">**Дополнения из спринта 5**</a>
В данной части проекта мы усложнили задачи по JS. Как и предполагалось, нашей задачей стало создание карточек по клику на кнопку `add`. Нажимая на неё, пользователь вызывает форму для заполнения информации о карточке (название, ссылка на изображение). Мы пользовались теми же классами CSS, но немного видоизменили код JS т.к. при нажатии кнопки 'Создать', нам надо создать карточку. Данные из формы обрабатываются в функции `handlePopupSubmitAdd`, откуда поступают в `createCard`. В карточку помещается не только вышеописанная информация, но и сердечко для лайков, корзина для удаления карточки. Обработчики взаимодействия с этими кнопками прописываются всё в той же функции. Мы соединяем её с другим функционалом: увеличением картинки при клике на неё (`renderPopupForPic`). 
При написании кода нами были использовано несколько новых для нас приёмов. К ним относятся `коллбэки`,`forEach`. Мы также поэкспериментировали со взаимозаменяемостью event.srcElement.src и event.target.src (объектоориентированным подходом). Отметим, что код на этом этапе стал более защищённым т.к. для создания карточек мы пользовались тегом `template`, позволило избежать возможных незащищённостей кода, которые имели шанс возникнуть используя бы мы `innerHTML`. 
Основу CSS кода мы заложили в Спринте 4, здесь, нам предстояло слегка адаптировать, дописать стили для карточки и картинки. Важным этапом было трансформирование попапов. Мы выяснили, что анимирование и свойство `display: none` не лучшая пара, наш код не мог функционировать как задумывалось. Поэтому мы нашли решение в использовании для `popup` и  `popup__picture` свойств `visibility: hidden; opacity: 0; transition: all 1s ease;` и `visibility: visible; opacity: 1;` в режиме`opened`. `Display: none` пришлось заменить на `flex`.

<a id="Sp6-addition">**Дополнения из спринта 6**</a>
Здесь мы сосредоточились на валидации форм, которые заключены в попапы. Было важно написать более универсальные функции, использовать объекты в качестве их параметров. С помощью функций в документе `validate.js`, мы перебрали все составляющие форм, повесили на них обработчики событий, связали их с кнопками. Сначала код был написан для самой первой формы, потом, благодаря его универсальности, поменяв несколько строк и создав доп. функцию в `enableValidation`, нам удалось распространить его на все доступные формы. Отдельно пришлось продумывать реализацтю поведения кнопки `submit` на форме `edit`. По коду она не активна при вызове (`disableSubmitBtn`), но в `input` уже содержится текст по умолчанию, который кодом игнорировался. Чтобы сделать кнопку активной, нам пришлось добавить в html атрибут `value` с необходимым содержимым.
Пользователь может управлять страницей и с помощью клавиатуры, поэтому нам было нужно написать код для закрытия попапов по нажатию клавиши `escape`. Аналогичное возможно и для `submit`, но это, как и редактирование аватара пользователя, можно считать задачами на будущее. Наша функция отслеживает нажатие на необходимую клавишу и передаёт `closePopup` сигнал о том, что нужно закрыть попап. На `openPopup` и `closePopup` также находятся слушатели, позволяющие добавить или убрать класс `"popup_opened"` и, соответственно, вовремя закрыть попап.

<a id="figma_link-part">**Figma**</a>
Проект создан на основе макета Figma.
* [Ссылка на макет в Figma] (https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1&t=QTSyzxubOYBLKd0z-0).

<a id="pics-part">**Картинки**</a>

Картинки оптимизированы для ускорения работы сайта. Это было сделано с помощью сторонних программ, одна из них -- https://tinypng.com/. На этапе 5 картинки были заменены ссылками на них.

<a id="site_link-part">**Ссылка на сайт в Git**</a>
*https://anastasiia-kostina.github.io/mesto/*
