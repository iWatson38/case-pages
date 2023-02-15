import '../../styles/styles.css';

document.getElementById(
  'globaltruck-auction-microservice'
).innerHTML = /*html*/ `
    <div class="header globaltruck-auction-microservice-header">
        <div class="page-wrapper">
            <div>
                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Globaltruck_logo-1.png" alt="logo" class="logo globaltruck-auction-microservice-logo" />
            </div>
            <h1 class="title globaltruck-auction-microservice-header-title">Микросервис аукционов для<br>FTL-перевозчика</h1>
            <div class="params">
                <p class="param direction globaltruck-auction-microservice-direction">Веб система</p>
                <p class="param competence globaltruck-auction-microservice-competence">Ритейл</p>
            </div>
        </div>
    </div>

    <div class="page-wrapper">
        <div class="content-wrapper">
            <p class="paragraph">
                Любая компания предоставляющая услуги грузоперевозки сталкивается с проблемами задания оптимальных цен перевозки, подбора подходящих перевозчиков, назначение заявок и т.д. Множество операций менеджерам приходится выполнять вручную! А если это крупнейший FTL перевоздик, такие проблемы могут стать критичными.
            </p>
            <p class="paragraph paragraph-margin-top">
                Компания Globaltruck обратилась в Интабию с целью оптимизировать время работы менеджеров.
            </p>
            <p class="paragraph paragraph-margin-top">
                Были поставлены 2 основные бизнес-задачи:
            </p>
            <ul class="simple-list paragraph-margin-top">
                <li class="simple-list-item globaltruck-auction-microservice-description-list-item">
                    <div class="globaltruck-auction-microservice-description-list-marker"></div>
                    <p class="paragraph">Сократить время, которое менеджер тратит при работе с заявкой, повысив производительность;</p>
                </li>
                <li class="simple-list-item globaltruck-auction-microservice-description-list-item">
                    <div class="globaltruck-auction-microservice-description-list-marker"></div>
                    <p class="paragraph">Упростить анализ предложения перевозчиков для менеджеров компании.</p>
                </li>
            </ul>
            <p class="paragraph paragraph-margin-top">
                Для решения этих целей было решено заняться разработкой микросервиса аукционов.
            </p>
        </div>

        <section class="section">
            <h2 class="section-title">Задача</h2>
            <div class="block-with-definition globaltruck-auction-microservice-block-with-definition">
                <div class="text-area content-wrapper">
                    <p class="paragraph">Разработка презентационной части B2B-портала</p>
                </div>
                <div class="globaltruck-auction-microservice-definition-area">
                    <div class="globaltruck-auction-microservice-definition-container">
                        <div>
                            <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/FTL_pic.png" alt="FTL_pic" class="globaltruck-auction-microservice-definition-illustration" />
                        </div>
                        <div class="globaltruck-auction-microservice-definition-content">
                            <div class="globaltruck-auction-microservice-definition-active-text">
                                <h3 class="globaltruck-auction-microservice-definition globaltruck-auction-microservice-definition-color">FTL</h3>
                                <p class="paragraph globaltruck-auction-microservice-definition-color">«Full Truck Load» (Полная загрузка грузового автомобиля)</p>
                            </div>
                            <p class="paragraph globaltruck-auction-microservice-definition-simple-text">доставка грузов с полной загрузкой транспортного средства.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <h2 class="section-title">Решение</h2>
            <p class="paragraph content-wrapper">При работе над этим сервисом мы  провели большой спектр работ: анализ требований, дизайн интерфейса, интегрировали решение в существующие процессы портала, разработав как бэкенд часть, так и фронтенд.</p>
            <div class="paragraph-margin-top">
                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/globaltruck-auction-microservice-decision-illustration.png" alt="globaltruck-auction-microservice-decision-illustration" class="globaltruck-auction-microservice-decision-illustration"/>
                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/globaltruck-auction-microservice-decision-illustration-mobile.png" alt="globaltruck-auction-microservice-decision-illustration-mobile" class="globaltruck-auction-microservice-decision-illustration-mobile"/>
            </div>
            <p class="paragraph paragraph-margin-top content-wrapper">Основная особенность сервиса - быстрое изменение текущей цены лота. Необходимо что бы перевозчики видели все изменения цен в режиме реального времени, особенно к концу аукциона. Для решения этой задачи наши специалисты использовали независимый web-протокол - WebSocket, позволяющий создавать интерактивное соединение между сервером и клиентом (браузером) и обмениваться сообщениями в реальном времени. Удалось не только внедрить WebSocket, но и обобщить архитектурные решения для дальнейшего переиспользования.</p>
        </section>

        <section class="section">
            <h2 class="section-title">Технологии</h2>
            <ul class="technology-list content-wrapper">
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Websocket.png" alt="Websocket" class="technology-logo" />
                    </div>
                    <p class="technology-name">Websocket</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/Spring-boot.png" alt="Spring 5" class="technology-logo" />
                    </div>
                    <p class="technology-name">Spring 5</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/Java-8.png" alt="Java 11" class="technology-logo" />
                    </div>
                    <p class="technology-name">Java 11</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Kafka.png" alt="Kafka" class="technology-logo" />
                    </div>
                    <p class="technology-name">Kafka</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Kubernetes.png" alt="Kubernetes" class="technology-logo" />
                    </div>
                    <p class="technology-name">Kubernetes</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Yandex-Cloud.png" alt="Yandex-Cloud" class="technology-logo" />
                    </div>
                    <p class="technology-name">Yandex Cloud</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/GitLab-CI.png" alt="GitLab-CI" class="technology-logo" />
                    </div>
                    <p class="technology-name">GitLab CI</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Figma.png" alt="Figma" class="technology-logo" />
                    </div>
                    <p class="technology-name">Figma</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Vue.js.png" alt="Vue.js" class="technology-logo" />
                    </div>
                    <p class="technology-name">Vue.js</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Lodash.png" alt="Lodash" class="technology-logo" />
                    </div>
                    <p class="technology-name">Lodash</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Axios.png" alt="Axios" class="technology-logo" />
                    </div>
                    <p class="technology-name">Axios</p>
                </li>
            </ul>
        </section>

        <section>
            <div class="section staff-comment-section">
                <div class="comment-container globaltruck-auction-microservice-comment-container">
                    <p class="paragraph">
                        Проект, с достаточно большим набором ui-компонентов и экранах форм, к слову, в разработке которых мы также принимали участие.
                    </p>
                    <p class="paragraph paragraph-margin-top">
                        Проект дал нам интересный опыт работы с технологиями, которые используются у нас достаточно редко, в первую очередь это Vue.js.
                    </p>
                    <div class="staff-container">
                        <p class="staff-name">
                            Александр Хахолин
                        </p>
                        <p class="staff-post">
                            Руководитель отдела frontend-разработки
                        </p>
                    </div>
                </div>
                <div>
                    <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Alexsander-Haholin.png" alt="Alexsander-Haholin" class="staff-photo" />
                </div>
            </div>
            <div class="section staff-comment-section mirroring">
                <div class="comment-container globaltruck-auction-microservice-comment-container">
                    <p class="paragraph mirroring">
                        Первое использование web-socket на проекте, обернулось большой но увлекательной задачей.  По итогу работ над аукционами было меньше, чем с web-sockets, так как аукционы - это один сервис, а web-sockets - целых три.
                    </p>
                    <div class="staff-container mirroring web-loan-staff-container">
                        <p class="staff-name">
                            Василий Лусников
                        </p>
                        <p class="staff-post">
                            Руководитель проекта
                        </p>
                    </div>
                </div>
                <div>
                    <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Lusnikov-Vasilii.png" alt="Lusnikov-Vasilii" class="staff-photo mirroring" />
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
