import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  ServerCog,
  ShieldCheck,
  Smartphone,
  TerminalSquare,
} from 'lucide-react'
import Scene from './components/Scene'
import CustomizeMenu, { FontScale, ThemeName } from './components/CustomizeMenu'
import { LanguageCode, translations } from './translations'

const skillMeta = [
  { icon: Code2, tags: ['Golang', 'REST', 'Microservices', 'PostgreSQL'] },
  { icon: ServerCog, tags: ['Jenkins', 'CI/CD', 'Git', 'SonarQube'] },
  { icon: TerminalSquare, tags: ['Kubernetes', 'Linux', 'AWS', 'ECR'] },
  { icon: Smartphone, tags: ['Flutter', 'Dart', 'Firebase', 'Riverpod'] },
  { icon: ShieldCheck, tags: ['Vault', 'CVE', 'Auth', 'Debugging'] },
  { icon: Database, tags: ['Python', 'CatBoost', 'MLP', 'Realtime'] },
]

const experienceMeta = [
  { period: 'May 2025 — Present', org: 'AgilityDelivered' },
  { period: 'Sep 2024 — Apr 2025', org: 'AgilityDelivered' },
]

function readStoredLanguage(): LanguageCode {
  const value = localStorage.getItem('portfolio-language')
  return value === 'ta' || value === 'es' || value === 'de' || value === 'ja' ? value : 'en'
}

function readStoredTheme(): ThemeName {
  const value = localStorage.getItem('portfolio-theme')
  return value === 'emerald' || value === 'sunset' || value === 'purple' ? value : 'ocean'
}

function readStoredFontScale(): FontScale {
  const value = Number(localStorage.getItem('portfolio-font-scale'))
  return value === 0.9 || value === 1.1 ? value : 1
}

function App() {
  const [language, setLanguage] = useState<LanguageCode>(readStoredLanguage)
  const [theme, setTheme] = useState<ThemeName>(readStoredTheme)
  const [fontScale, setFontScale] = useState<FontScale>(readStoredFontScale)
  const t = translations[language]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.style.setProperty('--font-scale', String(fontScale))
    localStorage.setItem('portfolio-font-scale', String(fontScale))
  }, [fontScale])

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('portfolio-language', language)
  }, [language])

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Home">
          PK<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#work">{t.nav.work}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>

        <div className="nav-actions">
          <CustomizeMenu
            language={language}
            setLanguage={setLanguage}
            theme={theme}
            setTheme={setTheme}
            fontScale={fontScale}
            setFontScale={setFontScale}
            copy={{ customize: t.customize, ...t.settings }}
          />
          <a className="ghost-button resume-button" href={`${import.meta.env.BASE_URL}Poornima_K_Resume_Backend.pdf`} target="_blank" rel="noreferrer">
            {t.nav.resume} <ArrowUpRight size={15} />
            </a>
      </div>
      </nav>

      <section className="hero shell" id="top">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow">{t.hero.eyebrow}</div>
          <h1>
            {t.hero.line1}
            <span> {t.hero.line2}</span>
          </h1>
          <p className="hero-text">{t.hero.text}</p>

          <div className="hero-actions">
            <a className="primary-button" href="#work">
              {t.hero.explore} <ArrowUpRight size={17} />
            </a>
            <a className="text-link" href="https://www.linkedin.com/in/poornima-kannan-2bab7b232/" target="_blank" rel="noreferrer">
              <Linkedin size={17} /> LinkedIn
            </a>
            <a className="text-link" href="mailto:poornimakannan73@gmail.com">
              <Mail size={17} /> {t.hero.email}
            </a>
          </div>

          <div className="mini-stack">
            {['Golang', 'Jenkins', 'Kubernetes', 'AWS', 'Flutter', 'Firebase'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-scene"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          <div className="scene-label top-left">API</div>
          <div className="scene-label top-right">CI/CD</div>
          <div className="scene-label bottom-left">CLOUD</div>
          <div className="scene-label bottom-right">MOBILE</div>
          <Scene />
        </motion.div>
      </section>

      <section className="ticker">
        <div>
          <span>GOLANG</span><i>•</i><span>JENKINS</span><i>•</i><span>KUBERNETES</span><i>•</i><span>AWS</span><i>•</i>
          <span>POSTGRESQL</span><i>•</i><span>FLUTTER</span><i>•</i><span>FIREBASE</span><i>•</i><span>JAVA</span>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <div>
            <span className="section-kicker">{t.capabilities.kicker}</span>
            <h2>{t.capabilities.title}</h2>
          </div>
          <p>{t.capabilities.intro}</p>
        </div>

        <div className="skill-grid">
          {t.capabilities.cards.map((copy, i) => {
            const Icon = skillMeta[i].icon
            return (
              <motion.article
                className="skill-card"
                key={copy[0]}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="icon-box"><Icon size={21} /></div>
                <h3>{copy[0]}</h3>
                <p>{copy[1]}</p>
                <div className="tag-row">
                  {skillMeta[i].tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section className="section shell" id="experience">
        <div className="section-heading narrow">
          <div>
            <span className="section-kicker">{t.experience.kicker}</span>
            <h2>{t.experience.title}</h2>
          </div>
        </div>

        <div className="timeline">
          {t.experience.roles.map((copy, i) => (
            <motion.div
              className="timeline-item"
              key={experienceMeta[i].period}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-period">{experienceMeta[i].period}</div>
              <div>
                <h3>{copy[0]}</h3>
                <a
                  className="org"
                  href="https://agilitydelivered.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="AgilityDelivered website"
                >
                  {experienceMeta[i].org} <ArrowUpRight size={13} />
                </a>
                <p>{copy[1]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <span className="section-kicker">{t.stories.kicker}</span>
            <h2>{t.stories.title}</h2>
          </div>
          <p>{t.stories.intro}</p>
        </div>

        <div className="case-grid">
          {t.stories.cards.map((item, i) => (
            <motion.article
              className="case-card"
              key={item[1]}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <span>{item[0]}</span>
              <h3>{item[1]}</h3>
              <p>{item[2]}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section shell" id="projects">
        <div className="section-heading">
          <div>
            <span className="section-kicker">{t.project.kicker}</span>
            <h2>Vouch</h2>
          </div>
          <p>{t.project.subtitle}</p>
        </div>

        <div className="project-card">
          <div className="project-visual">
            <div className="phone mock-a">
              <div className="phone-notch" />
              <div className="mock-content">
                <div className="mock-brand">VOUCH</div>
                <div className="score">94</div>
                <div className="muted">{t.project.reliability}</div>
                <div className="mock-line" />
                <div className="mock-line short" />
              </div>
            </div>
            <div className="phone mock-b">
              <div className="phone-notch" />
              <div className="mock-content">
                <div className="mock-pill">{t.project.verified}</div>
                <div className="profile-circle" />
                <div className="mock-line" />
                <div className="mock-line short" />
                <div className="mock-line" />
              </div>
            </div>
          </div>

          <div className="project-copy">
            <span className="section-kicker">Flutter • Dart • Firebase • Riverpod • GoRouter</span>
            <h3>{t.project.title}</h3>
            <p>{t.project.text}</p>
            <div className="project-actions">
              <a className="primary-button" href="https://vouch-app-2026.web.app/" target="_blank" rel="noreferrer">
                {t.project.live} <ArrowUpRight size={17} />
              </a>
              <a className="ghost-button" href="https://github.com/poornima2330/vouch/releases" target="_blank" rel="noreferrer">
                {t.project.release} <Github size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="research-card">
          <div>
            <span className="section-kicker">{t.research.kicker}</span>
            <h2>{t.research.title}</h2>
          </div>
          <div>
            <p>{t.research.text}</p>
            <a
              className="research-link"
              href="https://ieeexplore.ieee.org/document/10910744"
              target="_blank"
              rel="noreferrer"
            >
              {t.research.publication} <ArrowUpRight size={16} />
            </a>
            <div className="tag-row large">
              <span>IEEE ICSES 2024</span><span>CatBoost</span><span>MLP</span><span>Realtime Data</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <span className="section-kicker">{t.contact.kicker}</span>
        <h2>{t.contact.title}</h2>
        <p>{t.contact.text}</p>
        <div className="contact-actions">
          <a className="primary-button" href="mailto:poornimakannan73@gmail.com">
            <Mail size={17} /> poornimakannan73@gmail.com
          </a>
          <a className="ghost-button" href="https://www.linkedin.com/in/poornima-kannan-2bab7b232/" target="_blank" rel="noreferrer">
            <Linkedin size={17} /> LinkedIn
          </a>
          <a className="ghost-button" href="https://github.com/poornima2330" target="_blank" rel="noreferrer">
            <Github size={17} /> GitHub
          </a>
        </div>
      </section>

      <footer className="shell footer">
        <span>© Poornima Karmegakannan</span>
      </footer>
    </main>
  )
}

export default App
