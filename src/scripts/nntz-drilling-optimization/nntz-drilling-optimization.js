import '../../styles/styles.css';

document.getElementById('nntz-drilling-optimization').innerHTML = /* html */ `
    <div class="header nntz-drilling-optimization-header">
        <div class="page-wrapper">
            <div>
                <img src="/src/scripts/nntz-drilling-optimization/images/nntz-drilling-optimization-logo.png" alt="logo" class="logo nntz-drilling-optimization-logo" />
            </div>
            <h1 class="title nntz-drilling-optimization-header-title">Оптимизация бурения<br>нефтяных скважин</h1>
            <div class="params">
                <p class="param direction nntz-drilling-optimization-direction">Веб система</p>
                <p class="param competence nntz-drilling-optimization-competence">Ритейл</p>
            </div>
            <div>
                <img src="/src/scripts/nntz-drilling-optimization/images/nntz-drilling-optimization-header-background-illustration.png" alt="header-background-illustration" class="nntz-drilling-optimization-header-background-illustration" />
            </div>
        </div>
    </div>

    <div class="page-wrapper">
        <div class="nntz-drilling-optimization-page-description">
            <div>
                <p class="paragraph">Наш Бизнес-партнер, компания ННТЦ разработала математическую модель, которая рассчитывает оптимальную очередность бурения.</p>
                <p class="paragraph paragraph-margin-top">Цель проекта – оптимизация издержек при организации бурения на нефтяных скважинах. Оптимизация затрагивает так называемое кустовое бурение – способ добычи, при котором несколько скважин группируются на общей площадке. Строительство промысловых сооружений, дорог, коммуникаций требуют больших капиталовложений, поэтому важно спланировать перемещения буровых установок в рамках куста оптимальным образом.</p>
                <p class="paragraph paragraph-margin-top">Первые версии системы были выполнены как настольное приложение. Впоследствии было решено оформить презентационную часть в виде web- приложения. За помощью в реализации web-приложения ННТЦ обратилось в Интабию.</p>
            </div>
        </div>
        
        <section class="section">
            <h2 class="section-title">Задача</h2>
            <div class="block-with-definition nntz-drilling-optimization-block-with-definition">
                <p class="paragraph text-area content-wrapper">Реализация современного web-интерфейса для модели, определяющей очередность бурения.</p>
                <div class="definition-area">
                    <img src="/src/scripts/nntz-drilling-optimization/images/nntz-drilling-optimization-task-illustration.png" alt="task-illustration" class="nntz-drilling-optimization-task-illustration" />
                </div>
            </div>
        </section>

        <section class="section">
            <h2 class="section-title">Решение</h2>
            <p class="paragraph content-wrapper">В интерфейсе необходимо было создать возможности для формирования расписаний работ на буровых площадках, построения графиков и прогнозов по добыче нефти, загруженности каналов транспортировки.</p>
            <p class="paragraph paragraph-margin-top content-wrapper">Требования к функциональности выдвигались серьёзные, сложность компоновки большого количества элементов оказалась высокой. Главная страница созданного решения напоминает интерфейс MS-Project, выполненный на вебе – расписания, графики, бюджеты, диаграммы Ганта.</p>
            <p class="paragraph paragraph-margin-top content-wrapper">Интерфейс построения графиков и диаграмм реализован на основе одной из существующих библиотек. Исходный код библиотеки был переработан под функционал проекта. Были добавлены возможности группировки элементов на диаграммах, построение дополнительных графиков и возможность изменять параметры и очередность работ непосредственно в графическом представлении.</p>
        </section>

        <section class="section">
            <h2 class="section-title">Технологии</h2>
            <ul class="technology-list content-wrapper">
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/angular.png" alt="angular" class="technology-logo" />
                    </div>
                    <p class="technology-name">Angular</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/Spring-boot.png" alt="spring" class="technology-logo" />
                    </div>
                    <p class="technology-name">Spring</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/Java-8.png" alt="java-11" class="technology-logo" />
                    </div>
                    <p class="technology-name">Java 11</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/Postgres-9.x.png" alt="postgresql" class="technology-logo" />
                    </div>
                    <p class="technology-name">PostgreSql</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Docker.png" alt="docer" class="technology-logo" />
                    </div>
                    <p class="technology-name">Docker</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/gitlab-ci.png" alt="gitlab-ci" class="technology-logo" />
                    </div>
                    <p class="technology-name">GitLab CI</p>
                </li>
            </ul>
        </section>

        <section class="section staff-comment-section">
            <div class="comment-container nntz-drilling-optimization-transponder-comment-container">
                <p class="paragraph">Проект объединил в себе удобный интерфейс, красивый и современный дизайн, а так же сложные высокоточные расчеты по большому количеству параметров.</p>
                <p class="paragraph paragraph-margin-top">Поэтому работа на проекте была трудоемкой, но интересной.</p>
                <div class="staff-container">
                    <p class="staff-name">Талапин Иван</p>
                    <p class="staff-post">Руководитель отдела тестирования</p>
                </div>
            </div>
            <div>
                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Talapin-Ivan.png" alt="talapin-ivan" class="staff-photo" />
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
