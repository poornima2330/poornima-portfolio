export type LanguageCode = 'en' | 'ta' | 'es' | 'de' | 'ja'

export const languageOptions: { code: LanguageCode; label: string; short: string }[] = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ta', label: 'தமிழ்', short: 'TA' },
  { code: 'es', label: 'Español', short: 'ES' },
  { code: 'de', label: 'Deutsch', short: 'DE' },
  { code: 'ja', label: '日本語', short: 'JA' },
]

export const translations = {
  en: {
    nav: { work: 'Work', experience: 'Experience', projects: 'Projects', contact: 'Contact', resume: 'Resume' },
    customize: 'Customize',
    settings: {
      title: 'Customize portfolio',
      theme: 'Accent color',
      textSize: 'Text size',
      language: 'Language',
      reset: 'Reset',
      close: 'Close',
      smaller: 'Smaller text',
      normal: 'Default text',
      larger: 'Larger text',
    },
    hero: {
      eyebrow: 'Software Engineer • Golang Backend Developer',
      line1: 'I build reliable',
      line2: 'systems that ship.',
      text: 'I’m Poornima K, a software engineer specializing in Golang backend development, REST APIs and PostgreSQL, with hands-on experience across Jenkins CI/CD, Kubernetes, AWS and production engineering. I enjoy solving complex engineering problems and building reliable, maintainable systems.',
      explore: 'Explore my work',
      email: 'Email me',
    },
    capabilities: {
      kicker: '01 / Capabilities',
      title: 'Technology with evidence behind it.',
      intro: 'No percentage bars. Every technology here maps to work I have actually built, debugged, integrated or shipped.',
      cards: [
        ['Golang & Backend', 'REST APIs, microservices, authentication flows, validation logic, PostgreSQL integration and Go testing.'],
        ['Jenkins & CI/CD', 'Plugin upgrades, dependency management, HPI workflows, release ownership, authentication and production troubleshooting.'],
        ['Platform Engineering', 'Kubernetes log-level debugging, Linux incident analysis, AWS S3/ECR, Tilt and environment reliability work.'],
        ['Flutter & Product', 'Responsive Android/Web interfaces, authentication workflows, API integration, Riverpod, GoRouter and Firebase.'],
        ['Security & Reliability', 'Credential handling, dependency security, CVE remediation, release validation and resilient engineering workflows.'],
        ['Data & Research', 'Real-time data processing, sensor-driven ML systems and research work using CatBoost and MLP models.'],
      ],
    },
    experience: {
      kicker: '02 / Experience',
      title: 'Engineering across the stack.',
      roles: [
        ['Associate Engineer', 'Building Golang backend services, working with PostgreSQL, improving Jenkins and CI/CD workflows, resolving production and integration issues, and supporting cross-platform Flutter delivery.'],
        ['Software Engineer Intern', 'Built backend endpoints and Flutter Android/Web experiences, including authentication, OTP flows, reCAPTCHA integration, onboarding workflows and real-time chat integrations.'],
      ],
    },
    stories: {
      kicker: '03 / Engineering Stories',
      title: 'Selected production work.',
      intro: 'Problems that required ownership, debugging and shipping—not just implementation.',
      cards: [
        ['Platform Engineering', 'Jenkins production incident ownership', 'Investigated an outage following a Jenkins core upgrade, traced deployment symptoms through Kubernetes logs to a plugin compatibility conflict, and coordinated recovery across environments.'],
        ['Security + Product Engineering', 'Vault-backed credential validation', 'Built a HashiCorp Vault-backed credential-uniqueness validator spanning Global, User and Folder scopes, then shipped a Jenkins license-status banner directly in the distribution.'],
        ['Release Engineering', 'End-to-end plugin release flow', 'Owned version tagging, CI builds, HPI artifacts, S3 and GitHub verification, Update Center/Nexus validation, Dev/Production deployment and CVE remediation in Amazon ECR images.'],
      ],
    },
    project: {
      kicker: '04 / Featured Project',
      subtitle: 'Cross-platform reliability verification for workers and clients.',
      title: 'A single codebase across Android and Web.',
      text: 'Vouch implements authentication-aware routing, responsive role-based UI, Firebase Authentication and Firestore security rules, two-way ratings, verified job history, worker discovery and public shareable profiles.',
      live: 'Live demo',
      release: 'Android release',
      reliability: 'Reliability Score',
      verified: 'Verified',
    },
    research: {
      kicker: '05 / Research',
      title: 'Precision Agriculture Advisor Platform',
      text: 'IEEE-published research at ICSES 2024. Built an end-to-end system using real-time sensor data for soil analysis and crop recommendation, with CatBoost and MLP models reaching up to 94% accuracy.',
      publication: 'View IEEE Publication',
    },
    contact: {
      kicker: '06 / Contact',
      title: 'Let’s build something that matters.',
      text: 'I’m interested in software engineering roles where backend systems, platform reliability, developer tooling and product engineering meet.',
    },
    footer: 'Built with React, Three.js & Framer Motion',
  },

  ta: {
    nav: { work: 'திறன்கள்', experience: 'அனுபவம்', projects: 'திட்டங்கள்', contact: 'தொடர்பு', resume: 'சுயவிவரம்' },
    customize: 'தனிப்பயன்',
    settings: { title: 'போர்ட்ஃபோலியோ அமைப்புகள்', theme: 'நிறத் தோற்றம்', textSize: 'எழுத்து அளவு', language: 'மொழி', reset: 'மீட்டமை', close: 'மூடு', smaller: 'சிறிய எழுத்து', normal: 'இயல்பான எழுத்து', larger: 'பெரிய எழுத்து' },
    hero: {
      eyebrow: 'Software Engineer • Golang Backend Developer',
      line1: 'நம்பகமான',
      line2: 'அமைப்புகளை உருவாக்குகிறேன்.',
      text: 'நான் Poornima K. Golang backend development, REST APIs மற்றும் PostgreSQL ஆகியவற்றில் கவனம் செலுத்தும் software engineer. Jenkins CI/CD, Kubernetes, AWS மற்றும் production engineering ஆகிய துறைகளிலும் நடைமுறை அனுபவம் உள்ளது. சிக்கலான engineering பிரச்சினைகளை தீர்த்து, நம்பகமான மற்றும் பராமரிக்க எளிதான systems உருவாக்க விரும்புகிறேன்.',
      explore: 'என் பணிகளைப் பார்க்க',
      email: 'மின்னஞ்சல்',
    },
    capabilities: {
      kicker: '01 / திறன்கள்',
      title: 'நடைமுறை அனுபவத்துடன் கூடிய தொழில்நுட்பம்.',
      intro: 'Percentage bars இல்லை. இங்கே உள்ள ஒவ்வொரு technology-யும் நான் உருவாக்கிய, debug செய்த, integrate செய்த அல்லது ship செய்த பணிகளுடன் தொடர்புடையது.',
      cards: [
        ['Golang & Backend', 'REST APIs, microservices, authentication flows, validation logic, PostgreSQL integration மற்றும் Go testing.'],
        ['Jenkins & CI/CD', 'Plugin upgrades, dependency management, HPI workflows, release ownership, authentication மற்றும் production troubleshooting.'],
        ['Platform Engineering', 'Kubernetes log debugging, Linux incident analysis, AWS S3/ECR, Tilt மற்றும் environment reliability.'],
        ['Flutter & Product', 'Responsive Android/Web interfaces, authentication workflows, API integration, Riverpod, GoRouter மற்றும் Firebase.'],
        ['Security & Reliability', 'Credential handling, dependency security, CVE remediation, release validation மற்றும் resilient workflows.'],
        ['Data & Research', 'Real-time data processing, sensor-driven ML systems, CatBoost மற்றும் MLP research work.'],
      ],
    },
    experience: {
      kicker: '02 / அனுபவம்',
      title: 'Stack முழுவதும் engineering அனுபவம்.',
      roles: [
        ['Associate Engineer', 'Golang backend services உருவாக்குதல், PostgreSQL உடன் பணிபுரிதல், Jenkins மற்றும் CI/CD workflows மேம்படுத்துதல், production/integration issues தீர்த்தல் மற்றும் Flutter delivery ஆதரித்தல்.'],
        ['Software Engineer Intern', 'Backend endpoints மற்றும் Flutter Android/Web experiences உருவாக்கினேன்; authentication, OTP flows, reCAPTCHA integration, onboarding workflows மற்றும் real-time chat integrations ஆகியவை இதில் அடங்கும்.'],
      ],
    },
    stories: {
      kicker: '03 / Engineering Stories',
      title: 'தேர்ந்தெடுக்கப்பட்ட production பணிகள்.',
      intro: 'Implementation மட்டுமல்லாமல் ownership, debugging மற்றும் shipping தேவைப்பட்ட பணிகள்.',
      cards: [
        ['Platform Engineering', 'Jenkins production incident ownership', 'Jenkins core upgrade-க்கு பின் ஏற்பட்ட outage-ஐ ஆய்வு செய்து, Kubernetes logs மூலம் plugin compatibility conflict-ஐ கண்டறிந்து environments recovery-ஐ ஒருங்கிணைத்தேன்.'],
        ['Security + Product Engineering', 'Vault-backed credential validation', 'Global, User, Folder scopes-ல் credential uniqueness சரிபார்க்க HashiCorp Vault-backed validator உருவாக்கி, Jenkins distribution-ல் license-status banner ship செய்தேன்.'],
        ['Release Engineering', 'End-to-end plugin release flow', 'Version tagging, CI builds, HPI artifacts, S3/GitHub verification, Update Center/Nexus validation, Dev/Production deployment மற்றும் ECR CVE remediation ஆகியவற்றை மேற்கொண்டேன்.'],
      ],
    },
    project: {
      kicker: '04 / முக்கிய திட்டம்', subtitle: 'Workers மற்றும் clients க்கான cross-platform reliability verification.', title: 'Android மற்றும் Web-க்கு ஒரே codebase.', text: 'Vouch authentication-aware routing, responsive role-based UI, Firebase Authentication, Firestore security rules, two-way ratings, verified job history, worker discovery மற்றும் public profiles ஆகியவற்றை வழங்குகிறது.', live: 'Live demo', release: 'Android release', reliability: 'Reliability Score', verified: 'Verified',
    },
    research: {
      kicker: '05 / ஆராய்ச்சி', title: 'Precision Agriculture Advisor Platform', text: 'ICSES 2024-ல் IEEE வெளியிட்ட ஆய்வு. Real-time sensor data கொண்டு soil analysis மற்றும் crop recommendation செய்யும் end-to-end system உருவாக்கப்பட்டது; CatBoost மற்றும் MLP models மூலம் 94% வரை accuracy கிடைத்தது.', publication: 'IEEE வெளியீட்டைப் பார்க்க',
    },
    contact: {
      kicker: '06 / தொடர்பு', title: 'பயனுள்ள ஒன்றை சேர்ந்து உருவாக்கலாம்.', text: 'Backend systems, platform reliability, developer tooling மற்றும் product engineering இணையும் software engineering roles-ல் ஆர்வம் உள்ளது.',
    },
    footer: 'React, Three.js & Framer Motion மூலம் உருவாக்கப்பட்டது',
  },

  es: {
    nav: { work: 'Trabajo', experience: 'Experiencia', projects: 'Proyectos', contact: 'Contacto', resume: 'CV' },
    customize: 'Personalizar',
    settings: { title: 'Personalizar portafolio', theme: 'Color de acento', textSize: 'Tamaño de texto', language: 'Idioma', reset: 'Restablecer', close: 'Cerrar', smaller: 'Texto más pequeño', normal: 'Texto predeterminado', larger: 'Texto más grande' },
    hero: {
      eyebrow: 'Software Engineer • Golang Backend Developer',
      line1: 'Construyo sistemas',
      line2: 'fiables que llegan a producción.',
      text: 'Soy Poornima K, ingeniera de software especializada en desarrollo backend con Golang, APIs REST y PostgreSQL, con experiencia práctica en Jenkins CI/CD, Kubernetes, AWS e ingeniería de producción. Disfruto resolviendo problemas complejos y construyendo sistemas fiables y mantenibles.',
      explore: 'Ver mi trabajo', email: 'Escríbeme',
    },
    capabilities: {
      kicker: '01 / Capacidades', title: 'Tecnología respaldada por experiencia real.', intro: 'Sin barras de porcentaje. Cada tecnología se relaciona con trabajo que realmente he construido, depurado, integrado o entregado.',
      cards: [
        ['Golang & Backend', 'APIs REST, microservicios, flujos de autenticación, validación, integración con PostgreSQL y pruebas en Go.'],
        ['Jenkins & CI/CD', 'Actualizaciones de plugins, dependencias, flujos HPI, releases, autenticación y resolución de incidencias en producción.'],
        ['Platform Engineering', 'Depuración con logs de Kubernetes, análisis en Linux, AWS S3/ECR, Tilt y fiabilidad de entornos.'],
        ['Flutter & Product', 'Interfaces Android/Web responsivas, autenticación, integración de APIs, Riverpod, GoRouter y Firebase.'],
        ['Security & Reliability', 'Credenciales, seguridad de dependencias, remediación de CVE, validación de releases y workflows resilientes.'],
        ['Data & Research', 'Procesamiento en tiempo real, sistemas ML con sensores e investigación con CatBoost y MLP.'],
      ],
    },
    experience: {
      kicker: '02 / Experiencia', title: 'Ingeniería a través de todo el stack.',
      roles: [
        ['Associate Engineer', 'Desarrollo servicios backend en Golang, trabajo con PostgreSQL, mejoro Jenkins y CI/CD, resuelvo incidencias de producción e integración y apoyo entregas multiplataforma con Flutter.'],
        ['Software Engineer Intern', 'Desarrollé endpoints backend y experiencias Flutter para Android/Web, incluyendo autenticación, OTP, reCAPTCHA, onboarding y chat en tiempo real.'],
      ],
    },
    stories: {
      kicker: '03 / Historias de ingeniería', title: 'Trabajo seleccionado en producción.', intro: 'Problemas que exigieron ownership, depuración y entrega, no solo implementación.',
      cards: [
        ['Platform Engineering', 'Gestión de un incidente de producción en Jenkins', 'Investigué una caída tras una actualización de Jenkins, rastreé los síntomas mediante logs de Kubernetes hasta un conflicto de compatibilidad entre plugins y coordiné la recuperación.'],
        ['Security + Product Engineering', 'Validación de credenciales respaldada por Vault', 'Construí un validador de unicidad de credenciales con HashiCorp Vault para los ámbitos Global, User y Folder, y entregué un banner de estado de licencia en Jenkins.'],
        ['Release Engineering', 'Flujo completo de releases de plugins', 'Gestioné versionado, CI, artefactos HPI, verificaciones en S3/GitHub, Update Center/Nexus, despliegues Dev/Producción y remediación de CVE en ECR.'],
      ],
    },
    project: {
      kicker: '04 / Proyecto destacado', subtitle: 'Verificación de fiabilidad multiplataforma para trabajadores y clientes.', title: 'Una sola base de código para Android y Web.', text: 'Vouch implementa routing según autenticación, UI responsiva por roles, Firebase Authentication, reglas de seguridad de Firestore, valoraciones bidireccionales, historial laboral verificado, búsqueda de trabajadores y perfiles públicos compartibles.', live: 'Demo en vivo', release: 'Versión Android', reliability: 'Puntuación de fiabilidad', verified: 'Verificado',
    },
    research: {
      kicker: '05 / Investigación', title: 'Precision Agriculture Advisor Platform', text: 'Investigación publicada por IEEE en ICSES 2024. Construí un sistema de extremo a extremo con datos de sensores en tiempo real para análisis de suelo y recomendación de cultivos, con modelos CatBoost y MLP que alcanzaron hasta un 94% de precisión.', publication: 'Ver publicación IEEE',
    },
    contact: {
      kicker: '06 / Contacto', title: 'Construyamos algo que importe.', text: 'Me interesan roles de ingeniería de software donde se unan backend, fiabilidad de plataforma, herramientas para desarrolladores e ingeniería de producto.',
    },
    footer: 'Construido con React, Three.js y Framer Motion',
  },

  de: {
    nav: { work: 'Arbeit', experience: 'Erfahrung', projects: 'Projekte', contact: 'Kontakt', resume: 'Lebenslauf' },
    customize: 'Anpassen',
    settings: { title: 'Portfolio anpassen', theme: 'Akzentfarbe', textSize: 'Textgröße', language: 'Sprache', reset: 'Zurücksetzen', close: 'Schließen', smaller: 'Kleinerer Text', normal: 'Standardtext', larger: 'Größerer Text' },
    hero: {
      eyebrow: 'Software Engineer • Golang Backend Developer',
      line1: 'Ich entwickle zuverlässige',
      line2: 'Systeme, die produktiv gehen.',
      text: 'Ich bin Poornima K, Software Engineer mit Schwerpunkt auf Golang-Backend-Entwicklung, REST APIs und PostgreSQL sowie praktischer Erfahrung mit Jenkins CI/CD, Kubernetes, AWS und Production Engineering. Ich löse gerne komplexe technische Probleme und entwickle zuverlässige, wartbare Systeme.',
      explore: 'Meine Arbeit ansehen', email: 'E-Mail',
    },
    capabilities: {
      kicker: '01 / Fähigkeiten', title: 'Technologie mit nachweisbarer Praxiserfahrung.', intro: 'Keine Prozentbalken. Jede Technologie hier basiert auf Arbeit, die ich tatsächlich entwickelt, debuggt, integriert oder ausgeliefert habe.',
      cards: [
        ['Golang & Backend', 'REST APIs, Microservices, Authentifizierungsabläufe, Validierungslogik, PostgreSQL-Integration und Go-Tests.'],
        ['Jenkins & CI/CD', 'Plugin-Upgrades, Dependency Management, HPI-Workflows, Release Ownership, Authentifizierung und Production Troubleshooting.'],
        ['Platform Engineering', 'Kubernetes-Log-Debugging, Linux-Incident-Analyse, AWS S3/ECR, Tilt und Zuverlässigkeit von Umgebungen.'],
        ['Flutter & Product', 'Responsive Android/Web-Oberflächen, Authentifizierung, API-Integration, Riverpod, GoRouter und Firebase.'],
        ['Security & Reliability', 'Credential Handling, Dependency Security, CVE-Behebung, Release-Validierung und robuste Workflows.'],
        ['Data & Research', 'Echtzeit-Datenverarbeitung, sensorbasierte ML-Systeme sowie Forschung mit CatBoost und MLP.'],
      ],
    },
    experience: {
      kicker: '02 / Erfahrung', title: 'Engineering über den gesamten Stack.',
      roles: [
        ['Associate Engineer', 'Ich entwickle Golang-Backend-Services, arbeite mit PostgreSQL, verbessere Jenkins- und CI/CD-Workflows, behebe Produktions- und Integrationsprobleme und unterstütze Flutter-Deliveries.'],
        ['Software Engineer Intern', 'Ich entwickelte Backend-Endpunkte und Flutter-Erlebnisse für Android/Web, einschließlich Authentifizierung, OTP, reCAPTCHA, Onboarding und Echtzeit-Chat.'],
      ],
    },
    stories: {
      kicker: '03 / Engineering Stories', title: 'Ausgewählte Produktionsarbeit.', intro: 'Probleme, die Ownership, Debugging und Shipping erforderten – nicht nur Implementierung.',
      cards: [
        ['Platform Engineering', 'Ownership eines Jenkins-Produktionsvorfalls', 'Ich untersuchte einen Ausfall nach einem Jenkins-Core-Upgrade, verfolgte Symptome über Kubernetes-Logs bis zu einem Plugin-Kompatibilitätskonflikt und koordinierte die Wiederherstellung.'],
        ['Security + Product Engineering', 'Vault-gestützte Credential-Validierung', 'Ich entwickelte einen HashiCorp-Vault-gestützten Validator für eindeutige Credentials über Global-, User- und Folder-Scopes und lieferte ein License-Status-Banner in Jenkins aus.'],
        ['Release Engineering', 'End-to-End Plugin Release Flow', 'Ich verantwortete Versionierung, CI-Builds, HPI-Artefakte, S3/GitHub-Verifikation, Update Center/Nexus, Dev/Production-Deployments und CVE-Behebung in ECR.'],
      ],
    },
    project: {
      kicker: '04 / Ausgewähltes Projekt', subtitle: 'Plattformübergreifende Zuverlässigkeitsprüfung für Arbeitskräfte und Kunden.', title: 'Eine Codebasis für Android und Web.', text: 'Vouch bietet auth-basiertes Routing, responsive rollenbasierte UI, Firebase Authentication, Firestore-Sicherheitsregeln, gegenseitige Bewertungen, verifizierte Job-Historie, Mitarbeitersuche und öffentliche teilbare Profile.', live: 'Live-Demo', release: 'Android-Release', reliability: 'Zuverlässigkeitswert', verified: 'Verifiziert',
    },
    research: {
      kicker: '05 / Forschung', title: 'Precision Agriculture Advisor Platform', text: 'Bei ICSES 2024 von IEEE veröffentlichte Forschung. Ich entwickelte ein End-to-End-System mit Echtzeit-Sensordaten für Bodenanalyse und Pflanzenempfehlung; CatBoost- und MLP-Modelle erreichten bis zu 94% Genauigkeit.', publication: 'IEEE-Veröffentlichung ansehen',
    },
    contact: {
      kicker: '06 / Kontakt', title: 'Lassen Sie uns etwas Relevantes entwickeln.', text: 'Ich interessiere mich für Software-Engineering-Rollen an der Schnittstelle von Backend-Systemen, Plattform-Zuverlässigkeit, Developer Tooling und Product Engineering.',
    },
    footer: 'Erstellt mit React, Three.js & Framer Motion',
  },

  ja: {
    nav: { work: 'スキル', experience: '経験', projects: 'プロジェクト', contact: '連絡先', resume: '履歴書' },
    customize: 'カスタマイズ',
    settings: { title: 'ポートフォリオ設定', theme: 'アクセントカラー', textSize: '文字サイズ', language: '言語', reset: 'リセット', close: '閉じる', smaller: '小さい文字', normal: '標準文字', larger: '大きい文字' },
    hero: {
      eyebrow: 'Software Engineer • Golang Backend Developer',
      line1: '信頼できる',
      line2: '本番システムを構築します。',
      text: 'Poornima Kです。Golangバックエンド開発、REST API、PostgreSQLを専門とするSoftware Engineerで、Jenkins CI/CD、Kubernetes、AWS、Production Engineeringの実務経験があります。複雑な技術課題を解決し、信頼性と保守性の高いシステムを構築することが得意です。',
      explore: '実績を見る', email: 'メール',
    },
    capabilities: {
      kicker: '01 / スキル', title: '実務経験に裏付けられた技術力。', intro: '割合のスキルバーは使いません。ここにある技術はすべて、実際に開発・デバッグ・統合・リリースした経験に基づいています。',
      cards: [
        ['Golang & Backend', 'REST API、microservices、認証フロー、validation、PostgreSQL連携、Go testing。'],
        ['Jenkins & CI/CD', 'Plugin upgrade、dependency management、HPI workflow、release ownership、認証、production troubleshooting。'],
        ['Platform Engineering', 'Kubernetes log debugging、Linux incident analysis、AWS S3/ECR、Tilt、environment reliability。'],
        ['Flutter & Product', 'Responsive Android/Web UI、認証、API integration、Riverpod、GoRouter、Firebase。'],
        ['Security & Reliability', 'Credential handling、dependency security、CVE remediation、release validation、resilient workflows。'],
        ['Data & Research', 'Real-time data processing、sensor-driven ML systems、CatBoostとMLPを用いた研究。'],
      ],
    },
    experience: {
      kicker: '02 / 経験', title: 'スタック全体にわたるエンジニアリング。',
      roles: [
        ['Associate Engineer', 'Golang backend servicesの開発、PostgreSQL、Jenkins/CI/CD workflow改善、production/integration issue対応、Flutter delivery支援を担当しています。'],
        ['Software Engineer Intern', 'Backend endpointsとFlutter Android/Webを開発し、authentication、OTP、reCAPTCHA、onboarding、real-time chat integrationを実装しました。'],
      ],
    },
    stories: {
      kicker: '03 / Engineering Stories', title: '選定したプロダクション実績。', intro: '実装だけでなく、ownership、debugging、shippingが必要だった課題です。',
      cards: [
        ['Platform Engineering', 'Jenkins production incident ownership', 'Jenkins core upgrade後の障害を調査し、Kubernetes logsからplugin compatibility conflictを特定してenvironment recoveryを調整しました。'],
        ['Security + Product Engineering', 'Vault-backed credential validation', 'Global/User/Folder scopesを対象にHashiCorp Vault-backed credential uniqueness validatorを構築し、Jenkins distributionにlicense-status bannerを導入しました。'],
        ['Release Engineering', 'End-to-end plugin release flow', 'Version tagging、CI builds、HPI artifacts、S3/GitHub verification、Update Center/Nexus、Dev/Production deployment、ECR CVE remediationを担当しました。'],
      ],
    },
    project: {
      kicker: '04 / 注目プロジェクト', subtitle: 'Workersとclients向けのcross-platform reliability verification。', title: 'AndroidとWebを単一コードベースで。', text: 'Vouchはauthentication-aware routing、responsive role-based UI、Firebase Authentication、Firestore security rules、two-way ratings、verified job history、worker discovery、public shareable profilesを実装しています。', live: 'ライブデモ', release: 'Androidリリース', reliability: 'Reliability Score', verified: 'Verified',
    },
    research: {
      kicker: '05 / 研究', title: 'Precision Agriculture Advisor Platform', text: 'ICSES 2024でIEEEに掲載された研究です。Real-time sensor dataを用いてsoil analysisとcrop recommendationを行うend-to-end systemを構築し、CatBoostとMLPで最大94%のaccuracyを達成しました。', publication: 'IEEE論文を見る',
    },
    contact: {
      kicker: '06 / 連絡先', title: '価値あるものを一緒に作りましょう。', text: 'Backend systems、platform reliability、developer tooling、product engineeringが交わるSoftware Engineeringの役割に関心があります。',
    },
    footer: 'React, Three.js & Framer Motionで構築',
  },
} as const
