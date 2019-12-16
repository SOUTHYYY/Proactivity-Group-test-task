import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer_item}>
        Журнал
        <div className={styles.Footer_item__info}>Статьи</div>
        <div className={styles.Footer_item__info}>Блоги</div>
      </div>
      <div className={styles.Footer_item}>
        Агенства
        <div className={styles.Footer_item__info}>Веб-студии</div>
        <div className={styles.Footer_item__info}>SEO-компании</div>
      </div>
      <div className={styles.Footer_item}>
        Инструменты
        <div className={styles.Footer_item__info}>CMS</div>
        <div className={styles.Footer_item__info}>CRM-системы</div>
      </div>
      <div className={styles.Footer_item}>
        Информация
        <div className={styles.Footer_item__info}>О проекте</div>
        <div className={styles.Footer_item__info}>Рекламные форматы</div>
      </div>
      <div className={styles.Footer_item}>
        Мы на связи
        <div className={styles.Footer_item__contacts}>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div className={styles.Footer_item}>
        Рассылка
        <div className={styles.Footer_item__info}>О проекте</div>
        <div className={styles.Footer_item__info}>Рекламные форматы</div>
      </div>
    </div>
  );
};

export default Footer;
