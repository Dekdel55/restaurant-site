import styles from "./page.module.css";

export default function Menu() {
  return (
    <main className={styles.page}>
       
    <section className={styles["menu-navigation"]}>
        <div className={styles["menu-navigation-content"]}>
            <h1 className={styles["menu-title"]}>Меню</h1>
            <div className={styles["title-line"]}></div>
            
            <nav className={styles["menu-tags"]}>
                <button className={styles["menu-tag"]} data-tag="all">Все</button>
                <button className={styles["menu-tag"]} data-tag="main">Основное</button>
                <button className={styles["menu-tag"]} data-tag="appetizers">Закуски</button>
                <button className={styles["menu-tag"]} data-tag="wines">Вино</button>
                <button className={styles["menu-tag"]} data-tag="desserts">Десерты</button>
                <button className={styles["menu-tag"]} data-tag="drinks">Напитки</button>
            </nav>
        </div>
    </section>

    
    <div className={styles["menu-main-content"]}></div>
        <div className={styles["dishes-container"]}>
           
{/* Основные блюда (6 шт) */}
<div className={styles["dish-card"]} data-card="1" data-tag="main">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/морской черт.webp" alt="Морской черт"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>Морской черт под соусом берблан</h3>
                    <div className={styles["dish-price"]}>3 200 ₽</div>
                </div>
                <div className={styles["dish-tag main"]}>Основное</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>Морской черт под соусом берблан</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Нежное филе морского чёрта с классическим французским соусом берблан на основе белого вина и эстрагона.</p>
                        <p><strong>Калории:</strong> 280 ккал | <strong>Вес:</strong> 200 г | <strong>Жиры:</strong> 12 г</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className={styles["dish-card"]} data-card="2" data-tag="main">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/равиоли.avif" alt="Равиоли с омаром"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>Равиоли с омаром</h3>
                    <div className={styles["dish-price"]}>3 600 ₽</div>
                </div>
                <div className={styles["dish-tag main"]}>Основное</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>Равиоли с омаром</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Домашние равиоли с начинкой из мяса омара, подаются с трюфельным соусом и пармезаном.</p>
                        <p><strong>Калории:</strong> 320 ккал | <strong>Вес:</strong> 240 г | <strong>Жиры:</strong> 18 г</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className={styles["dish-card"]} data-card="3" data-tag="main">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/мраморная говядина.jpg" alt="Филе миньон"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>Филе миньон из мраморной говядины</h3>
                    <div className={styles["dish-price"]}>4 200 ₽</div>
                </div>
                <div className={styles["dish-tag main"]}>Основное</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>Филе миньон из мраморной говядины</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Нежнейшая вырезка мраморной говядины Black Angus, приготовленная на гриле до степени medium rare.</p>
                        <p><strong>Калории:</strong> 420 ккал | <strong>Вес:</strong> 250 г | <strong>Жиры:</strong> 28 г</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className={styles["dish-card"]} data-card="4" data-tag="main">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/сибас.avif" alt="Сибас на пару"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>Сибас на пару с артишоками</h3>
                    <div className={styles["dish-price"]}>2 800 ₽</div>
                </div>
                <div className={styles["dish-tag main"]}>Основное</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>Сибас на пару с артишоками</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Нежный сибас, приготовленный на пару с артишоками и овощами, подается с лимонным маслом.</p>
                        <p><strong>Калории:</strong> 290 ккал | <strong>Вес:</strong> 300 г | <strong>Жиры:</strong> 15 г</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className={styles["dish-card"]} data-card="5" data-tag="main">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/конфи с гастрономом.jpg" alt="Утиная ножка конфи"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>Утиная ножка конфи с гастрономом</h3>
                    <div className={styles["dish-price"]}>2 900 ₽</div>
                </div>
                <div className={styles["dish-tag main"]}>Основное</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>Утиная ножка конфи с гастрономом</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Утиная ножка, томленная в собственном жире с травами, подается с картофельным гастрономом.</p>
                        <p><strong>Калории:</strong> 410 ккал | <strong>Вес:</strong> 280 г | <strong>Жиры:</strong> 26 г</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className={styles["dish-card"]} data-card="6" data-tag="main">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/телячья щечка.jpg" alt="Телячья щечка"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>Томленая телячья щечка</h3>
                    <div className={styles["dish-price"]}>3 400 ₽</div>
                </div>
                <div className={styles["dish-tag main"]}>Основное</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>Томленая телячья щечка</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Телячья щека, томленная в красном вине 6 часов, подается с пюре из сельдерея.</p>
                        <p><strong>Калории:</strong> 380 ккал | <strong>Вес:</strong> 280 г | <strong>Жиры:</strong> 22 г</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

{/* Закуски (6 шт) */}
<div className={styles["dish-card"]} data-card="7" data-tag="appetizers">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/устрицы.jpg" alt="Устрицы Жильярдо"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>Устрицы Жильярдо</h3>
                    <div className={styles["dish-price"]}>3 500 ₽</div>
                </div>
                <div className={styles["dish-tag appetizers"]}>Закуски</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>Устрицы Жильярдо</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Премиальные французские устрицы №2, подаются на льду с лимоном и соусом из красного лука.</p>
                        <p><strong>Калории:</strong> 150 ккал | <strong>Вес:</strong> 180 г | <strong>Жиры:</strong> 8 г</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className={styles["dish-card"]} data-card="8" data-tag="appetizers">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/салат из кальмаров.jpg" alt="Салат из кальмаров"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>Теплый салат из кальмаров</h3>
                    <div className={styles["dish-price"]}>1 600 ₽</div>
                </div>
                <div className={styles["dish-tag appetizers"]}>Закуски</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>Теплый салат из кальмаров</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Нежные кальмары на гриле с овощами и цитрусовой заправкой.</p>
                        <p><strong>Калории:</strong> 190 ккал | <strong>Вес:</strong> 200 г | <strong>Жиры:</strong> 11 г</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className={styles["dish-card"]} data-card="9" data-tag="appetizers">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/фуагра.jpg" alt="Фуа-гра"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>Фуа-гра с инжирным конфитюром</h3>
                    <div className={styles["dish-price"]}>2 800 ₽</div>
                </div>
                <div className={styles["dish-tag appetizers"]}>Закуски</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>Фуа-гра с инжирным конфитюром</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Нежнейшая фуа-гра с домашним инжирным конфитюром и тостами бриошь.</p>
                        <p><strong>Калории:</strong> 350 ккал | <strong>Вес:</strong> 150 г | <strong>Жиры:</strong> 25 г</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className={styles["dish-card"]} data-card="10" data-tag="appetizers">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/карпачо.jpg" alt="Карпаччо из морского окуня"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>Карпаччо из морского окуня</h3>
                    <div className={styles["dish-price"]}>1 800 ₽</div>
                </div>
                <div className={styles["dish-tag appetizers"]}>Закуски</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>Карпаччо из морского окуня</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Тончайшие ломтики морского окуня с цитрусовой заправкой и зеленью.</p>
                        <p><strong>Калории:</strong> 160 ккал | <strong>Вес:</strong> 130 г | <strong>Жиры:</strong> 9 г</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className={styles["dish-card"]} data-card="11" data-tag="appetizers">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/тунец и авокадо.jpg" alt="Тар-тар из тунца"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>Тар-тар из тунца с авокадо</h3>
                    <div className={styles["dish-price"]}>2 100 ₽</div>
                </div>
                <div className={styles["dish-tag appetizers"]}>Закуски</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>Тар-тар из тунца с авокадо</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Свежий тунец с авокадо, васаби и соевым соусом.</p>
                        <p><strong>Калории:</strong> 210 ккал | <strong>Вес:</strong> 180 г | <strong>Жиры:</strong> 14 г</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className={styles["dish-card"]} data-card="12" data-tag="appetizers">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/бри.webp" alt="Бри"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>Бри в панели с медовой полянкой</h3>
                    <div className={styles["dish-price"]}>1 500 ₽</div>
                </div>
                <div className={styles["dish-tag appetizers"]}>Закуски</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>Бри в панели с медовой полянкой</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Запеченный сыр Бри в слоеном тесте с медом и орехами.</p>
                        <p><strong>Калории:</strong> 320 ккал | <strong>Вес:</strong> 160 г | <strong>Жиры:</strong> 22 г</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

{/* Вина (3 шт) */}
<div className={styles["dish-card"]} data-card="13" data-tag="wines">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/вино3.webp" alt="Champagne Ruinart"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>Champagne Ruinart Blanc</h3>
                    <div className={styles["dish-price"]}>12 500 ₽</div>
                </div>
                <div className={styles["dish-tag wines"]}>Вино</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>Champagne Ruinart Blanc</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Элегантное шампанское с нотами цитруса и бисквита. Идеально для аперитива.</p>
                        <p><strong>Крепость:</strong> 12% | <strong>Объем:</strong> 750 мл</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className={styles["dish-card"]} data-card="14" data-tag="wines">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/вино2.jpg" alt="Chablis"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>Chablis Domaine Laroche</h3>
                    <div className={styles["dish-price"]}>8 900 ₽</div>
                </div>
                <div className={styles["dish-tag wines"]}>Вино</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>Chablis Domaine Laroche</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Хрустящее белое бургундское вино с минеральными нотами. К морепродуктам.</p>
                        <p><strong>Крепость:</strong> 13% | <strong>Объем:</strong> 750 мл</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className={styles["dish-card"]} data-card="15" data-tag="wines">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/вино1.webp" alt="Bordeaux"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>Bordeaux Chateau Beauregard</h3>
                    <div className={styles["dish-price"]}>14 200 ₽</div>
                </div>
                <div className={styles["dish-tag wines"]}>Вино</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>Bordeaux Chateau Beauregard</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Классическое бордо с нотами черной смородины и специй. К красному мясу.</p>
                        <p><strong>Крепость:</strong> 13.5% | <strong>Объем:</strong> 750 мл</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

{/* Десерты (6 шт) */}
<div className={styles["dish-card"]} data-card="16" data-tag="desserts">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/крем-брюле.webp" alt="Крем-брюле"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>Крем-брюле с ванилью из мадагаскара</h3>
                    <div className={styles["dish-price"]}>850 ₽</div>
                </div>
                <div className={styles["dish-tag desserts"]}>Десерты</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>Крем-брюле с ванилью из мадагаскара</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Классический французский десерт с натуральной ванилью и хрустящей карамелью.</p>
                        <p><strong>Калории:</strong> 320 ккал | <strong>Вес:</strong> 150 г</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className={styles["dish-card"]} data-card="17" data-tag="desserts">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/ганаш шоколадный.jpg" alt="Шоколадный ганаш"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>Шоколадный ганаш с морской солью</h3>
                    <div className={styles["dish-price"]}>950 ₽</div>
                </div>
                <div className={styles["dish-tag desserts"]}>Десерты</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>Шоколадный ганаш с морской солью</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Нежный шоколадный мусс с французской морской солью и карамелью.</p>
                        <p><strong>Калории:</strong> 380 ккал | <strong>Вес:</strong> 120 г</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className={styles["dish-card"]} data-card="18" data-tag="desserts">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/тарт тан.jpg" alt="Тарт татен"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>Тарт татен с ванильным мороженым</h3>
                    <div className={styles["dish-price"]}>920 ₽</div>
                </div>
                <div className={styles["dish-tag desserts"]}>Десерты</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>Тарт татен с ванильным мороженым</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Классический перевернутый яблочный пирог с шариком ванильного мороженого.</p>
                        <p><strong>Калории:</strong> 350 ккал | <strong>Вес:</strong> 180 г</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className={styles["dish-card"]} data-card="19" data-tag="desserts">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/панна кота.jpg" alt="Панна-кота"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>Панна-кота с манго и базиликом</h3>
                    <div className={styles["dish-price"]}>780 ₽</div>
                </div>
                <div className={styles["dish-tag desserts"]}>Десерты</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>Панна-кота с манго и базиликом</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Итальянский сливочный десерт с соусом из манго и свежим базиликом.</p>
                        <p><strong>Калории:</strong> 290 ккал | <strong>Вес:</strong> 160 г</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className={styles["dish-card"]} data-card="20" data-tag="desserts">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/дискусс.jpg" alt="Сырная тарелка"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>Дегустационная тарелка французских сыров</h3>
                    <div className={styles["dish-price"]}>1 800 ₽</div>
                </div>
                <div className={styles["dish-tag desserts"]}>Десерты</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>Дегустационная тарелка французских сыров</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Ассорти из 5 французских сыров с орехами, медом и крекерами.</p>
                        <p><strong>Вес:</strong> 250 г | <strong>5 видов сыров</strong></p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className={styles["dish-card"]} data-card="21" data-tag="desserts">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/сорбет.webp" alt="Сорбет"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>Сорбет из маракуйи и лайма</h3>
                    <div className={styles["dish-price"]}>650 ₽</div>
                </div>
                <div className={styles["dish-tag desserts"]}>Десерты</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>Сорбет из маракуйи и лайма</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Освежающий сорбет из тропических фруктов с цитрусовыми нотами.</p>
                        <p><strong>Калории:</strong> 180 ккал | <strong>Вес:</strong> 120 г</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

{/* Напитки (6 шт) */}
<div className={styles["dish-card"]} data-card="22" data-tag="drinks">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/окенаский напиток.webp" alt="Ocean Spray"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>OCEAN SPRAY</h3>
                    <div className={styles["dish-price"]}>450 ₽</div>
                </div>
                <div className={styles["dish-tag drinks"]}>Напитки</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>OCEAN SPRAY</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Освежающий коктейль из тропических соков с мятой и лаймом.</p>
                        <p><strong>Объем:</strong> 300 мл</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className={styles["dish-card"]} data-card="23" data-tag="drinks">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/огуречный.jpg" alt="Cucumber Mint"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>CUCUMBER MINT LEMINADE</h3>
                    <div className={styles["dish-price"]}>420 ₽</div>
                </div>
                <div className={styles["dish-tag drinks"]}>Напитки</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>CUCUMBER MINT LEMINADE</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Лимонад с огурцом и мятой - идеальное освежение.</p>
                        <p><strong>Объем:</strong> 350 мл</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className={styles["dish-card"]} data-card="24" data-tag="drinks">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/пелигрино.avif" alt="Пелигрино"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>ПЕЛЛИГРИНО/ПЕРЬЕ</h3>
                    <div className={styles["dish-price"]}>350 ₽</div>
                </div>
                <div className={styles["dish-tag drinks"]}>Напитки</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>ПЕЛЛИГРИНО/ПЕРЬЕ</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Итальянская или французская минеральная вода с газом/без газа.</p>
                        <p><strong>Объем:</strong> 750 мл</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className={styles["dish-card"]} data-card="25" data-tag="drinks">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/капучино.jpg" alt="Кофе"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>КАПУЧИНО/ЛАТТЕ</h3>
                    <div className={styles["dish-price"]}>380 ₽</div>
                </div>
                <div className={styles["dish-tag drinks"]}>Напитки</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>КАПУЧИНО/ЛАТТЕ</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Кофе на основе эспрессо с молочной пенкой. Подается с печеньем.</p>
                        <p><strong>Объем:</strong> 200 мл</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className={styles["dish-card"]} data-card="26" data-tag="drinks">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/апельсиновый фреш.jpg" alt="Апельсиновый фреш"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>АПЕЛЬСИНОВЫЙ ФРЕШ</h3>
                    <div className={styles["dish-price"]}>320 ₽</div>
                </div>
                <div className={styles["dish-tag drinks"]}>Напитки</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>АПЕЛЬСИНОВЫЙ ФРЕШ</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Свежевыжатый сок из испанских апельсинов. Подается охлажденным.</p>
                        <p><strong>Объем:</strong> 250 мл</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div className={styles["dish-card"]} data-card="27" data-tag="drinks">
    <div className={styles["dish-card-inner"]}>
        <div className={styles["dish-card-front"]}>
            <div className={styles["corner-line"]}></div>
            <div className={styles["dish-image"]}>
                <img src="/images/джинджер.jpg" alt="Ginger Sparkle"/>
                <div className={styles["dish-overlay"]}>
                    <span className={styles["view-button"]}>Посмотреть детали</span>
                </div>
            </div>
            <div className={styles["dish-info"]}>
                <div className={styles["dish-header"]}>
                    <h3 className={styles["dish-title"]}>GINGER SPARKLE</h3>
                    <div className={styles["dish-price"]}>480 ₽</div>
                </div>
                <div className={styles["dish-tag drinks"]}>Напитки</div>
            </div>
        </div>
        <div className={styles["dish-card-back"]}>
            <div className={styles["back-content-scroll"]}>
                <div className={styles["back-description"]}>
                    <h4>GINGER SPARKLE</h4>
                    <div className={styles["expanded-description"]}>
                        <p>Имбирный лимонад с газированной водой и свежей мятой.</p>
                        <p><strong>Объем:</strong> 330 мл</p>
                    </div>
                </div>
                <div className={styles["back-hint-container"]}>
                    <span className={styles["back-hint"]}>Кликните для возврата</span>
                </div>
            </div>
        </div>
    </div>
</div>
            
        </div>
    </main>
  );
}