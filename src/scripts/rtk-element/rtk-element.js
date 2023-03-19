import '../../styles/styles.css';

document.getElementById('rtk-element').innerHTML = /*html*/ `
    <div class="header rtk-element-header">
        <div class="page-wrapper">
            <div>
                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/03/rtk-element-page-logo.png" alt="logo" class="logo rtk-element-logo" />
            </div>
            <h1 class="title rtk-element-title">Цифровой<br>медицинский профиль</h1>
            <div class="params">
                <p class="param direction rtk-element-direction">Веб системы</p>
                <p class="param competence rtk-element-competence">Гос</p>
            </div>
            <div>
                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/03/rtk-element-header-background-illustration.png" alt="rtk-element-header-background-illustration" class="rtk-element-header-background-illustration" />
            </div>
        </div>
    </div>

    <div class="page-wrapper">
        <div class="block-with-definition rtk-element-block-with-definition">
            <div class="text-area content-wrapper">
                <p class="paragraph">Проект цифрового медицинского профиля пациента (ЦМП) – это проект Гибридного хранилища данных, в основе которого находятся данные ГИС ОМС о застрахованных лицах и оказанной им медицинской помощи. В настоящее время все данные хранятся разрознено, в разных системах с разным уровнем доступа и у врачей просто нет возможности получить всю информацию о пациенте. Объединение всех медицинских данных пациента, хранящиеся в разных информационных системах - задача сложная, но важная. Помимо этого важно не только собрать все данные в одном месте, но и структурировать их в понятном пользовательском интерфейсе.</p>
                <p class="paragraph paragraph-margin-top">Создание ЦМП позволит:</p>
                <ul class="simple-list paragraph-margin-top content-wrapper">
                    <li class="simple-list-item rtk-element-list-item">
                        <div class="rtk-element-list-marker"></div>
                        <p class="paragraph">Повысить качество оказываемой медицинской помощи нашим согражданам за счёт формирования максимально полных данных о пациенте, истории его болезни, назначаемых лекарственных средствах, сопутствующих заболеваниях и т.д.</p>
                    </li>
                    <li class="simple-list-item rtk-element-list-item">
                        <div class="rtk-element-list-marker rtk-element-list-marker-second"></div>
                        <p class="paragraph">Приблизиться к намеченной правительством РФ цели – к 2030 году повысить среднюю продолжительность жизни до 78 лет.</p>
                    </li>
                    <li class="simple-list-item rtk-element-list-item">
                        <div class="rtk-element-list-marker"></div>
                        <p class="paragraph">Реализовать удобный и современный инструмент для пользователей системы, различных государственных информационных систем медицинских учреждений.</p>
                    </li>
                </ul>
            </div>
            <div class="definition-area rtk-element-definition-area">
                <div class="definition-container rtk-element-definition-container">
                    <h3 class="rtk-element-definition-title rtk-element-definition-color">ЦМП</h3>
                    <p class="paragraph rtk-element-definition-color">цифровой медицинский профиль пациента</p>
                </div>
            </div>
        </div>

        <section class="section">
            <h2 class="section-title">Задача</h2>
            <p class="paragraph content-wrapper">Реализация потоковой обработки данных, принимающей на вход электронные медицинские документы, а также счета ОМС, обрабатывающей и преобразующей полученные данные, записывая их в базы данных. Формирование из полученных данных так называемых “ракурсов” (срезов медицинского профиля), которые становятся доступными для систем медицинских учреждений.</p>
        </section>

        <section class="section">
            <h2 class="section-title">Решение</h2>
            <p class="paragraph content-wrapper">Для решения поставленной задачи наша команда занялась разработкой фундаментальных сервисов, отвечающих за получение и агрегацию данных из источников, сохранение и преобразование для наполнения гибридного хранилища данных, а также предоставление доступа заинтересованным потребителям в необходимых им представлениях. По итогу нами было реализовано 2 сервиса:</p>
            <ul class="simple-list paragraph-margin-top content-wrapper">
                <li class="rtk-element-decision-list-item">
                    <h3 class="paragraph paragraph-bold rtk-element-decision-list-item-title">Дизайнер моделей</h3>
                    <p class="paragraph rtk-element-decision-list-item-description">сервис, который позволяет создавать модели документов из источников, собирать необходимые данные по темам и типам, например “Все лица подлежащие диспансеризации в 2023 году”. В сервисе можно управлять моделями и отправлять сообщения в сервис “Потоковой обработки” для запуска конфигурации процесса обработки документов.</p>
                    <div class="rtk-element-decision-list-item-illustration">
                        <div>
                            <img src="http://192.168.1.112:8080/wp-content/uploads/2023/03/rtk-element-decision-list-item-illustration-1.png" alt="rtk-element-decision-list-item-illustration-1" class="rtk-element-decision-list-item-illustration-1" />
                        </div>
                        <div>
                            <img src="http://192.168.1.112:8080/wp-content/uploads/2023/03/rtk-element-decision-list-item-illustration-2.png" alt="rtk-element-decision-list-item-illustration-2" class="rtk-element-decision-list-item-illustration-2" />
                        </div>
                    </div>
                </li>
                <li class="rtk-element-decision-list-item">
                    <h3 class="paragraph paragraph-bold rtk-element-decision-list-item-title">Потоковая обработка</h3>
                    <p class="paragraph rtk-element-decision-list-item-description">сервис, который при получении документа парсит и маппит его согласно созданным моделям. В результате его работы, данные в потоке распределяются по всем связанным моделям, от сырой структуры до готовых к выдаче срезов данных (ракурсов).</p>
                    <div class="rtk-element-decision-list-item-illustration">
                        <div>
                            <img src="http://192.168.1.112:8080/wp-content/uploads/2023/03/rtk-element-decision-list-item-illustration-3.png" alt="rtk-element-decision-list-item-illustration-3" class="rtk-element-decision-list-item-illustration-1" />
                        </div>
                        <div>
                            <img src="http://192.168.1.112:8080/wp-content/uploads/2023/03/rtk-element-decision-list-item-illustration-4.png" alt="rtk-element-decision-list-item-illustration-4" class="rtk-element-decision-list-item-illustration-2" />
                        </div>
                    </div>
                </li>
            </ul>
        </section>

        <section class="section">
            <h2 class="section-title">Технологии</h2>
            <ul class="technology-list content-wrapper">
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/Java-8.png" alt="java" class="technology-logo" />
                    </div>
                    <p class="technology-name">Java</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/Spring-boot.png" alt="spring-boot" class="technology-logo" />
                    </div>
                    <p class="technology-name">Spring Boot</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/Postgres-9.x.png" alt="postgresql" class="technology-logo" />
                    </div>
                    <p class="technology-name">PostgreSQL</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Kafka.png" alt="kafka" class="technology-logo" />
                    </div>
                    <p class="technology-name">Kafka</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Spark-2.x.png" alt="spark" class="technology-logo" />
                    </div>
                    <p class="technology-name">Spark</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/03/Apache-Hadoop.png" alt="hadoop" class="technology-logo" />
                    </div>
                    <p class="technology-name">Hadoop</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/03/HBase.png" alt="h-base" class="technology-logo" />
                    </div>
                    <p class="technology-name">HBase</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/03/Tarantool.png" alt="tarantool" class="technology-logo" />
                    </div>
                    <p class="technology-name">Tarantool</p>
                </li>
            </ul>
        </section>

        <section>
            <div class="section staff-comment-section">
                <div class="comment-container web-loan-comment-container">
                    <p class="paragraph">
                        Проект радует своей по-настоящему значимой задачей – продление жизни россиян.
                    </p>
                    <p class="paragraph paragraph-margin-top">Большая предметная область, технологии больших данных и неочевидная работа с XML ставят перед разработчиком много нетривиальных задач, из последнего – подписание SOAP Envelope для аутентификации, гарантирования целостности сообщений и конфиденциальности.</p>
                    <div class="staff-container">
                        <p class="staff-name">
                            Артем Ситников
                        </p>
                        <p class="staff-post">
                            Java-разработчик
                        </p>
                    </div>
                </div>
                <div>
                    <img src="http://192.168.1.112:8080/wp-content/uploads/2023/03/Sitnikov-Artem.png" alt="Sitnikov-Artem" class="staff-photo" />
                </div>
            </div>
        </section>
    </div>

    <div class="footer">
        <div class="page-wrapper">
            <h3 class="footer-title">Похожие кейсы</h3>
            <div>
                <OtherProjectsComponent competencies="8" directions="13" />
            </div>
        </div>
    </div>
`;
