## Домашка.
**Всем без исключения:**  
Все файлы результата домашки залить в гит.  
Подумать о том, какие файлы нужно исключить.  
За домашку с лишними или с неполными файлами будет снижен балл.  
Результаты предыдущих домашек должны быть зафиксированы в гите в своих ветках:
- файлы с кодом;
- файлы с запросами;
- конфиги и т.д.

**На 3.**  
Установить composer require symfony/security-bundle  
Реализовать то, что было на уроке по записям с лекции (добавить роут в контроллер, добавить в него запрос/ответ с правильными хедерами basic авторизации)

**На 4.**  
Настроить Basic с In Memory User provider.

**На 5.**  
То, что на 4 +  
Заменить Basic на авторизацию по токену. Придумать свой формат токена (или взять один из существующих) и получить из него credentials.

## Что может помочь для выполнения домашки.
### Теория и документация.
**Symfony**:  
- [Компонент security](https://symfony.com/doc/current/security.html);
- [Новый тип аутентификации и как всё настраивать](https://symfony.com/doc/current/security/experimental_authenticators.html);
- [Что такое auth_providers](https://symfony.com/doc/current/security/auth_providers.html);
- [Что такое user_providers](https://symfony.com/doc/current/security/user_provider.html).


### Прочие инструкции
**Как делать домашку.**
На 6 и 7 слайдах описан процесс авторизации basic с хедерами в ответах сервера и в запросах клиента.
Его можно взять за основу реализации домашки на 3 + по записи с лекциями добавить роуты и разбор заголовков.

Нужно продемонстрировать:
- код реализации;
- успешную и неуспешную аутентификации к вашему роуту.

Для домашки на 4 потребуется материал:
- [как поставить security компонент](https://symfony.com/doc/current/security.html#installation)
- [как подключить basic авторизацию в security компонент](https://symfony.com/doc/current/security/auth_providers.html#security-http-basic)
- [как подключить in memory юзеров в конфиг](https://symfony.com/doc/current/security/user_provider.html#memory-user-provider)
- [как ограничить доступ для ролей](https://symfony.com/doc/current/security.html#add-code-to-deny-access).

В результате у вас должен быть отдельный firewall конфиг с паттерном на какой-нибудь ваш роут, который вы хотите защитить, с ограничениями по ролям либо в файле security (как на уроке), либо непосредственно в коде роута (примеры в документации есть, выбирайте сами).

Нужно продемонстрировать:
- код реализации и конфиги;
- успешную и неуспешную аутентификации;
- защищенный и незащищенный роуты;
- ограничение прав на роуты по ролям.

Для домашки на 5 потребуется материал:
- [как создать свой аутентификатор](https://symfony.com/doc/current/security/experimental_authenticators.html#creating-a-custom-authenticator).

Нужно будет создать указанные файлы (не забудьте поправить namespaces).  
Добавить в security отдельный firewall на иной паттерн.  
Подключить к нему ВАШ аутентификатор, а так же добавить его как entry_point (для этого он должен имплементировать AuthenticationEntryPointInterface - об этом так же сказано в документации выше, найдите этот интерфейс и реализуйте методы, как указано в аннотациях к ним).

В теле метода authenticate вашего аутентификатора необходимо будет реализовать логику работы с вашим токеном, чтобы передать credentials в нужные классы для авторизации.

Чтобы всё заработало и аутентификатор смог использовать in memory пользователей, которых вы добавили ранее, вам нужно будет поменять одну строчку в коде из документации:

```php
# было:
return new SelfValidatingPassport(new UserBadge($apiToken));
# стало:
return new Passport(new UserBadge($login), new PasswordCredentials($pw));
```
где:
- $login - это логин, который вы получите из токена;
- $pw - это пароль, который вы получите из токена (или сам токен).

Если вы всё сделали правильно, то, ожидается, что при переходе по роуту, который вы защитили вашим аутентификатором:
- без нужного хедера будет отдаваться ответ, что нужно указать хедер с авторизационными данными;
- с корректным хедером и с некорректными параметрами аутентификация не произойдёт;
- с корректным хедером, с корректными параметрами аутентификация произойдет, но, если не будет прав, то к ресурсу доступа не будет;

Код + всё вышеперечисленное нужно продемонстрировать.

Если будете менять структуру директорий в проекте, то вот пример конфигов.
```yaml
# изменения в ./config/services.yaml
    App\Api\Controller\:
        resource: '../src/Api/Controller/'
        tags: ['controller.service_arguments']

    App\Core\Controller\:
        resource: '../src/Core/Controller/'
        tags: ['controller.service_arguments']
```
```yaml
# изменения в ./config/routes/annotations.yaml
api-controllers:
    resource: ../../src/Api/Controller/
    type: annotation
    prefix: /api/v1

core-controllers:
    resource: ../../src/Core/Controller/
    type: annotation
```
```php
<?php

declare(strict_types=1);

namespace App\Core\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController
{
    /**
     * Load the site definition and redirect to the default page.
     *
     * @Route("/")
     */
    public function indexAction()
    {
        return new Response(
            json_encode(
                [
                    'message' => 'HomePage',
                ],
                JSON_THROW_ON_ERROR
            ),
            Response::HTTP_OK,
            [
                'Content-type' => 'application/json'
            ]
        );
    }
}
```
