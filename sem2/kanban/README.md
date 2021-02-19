# Для проверяющего
Ccылка на проект - http://kanban.std-919.ist.mospolytech.ru/

На базе этого проекта я выполнил лабораторные работы по:

* Предпроцессорам (Лаб. 10)
   
   В папке src/styles обьявление миксин, переменных, ресурсов
   
   Для того, чтобы не импортировать в каждый .vue файлик эти ресурсы, задействовано правило prependData в лоадере стилей вебпака (vue.config.js) 
* Доступности, a11y (Лаб. 9)
   
   Cайтом можно пользоваться с помощью клавиатуры, включая ux фичи такие как:
   закрытие модалки на Escape, submit (в модалке и в форме добавления новой таски) на enter
   
   Расставлены role и aria-label аттрибуты
   
   Адаптивность 768px - 1920px
* Флексам (Лаб. 8)
    
    Продемонстрированы основные свойства и правила флексов, исключая flex: nowrap / wrap (Если так можно, можете выставить неполные баллы за нее ? Но засчитать)



## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
