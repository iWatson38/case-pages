import '../../styles/styles.css';

document.getElementById('bks-investors-personal-account').innerHTML = /*html*/ `
    <div class="header bks-investors-personal-account-header">
        <div class="page-wrapper">
            <div>
                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/BksLogo.png" alt="bks-logo" class="logo bks-investors-personal-account-logo" />
            </div>
            <h1 class="title bks-investors-personal-account-header-title">Разработка личного кабинета инвестора</h1>
            <div class="params">
                <p class="param direction bks-investors-personal-account-direction">Веб система</p>
                <p class="param competence bks-investors-personal-account-competence">Финтех</p>
            </div>
        </div>
        <div class="bks-investors-personal-account-header-background-illustration"></div>
    </div>

    <div class="page-wrapper">
        <div class="content-wrapper">
            <p class="paragraph">
                Инвестиции – актуальное направление для осознанных вложений. Любой может получить прибыль, вложив бюджет в иностранную валюту, металлы, акции, облигации и другие ценные бумаги. Однако для работы с современными биржами необходима помощь брокера, который, имея лицензию, может совершать посреднические операции между продавцом и покупателем.
            </p>
            <p class="paragraph paragraph-margin-top">
                Взаимодействие с брокерами и биржевая торговля осуществляются на специальных порталах, которые не всегда понятны и удобны для пользователей. Например, новичкам особенно важен интуитивный интерфейс, чтобы не запутаться в последовательности действий, а компании –новые клиенты, которые станут постоянными пользователями их сервиса. Но абсолютно для каждого пользователя подобных порталов важна прозрачная отчетность и аналитика, персональные продуктовые предложения, контроль состояния активов, расширение инвестиционного портфеля и самое главное – доверие к брокерской компании.
            </p>
        </div>

        <section class="section">
            <h2 class="section-title">Задача</h2>
            <p class="paragraph bks-content-wrapper">
                Личный кабинет инвестора сегодня - это огромный набор инструментов и блоков, от аналитики и отчетности до локации и времени работы банкоматов.
            </p>
            <p class="paragraph paragraph-margin-top">
                Нам была поставлена задача разработки нескольких блоков для личного кабинета БКС:
            </p>
            <ul class="simple-list paragraph-margin-top">
                <li class="simple-list-item bks-investors-personal-account-task-list-item">
                    <div class="bks-investors-personal-account-list-marker"></div>
                    <p class="paragraph paragraph-bold">Профиль клиента</p>
                </li>
                <li class="simple-list-item bks-investors-personal-account-task-list-item">
                    <div class="bks-investors-personal-account-list-marker"></div>
                    <p class="paragraph paragraph-bold">Офисы и банкоматы</p>
                </li>
                <li class="simple-list-item bks-investors-personal-account-task-list-item">
                    <div class="bks-investors-personal-account-list-marker"></div>
                    <p class="paragraph paragraph-bold">Брокерская отчетность за произвольный период</p>
                </li>
                <li class="simple-list-item bks-investors-personal-account-task-list-item">
                    <div class="bks-investors-personal-account-list-marker"></div>
                    <p class="paragraph paragraph-bold">Упрощенный порядок вычетов типа А</p>
                </li>
                <li class="simple-list-item bks-investors-personal-account-task-list-item">
                    <div class="bks-investors-personal-account-list-marker"></div>
                    <p class="paragraph paragraph-bold">Перевод ценных бумаг в БКС</p>
                </li>
            </ul>
        </section>

        <section class="section">
            <h2 class="section-title">Решение</h2>
            <p class="paragraph content-wrapper">Разработка помогла решить важную задачу: повысить уровень доверия и лояльности к компании, фондовому рынку, а также увеличить число потенциальных клиентов.</p>
            <p class="paragraph paragraph-margin-top content-wrapper">Данная система уже активно используется национальной брокерской компанией и открывает ряд возможностей для клиента:</p>
            <ul class="simple-list paragraph-margin-top">
                <li class="bks-investors-personal-account-decision-list-item bks-investors-personal-account-decision-list-background-1">
                    <div class="bks-investors-personal-account-decision-list-text-container">
                        <div class="bks-investors-personal-account-list-marker"></div>
                        <p class="paragraph"><span class="paragraph-bold">Профиль клиента.</span> Нашей командой был разработан сервис, представляющий собой электронную версию анкеты, заполняемой пользователем при принятии на обслуживание в БКС. В рамках профиля пользователю доступно несколько разделов: паспортные данные, финансовое положение, контактные данные, информация о его банковских счетах, а также дополнительная информация.</p>
                    </div>
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/bks-decision-list-item-icon-1.png" alt="bks-decision-list-item-icon-1" class="bks-investors-personal-account-decision-list-item-icon" />
                    </div>
                </li>
                <li class="bks-investors-personal-account-decision-list-item bks-investors-personal-account-decision-list-background-2">
                    <div class="bks-investors-personal-account-decision-list-text-container">
                        <div class="bks-investors-personal-account-list-marker"></div>
                        <p class="paragraph"><span class="paragraph-bold">Офисы и банкоматы.</span> Информация о местоположении, контактных данных и графике работы офисов и банкоматов всегда под рукой. Фильтрация по возможности внесения денежных средств для банкоматов, а для офисов - по наличию кассового обслуживания.</p>
                    </div>
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/bks-decision-list-item-icon-2.png" alt="bks-decision-list-item-icon-2" class="bks-investors-personal-account-decision-list-item-icon" />
                    </div>
                </li>
                <li class="bks-investors-personal-account-decision-list-item bks-investors-personal-account-decision-list-background-3">
                    <div class="bks-investors-personal-account-decision-list-text-container">
                        <div class="bks-investors-personal-account-list-marker"></div>
                        <p class="paragraph"><span class="paragraph-bold">Брокерская отчетность</span> предоставляет клиенту возможность получения не только ежедневных и ежемесячных отчетов, но и отчет за произвольный промежуток времени в удобном для пользователя формате. После заказа клиентом отчета сервис направляет все необходимые данные в систему, занимающуюся формированием отчетов. По готовности отчета, пользователю приходит уведомление в ЛК.</p>
                    </div>
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/bks-decision-list-item-icon-3.png" alt="bks-decision-list-item-icon-3" class="bks-investors-personal-account-decision-list-item-icon" />
                    </div>
                </li>
                <li class="bks-investors-personal-account-decision-list-item bks-investors-personal-account-decision-list-background-4">
                    <div class="bks-investors-personal-account-decision-list-text-container">
                        <div class="bks-investors-personal-account-list-marker"></div>
                        <p class="paragraph"><span class="paragraph-bold">Упрощенный порядок вычетов типа А.</span> Сервис, позволяющий клиенту легко и просто получать по ИИС(индивидуальный инвестиционный счет) налоговый вычет типа А. Это вид налогового вычета, при котором можно вернуть до 52 000 ₽год! При разработке наша команда ставила для себя цель мотивировать клиента внести средства на ИИС и получить налоговый вычет. Мы упросили для клиента этот процесс: теперь необходимо лишь заполнить небольшую онлайн форму, подтвердить созданную заявку смс кодом и дождаться положительно ответа от ФНС.</p>
                    </div>
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/bks-decision-list-item-icon-4.png" alt="bks-decision-list-item-icon-4" class="bks-investors-personal-account-decision-list-item-icon" />
                    </div>
                </li>
                <li class="bks-investors-personal-account-decision-list-item bks-investors-personal-account-decision-list-background-5">
                    <div class="bks-investors-personal-account-decision-list-text-container">
                        <div class="bks-investors-personal-account-list-marker"></div>
                        <p class="paragraph"><span class="paragraph-bold">Перевод ценных бумаг в БКС.</span> Мы реализовали сервис, который помогает клиенту перевести свои ЦБ(Ценные Бумаги) от стороннего брокера в БКС. Для этого была реализована пошаговая форма подачи поручения, в которой клиенту необходимо указать информацию о ЦБ и количестве, которое он желает перевести, заполнить данные стороннего брокера, а также счет БКС для зачисления. После процесса подписания такого поручения СМС-кодом, разработанный нами механизм отправляет данные в сторонние системы, а пользователь может отслеживать весь процесс перевода в списке поданных поручений.</p>
                    </div>
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/bks-decision-list-item-icon-5.png" alt="bks-decision-list-item-icon-5" class="bks-investors-personal-account-decision-list-item-icon" />
                    </div>
                </li>
            </ul>
        </section>

        <section class="section">
            <h2 class="section-title">Технологии</h2>
            <ul class="technology-list content-wrapper">
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/GraphQl.png" alt="GraphQl" class="technology-logo" />
                    </div>
                    <p class="technology-name">GraphQl</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/RabbitMQ.png" alt="RabbitMQ" class="technology-logo" />
                    </div>
                    <p class="technology-name">RabbitMQ</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/GRPC.png" alt="GRPC" class="technology-logo" />
                    </div>
                    <p class="technology-name">GRPC</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Kafka.png" alt="Kafka" class="technology-logo" />
                    </div>
                    <p class="technology-name">Kafka</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/biztalk.png" alt="biz-talk" class="technology-logo" />
                    </div>
                    <p class="technology-name">BizTalk</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/Postgres-9.x.png" alt="PostgreSQL" class="technology-logo" />
                    </div>
                    <p class="technology-name">PostgreSQL</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/Spring-boot.png" alt="Spring-boot-2" class="technology-logo" />
                    </div>
                    <p class="technology-name">Spring Boot 2</p>
                </li>
                <li class="technology-container">
                    <div>
                    <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Docker.png" alt="Docker" class="technology-logo" />
                    </div>
                    <p class="technology-name">Docker</p>
                </li>
                <li class="technology-container">
                    <div>
                    <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/React.png" alt="React" class="technology-logo" />
                    </div>
                    <p class="technology-name">React</p>
                </li>
                <li class="technology-container">
                    <div>
                    <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/REST-API.png" alt="REST API" class="technology-logo" />
                    </div>
                    <p class="technology-name">REST API</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/Java-8.png" alt="Java 11" class="technology-logo" />
                    </div>
                    <p class="technology-name">Java 11</p>
                </li>
            </ul>
        </section>

        <section class="section staff-comment-section">
            <div class="comment-container bks-investors-personal-account-comment-container">
                <p class="paragraph">За два года на проекте мы создали множество сервисов, начиная с самых простых, позволяющих клиенту ознакомиться с той или иной информацией, до различных интеграций не только с внутренними система БКС, но и со сторонними, такими как ФНС. Каждый новый сервис - это как новый вызов или рубеж, больше, выше, чем предыдущий, который команда преодолевает несмотря на все сложности и подводные камни.</p>
                <div class="staff-container">
                    <p class="staff-name">Ксения Старкова</p>
                    <p class="staff-post">Frontend-разработчик</p>
                </div>
            </div>
            <div>
                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/BksStaffPhoto.png" alt="Ксения Старкова" class="staff-photo"/>
            </div>
        </section>
    </div>

    <div class="footer">
        <div class="page-wrapper">
            <h3 class="footer-title">Похожие кейсы</h3>
            <div><OtherProjectsComponent ids="44,141" /></div>
        </div>
    </div>
`;
