import '../../styles/styles.css';

document.getElementById('whoosh-mos-transport').innerHTML = /*html*/ `
    <div class="header whoosh-mos-transport-header">
        <div class="page-wrapper whoosh-mos-transport-header-content-container">
            <div class="whoosh-mos-transport-logo-container">
                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/WhooshLogo.png" alt="whoosh-mos-transport-logo" class="logo whoosh-mos-transport-logo" />
            </div>
            <div class="whoosh-mos-transport-header-content">
                <div class="whoosh-mos-transport-header-subtitle-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/WhooshMosTransportHeaderSubtitleLogo.png" alt="whoosh-mos-transport-header-subtitle-logo" class="whoosh-mos-transport-header-subtitle-logo" />
                    </div>
                    <p class="whoosh-mos-transport-header-subtitle">Московский транспорт</p>
                </div>
                <h1 class="title">Интеграция с Мос Транспортом</h1>
                <div class="params">
                    <p class="param direction whoosh-mos-transport-direction">Веб система</p>
                    <p class="param competence whoosh-mos-transport-competence">Кикшеринг</p>
                </div>
            </div>
            <div class="whoosh-mos-transport-header-background-illustration-container">
                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/WhooshMosTransportHeaderBackgroundIllustration.png" alt="header-background-illustration" class="whoosh-mos-transport-header-background-illustration"/>
            </div>
        </div>
    </div>

    <div class="page-wrapper">
        <div class="content-wrapper">
            <p class="paragraph">В современном мире есть много ресурсов-агрегаторов, которые предоставляют нам возможность выбрать продукт или услугу среди нескольких поставщиков. В своей повседневной жизни мы используем Яндекс Маректом или Ozone для выбора товаров,Skyscanner для выбора авиаперевозчика по направлению, или ресурсом Одобрим.ру для получения наиболее привлекательного кредитного решения. Кроме расширенного выбора, мы можем увидеть отзывы реальных людей по интересующему нас продукту.</p>
            <p class="paragraph paragraph-margin-top">Это выгодно как клиенту, так и представителю услуг. Конкуренция с аналогичными поставщиками улучшает бизнес, делает его качественней и конкурентней. Кроме этого раскрученный агрегированный ресурс дает дополнительную аудиторию клиентов, которые увеличивают доход и прибыль.</p>
        </div>

        <section class="section">
            <h2 class="section-title">Задача</h2>
            <p class="paragraph">Провести интеграцию сервиса Московского Транспорта с Whoosh <a href="https://transport.mos.ru" class="whoosh-mos-transport-link">(https://transport.mos.ru)</a>.</p>
            <p class="paragraph paragraph-margin-top">Интеграция позволит:</p>
            <ul class="simple-list paragraph-margin-top content-wrapper">
                <li class="simple-list-item whoosh-mos-transport-list-item">
                    <div class="whoosh-mos-transport-list-marker whoosh-mos-transport-list-marker-first"></div>
                    <p class="paragraph">Увеличить объем новых клиентов в сервисе Whoosh</p>
                </li>
                <li class="simple-list-item whoosh-mos-transport-list-item">
                    <div class="whoosh-mos-transport-list-marker whoosh-mos-transport-list-marker-second"></div>
                    <p class="paragraph">Увеличить оборот и прибыль, благодаря новым клиентам</p>
                </li>
                <li class="simple-list-item whoosh-mos-transport-list-item">
                    <div class="whoosh-mos-transport-list-marker whoosh-mos-transport-list-marker-third"></div>
                    <p class="paragraph">Большая аудитория сможет кататься на самокатах используя приложение Мос Транспорта</p>
                </li>
            </ul>
        </section>

        <section class="section">
            <h2 class="section-title">Решение</h2>
            <p class="paragraph content-wrapper">На серверной части необходимо были реализовать протокол, которыйиспользует Мос Транспортом для взаимодействия с другими поставщикамисамокатов ивелотранспортом.</p>
            <p class="paragraph paragraph-margin-top content-wrapper">Этот протокол включает в себя получение информации о расположениисамокатов, бронировании, начала поездки, завершении поездки и т.д.</p>
            <p class="paragraph paragraph-margin-top content-wrapper">Важно было сохранить контекст. Если клиент после Мос Транспортаустановит приложение Whoosh, то система распознает его и покажетинформацию о совершенных поездках.</p>
            <div class="whoosh-mos-transport-decision-illustration-container">
                <div>
                    <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/WhooshMosTransportHeaderDecisionIllustration_1.png" alt="whoosh-mos-transport-decision-illustration-1" class="whoosh-mos-transport-decision-illustration" />
                </div>
                <div>
                    <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/WhooshMosTransportHeaderDecisionIllustration_2.png" alt="whoosh-mos-transport-decision-illustration-2" class="whoosh-mos-transport-decision-illustration" />
                </div>
            </div>
        </section>

        <section class="section">
            <h2 class="section-title">Технологии</h2>
            <ul class="technology-list content-wrapper">
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/Java-8.png" alt="Java 8" class="technology-logo" />
                    </div>
                    <p class="technology-name">Java 8</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/Spring-boot.png" alt="Spring boot" class="technology-logo" />
                    </div>
                    <p class="technology-name">Spring boot</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/Lambda-AWS.png" alt="Lambda AWS" class="technology-logo" />
                    </div>
                    <p class="technology-name">Lambda AWS</p>
                </li>
                <li class="technology-container">
                    <div>
                    <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/Postgres-9.x.png" alt="Postgres 9.x" class="technology-logo" />
                    </div>
                    <p class="technology-name">Postgres 9.x</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/AWS-SQS.png" alt="AWS SQS" class="technology-logo" />
                    </div>
                    <p class="technology-name">AWS SQS</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/AWS-Cognito.png" alt="AWS Cognito" class="technology-logo" />
                    </div>
                    <p class="technology-name">AWS Cognito</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/Redis.png" alt="Redis" class="technology-logo" />
                    </div>
                    <p class="technology-name">Redis</p>
                </li>
            </ul>
        </section>

        <section class="section staff-comment-section">
            <div class="comment-container whoosh-mos-transport-comment-container">
                <p class="paragraph">Это была непростая история, которая началась пару лет назад. Помимо организационных сложностей мы столкнулись с техническими. Контракт взаимодействия несколько раз переделывался, что усложняло разработку и тестирование. Но преодолев все трудности, мы запустились!</p>
                <p class="paragraph paragraph-margin-top">Приятно видеть Whoosh как часть приложения Московского Транспорта!</p>
                <div class="staff-container">
                    <p class="staff-name">Артем Пустовой</p>
                    <p class="staff-post">Java-разработчик</p>
                </div>
            </div>
            <div>
                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/WhooshMosTransportStaffPhoto.png" alt="Артем Пустовой" class="staff-photo" />
            </div>
        </section>
    </div>

    <div class="footer">
        <div class="page-wrapper">
            <h3 class="footer-title">Похожие кейсы</h3>
            <div><OtherProjectsComponent ids="75,142,141" /></div>
        </div>
    </div>
`;
