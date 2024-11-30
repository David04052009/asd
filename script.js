let lang = document.querySelector('.language');
lang.addEventListener('click', function() {
    let isRussian = document.querySelector('.head2').innerHTML === 'Кабинет';
    
    const translations = {
        head2: isRussian ? 'Cabinet' : 'Кабинет',
        tradeButton: isRussian ? 'Start trading now' : 'Начните торговать уже сейчас',
        lessonButton: isRussian ? 'Try a free lesson' : 'Попробуйте бесплатный урок',
        join: isRussian ? 'Join over 26 million people worldwide who have chosen us' : 'Присоединяйтесь к более чем 26 миллионам людей по всему миру, которые выбрали нас',
        describe: isRussian ? 
            'The "Trading Essentials: Path to Financial Independence" course is designed for beginners who want to master the art of trading on financial markets. Within the program, participants will learn key concepts, strategies, and trading tools. They will gain skills in analyzing charts, managing risks, and making informed decisions. Practical exercises will help reinforce theoretical knowledge, and experienced mentors will provide valuable insights for a successful start. As a result, you will be able to confidently begin your journey in the world of trading and develop skills to achieve your financial goals.' 
            : 
            'Курс «Основы трейдинга: Путь к финансовой независимости" предназначен для начинающих, желающих освоить искусство торговли на финансовых рынках. В рамках программы участники изучат ключевые понятия, стратегии и инструменты трейдинга. Научатся анализировать графики, управлять рисками и принимать обоснованные решения. Практические занятия помогут закрепить теоретические знания, а опытные наставники поделятся ценными советами для успешного старта. В результате, вы сможете уверенно начать свой путь в мире трейдинга и развивать навыки для достижения финансовых целей.',
        menu: isRussian ? ['Study', 'Journal', 'News'] : ['Обучение', 'Журнал', 'Новости'],
        stats: isRussian ? ['2800 instruments', '50+ countries', '26+ million people', '300+ million positions'] : ['2800 инструментов', '50+ стран', '26+ миллионов человек', '300+ миллионов позиций'],
        footer: isRussian ? ['Contacts', 'Email: info@tradingcourse.com', 'Phone: +1 234 567 890', 'Quick Links'] : ['Контакты', 'Email: info@tradingcourse.com', 'Телефон: +1 234 567 890', 'Быстрые ссылки'],
        quickLinks: isRussian ? ['About Us', 'Courses', 'Support', 'Privacy Policy'] : ['О нас', 'Курсы', 'Поддержка', 'Политика конфиденциальности']
    };

    document.querySelector('.head2').innerHTML = translations.head2;
    document.querySelector('.trade-button').innerHTML = translations.tradeButton;
    document.querySelector('.lesson-button').innerHTML = translations.lessonButton;
    document.querySelector('.join').innerHTML = translations.join;
    document.querySelector('.describe').innerHTML = translations.describe;

    document.querySelectorAll('.menu-button').forEach((btn, i) => btn.innerHTML = translations.menu[i]);
    document.querySelectorAll('.stat-box').forEach((box, i) => box.innerHTML = translations.stats[i]);

    const footerSections = document.querySelectorAll('.footer-section');
    footerSections[0].querySelector('h4').innerHTML = translations.footer[0];
    footerSections[0].querySelectorAll('p')[0].innerHTML = translations.footer[1];
    footerSections[0].querySelectorAll('p')[1].innerHTML = translations.footer[2];
    footerSections[1].querySelector('h4').innerHTML = translations.footer[3];

    const quickLinks = footerSections[1].querySelectorAll('ul li a');
    quickLinks.forEach((link, i) => link.innerHTML = translations.quickLinks[i]);

    footerSections[2].querySelector('p').innerHTML = isRussian ? '© 2023 Crypto Star. All rights reserved.' : '© 2023 Crypto Star. Все права защищены.';
    footerSections[2].querySelector('p:nth-of-type(2)').innerHTML = isRussian ? 'Terms of Use' : 'Условия использования';
});