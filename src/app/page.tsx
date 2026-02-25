"use client";

import styles from "./page.module.css";


export default function Home() {


  return (
    <main>

      {/** Главная секция */}
        <section className={styles.hero} id="home">

            {/** ВИДЕО ФОН (добавьте этот блок) */}
    <div className={styles["hero-video-container"]}>
        <video className={styles["hero-video"]} autoPlay muted playsInline preload="metadata">
            <source src="/images/0116.mp4" type="video/mp4"/>
            Ваш браузер не поддерживает видео.
        </video>
        <div className={styles["video-overlay"]}></div>
    </div>

            <img src="/images/лого.png" className={styles.hero__logo} />
            <p className={styles.hero__subtitle}>Французский ресторан для ценителей искусства</p>
        
        </section>




         {/** history-section.html */}
        <section className={styles["history-section"]} id="history">
    <div className={styles["history-photo"]}></div>
    <div className={styles["history-content"]}>
        <h2 className={styles["history-title"]}>Море. Вино. Le Jardin.</h2>
        <div className={styles["history-text"]}>
            <p>Наш ресторан — три простые идеи, которые работают вместе: самый красивый вид на море в городе, французская кухня без лишних сложностей и атмосфера, в которую хочется вернуться.</p>
            <p>Наша философия — не удивлять, а создавать безупречный контекст для вашего вечера. Поэтому в меню — только выверенные блюда из лучших продуктов, а в зале — ничего лишнего, чтобы ничто не отвлекало вас от компании и пейзажа за стеклом.</p>
            <p>Мы идеально подходим для особых случаев, важных встреч и просто для тех случаев, когда хочется ужинать в красивом месте, где всё сделано со вкусом и вниманием к гостю.</p>
        </div>
    </div>
</section>



     {/** signature-dishes.html */}
<section id="signature-dishes" className={styles["signature-section"]}>
    {/** Контент секции */}
    <div className={styles["signature-section"]}>
        <div className={styles["section-header"]}>
            <h2 className={styles["section-title"]}>Вкус как впечатление</h2>
            <p className={styles["section-subtitle"]}>Шедевры шеф-повара Пьера Дюваля</p>
            <div className={styles["title-line"]}></div>
        </div>
        
        {/** Контейнер для карточек */}
        <div className={styles["dishes-container"]}>
            {/** КАРТОЧКА 1 */}
            <div className={styles["dish-card"]} data-card="1">
                <div className={styles["dish-card-inner"]}>
                    {/** ЛИЦЕВАЯ СТОРОНА (с загибающимся уголком) */}
                    <div className={styles["dish-card-front"]}>
                        <div className={styles["dish-image"]}>
                            <img src="/images/тунец и авокадо.jpg" alt="тунец и авокадо"/>
                            <div className={styles["dish-overlay"]}>
                                <span className={styles["view-button"]}>Детали</span>
                            </div>
                        </div>
                        
                        <div className={styles["dish-info"]}>
                            <div className={styles["dish-header"]}>
                                <h3 className={styles["dish-title"]}>Тартар из тунца с авокадо и цитрусовым эмульсионом</h3>
                                <span className={styles["dish-price"]}>2100р</span>
                            </div>
                        </div>
                    </div>
                    
                    {/** ОБРАТНАЯ СТОРОНА (с прокруткой и фото) */}
                    <div className={styles["dish-card-back"]}>
                        <div className={styles["back-content-scroll"]}>
                            <div className={styles["back-description"]}>
                                <h4>Тартар из тунца с авокадо и цитрусовым эмульсионом</h4>
                                <div className={styles["expanded-description"]}>
                                <p>Свежий синий тунец, нарезанный вручную, подаётся с кремовым авокадо 
                                и лёгким эмульсионом из цитрусов. Украшается микрозеленью и цветами.</p> 
                                
                            </div>
                            </div>
                            
                            <div className={styles["pairing-container"]}>
                                <h5>Идеальное сочетание:</h5>
                                <p>Розовое вино Château dEsclans Whispering Angel. </p>
                            </div>
                            
                            <div className={styles["back-gallery"]}>
                                <div className={styles["gallery-title"]}>Галерея блюда</div>
                                <div className={styles["back-images"]}>
                                    <div className={styles["back-image"]}>
                                        <img src="/images/тунец-доп1.webp" alt="Подача тартара"/>
                                    </div>
                                    <div className={styles["back-image"]}>
                                        <img src="/images/тунец-доп2.webp" alt="Процесс приготовления"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={styles["back-hint-container"]}>
                                <span className={styles["back-hint"]}>Нажмите на карточку, чтобы вернуться</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/** КАРТОЧКА 2 */}
            <div className={styles["dish-card"]} data-card="2">
                <div className={styles["dish-card-inner"]}>
                    {/** ЛИЦЕВАЯ СТОРОНА (с загибающимся уголком) */}
                    <div className={styles["dish-card-front"]}>
                        <div className={styles["dish-image"]}>
                            <img src="/images/конфи с гастрономом.jpg" alt="конфи с гастрономом"/>
                            <div className={styles["dish-overlay"]}>
                                <span className={styles["view-button"]}>Детали</span>
                            </div>
                        </div>
                        
                        <div className={styles["dish-info"]}>
                            <div className={styles["dish-header"]}>
                                <h3 className={styles["dish-title"]}>Утиная ножка конфи с вишнёвым гастрономом</h3>
                                <span className={styles["dish-price"]}>2900р</span>
                            </div>
                        </div>
                    </div>
                    
                    {/** ОБРАТНАЯ СТОРОНА (с прокруткой и фото) */}
                    <div className={styles["dish-card-back"]}>
                        <div className={styles["back-content-scroll"]}>
                            <div className={styles["back-description"]}>
                                <h4>Утиная ножка конфи с вишнёвым гастрономом</h4>
                                <div className={styles["expanded-description"]}>
                                    <p>Утка, томлёная в жире 8 часов до состояния тающего мяса. 
                                    Сочетается с ярким кисло-сладким вишнёвым соусом.</p>
                                </div>
                            </div>
                            
                            <div className={styles["pairing-container"]}>
                                <h5>Идеальное сочетание:</h5>
                                <p>Красное вино Gevrey-Chambertin Grand Cru. </p>
                            </div>
                            
                            <div className={styles["back-gallery"]}>
                                <div className={styles["gallery-title"]}>Галерея блюда</div>
                                <div className={styles["back-images"]}>
                                    <div className={styles["back-image"]}>
                                        <img src="/images/утка-доп1.jpg" alt="Утиная ножка в подаче"/>
                                    </div>
                                    <div className={styles["back-image"]}>
                                        <img src="/images/утка-доп2.jpg" alt="Вишнёвый гастроном"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={styles["back-hint-container"]}>
                                <span className={styles["back-hint"]}>Нажмите на карточку, чтобы вернуться</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/** КАРТОЧКА 3 */}
            <div className={styles["dish-card"]} data-card="3">
                <div className={styles["dish-card-inner"]}>
                    {/** ЛИЦЕВАЯ СТОРОНА (с загибающимся уголком) */}
                    <div className={styles["dish-card-front"]}>
                        <div className={styles["dish-image"]}>
                            <img src="/images/ганаш шоколадный.jpg" alt="ганаш шоколадный"/>
                            <div className={styles["dish-overlay"]}>
                                <span className={styles["view-button"]}>Детали</span>
                            </div>
                        </div>
                        
                        <div className={styles["dish-info"]}>
                            <div className={styles["dish-header"]}>
                                <h3 className={styles["dish-title"]}>Шоколадный ганаш с морской солью и оливковым маслом</h3>
                                <span className={styles["dish-price"]}>950р</span>
                            </div>
                        </div>
                    </div>
                    
                    {/** ОБРАТНАЯ СТОРОНА (с прокруткой и фото) */}
                    <div className={styles["dish-card-back"]}>
                        <div className={styles["back-content-scroll"]}>
                            <div className={styles["back-description"]}>
                                <h4>Шоколадный ганаш с морской солью и оливковым маслом</h4>
                                <div className={styles["expanded-description"]}>
                                    <p>Двухслойный ганаш из тёмного шоколада, кристаллы флёр-де-сэль 
                                    и несколько капель оливкового масла. Изысканный десерт.</p>
                                </div>
                            </div>
                            
                            <div className={styles["pairing-container"]}>
                                <h5>Идеальное сочетание:</h5>
                                <p>Сладкое вино Sauternes или эспрессо.</p>
                            </div>
                            
                            <div className={styles["back-gallery"]}>
                                <div className={styles["gallery-title"]}>Галерея блюда</div>
                                <div className={styles["back-images"]}>
                                    <div className={styles["back-image"]}>
                                        <img src="/images/шоколад-доп1.jpg" alt="Шоколадный ганаш"/>
                                    </div>
                                    <div className={styles["back-image"]}>
                                        <img src="/images/шоколад-доп2.webp" alt="Подача десерта"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={styles["back-hint-container"]}>
                                <span className={styles["back-hint"]}>Нажмите на карточку, чтобы вернуться</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <p className={styles["section-footer"]}>
            Нажмите на любое блюдо, чтобы узнать о нем побольше
        </p>
    </div>
</section>



{/** atmosphere.html */}
<section id="atmosphere" className={styles["atmosphere-section"]}>
    {/** Фон как был */}
    <div className={styles["atmosphere-bg"]}></div>

    {/** Текстовый контент */}
    <div className={styles["atmosphere-content"]}>
        <div className={styles["atmosphere-text-container"]}>
            <h2 className={styles["atmosphere-title"]}>Атмосфера Le Jardin</h2>
            <div className={styles["atmosphere-text"]}>
                <p>Светлый, воздушный зал ресторана, словно парящий над морем. Большие панорамные окна от пола до потолка заливают пространство мягким 
                  светом, а за стеклом — бесконечная синева и лёгкая дымка горизонта.</p>
                <p>Атмосфера спокойная, но живая: здесь чувствуется дыхание моря, лёгкий шум волн за окном, запах йода и свежих трав. Это место, куда 
                  хочется прийти на долгий обед, смотреть на закат и наслаждаться каждым кусочком, каждым глотком.</p>
            </div>
        </div>
    </div>

   {/** В секции атмосферы, обновите видео-блок: */}
<div className={`${styles["video-atmosphere-container"]} ${styles["video-height-lg"]} ${styles["video-ratio-2-1"]} ${styles["video-gap-md"]} ${styles["video-fit-cover"]} ${styles["video-align-center"]}`}>
    
    <div className={styles["video-grid"]}>
        {/** Большое видео */}
        <div className={styles["main-video"]}>
            <span className={styles["main-video-label"]}>Вид на море</span>
            <div className={styles["video-wrapper"]}>
                <video autoPlay muted loop playsInline preload="metadata">
                    <source src="/images/атмосфера видео1.MP4" type="video/mp4"/>
                    Ваш браузер не поддерживает видео.
                </video>
            </div>
            
        </div>

        {/** Блок с маленькими видео */}
        <div className={styles["side-videos"]}>
            <div className={styles["small-video"]}>
                <span className={styles["small-video-label"]}>Основной зал</span>
                <div className={styles["video-wrapper"]}>
                    <video autoPlay muted loop playsInline preload="metadata">
                        <source src="/images/атмосфера видео2.MP4" type="video/mp4"/>
                        Ваш браузер не поддерживает видео.
                    </video>
                </div>
                
            </div>
            
            <div className={styles["small-video"]}>
                <span className={styles["small-video-label"]}>Веранда</span>
                <div className={styles["video-wrapper"]}>
                    <video autoPlay muted loop playsInline preload="metadata">
                        <source src="/images/атмосфера видео3.MP4" type="video/mp4"/>
                        Ваш браузер не поддерживает видео.
                    </video>
                </div>
                
            </div>
        </div>
    </div>
</div>
</section>



{/** СЕКЦИЯ С МЕСТОПОЛОЖЕНИЕМ РЕСТОРАНА */}

<section id="location" className={styles["location-section"]}>
    {/** ФОТО СВЕРХУ */}
    <div className={styles["location-photo-container"]}>
        <img src="/images/гео.png" alt="Ресторан 'У Моря' в Анапе" className={styles["location-photo"]}/>
        <h2 className={styles["location-title"]}>Где нас найти?</h2>
    </div>
    
    <div className={styles["location-content"]}>
        {/** ЛЕВАЯ ЧАСТЬ - АДРЕС И КОНТАКТЫ */}
        <div className={styles["location-info"]}>
            <div className={styles["contact-details"]}>
                {/** Адрес */}
                <div className={styles["address-block"]}>
                    <h3 className={styles["address-title"]}>Адрес</h3>
                    <div className={styles["address-text"]}>
                        <p>Улица Крымская, 171</p>
                        <p>Анапа, Краснодарский край</p>
                    </div>
                </div>
                
                {/** Контакты - ИСПРАВЛЕННЫЙ НОМЕР (без direction: rtl) */}
                <div className={styles["contacts-block"]}>
                    <h3 className={styles["contacts-title"]}>Контакты</h3>
                    <div className={styles["contact-items"]}>
                        <div className={styles["contact-item"]}>
                            
                            <span>+7 (998) 787-23-55</span>
                        </div>
                        <div className={styles["contact-item"]}>
                            
                            <span>restaurantumorya@lejardin.ru</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
        {/** ПРАВАЯ ЧАСТЬ - КАРТА БЕЗ КНОПКИ ЯНДЕКС */}
        <div className={styles["map-container"]}>
            {/** Яндекс.Карты */}
            
            <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=37.301022,44.897425&z=17&l=map&pt=37.301022,44.897425,pm2rdm&mode=usermaps"
                className={styles["map-frame"]}
                title="Ресторан 'У Моря' - Улица Крымская, 171, Анапа"
                allowFullScreen/>
            
           
            
          
            <div className={styles["map-marker"]}>
                <div className={styles["marker-title"]}>Ресторан У Моря</div>
                <div className={styles["marker-address"]}>ул. Крымская, 171<br/>Анапа</div>
            </div>
        </div>
    </div>
</section>

    </main>
  );
}
