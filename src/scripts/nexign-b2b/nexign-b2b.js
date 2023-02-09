import '../../styles/styles.css';

document.getElementById('nexign-b2b').innerHTML = /*html*/ `
    <div class="header nexign-b2b-header">
        <div class="page-wrapper">
            <div>
                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/nexign_logo.png" alt="logo" class="logo" />
            </div>
            <h1 class="title nexign-b2b-header-title">B2B-портал для операторов связи</h1>
            <div class="params">
                <p class="param direction nexign-b2b-direction">Веб система</p>
                <p class="param competence nexign-b2b-competence">Ритейл</p>
            </div>
        </div>
    </div>

    <div class="page-wrapper">
        <div class="block-with-definition">
            <div class="text-area content-wrapper">
                <p class="paragraph">
                    Nexign — международный провайдер BSS-решений с более чем 30-летним опытом работы и клиентской базой в 14 странах мира. Они занимаются разработкой, модификацией, внедрением и технической поддержкой компьютерного программного обеспечения. Основная задача Nexign — помогать телеком-операторам завоевывать новые рынки и новых абонентов путем глубокой трансформации и модернизации их ИТ-систем.
                </p>
                <p class="paragraph paragraph-margin-top">
                    Nexign обратились в Интабию за помощью в создании универсального корпоративного (B2B) портала для операторов связи. 
                </p>
            </div>
            <div class="definition-area">
                <div class="definition-container nexign-b2b-definition-container">
                    <h3 class="definition nexign-b2b-definition">Биллинг</h3>
                    <p class="paragraph paragraph-margin-top nexign-b2b-definition">
                        «business to business» («бизнес для бизнеса»).
                    </p>
                    <p class="paragraph paragraph-margin-top nexign-b2b-definition">
                        Это вид отношений между партнерами в процессе продаж.
                    </p>
                </div>
            </div>
        </div>
        <div class="content-wrapper paragraph-margin-top">
            <p class="paragraph paragraph-margin-top">
                Они уже имели B2B порталы для отдельных заказчиков, но создание уникального портала для каждого клиента процесс длительный и дорогостоящий, а так же устаревшее решение имело ряд недостатков:
            </p>
            <ul class="simple-list paragraph-margin-top">
                <li class="simple-list-item nexign-b2b-disadvantage-list-item">
                    <div class="nexign-b2b-list-marker nexign-b2b-disadvantage-list-marker"></div>
                    <p class="paragraph">Несовременный дизайн</p>
                </li>
                <li class="simple-list-item nexign-b2b-disadvantage-list-item">
                    <div class="nexign-b2b-list-marker nexign-b2b-disadvantage-list-marker"></div>
                    <p class="paragraph">Низкую скорость работы сайта</p>
                </li>
                <li class="simple-list-item nexign-b2b-disadvantage-list-item">
                    <div class="nexign-b2b-list-marker nexign-b2b-disadvantage-list-marker"></div>
                    <p class="paragraph">Высокую стоимость поддержки и развития</p>
                </li>
            </ul>
            <p class="paragraph paragraph-margin-top">
                Поэтому у них возникла идея создания универсального портала, который можно легко кастомизировать под стиль заказчика.<br>Такой B2B портал будет стоить дешево и создаваться быстро!
            </p>
            <p class="paragraph paragraph-margin-top">
                Портал должен предоставлять возможности по управлению счетами, анализу расходов, взаимодействию с оператором и автоматизации финансовых операций.
            </p>
        </div>

        <section class="section">
            <h2 class="section-title">Задача</h2>
            <p class="paragraph">Разработка презентационной части B2B-портала</p>
        </section>

        <section class="section">
            <h2 class="section-title">Решение</h2>
            <div class="block-with-definition">
                <div class="text-area content-wrapper">
                    <p class="paragraph">В ходе работы над проектом мы преодолели следующие сложности:</p>
                    <ul class="simple-list paragraph-margin-top">
                        <li class="simple-list-item nexign-b2b-decision-block-list-item">
                            <div class="nexign-b2b-list-marker nexign-b2b-decision-block-list-marker"></div>
                            <p class="paragraph">
                                Команда заказчика приступила к работе на несколько месяцев позже, чем наша команда. Чтобы избежать возможных проблем при интеграции, мы с самого начала разработали и согласовали REST-API.
                            </p>
                        </li>
                        <li class="simple-list-item nexign-b2b-decision-block-list-item">
                            <div class="nexign-b2b-list-marker nexign-b2b-decision-block-list-marker"></div>
                            <p class="paragraph">
                                В ходе работы над проектом, заказчик, из соображений экономии, решил повторно использовать часть разделов портала. При переделке старых разделов ограничились изменением стилей.<br>Мы реализовали новые разделы, а также интегрировали старые разделы в новый каркас портала.
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="definition-area">
                    <div class="definition-container nexign-b2b-rest-api-definition-container">
                        <h3 class="definition nexign-b2b-rest-api-definition">REST-API</h3>
                        <p class="paragraph paragraph-margin-top nexign-b2b-rest-api-definition">
                            (Representational State Transfer) архитектурный стиль разработки API веб-приложений или компонентов распределённого приложения
                        </p>
                    </div>
                </div>
            </div>
            <div class="content-wrapper">
                <p class="paragraph paragraph-margin-top">
                    В результате решили задачи разработки нового портала – быстродействие, внешний вид, возможность развития и поддержки, при этом сэкономили бюджет за счет повторного использования некоторых разделов старой версии.
                </p>
                <p class="paragraph paragraph-margin-top">
                    Портал обеспечивает следующие функциональные возможности:
                </p>
                <ul class="simple-list paragraph-margin-top">
                    <li class="simple-list-item nexign-b2b-decision-block-list-item">
                        <div class="nexign-b2b-list-marker nexign-b2b-decision-block-list-marker"></div>
                        <p class="paragraph">
                            Интерактивные высоконагруженные таблицы до 100 000 элементов на странице.
                        </p>
                    </li>
                    <li class="simple-list-item nexign-b2b-decision-block-list-item">
                        <div class="nexign-b2b-list-marker nexign-b2b-decision-block-list-marker"></div>
                        <p class="paragraph">
                            Динамически подгружаемые графики для отображения данных с фильтрацией по различным параметрам.
                        </p>
                    </li>
                    <li class="simple-list-item nexign-b2b-decision-block-list-item">
                        <div class="nexign-b2b-list-marker nexign-b2b-decision-block-list-marker"></div>
                        <p class="paragraph">
                            Мультиязычность с динамической подзагрузкой словаря.
                        </p>
                    </li>
                    <li class="simple-list-item nexign-b2b-decision-block-list-item">
                        <div class="nexign-b2b-list-marker nexign-b2b-decision-block-list-marker"></div>
                        <p class="paragraph">
                            Возможность смены темы дизайна портала.
                        </p>
                    </li>
                </ul>
                <p class="paragraph paragraph-margin-top">
                    Портал запущен в промышленную эксплуатацию.
                </p>
            </div>
        </section>

        <section class="section">
            <h2 class="section-title">Технологии</h2>
            <ul class="technology-list content-wrapper">
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/React.png" alt="react-16.7" class="technology-logo" />
                    </div>
                    <p class="technology-name">React 16.7</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Typescript.png" alt="typescript" class="technology-logo" />
                    </div>
                    <p class="technology-name">Typescript 3.7</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/ReduxSaga.png" alt="redux-saga" class="technology-logo" />
                    </div>
                    <p class="technology-name">Redux + Saga</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Formik.png" alt="formik" class="technology-logo" />
                    </div>
                    <p class="technology-name">Formik</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Lodash.png" alt="lodash" class="technology-logo" />
                    </div>
                    <p class="technology-name">Lodash</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/NestJS.png" alt="nest-js" class="technology-logo" />
                    </div>
                    <p class="technology-name">NestJS</p>
                </li>
            </ul>
        </section>

        <section class="section staff-comment-section">
            <div class="comment-container nexign-b2b-comment-container">
                <p class="paragraph">
                    Это была амбициозная задача, нам пришлось проработать и продумать множество стилей, что бы портал легко подстраивался под стилистику типового оператора связи.
                </p>
                <p class="paragraph paragraph-margin-top">
                    А так же нам нужно было не сделать “лишней работы” грамотно используя готовые решения существующих порталов Nexign!
                </p>
                <div class="staff-container">
                    <p class="staff-name">
                        Боровлев Виктор
                    </p>
                    <p class="staff-post">
                        Руководитель департамента разработки
                    </p>
                </div>
            </div>
            <div>
                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Borovlev-Viktor.png" alt="borovlev-viktor" class="staff-photo" />
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
