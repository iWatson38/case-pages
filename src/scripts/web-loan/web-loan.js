import '../../styles/styles.css';

document.getElementById('web-loan').innerHTML = /*html*/ `
    <div class="header web-loan-header">
        <div class="page-wrapper">
            <div>
                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/web-loan-page-logo.png" alt="logo" class="logo web-loan-logo" />
            </div>
            <h1 class="title web-loan-title">Risk Engine для кредитной<br>организации</h1>
            <div class="params">
                <p class="param direction web-loan-direction">Веб система</p>
                <p class="param competence web-loan-competence">Финтех</p>
            </div>
            <div>
                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/web-loan-header-background-illustration.png" alt="web-loan-girl" class="web-loan-header-background-illustration" />
            </div>
        </div>
    </div>
    
    <div class="page-wrapper">
        <div class="block-with-definition web-loan-block-with-definition">
            <div class="text-area content-wrapper">
                <p class="paragraph">Быстрая и точная оценка платёжеспособности заемщиков (скоринг) – это ключевая задача  кредитной организации (КО), от которой зависит доходность бизнеса. На рынке представлено множество скоринговых сервисов. Разные скоринговые сервисы выполняют анализ платёжеспособности заёмщиков по разным параметрам, таким образом, результаты проверок взаимодополняют друг друга. Как правило, для решения о выдаче займа КО последовательно обращается к нескольким скоринговым сервисам. От правильно выбранных сервисов и верно заданной последовательности проверок зависит качество скоринга, а значит – доходность КО.</p>
                <p class="paragraph paragraph-margin-top">Максимизировать финансовую эффективность скоринга сразу невозможно. Качество скоринга повышается итеративно, путем анализа результатов, и внесения корректировок. Изменение этого процесса трудоёмкая и дорогостоящая операция, которая включает программирование, тестирование, и отладку. По этим причинам во многих КО этот процесс не оптимизирован и работает с невысоким КПД. Для решения этих проблем организации постепенно приходят к разработке «Risk Engine».</p>
            </div>
            <div class="definition-area web-loan-definition-area">
                <div class="definition-container web-loan-definition-container z-index">
                    <div class="web-loan-first-definition-container">
                        <h3 class="web-loan-definition web-loan-definition-color">RISK ENGINE</h3>
                        <p class="paragraph web-loan-definition-color">Решение для оптимизации скоринга<br>и максимизации прибыли<br>кредитной организации</p>
                    </div>
                    <div class="web-loan-last-definition-container">
                        <h3 class="web-loan-definition web-loan-definition-color">СКОРИНГ</h3>
                        <p class="paragraph web-loan-definition-color">система оценки<br>кредитоспособности лица,<br>основанная на статистике</p>
                    </div>
                </div>
                <div class="web-loan-definition-background"></div>
            </div>
        </div>

        <section class="section">
            <h2 class="section-title">Задача</h2>
            <p class="paragraph content-wrapper">Разработать и внедрить «Risk Engine» в одну из крупнейших микрофинансовых организаций в России.</p>
        </section>

        <section class="section">
            <h2 class="section-title">Решение</h2>
            <p class="paragraph content-wrapper">Кредитный конвейер Risk Engine  разработанный нашей командой позволяет автоматизировать процесс обработки и принятия решений, сократить время подключения нового источника данных до 2-3х недель, а так же добавит возможность изменения скоринговых карт рисковым аналитиком в веб-интерфейсе.</p>
            <ul class="simple-list paragraph-margin-top content-wrapper">
                <li class="simple-list-item web-loan-decision-list-item">
                    <div class="web-loan-decision-list-marker web-loan-decision-list-first-marker"></div>
                    <div class="web-loan-decision-list-first-item-content">
                        <h4 class="paragraph paragraph-bold web-loan-decision-list-first-item-content-title-area">Легкая настройка бизнес процессов.</h4>
                        <p class="paragraph web-loan-decision-list-first-item-content-description-area">Если у аналитика появилась потребность изменить бизнес-процесс скоринга, то это не составит проблем и займет несколько минут. Гибкая и интуитивно понятная настройка происходит с помощью конструктора бизнес-процессов Flowable.</p>
                        <div class="web-loan-decision-list-first-item-content-illustration-area">
                            <div>
                                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/web-loan-decision-list-first-item-illustration.png" alt="легкая-настройка-бизнес-процессов" class="web-loan-decision-list-first-item-illustration z-index" />
                            </div>
                            <div class="web-loan-decision-list-first-item-illustration-addition"></div>
                        </div>
                    </div>
                </li>
                <li class="simple-list-item web-loan-decision-list-item">
                    <div class="web-loan-decision-list-marker web-loan-decision-list-second-marker"></div>
                    <div>
                        <h4 class="paragraph paragraph-bold">Интеграция с внешними системами.</h4>
                        <p class="paragraph paragraph-margin-top">В Risk Engine интегрирован большим количеством необходимых внешних систем:</p>
                        <ul class="web-loan-decision-list-second-item-content-list paragraph-margin-top">
                            <li>
                                <div>
                                    <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/NBKI.png" alt="nbki" class="web-loan-decision-list-second-item-content-list-item-logo" />
                                </div>
                                <p class="paragraph">Используется механизм кэширования, чтобы предотвратить повторные платные запросы</p>
                            </li>
                            <li>
                                <div>
                                    <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/mail.png" alt="mail" class="web-loan-decision-list-second-item-content-list-item-logo" />
                                </div>
                                <p class="paragraph">Определяет скор. балл, по анкетным данным клиента. Используется механизм кэширования.</p>
                            </li>
                            <li>
                                <div>
                                    <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/equifax.png" alt="equifax" class="web-loan-decision-list-second-item-content-list-item-logo" />
                                </div>
                                <p class="paragraph">Возвращает вероятностную оценку попытки мошенничества.</p>
                            </li>
                            <li>
                                <div>
                                    <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/one-factor.png" alt="one-factor" class="web-loan-decision-list-second-item-content-list-item-logo" />
                                </div>
                                <p class="paragraph">Возвращает оценку платежеспособности клиента по номеру телефона. Используется механизм кэширования.</p>
                            </li>
                            <li>
                                <div>
                                    <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/iovation.png" alt="iovation" class="web-loan-decision-list-second-item-content-list-item-logo" />
                                </div>
                                <p class="paragraph">Определяет вероятность фрода, по идентификатору полученному из браузера клиента</p>
                            </li>
                            <li>
                                <div>
                                    <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/interfaks.png" alt="interfaks" class="web-loan-decision-list-second-item-content-list-item-logo" />
                                </div>
                                <p class="paragraph">Проверка на принадлежности клиента к списку террористов или банкротов</p>
                            </li>
                            <li>
                                <div>
                                    <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/IQID.png" alt="IQID" class="web-loan-decision-list-second-item-content-list-item-logo" />
                                </div>
                                <p class="paragraph">Определяет вероятность фрода, по идентификатору полученному из браузера клиента.</p>
                            </li>
                            <li>
                                <div>
                                    <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/juicy-store.png" alt="juicy-store" class="web-loan-decision-list-second-item-content-list-item-logo" />
                                </div>
                                <p class="paragraph">Возвращает вероятность попытки на фрод.</p>
                            </li>
                            <li class="web-loan-decision-list-second-item-content-list-addition">
                                <div class="web-loan-decision-list-second-item-content-list-addition-illustration">+</div>
                                <p class="paragraph web-loan-definition-color">Интеграция с дополнительным внешним источником не составит проблем и займет 2-3 недели.</p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="simple-list-item web-loan-decision-list-item">
                    <div class="web-loan-decision-list-marker web-loan-decision-list-first-marker"></div>
                    <div>
                        <h4 class="paragraph paragraph-bold">Стабильность Risk Engine.</h4>
                        <p class="paragraph paragraph-margin-top">Мониторинг и логирование позволяют проводить быструю диагностику, а архитектура системы обеспечивает стабильность за счет меньшей связанности модулей.</p>
                        <p class="paragraph paragraph-margin-top paragraph-bold">Какие метрики отслеживаются?</p>
                        <ul class="simple-list paragraph-margin-top">
                            <li class="simple-list-item web-loan-decision-list-third-item-content-list-item">
                                <div class="web-loan-decision-list-third-item-content-list-marker"></div>
                                <p class="paragraph">Системные метрики. Для диагностирования состояния ресурсов всего сервиса и всей инфраструктуры</p>
                            </li>
                            <li class="simple-list-item web-loan-decision-list-third-item-content-list-item">
                                <div class="web-loan-decision-list-third-item-content-list-marker"></div>
                                <p class="paragraph">Сервисные метрики. Эти метрики соответствуют параметрам сервисов согласованным в SLA</p>
                            </li>
                            <li class="simple-list-item web-loan-decision-list-third-item-content-list-item">
                                <div class="web-loan-decision-list-third-item-content-list-marker"></div>
                                <p class="paragraph">Бизнесовые метрики. Для мониторинга работы бизнеса</p>
                            </li>
                        </ul>
                        <p class="paragraph paragraph-margin-top paragraph-bold">Что логируется?</p>
                        <p class="paragraph paragraph-margin-top">Сервисы логируют максимально возможный набор информации, которая может оказаться полезной.</p>
                        <p class="paragraph paragraph-margin-top paragraph-bold">Как реализована архитектура?</p>
                        <p class="paragraph paragraph-margin-top">Все модули общаются через Брокер Сообщений, который позволяет не терять сигналы, даже в случае полного перезапуска или временной остановки RE.</p>
                    </div>
                </li>
                <li class="simple-list-item web-loan-decision-list-item">
                    <div class="web-loan-decision-list-marker web-loan-decision-list-second-marker"></div>
                    <div class="web-loan-decision-list-third-item-content">
                        <h4 class="paragraph paragraph-bold">Удобный интерфейс для рискового Аналитика</h4>
                        <p class="paragraph paragraph-margin-top">Аналитик легко сможет посмотреть историю скоринга по любому клиенту или, например, подключить новую готовую скоринговую карту или cut-off сетку за несколько минут.</p>
                        <div>
                            <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/web-loan-decision-list-third-item-content-illustration.png" alt="web-loan-decision-list-third-item-content-illustration" class="web-loan-decision-list-third-item-content-illustration paragraph-margin-top" />
                        </div>
                        <div class="web-loan-decision-list-second-item-content-list-addition">
                            <div class="web-loan-decision-list-second-item-content-list-addition-illustration">
                                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/web-loan-decision-list-third-item-content-illustration-addition-icon.png" alt="web-loan-decision-list-third-item-content-illustration-addition-icon" />
                            </div>
                            <p class="paragraph web-loan-definition-color">Интеграция с дополнительным внешним источником не составит проблем и займет 2-3 недели.</p>
                        </div>
                    </div>
                </li>
                <li class="simple-list-item web-loan-decision-list-item">
                    <div class="web-loan-decision-list-marker web-loan-decision-list-first-marker"></div>
                    <div>
                        <h4 class="paragraph paragraph-bold">Результаты внедрения</h4>
                        <div class="web-loan-decision-list-second-item-content-list paragraph-margin-top web-loan-decision-third-list-item">
                            <ul class="web-loan-implementation-results">
                                <p class="paragraph web-loan-implementation-results-before">Было:</p>
                                <li class="simple-list-item web-loan-decision-list-item">
                                    <div>
                                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/web-loan-implementation-results-cross.png" alt="cross" class="web-loan-implementation-results-icon" />
                                    </div>
                                    <p class="paragraph web-loan-implementation-results-before">Время подключения нового источника данных занимает около 2 месяцев</p>
                                </li>
                                <li class="simple-list-item web-loan-decision-list-item">
                                    <div>
                                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/web-loan-implementation-results-cross.png" alt="cross" class="web-loan-implementation-results-icon" />
                                    </div>
                                    <p class="paragraph web-loan-implementation-results-before">Ошибка в одном модуле – отказ всей системы</p>
                                </li>
                                <li class="simple-list-item web-loan-decision-list-item">
                                    <div>
                                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/web-loan-implementation-results-cross.png" alt="cross" class="web-loan-implementation-results-icon" />
                                    </div>
                                    <p class="paragraph web-loan-implementation-results-before">Анализ финансовой эффективности скоринговых сервисов трудоёмкий</p>
                                </li>
                                <li class="simple-list-item web-loan-decision-list-item">
                                    <div>
                                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/web-loan-implementation-results-cross.png" alt="cross" class="web-loan-implementation-results-icon" />
                                    </div>
                                    <p class="paragraph web-loan-implementation-results-before">Одновременная поддержка нескольких скоринговых процессов трудоёмка</p>
                                </li>
                                <li class="simple-list-item web-loan-decision-list-item">
                                    <div>
                                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/web-loan-implementation-results-cross.png" alt="cross" class="web-loan-implementation-results-icon" />
                                    </div>
                                    <p class="paragraph web-loan-implementation-results-before">Использование аналитиком текущего интерфейса требует обучения и времени</p>
                                </li>
                            </ul>
                            <ul class="web-loan-implementation-results">
                                <p class="paragraph paragraph web-loan-implementation-results-after">Стало:</p>
                                <li class="simple-list-item web-loan-decision-list-item">
                                    <div>
                                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/web-loan-implementation-results-check-mark.png" alt="check-mark" class="web-loan-implementation-results-icon" />
                                    </div>
                                    <p class="paragraph web-loan-implementation-results-after">Время подключения нового источника данных –2-3 недели</p>
                                </li>
                                <li class="simple-list-item web-loan-decision-list-item">
                                    <div>
                                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/web-loan-implementation-results-check-mark.png" alt="check-mark" class="web-loan-implementation-results-icon" />
                                    </div>
                                    <p class="paragraph web-loan-implementation-results-after">Ошибка в одном модуле не влияет на результаты скоринга</p>
                                </li>
                                <li class="simple-list-item web-loan-decision-list-item">
                                    <div>
                                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/web-loan-implementation-results-check-mark.png" alt="check-mark" class="web-loan-implementation-results-icon" />
                                    </div>
                                    <p class="paragraph web-loan-implementation-results-after">Возможность предоставления отчетности по каждому скоринговому сервису отдельно</p>
                                </li>
                                <li class="simple-list-item web-loan-decision-list-item">
                                    <div>
                                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/web-loan-implementation-results-check-mark.png" alt="check-mark" class="web-loan-implementation-results-icon" />
                                    </div>
                                    <p class="paragraph web-loan-implementation-results-after">Быстрый запуск нескольких скоринговых процессов одновременно и сравнение их фактических доходностей</p>
                                </li>
                                <li class="simple-list-item web-loan-decision-list-item">
                                    <div>
                                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/web-loan-implementation-results-check-mark.png" alt="check-mark" class="web-loan-implementation-results-icon" />
                                    </div>
                                    <p class="paragraph web-loan-implementation-results-after">Интуитивно понятный веб-интерфейс, позволяющий решать задачи за считанные минуты</p>
                                </li>
                            </ul>
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
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/Spring-boot.png" alt="Spring Boot" class="technology-logo" />
                    </div>
                    <p class="technology-name">Spring Boot</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/Postgres-9.x.png" alt="PostgreSQL" class="technology-logo" />
                    </div>
                    <p class="technology-name">PostgreSQL</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/RabbitMQ.png" alt="RabbitMQ" class="technology-logo" />
                    </div>
                    <p class="technology-name">RabbitMQ</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Flowable.png" alt="Flowable" class="technology-logo" />
                    </div>
                    <p class="technology-name">Flowable</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Vaadin.png" alt="Vaadin" class="technology-logo" />
                    </div>
                    <p class="technology-name">Vaadin</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Kubernetes.png" alt="Kubernetes" class="technology-logo" />
                    </div>
                    <p class="technology-name">Kubernetes</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Prometheus.png" alt="Prometheus" class="technology-logo" />
                    </div>
                    <p class="technology-name">Prometheus</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Grafana.png" alt="Grafana" class="technology-logo" />
                    </div>
                    <p class="technology-name">Grafana</p>
                </li>
            </ul>
        </section>

        <section>
            <div class="section staff-comment-section">
                <div class="comment-container web-loan-comment-container">
                    <p class="paragraph">
                        Разработка и внедрение системы проходили в момент активного роста компании заказчика. Многие подходы и процессы внедрялись именно из-за внедрения Risk engine. Скоринговый конвеер взаимодействует с множеством сервисов заказчика, все отклонения в их работе сразу сказываются на скоринге. Это позволило выявить и устранить множество проблем в инфраструктуре заказчика, повысить стабильность и добавить прозрачность работы сервисов.
                    </p>
                    <div class="staff-container">
                        <p class="staff-name">
                            Владимир Богуш
                        </p>
                        <p class="staff-post">
                            Руководитель проектов
                        </p>
                    </div>
                </div>
                <div>
                    <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Bogush-Vladimir.png" alt="Bogush-Vladimir" class="staff-photo" />
                </div>
            </div>
            <div class="section staff-comment-section mirroring">
                <div class="comment-container web-loan-comment-container">
                    <p class="paragraph mirroring">
                        Система Risk Engine является одним из обязательных и ключевых сервисов среди всех функциональных элементов в бизнес-процессах нашей компании. Мы очень рады, что теперь у нас есть более прогрессивная и гибкая скорринговая система.
                    </p>
                    <div class="staff-container web-loan-staff-container">
                        <p class="staff-name mirroring">
                            Григорий Мулеев
                        </p>
                        <p class="staff-post mirroring">
                            Директор по операционной деятельности
                        </p>
                    </div>
                </div>
                <div>
                    <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/grigoriy-muleev.png" alt="grigoriy-muleev" class="staff-photo mirroring" />
                </div>
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
