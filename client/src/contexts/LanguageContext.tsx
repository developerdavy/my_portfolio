import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'es' | 'fr' | 'de' | 'ja' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Translation data
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.greeting': 'Hi, my name is',
    'hero.name': 'David Kamau',
    'hero.role.software': 'Software Developer',
    'hero.role.ai': 'AI Agent Developer',
    'hero.role.web': 'Web Developer',
    'hero.role.fullstack': 'Full-Stack Engineer',
    'hero.role.api': 'API Integration Expert',
    'hero.description': 'Passionate software developer specializing in web development, software engineering, and cutting-edge AI agent development. I build exceptional digital experiences that solve real-world problems.',
    'hero.cta.contact': 'Get In Touch',
    'hero.cta.learn': 'Learn More',

    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Building innovative solutions with modern technology stack and AI integration',
    'about.journey.title': 'Professional Journey',
    'about.journey.p1': 'As a dedicated software developer with extensive experience in web development, software engineering, and AI agent development, I specialize in creating robust, scalable solutions that drive business growth and enhance user experiences.',
    'about.journey.p2': 'My expertise spans across multiple programming languages including Python, JavaScript, PHP, and Java, with deep knowledge in frameworks like Laravel and Node.js. I excel in API development and integration, ensuring seamless connectivity between systems and services.',
    'about.journey.p3': 'Currently focusing on cutting-edge AI agent development, I combine traditional software engineering principles with modern AI technologies to build intelligent systems that solve complex business challenges.',
    'about.expertise.title': 'Core Expertise',
    'about.expertise.fullstack': 'Full-Stack Web Development',
    'about.expertise.ai': 'AI Agent Development',
    'about.expertise.api': 'API Development & Integration',
    'about.expertise.mobile': 'Mobile App Development',
    'about.values.title': 'Professional Values',
    'about.values.problem': 'Problem-solving focused approach',
    'about.values.team': 'Collaborative team leadership',
    'about.values.innovation': 'Innovation-driven mindset',
    'about.values.learning': 'Continuous learning commitment',

    // Skills Section
    'skills.title': 'Skills & Expertise',
    'skills.subtitle': 'A comprehensive overview of my technical competencies and professional skills',
    'skills.technical': 'Technical Skills',
    'skills.professional': 'Professional Skills',
    'skills.languages': 'Programming Languages',
    'skills.frameworks': 'Frameworks & Technologies',
    'skills.specializations': 'Specializations',
    'skills.teamwork': 'Team Work',
    'skills.teamwork.desc': 'Collaborative development and cross-functional coordination',
    'skills.leadership': 'Leadership Skills',
    'skills.leadership.desc': 'Project management and technical team guidance',
    'skills.problem': 'Problem Solving',
    'skills.problem.desc': 'Analytical thinking and innovative solution development',
    'skills.communication': 'Communication',
    'skills.communication.desc': 'Clear technical documentation and stakeholder engagement',

    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to collaborate on your next project? Let\'s build something amazing together.',
    'contact.email.title': 'Email Me',
    'contact.email.desc': 'Drop me a line for project inquiries or collaboration opportunities',
    'contact.phone.title': 'Call Me',
    'contact.phone.desc': 'Let\'s discuss your project requirements and technical needs',
    'contact.location': 'Kenya',
    'contact.availability': 'Available for remote work',

    // Footer
    'footer.built': 'Built with',
    'footer.tech': 'using modern web technologies',
    'footer.role.software': 'Software Developer',
    'footer.role.web': 'Web Developer',
    'footer.role.ai': 'AI Agent Developer',
    'footer.rights': 'All rights reserved.',
  },

  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',

    // Hero Section
    'hero.greeting': 'Hola, mi nombre es',
    'hero.name': 'David Kamau',
    'hero.role.software': 'Desarrollador de Software',
    'hero.role.ai': 'Desarrollador de Agentes IA',
    'hero.role.web': 'Desarrollador Web',
    'hero.role.fullstack': 'Ingeniero Full-Stack',
    'hero.role.api': 'Experto en Integración de APIs',
    'hero.description': 'Desarrollador de software apasionado especializado en desarrollo web, ingeniería de software y desarrollo de agentes IA de vanguardia. Construyo experiencias digitales excepcionales que resuelven problemas del mundo real.',
    'hero.cta.contact': 'Ponerse en Contacto',
    'hero.cta.learn': 'Saber Más',

    // About Section
    'about.title': 'Acerca de Mí',
    'about.subtitle': 'Construyendo soluciones innovadoras con tecnologías modernas e integración de IA',
    'about.journey.title': 'Trayectoria Profesional',
    'about.journey.p1': 'Como desarrollador de software dedicado con amplia experiencia en desarrollo web, ingeniería de software y desarrollo de agentes IA, me especializo en crear soluciones robustas y escalables que impulsan el crecimiento empresarial y mejoran las experiencias de usuario.',
    'about.journey.p2': 'Mi experiencia abarca múltiples lenguajes de programación incluyendo Python, JavaScript, PHP y Java, con conocimiento profundo en frameworks como Laravel y Node.js. Sobresalgo en desarrollo e integración de APIs, asegurando conectividad fluida entre sistemas y servicios.',
    'about.journey.p3': 'Actualmente enfocado en el desarrollo de agentes IA de vanguardia, combino principios tradicionales de ingeniería de software con tecnologías modernas de IA para construir sistemas inteligentes que resuelven desafíos empresariales complejos.',
    'about.expertise.title': 'Experiencia Principal',
    'about.expertise.fullstack': 'Desarrollo Web Full-Stack',
    'about.expertise.ai': 'Desarrollo de Agentes IA',
    'about.expertise.api': 'Desarrollo e Integración de APIs',
    'about.expertise.mobile': 'Desarrollo de Aplicaciones Móviles',
    'about.values.title': 'Valores Profesionales',
    'about.values.problem': 'Enfoque centrado en resolución de problemas',
    'about.values.team': 'Liderazgo colaborativo de equipos',
    'about.values.innovation': 'Mentalidad impulsada por la innovación',
    'about.values.learning': 'Compromiso con el aprendizaje continuo',

    // Skills Section
    'skills.title': 'Habilidades y Experiencia',
    'skills.subtitle': 'Una visión integral de mis competencias técnicas y habilidades profesionales',
    'skills.technical': 'Habilidades Técnicas',
    'skills.professional': 'Habilidades Profesionales',
    'skills.languages': 'Lenguajes de Programación',
    'skills.frameworks': 'Frameworks y Tecnologías',
    'skills.specializations': 'Especializaciones',
    'skills.teamwork': 'Trabajo en Equipo',
    'skills.teamwork.desc': 'Desarrollo colaborativo y coordinación interfuncional',
    'skills.leadership': 'Habilidades de Liderazgo',
    'skills.leadership.desc': 'Gestión de proyectos y orientación técnica de equipos',
    'skills.problem': 'Resolución de Problemas',
    'skills.problem.desc': 'Pensamiento analítico y desarrollo de soluciones innovadoras',
    'skills.communication': 'Comunicación',
    'skills.communication.desc': 'Documentación técnica clara y participación de stakeholders',

    // Contact Section
    'contact.title': 'Ponte en Contacto',
    'contact.subtitle': '¿Listo para colaborar en tu próximo proyecto? Construyamos algo increíble juntos.',
    'contact.email.title': 'Envíame un Email',
    'contact.email.desc': 'Contáctame para consultas de proyectos u oportunidades de colaboración',
    'contact.phone.title': 'Llámame',
    'contact.phone.desc': 'Hablemos sobre los requisitos y necesidades técnicas de tu proyecto',
    'contact.location': 'Kenia',
    'contact.availability': 'Disponible para trabajo remoto',

    // Footer
    'footer.built': 'Construido con',
    'footer.tech': 'usando tecnologías web modernas',
    'footer.role.software': 'Desarrollador de Software',
    'footer.role.web': 'Desarrollador Web',
    'footer.role.ai': 'Desarrollador de Agentes IA',
    'footer.rights': 'Todos los derechos reservados.',
  },

  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.greeting': 'Salut, je m\'appelle',
    'hero.name': 'David Kamau',
    'hero.role.software': 'Développeur Logiciel',
    'hero.role.ai': 'Développeur d\'Agents IA',
    'hero.role.web': 'Développeur Web',
    'hero.role.fullstack': 'Ingénieur Full-Stack',
    'hero.role.api': 'Expert en Intégration d\'APIs',
    'hero.description': 'Développeur logiciel passionné spécialisé dans le développement web, l\'ingénierie logicielle et le développement d\'agents IA de pointe. Je crée des expériences numériques exceptionnelles qui résolvent des problèmes du monde réel.',
    'hero.cta.contact': 'Prendre Contact',
    'hero.cta.learn': 'En Savoir Plus',

    // About Section
    'about.title': 'À Propos de Moi',
    'about.subtitle': 'Construire des solutions innovantes avec des technologies modernes et l\'intégration de l\'IA',
    'about.journey.title': 'Parcours Professionnel',
    'about.journey.p1': 'En tant que développeur logiciel dévoué avec une vaste expérience dans le développement web, l\'ingénierie logicielle et le développement d\'agents IA, je me spécialise dans la création de solutions robustes et évolutives qui stimulent la croissance des entreprises et améliorent les expériences utilisateur.',
    'about.journey.p2': 'Mon expertise s\'étend sur plusieurs langages de programmation incluant Python, JavaScript, PHP et Java, avec une connaissance approfondie des frameworks comme Laravel et Node.js. J\'excelle dans le développement et l\'intégration d\'APIs, assurant une connectivité fluide entre les systèmes et services.',
    'about.journey.p3': 'Actuellement concentré sur le développement d\'agents IA de pointe, je combine les principes traditionnels de l\'ingénierie logicielle avec les technologies modernes d\'IA pour construire des systèmes intelligents qui résolvent des défis commerciaux complexes.',
    'about.expertise.title': 'Expertise Principale',
    'about.expertise.fullstack': 'Développement Web Full-Stack',
    'about.expertise.ai': 'Développement d\'Agents IA',
    'about.expertise.api': 'Développement et Intégration d\'APIs',
    'about.expertise.mobile': 'Développement d\'Applications Mobiles',
    'about.values.title': 'Valeurs Professionnelles',
    'about.values.problem': 'Approche axée sur la résolution de problèmes',
    'about.values.team': 'Leadership collaboratif d\'équipe',
    'about.values.innovation': 'Mentalité axée sur l\'innovation',
    'about.values.learning': 'Engagement envers l\'apprentissage continu',

    // Skills Section
    'skills.title': 'Compétences et Expertise',
    'skills.subtitle': 'Un aperçu complet de mes compétences techniques et professionnelles',
    'skills.technical': 'Compétences Techniques',
    'skills.professional': 'Compétences Professionnelles',
    'skills.languages': 'Langages de Programmation',
    'skills.frameworks': 'Frameworks et Technologies',
    'skills.specializations': 'Spécialisations',
    'skills.teamwork': 'Travail d\'Équipe',
    'skills.teamwork.desc': 'Développement collaboratif et coordination inter-fonctionnelle',
    'skills.leadership': 'Compétences de Leadership',
    'skills.leadership.desc': 'Gestion de projet et orientation technique d\'équipe',
    'skills.problem': 'Résolution de Problèmes',
    'skills.problem.desc': 'Pensée analytique et développement de solutions innovantes',
    'skills.communication': 'Communication',
    'skills.communication.desc': 'Documentation technique claire et engagement des parties prenantes',

    // Contact Section
    'contact.title': 'Prendre Contact',
    'contact.subtitle': 'Prêt à collaborer sur votre prochain projet ? Construisons quelque chose d\'incroyable ensemble.',
    'contact.email.title': 'M\'envoyer un Email',
    'contact.email.desc': 'Contactez-moi pour des demandes de projet ou des opportunités de collaboration',
    'contact.phone.title': 'M\'appeler',
    'contact.phone.desc': 'Discutons des exigences et besoins techniques de votre projet',
    'contact.location': 'Kenya',
    'contact.availability': 'Disponible pour le travail à distance',

    // Footer
    'footer.built': 'Construit avec',
    'footer.tech': 'en utilisant des technologies web modernes',
    'footer.role.software': 'Développeur Logiciel',
    'footer.role.web': 'Développeur Web',
    'footer.role.ai': 'Développeur d\'Agents IA',
    'footer.rights': 'Tous droits réservés.',
  },

  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über mich',
    'nav.skills': 'Fähigkeiten',
    'nav.contact': 'Kontakt',

    // Hero Section
    'hero.greeting': 'Hallo, mein Name ist',
    'hero.name': 'David Kamau',
    'hero.role.software': 'Software-Entwickler',
    'hero.role.ai': 'KI-Agent-Entwickler',
    'hero.role.web': 'Web-Entwickler',
    'hero.role.fullstack': 'Full-Stack-Ingenieur',
    'hero.role.api': 'API-Integrations-Experte',
    'hero.description': 'Leidenschaftlicher Software-Entwickler spezialisiert auf Web-Entwicklung, Software-Engineering und modernste KI-Agent-Entwicklung. Ich baue außergewöhnliche digitale Erfahrungen, die reale Probleme lösen.',
    'hero.cta.contact': 'Kontakt Aufnehmen',
    'hero.cta.learn': 'Mehr Erfahren',

    // About Section
    'about.title': 'Über Mich',
    'about.subtitle': 'Innovative Lösungen mit modernem Technologie-Stack und KI-Integration entwickeln',
    'about.journey.title': 'Beruflicher Werdegang',
    'about.journey.p1': 'Als engagierter Software-Entwickler mit umfangreicher Erfahrung in Web-Entwicklung, Software-Engineering und KI-Agent-Entwicklung spezialisiere ich mich auf die Erstellung robuster, skalierbarer Lösungen, die Geschäftswachstum fördern und Benutzererfahrungen verbessern.',
    'about.journey.p2': 'Meine Expertise erstreckt sich über mehrere Programmiersprachen einschließlich Python, JavaScript, PHP und Java, mit tiefem Wissen in Frameworks wie Laravel und Node.js. Ich zeichne mich in API-Entwicklung und -Integration aus und gewährleiste nahtlose Konnektivität zwischen Systemen und Diensten.',
    'about.journey.p3': 'Derzeit fokussiert auf modernste KI-Agent-Entwicklung, kombiniere ich traditionelle Software-Engineering-Prinzipien mit modernen KI-Technologien, um intelligente Systeme zu bauen, die komplexe Geschäftsherausforderungen lösen.',
    'about.expertise.title': 'Kernexpertise',
    'about.expertise.fullstack': 'Full-Stack-Web-Entwicklung',
    'about.expertise.ai': 'KI-Agent-Entwicklung',
    'about.expertise.api': 'API-Entwicklung & Integration',
    'about.expertise.mobile': 'Mobile App-Entwicklung',
    'about.values.title': 'Berufliche Werte',
    'about.values.problem': 'Problemlösungsorientierter Ansatz',
    'about.values.team': 'Kollaborative Teamführung',
    'about.values.innovation': 'Innovationsgetriebene Denkweise',
    'about.values.learning': 'Kontinuierliches Lernengagement',

    // Skills Section
    'skills.title': 'Fähigkeiten & Expertise',
    'skills.subtitle': 'Ein umfassender Überblick über meine technischen Kompetenzen und beruflichen Fähigkeiten',
    'skills.technical': 'Technische Fähigkeiten',
    'skills.professional': 'Berufliche Fähigkeiten',
    'skills.languages': 'Programmiersprachen',
    'skills.frameworks': 'Frameworks & Technologien',
    'skills.specializations': 'Spezialisierungen',
    'skills.teamwork': 'Teamarbeit',
    'skills.teamwork.desc': 'Kollaborative Entwicklung und funktionsübergreifende Koordination',
    'skills.leadership': 'Führungsfähigkeiten',
    'skills.leadership.desc': 'Projektmanagement und technische Teamführung',
    'skills.problem': 'Problemlösung',
    'skills.problem.desc': 'Analytisches Denken und innovative Lösungsentwicklung',
    'skills.communication': 'Kommunikation',
    'skills.communication.desc': 'Klare technische Dokumentation und Stakeholder-Engagement',

    // Contact Section
    'contact.title': 'Kontakt Aufnehmen',
    'contact.subtitle': 'Bereit zur Zusammenarbeit an Ihrem nächsten Projekt? Lassen Sie uns etwas Fantastisches zusammen bauen.',
    'contact.email.title': 'E-Mail Senden',
    'contact.email.desc': 'Kontaktieren Sie mich für Projektanfragen oder Kooperationsmöglichkeiten',
    'contact.phone.title': 'Anrufen',
    'contact.phone.desc': 'Lassen Sie uns über Ihre Projektanforderungen und technischen Bedürfnisse sprechen',
    'contact.location': 'Kenia',
    'contact.availability': 'Verfügbar für Remote-Arbeit',

    // Footer
    'footer.built': 'Erstellt mit',
    'footer.tech': 'unter Verwendung moderner Web-Technologien',
    'footer.role.software': 'Software-Entwickler',
    'footer.role.web': 'Web-Entwickler',
    'footer.role.ai': 'KI-Agent-Entwickler',
    'footer.rights': 'Alle Rechte vorbehalten.',
  },

  ja: {
    // Navigation
    'nav.home': 'ホーム',
    'nav.about': 'について',
    'nav.skills': 'スキル',
    'nav.contact': 'お問い合わせ',

    // Hero Section
    'hero.greeting': 'こんにちは、私の名前は',
    'hero.name': 'デイビッド・カマウ',
    'hero.role.software': 'ソフトウェア開発者',
    'hero.role.ai': 'AIエージェント開発者',
    'hero.role.web': 'ウェブ開発者',
    'hero.role.fullstack': 'フルスタックエンジニア',
    'hero.role.api': 'API統合エキスパート',
    'hero.description': 'ウェブ開発、ソフトウェアエンジニアリング、最先端のAIエージェント開発を専門とする情熱的なソフトウェア開発者。現実世界の問題を解決する卓越したデジタル体験を構築します。',
    'hero.cta.contact': 'お問い合わせ',
    'hero.cta.learn': '詳しく見る',

    // About Section
    'about.title': '私について',
    'about.subtitle': '最新の技術スタックとAI統合による革新的なソリューションの構築',
    'about.journey.title': 'プロフェッショナルジャーニー',
    'about.journey.p1': 'ウェブ開発、ソフトウェアエンジニアリング、AIエージェント開発で豊富な経験を持つ専任のソフトウェア開発者として、ビジネス成長を促進し、ユーザー体験を向上させる堅牢でスケーラブルなソリューションの作成を専門としています。',
    'about.journey.p2': '私の専門知識は、Python、JavaScript、PHP、Javaを含む複数のプログラミング言語にわたり、LaravelやNode.jsなどのフレームワークに深い知識を持っています。API開発と統合に優れ、システムとサービス間のシームレスな接続を確保します。',
    'about.journey.p3': '現在、最先端のAIエージェント開発に焦点を当て、従来のソフトウェアエンジニアリング原則と最新のAI技術を組み合わせて、複雑なビジネス課題を解決するインテリジェントシステムを構築しています。',
    'about.expertise.title': 'コア専門分野',
    'about.expertise.fullstack': 'フルスタックウェブ開発',
    'about.expertise.ai': 'AIエージェント開発',
    'about.expertise.api': 'API開発＆統合',
    'about.expertise.mobile': 'モバイルアプリ開発',
    'about.values.title': 'プロフェッショナルバリュー',
    'about.values.problem': '問題解決重視のアプローチ',
    'about.values.team': '協調的なチームリーダーシップ',
    'about.values.innovation': 'イノベーション主導の考え方',
    'about.values.learning': '継続学習への取り組み',

    // Skills Section
    'skills.title': 'スキル・専門知識',
    'skills.subtitle': '私の技術的能力と専門スキルの包括的な概要',
    'skills.technical': '技術スキル',
    'skills.professional': 'プロフェッショナルスキル',
    'skills.languages': 'プログラミング言語',
    'skills.frameworks': 'フレームワーク・技術',
    'skills.specializations': '専門分野',
    'skills.teamwork': 'チームワーク',
    'skills.teamwork.desc': '協調的な開発と部門横断的な調整',
    'skills.leadership': 'リーダーシップスキル',
    'skills.leadership.desc': 'プロジェクト管理と技術チーム指導',
    'skills.problem': '問題解決',
    'skills.problem.desc': '分析的思考と革新的なソリューション開発',
    'skills.communication': 'コミュニケーション',
    'skills.communication.desc': '明確な技術文書とステークホルダーエンゲージメント',

    // Contact Section
    'contact.title': 'お問い合わせ',
    'contact.subtitle': '次のプロジェクトで協力する準備はできていますか？一緒に素晴らしいものを作りましょう。',
    'contact.email.title': 'メールを送る',
    'contact.email.desc': 'プロジェクトのお問い合わせやコラボレーションの機会についてご連絡ください',
    'contact.phone.title': '電話をかける',
    'contact.phone.desc': 'プロジェクトの要件と技術的ニーズについて話し合いましょう',
    'contact.location': 'ケニア',
    'contact.availability': 'リモートワーク可能',

    // Footer
    'footer.built': '作成：',
    'footer.tech': '最新のウェブ技術を使用',
    'footer.role.software': 'ソフトウェア開発者',
    'footer.role.web': 'ウェブ開発者',
    'footer.role.ai': 'AIエージェント開発者',
    'footer.rights': '全著作権所有。',
  },

  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.skills': '技能',
    'nav.contact': '联系',

    // Hero Section
    'hero.greeting': '你好，我的名字是',
    'hero.name': '大卫·卡马乌',
    'hero.role.software': '软件开发者',
    'hero.role.ai': 'AI代理开发者',
    'hero.role.web': '网页开发者',
    'hero.role.fullstack': '全栈工程师',
    'hero.role.api': 'API集成专家',
    'hero.description': '专注于网页开发、软件工程和前沿AI代理开发的热情软件开发者。我构建解决现实世界问题的卓越数字体验。',
    'hero.cta.contact': '联系我',
    'hero.cta.learn': '了解更多',

    // About Section
    'about.title': '关于我',
    'about.subtitle': '使用现代技术栈和AI集成构建创新解决方案',
    'about.journey.title': '职业历程',
    'about.journey.p1': '作为一名在网页开发、软件工程和AI代理开发方面拥有丰富经验的专业软件开发者，我专注于创建推动业务增长和提升用户体验的强大、可扩展的解决方案。',
    'about.journey.p2': '我的专业知识涵盖多种编程语言，包括Python、JavaScript、PHP和Java，在Laravel和Node.js等框架方面拥有深厚的知识。我在API开发和集成方面表现出色，确保系统和服务之间的无缝连接。',
    'about.journey.p3': '目前专注于前沿AI代理开发，我将传统软件工程原理与现代AI技术相结合，构建解决复杂业务挑战的智能系统。',
    'about.expertise.title': '核心专长',
    'about.expertise.fullstack': '全栈网页开发',
    'about.expertise.ai': 'AI代理开发',
    'about.expertise.api': 'API开发与集成',
    'about.expertise.mobile': '移动应用开发',
    'about.values.title': '职业价值观',
    'about.values.problem': '以解决问题为重点的方法',
    'about.values.team': '协作团队领导',
    'about.values.innovation': '创新驱动的思维',
    'about.values.learning': '持续学习的承诺',

    // Skills Section
    'skills.title': '技能与专长',
    'skills.subtitle': '我的技术能力和专业技能的全面概述',
    'skills.technical': '技术技能',
    'skills.professional': '专业技能',
    'skills.languages': '编程语言',
    'skills.frameworks': '框架与技术',
    'skills.specializations': '专业化',
    'skills.teamwork': '团队合作',
    'skills.teamwork.desc': '协作开发和跨职能协调',
    'skills.leadership': '领导技能',
    'skills.leadership.desc': '项目管理和技术团队指导',
    'skills.problem': '问题解决',
    'skills.problem.desc': '分析思维和创新解决方案开发',
    'skills.communication': '沟通',
    'skills.communication.desc': '清晰的技术文档和利益相关者参与',

    // Contact Section
    'contact.title': '联系我',
    'contact.subtitle': '准备好在您的下一个项目上合作吗？让我们一起构建令人惊叹的东西。',
    'contact.email.title': '发邮件给我',
    'contact.email.desc': '就项目咨询或合作机会联系我',
    'contact.phone.title': '给我打电话',
    'contact.phone.desc': '让我们讨论您的项目需求和技术需要',
    'contact.location': '肯尼亚',
    'contact.availability': '可远程工作',

    // Footer
    'footer.built': '构建使用',
    'footer.tech': '现代网页技术',
    'footer.role.software': '软件开发者',
    'footer.role.web': '网页开发者',
    'footer.role.ai': 'AI代理开发者',
    'footer.rights': '版权所有。',
  }
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to get language from localStorage first
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
      return savedLanguage;
    }
    
    // Fallback to browser language detection
    const browserLang = navigator.language.split('-')[0] as Language;
    return Object.keys(translations).includes(browserLang) ? browserLang : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  useEffect(() => {
    // Update document language attribute
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}