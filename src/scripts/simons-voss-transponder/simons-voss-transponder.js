import '../../styles/styles.css';

document.getElementById('simons-voss-transponder').innerHTML = /*html*/ `
    <div class="header simons-voss-transponder-header">
        <div class="page-wrapper">
            <div>
                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/SimonsVoss_logo.png" alt="logo" class="logo simons-voss-transponder-logo" />
            </div>
            <h1 class="title simons-voss-transponder-header-title">Интеграция транспондера<br>в мобильное приложение</h1>
            <div class="params">
                <p class="param direction simons-voss-transponder-direction">Мобильное решение</p>
                <p class="param competence simons-voss-transponder-competence">Ритейл</p>
            </div>
            <div class="device-types-list">
                <div class="device-type-container">
                    <div class="device-types-list-marker simons-voss-transponder-device-types-list-marker"></div>
                    <p class="device-type simons-voss-transponder-device-type">Android</p>
                </div>
                <div class="device-type-container">
                    <div class="device-types-list-marker simons-voss-transponder-device-types-list-marker"></div>
                    <p class="device-type simons-voss-transponder-device-type">IOS</p>
                </div>
            </div>
        </div>
    </div>

    <div class="page-wrapper">
        <div class="content-wrapper">
            <p class="paragraph">SimonsVoss -немецкий производитель безпроводных замковых систем. С помощью такой системы можно без особого труда установить надежную замочную систему и организовать контроль проходов. И все это без единого провода и в считанные минуты.</p>
            <p class="paragraph paragraph-margin-top">Теперь Вы можете забыть про связки ключей, которые оттягивают Вам карманы. Один программируемый транспондер заменяет собой все ключи и карты. Нажатие кнопки на транспондера открывает перед Вами двери кабинетов, офисов, лифтов, управляет шлагбаумом, охранной сигнализацией и другими исполнительными устройствами. </p>
            <p class="paragraph paragraph-margin-top">Это невероятно удобная замочная система, но вам все еще необходимо носить с собой физическое устройство.  Желая сделать свой продукт еще удобнее компания Simons Voss обратилась в Интабию с запросом на разработку мобильного решения полностью заменяющего транспондер.</p>
        </div>

        <section class="section">
            <h2 class="section-title">Задача</h2>
            <p class="paragraph">Интегрировать транспондер в мобильное приложение.</p>
        </section>

        <section class="section">
            <h2 class="section-title">Решение</h2>
            <div class="block-with-definition">
                <div class="text-area content-wrapper">
                    <p class="paragraph">Создана библиотека для работы с замками и инфраструктура для управления транспондерами. В мобильное приложение интегрирована библиотека и добавлена возможность создания и управления транспондерами.</p>
                    <p class="paragraph">Теперь пользователю не нужно носить Транспондер с собой, весь необходимый функционал для работы с замками у него в телефоне.</p>
                </div>
                <div class="definition-area">
                    <div class="definition-container simons-voss-transponder-definition-container">
                        <h3 class="simons-voss-transponder-definition z-index">ТРАНСПОНДЕР</h3>
                        <p class="paragraph paragraph-margin-top z-index">
                            физическое устройство для открытия умных замков
                        </p>
                        <div>
                            <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/simons-voss-transponder-decision-illustration.png" alt="definition-illustration" class="simons-voss-transponder-decision-illustration" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <h2 class="section-title">Технологии</h2>
            <ul class="technology-list content-wrapper">
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/bluetooth.png" alt="bluetooth" class="technology-logo" />
                    </div>
                    <p class="technology-name">Bluetooth</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/swift.png" alt="swift" class="technology-logo" />
                    </div>
                    <p class="technology-name">Swift</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Kotlin_mulity_mobile.png" alt="kotlin-mulity-mobile" class="technology-logo" />
                    </div>
                    <p class="technology-name">KMM</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/kotlin.png" alt="kotlin" class="technology-logo" />
                    </div>
                    <p class="technology-name">Kotlin</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/ktor.png" alt="ktor" class="technology-logo" />
                    </div>
                    <p class="technology-name">Ktor</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/c.png" alt="c++" class="technology-logo" />
                    </div>
                    <p class="technology-name">C++</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/ci.png" alt="c" class="technology-logo" />
                    </div>
                    <p class="technology-name">C</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/objective_c.png" alt="objective_c" class="technology-logo" />
                    </div>
                    <p class="technology-name">Objective-C</p>
                </li>
            </ul>
        </section>

        <section class="section staff-comment-section">
            <div class="comment-container simons-voss-transponder-comment-container">
                <p class="paragraph">Текущий проект содержит множество технологий, которые связывают отдельные компоненты системы управления умными замками в единое целое - мобильное приложение. Такое решение позволяет легко открывать и управлять замками имея под рукой только смартфон, который в современном мире есть к каждого.</p>
                <div class="staff-container">
                    <p class="staff-name">Георгий Старков</p>
                    <p class="staff-post">IOS-разработчик</p>
                </div>
            </div>
            <div>
                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/georgiy-starkov.png" alt="georgiy-starkov" class="staff-photo" />
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
