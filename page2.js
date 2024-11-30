let lang = document.querySelector('.language');
lang.addEventListener('click', function() {
    let isRussian = document.querySelector('.head2').innerHTML === 'Кабинет';
    const translations = {
        head2: isRussian ? 'Cabinet' : 'Кабинет',
        describe1: isRussian ? 
            'Description: A course for beginner traders covering the basics of working in financial markets, technical and fundamental analysis, trading strategies, risk management, and trading psychology. The program includes practical assignments and training on a demo account.' 
            : 
            'Курс для начинающих трейдеров, охватывающий основы работы на финансовых рынках, технический и фундаментальный анализ, торговые стратегии, управление рисками и психологию торговли. Программа включает практические задания и обучение торговле на демо-счете.',
        describe2: isRussian ? 
            'Training Schedule: 1st week: Introduction to trading 2nd week: Technical analysis (charts, indicators) 3rd week: Fundamental analysis (news, reports) 4th week: Trading strategies 5th week: Psychology and risk management 6th week: Practice on a demo account.' 
            : 
            'График обучения: 1 неделя: Введение в трейдинг 2 неделя: Технический анализ (графики, индикаторы) 3 неделя: Фундаментальный анализ (новости, отчеты) 4 неделя: Торговые стратегии 5 неделя: Психология и управление рисками 6 неделя: Практика на демо-счете.',
        describe3: isRussian ? 
            'Format: 2 classes per week (1.5-2 hours), practical assignments, support chat. Duration: 6 weeks.' 
            : 
            'Формат: 2 занятия в неделю (1,5-2 часа), практические задания, чат поддержки. Продолжительность: 6 недель.',
        footerContacts: isRussian ? 'Contacts' : 'Контакты',
        footerEmail: 'Email: <a href="mailto:info@tradingcourse.com">info@tradingcourse.com</a>',
        footerPhone: isRussian ? 'Phone: +1 234 567 890' : 'Телефон: +1 234 567 890',
        footerQuickLinks: isRussian ? 'Quick Links' : 'Быстрые ссылки',
        footerLinks: isRussian ? ['About Us', 'Courses', 'Support', 'Privacy Policy'] : ['О нас', 'Курсы', 'Поддержка', 'Политика конфиденциальности'],
        footerRights: isRussian ? '© 2023 Crypto Star. All rights reserved.' : '© 2023 Crypto Star. Все права защищены.',
        footerTerms: isRussian ? 'Terms of Use' : 'Условия использования',
    };
    document.querySelector('.head2').innerHTML = translations.head2;
    document.querySelector('.describe1').innerHTML = translations.describe1;
    document.querySelector('.describe2').innerHTML = translations.describe2;
    document.querySelector('.describe3').innerHTML = translations.describe3;

    const footerSections = document.querySelectorAll('.footer-section');
    footerSections[0].querySelector('h4').innerHTML = translations.footerContacts;
    footerSections[0].querySelector('p:nth-of-type(1)').innerHTML = translations.footerEmail;
    footerSections[0].querySelector('p:nth-of-type(2)').innerHTML = translations.footerPhone;
    footerSections[1].querySelector('h4').innerHTML = translations.footerQuickLinks;

    const quickLinks = footerSections[1].querySelectorAll('ul li a');
    quickLinks.forEach((link, i) => link.innerHTML = translations.footerLinks[i]);

    footerSections[2].querySelector('p').innerHTML = translations.footerRights;
    footerSections[2].querySelector('p:nth-of-type(2)').innerHTML = translations.footerTerms;
});