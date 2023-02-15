import '../../styles/styles.css';

document.getElementById(
  'nexign-telecom-operator-billing'
).innerHTML = /*html*/ `
    <div class="header nexign-telecom-operator-billing-header">
        <div class="page-wrapper">
        <div>
            <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/nexign_logo.png" alt="nexign_logo" class="logo nexign-telecom-operator-billing-logo" />
        </div>
        <h1 class="title nexign-telecom-operator-billing-header-title">Биллинг оператора связи</h1>
        <div class="params">
            <p class="param direction nexign-telecom-operator-billing-direction">Веб система</p>
            <p class="param competence nexign-telecom-operator-billing-competence">Ритейл</p>
        </div>
        </div>
    </div>

    <div class="page-wrapper">
        <div class="block-with-definition">
            <div class="text-area content-wrapper">
                <p class="paragraph">
                    Система биллинга обрабатывает большое количество непрерывно поступающих данных. Задачи — учет движения средств по счетам клиентов — вызовы, подписки, начисления, платежи и корректировки. Учет предоставленных абонентам услуг.
                </p>
                <p class="paragraph paragraph-margin-top">
                    В биллинге были узкие места. Сбор данных между дата центрами занимал значительную долю трафика. Это ограничивало объём принимаемых новых событий. При закрытии месяца биллинг занимал рабочий день и требовал привлечение к процессу инженеров.
                </p>
            </div>
            <div class="definition-area">
                <div class="definition-container nexign-telecom-operator-billing-definition-container">
                    <h3 class="definition nexign-telecom-operator-billing-definition">Биллинг</h3>
                    <p class="paragraph paragraph-margin-top nexign-telecom-operator-billing-definition">
                        «Billing» переводится как «выписывание счета».
                    </p>
                    <p class="paragraph paragraph-margin-top nexign-telecom-operator-billing-definition">
                        Системы, вычисляющие стоимость услуг связи для каждого клиента и хранящие информацию обо всех тарифах и прочих стоимостных характеристиках.
                    </p>
                </div>
            </div>
        </div>

        <section class="section">
            <h2 class="section-title">Задача</h2>
            <p class="paragraph content-wrapper z-index">
                Создать новую Биллинговую систему уровня Big Data/Fast Data, в виде “коробочного” решения для поставки разным компаниям и операторам
            </p>
            <div>
                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/pic.png" alt="nexign_logo" class="nexign-telecom-operator-billing-task-illustration" />
            </div>
        </section>

        <section class="section">
            <h2 class="section-title">Решение</h2>
            <p class="paragraph content-wrapper">
                Новая система работает надёжно, и легко справляется с нагрузками. Для ускорения сохранения данных, использовали NoSQL-решение.
            </p>
            <p class="paragraph content-wrapper">
                Это разгрузило сетевой трафик системы, отвечающей за приём событий. В результате увеличили порог нагрузки событиями с 0.5 миллиарда до 2 миллиардов в день.
            </p>
            <p class="paragraph content-wrapper paragraph-margin-top">
                Внедрили в биллинг MapReduce-алгоритмы, сократили время закрытия месяца с ~1 дня до ~10 минут. Автоматизировали настройку параметров. Теперь система не требует участия инженеров для выполнения плановых операций.
            </p>
            <p class="paragraph content-wrapper paragraph-margin-top">
                Реализовали механизм быстрого развёртывания на окружении заказчика. Новая система уровня Big Data/Fast Data отвечает предъявленными требованиям по отказоустойчивости и масштабированию.
            </p>
        </section>

        <section class="section">
            <h2 class="section-title">Технологии</h2>
            <ul class="technology-list content-wrapper">
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/01/Spring-boot.png" alt="Spring-boot" class="technology-logo" />
                    </div>
                    <p class="technology-name">Spring boot</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Kafka.png" alt="Kafka" class="technology-logo" />
                    </div>
                    <p class="technology-name">Kafka</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Spark-2.x.png" alt="Spark 2.x" class="technology-logo" />
                    </div>
                    <p class="technology-name">Spark 2.x</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Cassandra-3.x.png" alt="Cassandra 3.x" class="technology-logo" />
                    </div>
                    <p class="technology-name">Cassandra 3.x</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Zookeeper-3.x.png" alt="Zookeeper 3.x" class="technology-logo" />
                    </div>
                    <p class="technology-name">Zookeeper 3.x</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Kubernetes.png" alt="Kubernetes" class="technology-logo" />
                    </div>
                    <p class="technology-name">Kubernetes</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/TeamCity.png" alt="TeamCity" class="technology-logo" />
                    </div>
                    <p class="technology-name">TeamCity</p>
                </li>
                <li class="technology-container">
                    <div>
                        <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Akka.png" alt="Akka" class="technology-logo" />
                    </div>
                    <p class="technology-name">Akka</p>
                </li>
            </ul>
        </section>

        <section class="section staff-comment-section">
            <div class="comment-container nexign-telecom-operator-billing-comment-container">
                <p class="paragraph">
                    Это был непростой проект с нестандартными технологиями, в котором всё заточено под большие объёмы и высокую скорость обработки данных.
                </p>
                <p class="paragraph paragraph-margin-top">
                    При каждом движении приходилось учитывать специфику NoSQL БД. Мы оперативно освоились и приложили руку к решению, которым ежедневно пользуются миллионы людей.
                </p>
                <div class="staff-container">
                    <p class="staff-name">Нефедов Дмитрий</p>
                    <p class="staff-post">Java-разработчик</p>
                </div>
            </div>
            <div>
                <img src="http://192.168.1.112:8080/wp-content/uploads/2023/02/Nefedorov_Dmitrii.png" alt="Nefedorov_Dmitrii" class="staff-photo" />
            </div>
        </section>
    </div>

    <div class="footer">
        <div class="page-wrapper">
            <h3 class="footer-title">Похожие кейсы</h3>
            <div><OtherProjectsComponent ids="75" /></div>
        </div>
    </div>
`;
