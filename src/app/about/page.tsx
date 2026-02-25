"use client";



import styles from "./page.module.css";




export default function AboutPage() {




  return (
    <main className={styles.page}>
      {/**-- ===== ГЛАВНАЯ СЕКЦИЯ ===== */}
    <section className={styles["about-hero"]} id="about-hero">
        <div className={styles["about-hero-content"]}>
            <h1 className={styles["about-main-title"]}>О нас</h1>
            <p className={styles["about-hero-subtitle"]}>Искусство гастрономии, созданное с любовью</p>
        </div>
    </section>
    
    {/**-- ===== МИССИЯ И ФИЛОСОФИЯ ===== */}
    <section className={styles["mission-section"]} id="mission">
        <div className={styles["mission-content"]}>
            <div className={styles["mission-text"]}>
                <h2 className={styles["mission-title"]}>Наша философия</h2>
                <div className={styles["mission-line"]}></div>
                <p className={`${styles["mission-paragraph"]} ${styles.large}`}>

                    Мы верим, что настоящая гастрономия — это диалог между традицией и инновацией, между шеф-поваром и гостем.
                </p>
                <p className={`${styles["mission-paragraph"]} ${styles.medium}`}>
                    Каждое блюдо в нашем меню — это история, рассказанная через вкусы, текстуры и эмоции. Мы используем только сезонные продукты от локальных производителей, чтобы гарантировать свежесть и поддерживать местное сообщество.
                </p>
                <p className={`${styles["mission-paragraph"]} ${styles.small}`}>
                    Наша цель — не просто накормить, а создать незабываемый опыт, где каждая деталь имеет значение: от выбора ингредиентов до сервировки и атмосферы.
                </p>
            </div>
            <div className={styles["mission-image"]}>
                {/**-- Здесь будет фото шефа или команды на кухне */}
                <img src="/images/фото-команды.jpg" alt="Фото команды" className={styles["mission-photo"]}/>
            </div>
        </div>
    </section>
    
    {/**-- ===== ЦЕННОСТИ ===== */}
    <section className={styles["values-section"]} id="values">
        <div className={styles["values-container"]}>
            <h2 className={styles["values-title"]}>Наши ценности</h2>
            <div className={styles["values-grid"]}>
                <div className={styles["value-card"]}>
                    <div className={styles["value-icon"]}>
                        <i className={styles["fas fa-seedling"]}></i>
                    </div>
                    <h3 className={styles["value-card-title"]}>Сезонность</h3>
                    <p className={styles["value-card-text"]}>Меню меняется в соответствии с сезоном, чтобы предлагать только самые свежие и вкусные продукты.</p>
                </div>
                
                <div className={styles["value-card"]}>
                    <div className={styles["value-icon"]}>
                        <i className={styles["fas fa-handshake"]}></i>
                    </div>
                    <h3 className={styles["value-card-title"]}>Локальность</h3>
                    <p className={styles["value-card-text"]}>Мы сотрудничаем с местными фермерами и производителями, поддерживая региональную экономику.</p>
                </div>
                
                <div className={styles["value-card"]}>
                    <div className={styles["value-icon"]}>
                        <i className={styles["fas fa-heart"]}></i>
                    </div>
                    <h3 className={styles["value-card-title"]}>Страсть</h3>
                    <p className={styles["value-card-text"]}>Каждое блюдо готовится с любовью и вниманием к деталям нашими опытными поварами.</p>
                </div>
                
                <div className={styles["value-card"]}>
                    <div className={styles["value-icon"]}>
                        <i className={styles["fas fa-users"]}></i>
                    </div>
                    <h3 className={styles["value-card-title"]}>Сообщество</h3>
                    <p className={styles["value-card-text"]}>Мы создаем пространство, где гости чувствуют себя как дома, а каждый визит становится событием.</p>
                </div>
            </div>
        </div>
    </section>
    
    {/**-- ===== КОМАНДА ===== */}
    <section className={styles["team-section"]} id="team">
        <div className={styles["team-container"]}>
            <h2 className={styles["team-title"]}>Наша команда</h2>
            <p className={styles["team-subtitle"]}>Талантливые профессионалы, которые делают каждый ваш визит особенным</p>
            
            <div className={styles["team-grid"]}>
                <div className={styles["team-member"]}>
                    <div className={styles["member-photo"]}>
                        <img src="/images/фото-шефа.jpg" alt="Пьер Дюваль - Шеф-повар"/>
                    </div>
                    <div className={styles["member-info"]}>
                        <h3 className={styles["member-name"]}>Пьер Дюваль</h3>
                        <p className={styles["member-position"]}>Шеф-повар</p>
                        <p className={styles["member-bio"]}>Опыт работы 35 лет. Проходил стажировку в лучших ресторанах Франции и Италии. Автор уникальных авторских блюд.</p>
                        <div className={styles["member-quote"]}>
                            <i className={styles["fas fa-quote-left"]}></i>
                            <p>Для меня кулинария — это язык, на котором я говорю с гостями.</p>
                        </div>
                    </div>
                </div>
                
                <div className={styles["team-member"]}>
                    <div className={styles["member-photo"]}>
                        <img src="/images/фото-сомелье.jpg" alt="Инна Сидорова - Сомелье"/>
                    </div>
                    <div className={styles["member-info"]}>
                        <h3 className={styles["member-name"]}>Инна Сидорова</h3>
                        <p className={styles["member-position"]}>Сомелье</p>
                        <p className={styles["member-bio"]}>Сертифицированный сомелье с 10-летним опытом. Знает все о винах из разных регионов мира.</p>
                        <div className={styles["member-quote"]}>
                            <i className={styles["fas fa-quote-left"]}></i>
                            <p>Вино — это поэзия в бутылке, и я помогаю гостям прочитать её.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    {/**-- ===== ИСТОРИЯ ===== */}
    <section className={styles["story-section"]} id="story">
        <div className={styles["story-container"]}>
            <div className={styles["story-image"]}>
                <img src="/images/историческое-фото.jpg" alt="Наш ресторан в 2010 году"/>
            </div>
            <div className={styles["story-content"]}>
                <h2 className={styles["story-title"]}>Наша история</h2>
                <div className={styles["story-text"]}>
                    <p>Наш ресторан открыл свои двери в 2010 году с простой идеей — создать место, где еда становится искусством, а ужин — событием.</p>
                    <p>Начиная с маленького зала на 30 персон, мы выросли в одно из самых уважаемых гастрономических заведений города. За эти годы мы получили несколько престижных наград и стали любимым местом как для местных жителей, так и для туристов.</p>
                    <p>Сегодня мы продолжаем развиваться, внедряя новые техники и сохраняя уважение к традициям. Но одно остается неизменным — наша преданность качеству и гостеприимству.</p>
                </div>
                <div className={styles["achievements"]}>
                    <div className={styles["achievement"]}>
                        <span className={styles["achievement-number"]}>12+</span>
                        <span className={styles["achievement-text"]}>лет опыта</span>
                    </div>
                    <div className={styles["achievement"]}>
                        <span className={styles["achievement-number"]}>50+</span>
                        <span className={styles["achievement-text"]}>наград</span>
                    </div>
                    <div className={styles["achievement"]}>
                        <span className={styles["achievement-number"]}>1000+</span>
                        <span className={styles["achievement-text"]}>счастливых гостей ежемесячно</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    {/**-- ===== ГАЛЕРЕЯ ===== */}
    <section className={styles["gallery-section"]} id="gallery">
        <div className={styles["gallery-container"]}>
            <h2 className={styles["gallery-title"]}>Наш мир</h2>
            <p className={styles["gallery-subtitle"]}>Загляните за кулисы нашего ресторана</p>
            
            <div className={styles["gallery-grid"]}>
                <div className={styles["gallery-item gallery-item-large"]}>
                    <img src="/images/фото12.jpg" alt="Главный зал ресторана"/>
                    <div className={styles["gallery-caption"]}>Главный зал</div>
                </div>
                <div className={styles["gallery-item"]}>
                    <img src="/images/наша-кухня.jpg" alt="Кухня"/>
                    <div className={styles["gallery-caption"]}>Наша кухня</div>
                </div>
                <div className={styles["gallery-item"]}>
                    <img src="/images/шеф-блюдо.jpg" alt="Блюдо"/>
                    <div className={styles["gallery-caption"]}>Шеф-блюдо</div>
                </div>
                <div className={styles["gallery-item"]}>
                    <img src="/images/винная-карта.jpg" alt="Винная карта"/>
                    <div className={styles["gallery-caption"]}>Винная карта</div>
                </div>
                <div className={styles["gallery-item"]}>
                    <img src="/images/частное-мероприятие.jpg" alt="Мероприятие"/>
                    <div className={styles["gallery-caption"]}>Частное мероприятие</div>
                </div>
            </div>
        </div>
    </section>
    
    {/**-- ===== ПРИГЛАШЕНИЕ ===== */}
    <section className={styles["invitation-section"]} id="invitation">
        <div className={styles["invitation-container"]}>
            <h2 className={styles["invitation-title"]}>Приглашаем в гости</h2>
            <p className={styles["invitation-text"]}>Мы с нетерпением ждем возможности познакомиться с вами и разделить с вами наши гастрономические открытия.</p>
            <div className={styles["invitation-buttons"]}>
                <a href="menu.html" className={styles["invitation-button"]}>Посмотреть меню</a>
                <a href="#" className={styles["invitation-button"]}>Забронировать столик</a>
            </div>
        </div>
    </section>
    </main>
  );
}
