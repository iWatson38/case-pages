import '../../styles/styles.css';

document.getElementById('bps-android-sdk').innerHTML = /*html*/ `
    <div class="header bps-android-sdk-header">
        <div class="page-wrapper">
            <div>
                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/bps-android-sdk-logo.png" alt="logo" class="logo bps-android-sdk-logo" />
            </div>
            <h1 class="title bps-android-sdk-header-title">B2B-портал для операторов связи</h1>
            <div class="params">
                <p class="param direction bps-android-sdk-direction">Веб система</p>
                <p class="param competence bps-android-sdk-competence">Ритейл</p>
            </div>
            <div class="device-types-list">
                <div class="device-type-container">
                    <div class="device-types-list-marker bps-android-sdk-device-types-list-marker"></div>
                    <p class="device-type bps-android-sdk-device-type">Android</p>
                </div>
                <div class="device-type-container">
                    <div class="device-types-list-marker bps-android-sdk-device-types-list-marker"></div>
                    <p class="device-type bps-android-sdk-device-type">IOS</p>
                </div>
            </div>
        </div>
    </div>

    <div class="page-wrapper bps-android-sdk-main">
        <div class="block-with-definition bps-android-sdk-block-with-definition">
            <div class="text-area content-wrapper">
                <p class="paragraph"><span class="paragraph-bold">bpc</span> - является российской компанией, помогающей предприятиям максимально полно использовать возможности платежных инструментов. Они предлагают гибкие, адаптивные под требование разных Банков решения.</p>
                <p class="paragraph paragraph-margin-top">Имея клиентов из 75 стран на 5 континентов и 250 платежных карт в обслуживании, компания старается максимально оптимизировать интеграцию новых клиентов в свои системы.</p>
                <p class="paragraph paragraph-margin-top">Частью такой оптимизации является создание SDK.  Это пакет библиотек, для того, чтобы клиент мог легко и быстро начать работать с системой.  SDK обеспечивает ряд преимуществ:</p>
                <ul class="simple-list paragraph-margin-top">
                    <li class="simple-list-item bps-android-sdk-description-list-item">
                        <div class="bps-android-sdk-description-list-marker"></div>
                        <p class="paragraph">Высокая скорость интеграции нового клиента - клиентам почти не нужно писать код.</p>
                    </li>
                    <li class="simple-list-item bps-android-sdk-description-list-item">
                        <div class="bps-android-sdk-description-list-marker"></div>
                        <p class="paragraph">Предсказуемость поведения — использование одних и тех же библиотек приводит поведение систем к определенному стандарту, что сильно облегчает поиск и устранение ошибок и уязвимостей.</p>
                    </li>
                    <li class="simple-list-item bps-android-sdk-description-list-item">
                        <div class="bps-android-sdk-description-list-marker"></div>
                        <p class="paragraph">Качество кода и документация - качественно протестированное SDK, переиспользованное в разных местах, снижает количество ошибок и повышает покрытие тестами и документацией</p>
                    </li>
                </ul>

                <section class="section">
                    <h2 class="section-title">Задача</h2>
                    <p class="paragraph content-wrapper">Создать Software Development Kit (SDK) – набор инструментов, предназначенных для интеграции платёжной формы в Android приложение.</p>
                </section>

                <section class="section">
                    <h2 class="section-title">Решение</h2>
                    <p class="paragraph content-wrapper">В SDK входит библиотека для шифрования, функционал для работы с платёжными картами, включая интерфейсные формы, с поддержкой мультизычности и возможностью изменения дизайна, интеграция с Google Pay, возможность гибкой конфигурации.</p>
                    <p class="paragraph content-wrapper paragraph-margin-top">В SDK собран не только необходимый набор для быстрого подключения платёжной формы, но и дополнительные сервисные функции – сканирование карты камерой телефона, считывание по NFC, хранение списков ранее введённых карт, валидация данных карты, отображение карты в фирменных цветах банка эмитента, настройка стилей для дизайна тем. Эти и другие функции помогают пользователям SDK легко и удобно подключить платёжную форму в мобильное приложение.</p>
                </section>
            </div>
            <div class="bps-android-sdk-definition-area">
                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/bps-android-sdk-definition.png" alt="bps-android-sdk-definition" class="bps-android-sdk-definition" />
            </div>
        </div>

        <section class="section">
            <h2 class="section-title">Технологии</h2>
            <p class="paragraph content-wrapper">При разработке архитектуры приложения заложили возможность для расширения. Приложение разделено на функциональные модули, что позволяет гибко управлять доступным функционалом и расширять функциональность с меньшими изменениями.</p>
            <ul class="technology-list content-wrapper paragraph-margin-top sibur-click-internal-social-network-technology-list">
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Android-Architecture-Components.png" alt="android" class="technology-logo" />
                    </div>
                    <p class="technology-name">Android</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/kotlin.png" alt="Kotlin" class="technology-logo" />
                    </div>
                    <p class="technology-name">Kotlin</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Kotlin-Coroutines.png" alt="Kotlin-Coroutines" class="technology-logo" />
                    </div>
                    <p class="technology-name">Kotlin Coroutines</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Detekt.png" alt="Detekt" class="technology-logo" />
                    </div>
                    <p class="technology-name">Detekt</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/SonarQube.png" alt="SonarQube" class="technology-logo" />
                    </div>
                    <p class="technology-name">SonarQube</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Android-Lint.png" alt="Android-Lint" class="technology-logo" />
                    </div>
                    <p class="technology-name">Android Lint</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/CD.png" alt="CD" class="technology-logo" />
                    </div>
                    <p class="technology-name">CI/CD</p>
                </li>
            </ul>
        </section>

        <section class="section staff-comment-section">
            <div class="comment-container bps-android-sdk-comment-container">
                <p class="paragraph">
                    Процедура оплаты сопряжена с повышенными требованиями к безопасности, поэтому на проекте имели место быть задачи, связанны с работой над SSL-сертификатами и их проверкой.</p>
                <p class="paragraph paragraph-margin-top">
                    Все для того - чтобы злоумышленник не смог притвориться платежной системой и получить доступ к данным пользователя.
                </p>
                <div class="staff-container">
                    <p class="staff-name">
                        Кирилл Тихонов
                    </p>
                    <p class="staff-post">
                        Android-разработчик
                    </p>
                </div>
            </div>
            <div>
                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Kirill-Tihanov.png" alt="Kirill-Tihanov" class="staff-photo" />
            </div>
        </section>
    </div>

    <div class="footer">
        <div class="page-wrapper">
            <h3 class="footer-title">Похожие кейсы</h3>
            <div>
                <OtherProjectsComponent ids="75" />
            </div>
        </div>
    </div>
`;
