import styles from "./page.module.css";

export default function BanquetsPage() {
  return (
    <main className={styles.page}>

    <section className={styles["banquet-hero"]}>
        <div className={styles["banquet-hero-content"]}>
            <h1 className={styles["banquet-main-title"]}>Ваш праздник у моря</h1>
            
                <p className={styles["banquet-subtitle"]}>Le Jardin — идеальное место для праздника, где океан становится главным гостем.
                Мы организуем банкеты для любого повода: от свадеб и юбилеев до корпоративных ужинов и закрытых презентаций.
                Предлагаем индивидуальное меню, авторское оформление пространства и внимание к каждой детали вашего события.</p>
            
        </div>
    </section>


    <section className={styles["wedding-section"]} id="wedding-banquet">
      
        <div className={styles["wedding-bg"]}></div>
        <div className={styles["wedding-image-container"]}>
    <img src="/images/свадьба.png" alt="Свадьба"/>
</div>
        
        <div className={styles["wedding-image"]}></div>
        
        
        <div className={styles["wedding-content"]}>
            <h2 className={styles["wedding-title"]}>Свадебный банкет у воды</h2>
            <div className={styles["wedding-text"]}>
                <p className={styles["wedding-subtitle"]}>
                    Ваша свадьба под аккомпанемент морских волн и закатного солнца в Le Jardin. 
                    Здесь природа становится соавтором вашего праздника.
                </p>
                
                <ul className={styles["features-list"]}>
                    <li className={styles["feature-item"]}>Эксклюзивные столики у самой воды</li>
                    <li className={styles["feature-item"]}>С неповторимым видом на бескрайний горизонт.</li>
                    <li className={styles["feature-item"]}>Вместимость: от 20 до 80 гостей.</li>
                    <li className={styles["feature-item"]}>Отдельная зона для фуршета, индивидуальный свадебный торт от нашего кондитера.</li>
                </ul>
            </div>
        </div>
    </section>


<section className={styles["corporate-section"]} id="corporate">
    
    <div className={styles["corporate-bg-image"]}>
        </div>
    
    
    <div className={styles["corporate-screen-image"]}>
        </div>
    
    
    <div className={styles["corporate-content"]}>
        <h2 className={styles["corporate-title"]}>Корпоративный банкет</h2>
        
        <div className={styles["corporate-text"]}>
            <p className={styles["corporate-subtitle"]}>Возможность зонирования зала, бизнес-ланч-меню, презентационная техника и отдельный вход.
                В Le Jardin деловые переговоры проходят идеально, а также презентации и закрытые показы, корпоративные праздники и тимбилдинги. 
                От 10 до 50 человек 
                Фуршетное меню, бар, живая музыка 
                Для праздничных корпоративов 
                Зонирование пространства</p>
            
        </div>
    </div>
    
   
    <div className={styles["corporate-gradient"]}></div>
</section>


<section id="private-parties" className={styles["private-section"]}>
    
    <div className={styles["private-top-decorations"]}></div>
    
    
    <div className={styles["private-image-container"]}>
        <img src="/images/юбилей.png" alt="Юбилей"/>
    </div>
    
   
    <div className={styles["private-content"]}>
        <h2 className={styles["private-title"]}>Частные праздники</h2>
        <p className={styles["private-subtitle"]}>
            Юбилеи, дни рождения, семейные торжества.
            Подбор меню под предпочтения гостей чести,
            декоративное оформление и музыкальное сопровождение.
        </p>
    </div>
</section>


<section id="how-we-work" className={styles["how-we-work-section"]}>
    
    <h2 className={styles["how-we-work-title"]}>Как мы работаем</h2>
    
    <div className={styles["how-we-work-content"]}>
                
        <div className={styles["steps-container"]}>
            <div className={styles["steps-grid"]}>
                
                <div className={styles["step-item"]}>
                    <div className={styles["step-number"]}>01</div>
                    <h3 className={styles["step-title"]}>ЗНАКОМСТВО</h3>
                    <p className={styles["step-description"]}>
                        Встреча в ресторане или онлайн-консультация, обсуждение пожеланий
                    </p>
                </div>
                
              
                <div className={styles["step-item"]}>
                    <div className={styles["step-number"]}>02</div>
                    <h3 className={styles["step-title"]}>ПЛАН-МЕНЮ</h3>
                    <p className={styles["step-description"]}>
                        Шеф и сомелье предлагают варианты меню и винную пару под бюджет
                    </p>
                </div>
                
                
                <div className={styles["step-item"]}>
                    <div className={styles["step-number"]}>03</div>
                    <h3 className={styles["step-title"]}>ОФОРМЛЕНИЕ</h3>
                    <p className={styles["step-description"]}>
                        Дизайнер готовит варианты декора, учитывая тематику и цветовую гамму
                    </p>
                </div>
                
               
                <div className={styles["step-item"]}>
                    <div className={styles["step-number"]}>04</div>
                    <h3 className={styles["step-title"]}>ПРОВЕДЕНИЕ</h3>
                    <p className={styles["step-description"]}>
                        В день мероприятия вас встречает персональный координатор всего процесса
                    </p>
                </div>
            </div> 
            
            
            <div className={styles["steps-button-container"]}>
                <button type="button" className={styles["steps-booking-button"]}>Оставить заявку</button>
            </div>
            
        </div> 
        
        
        <div className={styles["steps-divider"]}></div>
        
        
        <div className={styles["manager-container"]}>
            <div className={styles["manager-photo-container"]}>
                <img src="/images/менеджер Анна.jpg" alt="Менеджер Анна" className={styles["manager-photo"]}/>
            </div>
            
            <div className={styles["manager-divider"]}></div>
            
            <div className={styles["manager-contacts"]}>
                <h3 className={styles["contact-title"]}>Контакт для организации:</h3>
                <div className={styles["contact-details"]}>
                    <span className={styles["contact-name"]}>Анна, менеджер по мероприятиям</span>
                    <a href="tel:+79562533588" className={styles["contact-link"]}>+7 (956) 253-35-88</a>
                    <a href="mailto:events@lejardin.ru" className={styles["contact-link"]}>events@lejardin.ru</a>
                </div>
            </div>
        </div> 
        
    </div> 
    
</section>

   </main>
  );
}