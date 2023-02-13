import '../../styles/styles.css';

document.getElementById('aml-system').innerHTML = /*html*/ `
    <div class="header aml-system-header">
        <div class="page-wrapper">
            <h1 class="aml-system-title">Система<br>AML</h1>
            <div class="params">
                <p class="param direction aml-system-direction">Веб система</p>
                <p class="param competence aml-system-competence">Финтех</p>
            </div>
        </div>
        <div>
            <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/aml-system-header-illustration.png" alt="aml-system-header-illustration" class="aml-system-header-illustration" />
        </div>
    </div>
    <div class="page-wrapper">
        <div class="block-with-definition">
            <div class="text-area content-wrapper">
                <p class="paragraph">Стремительное развитие информационных технологий значительно влияет на нашу жизнь. Они, проникая во все сферы, создают наиболее комфортные условия и упрощают то, что раньше представляло определенные трудности. Например, теперь, чтобы совершить перевод денежных средств не обязательно приходить в банк – это можно сделать в режиме онлайн.</p>
                <p class="paragraph paragraph-margin-top">Но есть и другая сторона. Вы знали, что в Европе пресекается лишь 1,1% нелегальных финансовых потоков? Представьте, какое количество мошеннических операций не удалось обнаружить! Ведь цифровизация играет на руку не только представителям бизнеса, но и создает почву для появления новых мошеннических стратегий. Для этого существуют принципы противодействия отмыванию денег или AML.</p>
            </div>
            <div class="definition-area">
                <div class="definition-container aml-system-definition-container">
                    <div>
                        <h3 class="aml-system-definition">AML</h3>
                        <p class="paragraph paragraph-margin-top">Anti-Money Laundering,<br>Противодействие<br>отмыванию денег</p>
                    </div>
                    <div class="aml-system-definition-container-illustration"></div>
                </div>
            </div>
        </div>

        <section class="section">
            <h2 class="section-title">Задача</h2>
            <p class="paragraph content-wrapper">Одна из важных задач в разработке системы AML - создание эффективного рабочего места пользователя фрод-мониторинга. От скорости принятия решения зависит, когда банк пропустит подозрительную транзакцию, деньги придут на счет получателя и он сможет оказать необходимую услугу. Кроме того – это репутация банка, ведь если банк работает медленно клиенты будут уходить.</p>
        </section>

        <section class="section">
            <h2 class="section-title">Решение</h2>
            <p class="paragraph content-wrapper">Одной из задач в формировании эффективного рабочего места – страница, на которой показаны основные категории расследований с точки зрения их бизнес значимости. Любой переход по счетчику ведет к списку расследований с предустановленной фильтрацией.</p>
            <div class="block-with-definition aml-system-decision-illustration-container">
                <div class="text-area content-wrapper z-index">
                    <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/aml-system-decision-illustration-1.png" alt="aml-system-decision-illustration-1" class="aml-system-decision-illustration" />
                </div>
                <div class="definition-area aml-system-definition-area">
                    <div class="definition-container aml-system-decision-definition-container z-index">
                        <p class="paragraph aml-system-decision-definition-title">Удобные списки расследований<br>с фильтрацией</p>
                    </div>
                    <div class="aml-system-decision-definition-ball"></div>
                </div>
            </div>
            <p class="paragraph content-wrapper">В категории "Мои расследования" показаны расследования, по которым требуется принятие решений от текущего/залогиненного пользователя.</p>
            <p class="paragraph paragraph-margin-top content-wrapper">В разделе "Непринятые расследования с истекающим SLA" система показывает сколько у нас есть расследований, сроки рассмотрения которых подходят к концу, при этом работа по ним еще даже не начата. Большое количество таких расследований - индикатор для руководителя отдела финансового мониторинга срочно выделить специалистов на работу с ними.</p>
             <div class="block-with-definition aml-system-decision-illustration-container">
                <div class="text-area content-wrapper z-index">
                    <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/aml-system-decision-illustration-2.png" alt="aml-system-decision-illustration-2" class="aml-system-decision-illustration" />
                </div>
                <div class="definition-area aml-system-definition-area">
                    <div class="definition-container aml-system-decision-definition-container z-index">
                        <p class="paragraph aml-system-decision-definition-title">Счетчики расследований на главной странице, обновляются в режиме реального времени.</p>
                    </div>
                    <div class="aml-system-decision-definition-ball"></div>
                </div>
            </div>
            <p class="paragraph content-wrapper">Технической особенностью решения – то, что информация по счетчикам обновляется в режиме реального времени и почти мгновенно. Не требуется ни обновления страницы, ни длительного ожидания. Для этой цели мы использовали технологии Web Socket, с помощью которого сервер инициирует обновление информации. Кроме того, мы использовали NoSQL решения для хранения информации по необходимым счетчикам, вместо их пересчета по запросу в режиме.</p>
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
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/Spring-boot.png" alt="Spring Boot 2.x" class="technology-logo" />
                    </div>
                    <p class="technology-name">Spring Boot 2.x</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/KeyCloak-KeyCloak.png" alt="KeyCloak-KeyCloak" class="technology-logo" />
                    </div>
                    <p class="technology-name">KeyCloak</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/ArangoDb.png" alt="ArangoDb" class="technology-logo" />
                    </div>
                    <p class="technology-name">ArangoDb</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/angular.png" alt="angular" class="technology-logo" />
                    </div>
                    <p class="technology-name">Angular 8</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/rxjs.png" alt="rxjs" class="technology-logo" />
                    </div>
                    <p class="technology-name">Rxjs</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/stompjs.png" alt="stompjs" class="technology-logo" />
                    </div>
                    <p class="technology-name">Stompjs</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/angular-material.png" alt="angular-material" class="technology-logo" />
                    </div>
                    <p class="technology-name">Angular<br>Material</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/rsql.png" alt="rsql" class="technology-logo" />
                    </div>
                    <p class="technology-name">Rsql</p>
                </li>
            </ul>
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
