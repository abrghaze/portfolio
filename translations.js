// ===== Portfolio Translations =====
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_certifications: "Certifications",
        nav_contact: "Contact",
        nav_cta: "Let's Talk",
        
        // Hero Section
        hero_badge: "Available for opportunities",
        hero_greeting: "Hello, I'm",
        hero_build: "I build",
        hero_description: `5th-year Engineering Student at ENSAO specializing in <strong>AI</strong>, 
            <strong>Data Science</strong>, and <strong>Business Intelligence</strong>. 
            Passionate about transforming data into actionable insights and building 
            intelligent systems that solve real-world problems.`,
        hero_projects: "Projects",
        hero_certifications: "Certifications",
        hero_internships: "Internships",
        hero_view_work: "View My Work",
        hero_get_in_touch: "Get In Touch",
        
        // Typed words
        typed_words: ["AI Solutions", "ML Pipelines", "Data Insights", "Web Applications", "Smart Systems"],
        
        // About Section
        about_tag: "About Me",
        about_title: "Passionate about turning data into impact",
        about_years: "Years Learning",
        about_intro: `I'm a 5th-year engineering student at <strong>ENSAO</strong> (École Nationale des Sciences Appliquées d'Oujda), 
            pursuing a degree in <strong>Management and Governance of Information Systems</strong>.`,
        about_p1: `My journey combines a strategic vision of information systems with a deep passion for 
            <strong>Artificial Intelligence</strong> and <strong>Data Science</strong>. I specialize in developing 
            intelligent solutions that bridge the gap between complex data and actionable business insights.`,
        about_p2: `From building predictive models with deep learning to designing interactive BI dashboards, 
            I thrive on solving complex problems and continuously learning new technologies. My goal is to 
            add real value through rigor, innovation, and a commitment to excellence.`,
        about_location: "Al Quds, Oujda, Morocco",
        about_languages: "Arabic (Native), French (Advanced), English (Professional)",
        about_download_cv: "Download CV",
        
        // Skills Section
        skills_tag: "Skills & Expertise",
        skills_title: "Technologies I work with",
        skills_ds: "Data Science & AI",
        skills_bi: "BI & Big Data",
        skills_web: "Web Development",
        skills_erp: "ERP & CRM",
        
        // Experience Section
        exp_tag: "Experience",
        exp_title: "Professional Journey",
        exp_current: "Current",
        exp_te_title: "Data Engineer & Data Scientist Intern",
        exp_te_company: "TE Connectivity",
        exp_te_project: "PFA: Development of an Intelligent Competency Analysis System",
        exp_te_task1: "Implemented automated ETL pipelines for HR data collection and cleaning using Python, Pandas, and Airflow",
        exp_te_task2: "Designed and built a Data Warehouse with PostgreSQL for centralized data storage",
        exp_te_task3: "Developed profile recommendation algorithms using Scikit-learn for intelligent competency matching",
        exp_adn_title: "Data Analyst & BI Intern",
        exp_adn_company: "Agence de Développement du Nord",
        exp_adn_project: "Design of institutional project monitoring dashboards",
        exp_adn_task1: "Led data migration and structured the data warehouse using Talend and Python",
        exp_adn_task2: "Developed interactive KPI dashboards and decision-support reports with Power BI and DAX",
        exp_adn_task3: "Optimized SQL queries to significantly improve dashboard display performance",
        exp_ensao_title: "Engineering Degree",
        exp_ensao_company: "ENSAO - École Nationale des Sciences Appliquées d'Oujda",
        exp_ensao_project: "Management and Governance of Information Systems",
        exp_ensao_desc: "Integrated preparatory cycle followed by the engineering cycle. Specialization in Information Systems Management with focus on AI, Data Science, and ERP/CRM systems.",
        exp_bac_title: "Baccalauréat in Physical Sciences",
        exp_bac_company: "Lycée Ali Ben Berry - Taza",
        exp_bac_project: "Mention: Très Bien (Highest Honors)",
        
        // Projects Section
        proj_tag: "Portfolio",
        proj_title: "Featured Projects",
        proj_description: "A collection of my work spanning AI, Machine Learning, and Full-Stack Development",
        proj_filter_all: "All",
        proj_filter_ai: "AI/ML",
        proj_filter_web: "Full-Stack",
        proj_filter_data: "Data Science",
        proj_filter_crm: "CRM/ERP",
        proj_view_github: "View All on GitHub",
        
        // Project Cards
        proj1_title: "Smart Supply Chain",
        proj1_desc: "AI-Powered Sales Forecasting & Stock Optimization for Odoo. Complete solution with LSTM & Prophet models achieving 87% accuracy on 90-day predictions, with an interactive Plotly Dash dashboard and REST API handling 50k+ transactions.",
        proj_conge_title: "Gestion de Congé",
        proj_conge_desc: "A comprehensive Leave Management Application built on Salesforce CRM platform. Streamlines employee leave requests, approvals, and tracking with automated workflows, custom objects, and intuitive dashboards for HR management.",
        proj2_title: "Car Damage Detection AI",
        proj2_desc: "End-to-end deep learning solution for automated vehicle damage assessment using YOLOv8 instance segmentation. Achieves 72% mAP50 with multi-class classification for dents, scratches, cracks, and broken glass.",
        proj3_title: "Smart Skill Matrix",
        proj3_desc: "Comprehensive skill management and objective tracking system with multi-role authentication, real-time notifications, email microservice, and interactive analytics dashboard for organizational performance monitoring.",
        proj4_title: "Noqta - School Management",
        proj4_desc: "Complete school management system with 4 user roles (Director, Teacher, Student, Parent), grade management, attendance tracking, and real-time notification system for academic performance monitoring.",
        proj5_title: "House Price Predictor",
        proj5_desc: "End-to-end Machine Learning pipeline with ZenML for price prediction. Features automated data preparation, model training, experiment tracking with MLflow, and API deployment for direct utilization.",
        proj6_title: "Movie Recommendation Engine",
        proj6_desc: "Collaborative filtering recommendation system using SVD algorithm on the MovieLens 1M dataset. Features hyperparameter optimization with the Surprise library and comparative model evaluation.",
        
        // Certifications Section
        cert_tag: "Credentials",
        cert_title: "Certifications & Achievements",
        cert_professional: "Professional Certificate",
        cert_certified: "Certified Professional",
        
        // Contact Section
        contact_tag: "Get In Touch",
        contact_title: "Let's Work Together",
        contact_description: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
        contact_email: "Email",
        contact_phone: "Phone",
        contact_location: "Location",
        contact_your_name: "Your Name",
        contact_your_email: "Your Email",
        contact_subject: "Subject",
        contact_message: "Message",
        contact_placeholder_name: "John Doe",
        contact_placeholder_email: "john@example.com",
        contact_placeholder_subject: "How can I help you?",
        contact_placeholder_message: "Your message...",
        contact_send: "Send Message",
        
        // Footer
        footer_desc: "Data Scientist & AI Engineer passionate about building intelligent solutions.",
        footer_links: "Quick Links",
        footer_connect: "Connect",
        footer_rights: "All rights reserved.",
        footer_built: "Built with",
        footer_and: "and lots of",
        
        // Scroll
        scroll: "Scroll"
    },
    
    fr: {
        // Navigation
        nav_home: "Accueil",
        nav_about: "À Propos",
        nav_skills: "Compétences",
        nav_experience: "Expérience",
        nav_projects: "Projets",
        nav_certifications: "Certifications",
        nav_contact: "Contact",
        nav_cta: "Discutons",
        
        // Hero Section
        hero_badge: "Disponible pour des opportunités",
        hero_greeting: "Bonjour, je suis",
        hero_build: "Je crée",
        hero_description: `Étudiant ingénieur en 5ème année à l'ENSAO spécialisé en <strong>IA</strong>, 
            <strong>Data Science</strong> et <strong>Business Intelligence</strong>. 
            Passionné par la transformation des données en insights actionnables et la construction 
            de systèmes intelligents qui résolvent des problèmes réels.`,
        hero_projects: "Projets",
        hero_certifications: "Certifications",
        hero_internships: "Stages",
        hero_view_work: "Voir Mes Projets",
        hero_get_in_touch: "Me Contacter",
        
        // Typed words
        typed_words: ["Solutions IA", "Pipelines ML", "Analyses de Données", "Applications Web", "Systèmes Intelligents"],
        
        // About Section
        about_tag: "À Propos",
        about_title: "Passionné par la transformation des données en impact",
        about_years: "Années d'Apprentissage",
        about_intro: `Je suis étudiant ingénieur en 5ème année à l'<strong>ENSAO</strong> (École Nationale des Sciences Appliquées d'Oujda), 
            en <strong>Management et Gouvernance des Systèmes d'Information</strong>.`,
        about_p1: `Mon parcours combine une vision stratégique des systèmes d'information avec une passion profonde pour 
            l'<strong>Intelligence Artificielle</strong> et la <strong>Data Science</strong>. Je me spécialise dans le développement 
            de solutions intelligentes qui comblent le fossé entre les données complexes et les insights business actionnables.`,
        about_p2: `De la construction de modèles prédictifs avec le deep learning à la conception de tableaux de bord BI interactifs, 
            je m'épanouis dans la résolution de problèmes complexes et l'apprentissage continu de nouvelles technologies. Mon objectif est 
            d'apporter une valeur réelle grâce à la rigueur, l'innovation et l'engagement envers l'excellence.`,
        about_location: "Al Quds, Oujda, Maroc",
        about_languages: "Arabe (Natif), Français (Avancé), Anglais (Professionnel)",
        about_download_cv: "Télécharger CV",
        
        // Skills Section
        skills_tag: "Compétences & Expertise",
        skills_title: "Technologies avec lesquelles je travaille",
        skills_ds: "Data Science & IA",
        skills_bi: "BI & Big Data",
        skills_web: "Développement Web",
        skills_erp: "ERP & CRM",
        
        // Experience Section
        exp_tag: "Expérience",
        exp_title: "Parcours Professionnel",
        exp_current: "Actuel",
        exp_te_title: "Stagiaire Data Engineer & Data Scientist",
        exp_te_company: "TE Connectivity",
        exp_te_project: "PFA : Développement d'un Système d'Analyse Intelligente des Compétences",
        exp_te_task1: "Mise en place de pipelines ETL automatisés pour la collecte et le nettoyage des données RH avec Python, Pandas et Airflow",
        exp_te_task2: "Conception et construction d'un Data Warehouse avec PostgreSQL pour le stockage centralisé des données",
        exp_te_task3: "Développement d'algorithmes de recommandation de profils avec Scikit-learn pour le matching intelligent des compétences",
        exp_adn_title: "Stagiaire Data Analyst & BI",
        exp_adn_company: "Agence de Développement du Nord",
        exp_adn_project: "Conception de tableaux de bord pour le suivi des projets institutionnels",
        exp_adn_task1: "Direction de la migration des données et structuration de l'entrepôt de données avec Talend et Python",
        exp_adn_task2: "Développement de tableaux de bord KPI interactifs et rapports d'aide à la décision avec Power BI et DAX",
        exp_adn_task3: "Optimisation des requêtes SQL pour améliorer significativement les performances d'affichage",
        exp_ensao_title: "Diplôme d'Ingénieur",
        exp_ensao_company: "ENSAO - École Nationale des Sciences Appliquées d'Oujda",
        exp_ensao_project: "Management et Gouvernance des Systèmes d'Information",
        exp_ensao_desc: "Cycle préparatoire intégré suivi du cycle ingénieur. Spécialisation en Management des Systèmes d'Information avec focus sur l'IA, la Data Science et les systèmes ERP/CRM.",
        exp_bac_title: "Baccalauréat en Sciences Physiques",
        exp_bac_company: "Lycée Ali Ben Berry - Taza",
        exp_bac_project: "Mention : Très Bien",
        
        // Projects Section
        proj_tag: "Portfolio",
        proj_title: "Projets Phares",
        proj_description: "Une collection de mes travaux en IA, Machine Learning et Développement Full-Stack",
        proj_filter_all: "Tous",
        proj_filter_ai: "IA/ML",
        proj_filter_web: "Full-Stack",
        proj_filter_data: "Data Science",
        proj_filter_crm: "CRM/ERP",
        proj_view_github: "Voir Tout sur GitHub",
        
        // Project Cards
        proj1_title: "Smart Supply Chain",
        proj1_desc: "Prévision des Ventes et Optimisation des Stocks avec IA pour Odoo. Solution complète avec modèles LSTM & Prophet atteignant 87% de précision sur 90 jours, tableau de bord Plotly Dash interactif et API REST gérant +50k transactions.",
        proj_conge_title: "Gestion de Congé",
        proj_conge_desc: "Application complète de Gestion des Congés construite sur la plateforme CRM Salesforce. Simplifie les demandes de congés, approbations et suivi avec des workflows automatisés, objets personnalisés et tableaux de bord intuitifs pour la gestion RH.",
        proj2_title: "Détection de Dommages Auto",
        proj2_desc: "Solution deep learning end-to-end pour l'évaluation automatisée des dommages véhicules avec segmentation YOLOv8. Atteint 72% mAP50 avec classification multi-classes pour bosses, rayures, fissures et bris de verre.",
        proj3_title: "Smart Skill Matrix",
        proj3_desc: "Système complet de gestion des compétences et suivi des objectifs avec authentification multi-rôles, notifications temps réel, microservice email et tableau de bord analytique interactif.",
        proj4_title: "Noqta - Gestion Scolaire",
        proj4_desc: "Système complet de gestion scolaire avec 4 rôles utilisateurs (Directeur, Enseignant, Étudiant, Parent), gestion des notes, suivi des absences et système de notifications temps réel.",
        proj5_title: "Prédicteur de Prix Immobilier",
        proj5_desc: "Pipeline Machine Learning end-to-end avec ZenML pour la prédiction de prix. Préparation automatisée des données, entraînement, tracking avec MLflow et déploiement API.",
        proj6_title: "Moteur de Recommandation Films",
        proj6_desc: "Système de recommandation par filtrage collaboratif utilisant l'algorithme SVD sur le dataset MovieLens 1M. Optimisation des hyperparamètres avec Surprise et évaluation comparative.",
        
        // Certifications Section
        cert_tag: "Accréditations",
        cert_title: "Certifications & Réalisations",
        cert_professional: "Certificat Professionnel",
        cert_certified: "Professionnel Certifié",
        
        // Contact Section
        contact_tag: "Me Contacter",
        contact_title: "Travaillons Ensemble",
        contact_description: "Je suis actuellement à la recherche de nouvelles opportunités. Que vous ayez une question ou simplement envie de dire bonjour, je ferai de mon mieux pour vous répondre !",
        contact_email: "Email",
        contact_phone: "Téléphone",
        contact_location: "Localisation",
        contact_your_name: "Votre Nom",
        contact_your_email: "Votre Email",
        contact_subject: "Sujet",
        contact_message: "Message",
        contact_placeholder_name: "Jean Dupont",
        contact_placeholder_email: "jean@exemple.com",
        contact_placeholder_subject: "Comment puis-je vous aider ?",
        contact_placeholder_message: "Votre message...",
        contact_send: "Envoyer le Message",
        
        // Footer
        footer_desc: "Data Scientist & Ingénieur IA passionné par la construction de solutions intelligentes.",
        footer_links: "Liens Rapides",
        footer_connect: "Connexion",
        footer_rights: "Tous droits réservés.",
        footer_built: "Construit avec",
        footer_and: "et beaucoup de",
        
        // Scroll
        scroll: "Défiler"
    },
    
    es: {
        // Navigation
        nav_home: "Inicio",
        nav_about: "Sobre Mí",
        nav_skills: "Habilidades",
        nav_experience: "Experiencia",
        nav_projects: "Proyectos",
        nav_certifications: "Certificaciones",
        nav_contact: "Contacto",
        nav_cta: "Hablemos",
        
        // Hero Section
        hero_badge: "Disponible para oportunidades",
        hero_greeting: "Hola, soy",
        hero_build: "Construyo",
        hero_description: `Estudiante de Ingeniería de 5º año en ENSAO especializado en <strong>IA</strong>, 
            <strong>Ciencia de Datos</strong> e <strong>Inteligencia de Negocios</strong>. 
            Apasionado por transformar datos en insights accionables y construir 
            sistemas inteligentes que resuelven problemas reales.`,
        hero_projects: "Proyectos",
        hero_certifications: "Certificaciones",
        hero_internships: "Prácticas",
        hero_view_work: "Ver Mi Trabajo",
        hero_get_in_touch: "Contáctame",
        
        // Typed words
        typed_words: ["Soluciones IA", "Pipelines ML", "Análisis de Datos", "Aplicaciones Web", "Sistemas Inteligentes"],
        
        // About Section
        about_tag: "Sobre Mí",
        about_title: "Apasionado por convertir datos en impacto",
        about_years: "Años Aprendiendo",
        about_intro: `Soy estudiante de ingeniería de 5º año en <strong>ENSAO</strong> (Escuela Nacional de Ciencias Aplicadas de Oujda), 
            cursando <strong>Gestión y Gobernanza de Sistemas de Información</strong>.`,
        about_p1: `Mi trayectoria combina una visión estratégica de los sistemas de información con una profunda pasión por 
            la <strong>Inteligencia Artificial</strong> y la <strong>Ciencia de Datos</strong>. Me especializo en desarrollar 
            soluciones inteligentes que cierran la brecha entre datos complejos e insights de negocio accionables.`,
        about_p2: `Desde construir modelos predictivos con deep learning hasta diseñar dashboards BI interactivos, 
            me apasiona resolver problemas complejos y aprender continuamente nuevas tecnologías. Mi objetivo es 
            aportar valor real a través del rigor, la innovación y el compromiso con la excelencia.`,
        about_location: "Al Quds, Oujda, Marruecos",
        about_languages: "Árabe (Nativo), Francés (Avanzado), Inglés (Profesional)",
        about_download_cv: "Descargar CV",
        
        // Skills Section
        skills_tag: "Habilidades & Expertise",
        skills_title: "Tecnologías con las que trabajo",
        skills_ds: "Ciencia de Datos & IA",
        skills_bi: "BI & Big Data",
        skills_web: "Desarrollo Web",
        skills_erp: "ERP & CRM",
        
        // Experience Section
        exp_tag: "Experiencia",
        exp_title: "Trayectoria Profesional",
        exp_current: "Actual",
        exp_te_title: "Becario Data Engineer & Data Scientist",
        exp_te_company: "TE Connectivity",
        exp_te_project: "PFA: Desarrollo de un Sistema Inteligente de Análisis de Competencias",
        exp_te_task1: "Implementación de pipelines ETL automatizados para recolección y limpieza de datos RRHH con Python, Pandas y Airflow",
        exp_te_task2: "Diseño y construcción de un Data Warehouse con PostgreSQL para almacenamiento centralizado de datos",
        exp_te_task3: "Desarrollo de algoritmos de recomendación de perfiles con Scikit-learn para matching inteligente de competencias",
        exp_adn_title: "Becario Data Analyst & BI",
        exp_adn_company: "Agencia de Desarrollo del Norte",
        exp_adn_project: "Diseño de dashboards para seguimiento de proyectos institucionales",
        exp_adn_task1: "Liderazgo de migración de datos y estructuración del data warehouse con Talend y Python",
        exp_adn_task2: "Desarrollo de dashboards KPI interactivos e informes de apoyo a decisiones con Power BI y DAX",
        exp_adn_task3: "Optimización de consultas SQL para mejorar significativamente el rendimiento de visualización",
        exp_ensao_title: "Título de Ingeniería",
        exp_ensao_company: "ENSAO - Escuela Nacional de Ciencias Aplicadas de Oujda",
        exp_ensao_project: "Gestión y Gobernanza de Sistemas de Información",
        exp_ensao_desc: "Ciclo preparatorio integrado seguido del ciclo de ingeniería. Especialización en Gestión de Sistemas de Información con enfoque en IA, Ciencia de Datos y sistemas ERP/CRM.",
        exp_bac_title: "Bachillerato en Ciencias Físicas",
        exp_bac_company: "Liceo Ali Ben Berry - Taza",
        exp_bac_project: "Mención: Muy Bien (Máximos Honores)",
        
        // Projects Section
        proj_tag: "Portfolio",
        proj_title: "Proyectos Destacados",
        proj_description: "Una colección de mi trabajo en IA, Machine Learning y Desarrollo Full-Stack",
        proj_filter_all: "Todos",
        proj_filter_ai: "IA/ML",
        proj_filter_web: "Full-Stack",
        proj_filter_data: "Ciencia de Datos",
        proj_filter_crm: "CRM/ERP",
        proj_view_github: "Ver Todo en GitHub",
        
        // Project Cards
        proj1_title: "Smart Supply Chain",
        proj1_desc: "Pronóstico de Ventas y Optimización de Stock con IA para Odoo. Solución completa con modelos LSTM y Prophet alcanzando 87% de precisión a 90 días, dashboard Plotly Dash interactivo y API REST manejando +50k transacciones.",
        proj_conge_title: "Gestión de Permisos",
        proj_conge_desc: "Aplicación integral de Gestión de Permisos construida en la plataforma CRM Salesforce. Simplifica las solicitudes de permisos, aprobaciones y seguimiento con workflows automatizados, objetos personalizados y dashboards intuitivos para la gestión de RRHH.",
        proj2_title: "Detección de Daños en Autos",
        proj2_desc: "Solución deep learning end-to-end para evaluación automatizada de daños vehiculares con segmentación YOLOv8. Alcanza 72% mAP50 con clasificación multi-clase para abolladuras, rayones, grietas y vidrios rotos.",
        proj3_title: "Smart Skill Matrix",
        proj3_desc: "Sistema integral de gestión de competencias y seguimiento de objetivos con autenticación multi-rol, notificaciones en tiempo real, microservicio de email y dashboard analítico interactivo.",
        proj4_title: "Noqta - Gestión Escolar",
        proj4_desc: "Sistema completo de gestión escolar con 4 roles de usuario (Director, Profesor, Estudiante, Padre), gestión de calificaciones, seguimiento de asistencia y sistema de notificaciones en tiempo real.",
        proj5_title: "Predictor de Precios Inmobiliarios",
        proj5_desc: "Pipeline Machine Learning end-to-end con ZenML para predicción de precios. Preparación automatizada de datos, entrenamiento, tracking con MLflow y despliegue API.",
        proj6_title: "Motor de Recomendación de Películas",
        proj6_desc: "Sistema de recomendación por filtrado colaborativo usando algoritmo SVD en el dataset MovieLens 1M. Optimización de hiperparámetros con Surprise y evaluación comparativa de modelos.",
        
        // Certifications Section
        cert_tag: "Credenciales",
        cert_title: "Certificaciones & Logros",
        cert_professional: "Certificado Profesional",
        cert_certified: "Profesional Certificado",
        
        // Contact Section
        contact_tag: "Contáctame",
        contact_title: "Trabajemos Juntos",
        contact_description: "Actualmente busco nuevas oportunidades. Ya sea que tengas una pregunta o solo quieras saludar, ¡haré lo posible por responderte!",
        contact_email: "Email",
        contact_phone: "Teléfono",
        contact_location: "Ubicación",
        contact_your_name: "Tu Nombre",
        contact_your_email: "Tu Email",
        contact_subject: "Asunto",
        contact_message: "Mensaje",
        contact_placeholder_name: "Juan Pérez",
        contact_placeholder_email: "juan@ejemplo.com",
        contact_placeholder_subject: "¿Cómo puedo ayudarte?",
        contact_placeholder_message: "Tu mensaje...",
        contact_send: "Enviar Mensaje",
        
        // Footer
        footer_desc: "Data Scientist e Ingeniero IA apasionado por construir soluciones inteligentes.",
        footer_links: "Enlaces Rápidos",
        footer_connect: "Conectar",
        footer_rights: "Todos los derechos reservados.",
        footer_built: "Construido con",
        footer_and: "y mucho",
        
        // Scroll
        scroll: "Desplazar"
    }
};

// Current language
let currentLang = localStorage.getItem('portfolio-lang') || 'en';

// Initialize translations
function initTranslations() {
    // Set up language buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
            
            // Update active button
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // Load saved language
    setLanguage(currentLang);
    
    // Update active button
    const activeBtn = document.querySelector(`.lang-btn[data-lang="${currentLang}"]`);
    if (activeBtn) {
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        activeBtn.classList.add('active');
    }
}

// Set language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    
    const t = translations[lang];
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Navigation
    updateText('.nav-link[href="#home"]', t.nav_home);
    updateText('.nav-link[href="#about"]', t.nav_about);
    updateText('.nav-link[href="#skills"]', t.nav_skills);
    updateText('.nav-link[href="#experience"]', t.nav_experience);
    updateText('.nav-link[href="#projects"]', t.nav_projects);
    updateText('.nav-link[href="#certifications"]', t.nav_certifications);
    updateText('.nav-link[href="#contact"]', t.nav_contact);
    updateText('.nav-cta', t.nav_cta);
    
    // Mobile Navigation
    updateText('.mobile-nav-link[href="#home"]', t.nav_home);
    updateText('.mobile-nav-link[href="#about"]', t.nav_about);
    updateText('.mobile-nav-link[href="#skills"]', t.nav_skills);
    updateText('.mobile-nav-link[href="#experience"]', t.nav_experience);
    updateText('.mobile-nav-link[href="#projects"]', t.nav_projects);
    updateText('.mobile-nav-link[href="#certifications"]', t.nav_certifications);
    updateText('.mobile-nav-link[href="#contact"]', t.nav_contact);
    
    // Hero Section
    updateText('.hero-badge span:last-child', t.hero_badge);
    updateText('.hero-title .greeting', t.hero_greeting);
    updateText('.hero-title .static-text', t.hero_build);
    updateHTML('.hero-description', t.hero_description);
    updateText('.hero-stats .stat:nth-child(1) .stat-label', t.hero_projects);
    updateText('.hero-stats .stat:nth-child(2) .stat-label', t.hero_certifications);
    updateText('.hero-stats .stat:nth-child(3) .stat-label', t.hero_internships);
    updateText('.hero-cta .btn-primary span', t.hero_view_work);
    updateText('.hero-cta .btn-secondary span', t.hero_get_in_touch);
    
    // Update typed words
    if (window.typedWords) {
        window.typedWords = t.typed_words;
    }
    
    // Scroll indicator
    updateText('.scroll-indicator span', t.scroll);
    
    // About Section
    updateText('#about .section-tag', t.about_tag);
    updateText('#about .section-title', t.about_title);
    updateText('.exp-text', t.about_years);
    updateHTML('.about-intro', t.about_intro);
    updateHTML('.about-text p:nth-child(2)', t.about_p1);
    updateHTML('.about-text p:nth-child(3)', t.about_p2);
    updateText('.about-info .info-item:nth-child(1) span', t.about_location);
    updateText('.about-info .info-item:nth-child(4) span', t.about_languages);
    updateText('.cv-toggle span', t.about_download_cv);
    
    // Skills Section
    updateText('#skills .section-tag', t.skills_tag);
    updateText('#skills .section-title', t.skills_title);
    updateText('.skill-category:nth-child(1) .category-header h3', t.skills_ds);
    updateText('.skill-category:nth-child(2) .category-header h3', t.skills_bi);
    updateText('.skill-category:nth-child(3) .category-header h3', t.skills_web);
    updateText('.skill-category:nth-child(4) .category-header h3', t.skills_erp);
    
    // Experience Section
    updateText('#experience .section-tag', t.exp_tag);
    updateText('#experience .section-title', t.exp_title);
    updateText('.timeline-badge', t.exp_current);
    
    // Timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length >= 4) {
        // TE Connectivity
        updateText('.timeline-item:nth-child(1) .timeline-title', t.exp_te_title);
        updateTextAfterIcon('.timeline-item:nth-child(1) .timeline-company', t.exp_te_company);
        updateText('.timeline-item:nth-child(1) .timeline-project', t.exp_te_project);
        updateTaskText('.timeline-item:nth-child(1) .timeline-tasks li:nth-child(1)', t.exp_te_task1);
        updateTaskText('.timeline-item:nth-child(1) .timeline-tasks li:nth-child(2)', t.exp_te_task2);
        updateTaskText('.timeline-item:nth-child(1) .timeline-tasks li:nth-child(3)', t.exp_te_task3);
        
        // ADN
        updateText('.timeline-item:nth-child(2) .timeline-title', t.exp_adn_title);
        updateTextAfterIcon('.timeline-item:nth-child(2) .timeline-company', t.exp_adn_company);
        updateText('.timeline-item:nth-child(2) .timeline-project', t.exp_adn_project);
        updateTaskText('.timeline-item:nth-child(2) .timeline-tasks li:nth-child(1)', t.exp_adn_task1);
        updateTaskText('.timeline-item:nth-child(2) .timeline-tasks li:nth-child(2)', t.exp_adn_task2);
        updateTaskText('.timeline-item:nth-child(2) .timeline-tasks li:nth-child(3)', t.exp_adn_task3);
        
        // ENSAO
        updateText('.timeline-item:nth-child(3) .timeline-title', t.exp_ensao_title);
        updateTextAfterIcon('.timeline-item:nth-child(3) .timeline-company', t.exp_ensao_company);
        updateText('.timeline-item:nth-child(3) .timeline-project', t.exp_ensao_project);
        updateText('.timeline-item:nth-child(3) .timeline-description', t.exp_ensao_desc);
        
        // Bac
        updateText('.timeline-item:nth-child(4) .timeline-title', t.exp_bac_title);
        updateTextAfterIcon('.timeline-item:nth-child(4) .timeline-company', t.exp_bac_company);
        updateText('.timeline-item:nth-child(4) .timeline-project', t.exp_bac_project);
    }
    
    // Projects Section
    updateText('#projects .section-tag', t.proj_tag);
    updateText('#projects .section-title', t.proj_title);
    updateText('#projects .section-description', t.proj_description);
    
    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length >= 5) {
        filterBtns[0].textContent = t.proj_filter_all;
        filterBtns[1].textContent = t.proj_filter_ai;
        filterBtns[2].textContent = t.proj_filter_web;
        filterBtns[3].textContent = t.proj_filter_data;
        filterBtns[4].textContent = t.proj_filter_crm;
    }
    
    // Project cards
    const projCards = document.querySelectorAll('.project-card');
    const projTitles = [t.proj1_title, t.proj_conge_title, t.proj2_title, t.proj3_title, t.proj4_title, t.proj5_title, t.proj6_title];
    const projDescs = [t.proj1_desc, t.proj_conge_desc, t.proj2_desc, t.proj3_desc, t.proj4_desc, t.proj5_desc, t.proj6_desc];
    
    projCards.forEach((card, i) => {
        if (projTitles[i]) {
            const title = card.querySelector('.project-title');
            const desc = card.querySelector('.project-description');
            if (title) title.textContent = projTitles[i];
            if (desc) desc.textContent = projDescs[i];
        }
    });
    
    updateText('.projects-cta .btn span', t.proj_view_github);
    
    // Certifications Section
    updateText('#certifications .section-tag', t.cert_tag);
    updateText('#certifications .section-title', t.cert_title);
    
    // Contact Section
    updateText('#contact .section-tag', t.contact_tag);
    updateText('#contact .section-title', t.contact_title);
    updateText('#contact .section-description', t.contact_description);
    updateText('.info-card:nth-child(1) .info-details h3', t.contact_email);
    updateText('.info-card:nth-child(2) .info-details h3', t.contact_phone);
    updateText('.info-card:nth-child(3) .info-details h3', t.contact_location);
    
    // Form labels
    updateText('label[for="name"]', t.contact_your_name);
    updateText('label[for="email"]', t.contact_your_email);
    updateText('label[for="subject"]', t.contact_subject);
    updateText('label[for="message"]', t.contact_message);
    
    // Form placeholders
    updatePlaceholder('#name', t.contact_placeholder_name);
    updatePlaceholder('#email', t.contact_placeholder_email);
    updatePlaceholder('#subject', t.contact_placeholder_subject);
    updatePlaceholder('#message', t.contact_placeholder_message);
    
    updateText('.contact-form .btn span', t.contact_send);
    
    // Footer
    updateText('.footer-brand p', t.footer_desc);
    updateText('.footer-links h4', t.footer_links);
    updateText('.footer-social h4', t.footer_connect);
}

// Helper functions
function updateText(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
}

function updateHTML(selector, html) {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = html;
}

function updatePlaceholder(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.placeholder = text;
}

function updateTextAfterIcon(selector, text) {
    const el = document.querySelector(selector);
    if (el) {
        const icon = el.querySelector('i');
        if (icon) {
            el.innerHTML = '';
            el.appendChild(icon);
            el.appendChild(document.createTextNode(' ' + text));
        }
    }
}

function updateTaskText(selector, text) {
    const el = document.querySelector(selector);
    if (el) {
        const icon = el.querySelector('i');
        if (icon) {
            el.innerHTML = '';
            el.appendChild(icon);
            el.appendChild(document.createTextNode(' ' + text));
        }
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initTranslations);
