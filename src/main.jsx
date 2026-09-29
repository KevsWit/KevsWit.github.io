import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDown, ArrowRight, ArrowUpRight, Download, Mail, Menu, X, Github, Linkedin, Instagram, Phone, GraduationCap, BriefcaseBusiness, Award, Languages, Code2 } from 'lucide-react'
import './style.css'

const name = 'Kevin Gustavo Castillo Onofa'
const copy = {
  es: {
    nav: ['Inicio', 'Sobre mí', 'Experiencia', 'Educación', 'Habilidades', 'Certificaciones', 'Contacto'],
    eyebrow: 'INGENIERO EN CIENCIAS DE LA COMPUTACIÓN · QUITO, ECUADOR',
    hello: 'Hola, soy', role: 'Ingeniero de IA y ML. Científico de datos.',
    intro: 'Transformo ideas complejas en soluciones útiles con inteligencia artificial, datos y software.',
    view: 'Explorar mi trayectoria', cv: 'Descargar CV', selected: 'Español', scroll: 'DESPLÁZATE',
    about: 'Sobre mí', aboutLead: 'Curiosidad técnica, enfoque humano.',
    aboutText: 'Me apasiona resolver problemas complejos y crear soluciones innovadoras a través de la programación. Tengo una sólida base en algoritmos, datos, aprendizaje automático e inteligencia artificial. Busco aplicar mis conocimientos en entornos reales, fortalecer mis habilidades y desarrollar aplicaciones que generen valor.',
    experience: 'Experiencia', experienceLead: 'De los datos a productos reales.',
    education: 'Educación', educationLead: 'Una base para seguir aprendiendo.', degrees: 'Títulos',
    skills: 'Habilidades técnicas', skillsLead: 'Herramientas para construir.',
    skillLabels: ['Áreas de especialización', 'Lenguajes de programación', 'Desarrollo web', 'Sistemas operativos'],
    certs: 'Certificaciones', certsLead: 'Aprendizaje continuo.', certLink: 'Ver credencial',
    languages: 'Idiomas', spanish: 'Español', spanishLevel: 'Lengua materna · C2', english: 'Inglés', englishLevel: 'Intermedio · B1',
    contact: 'Contacto', contactLead: 'Conversemos.', contactText: '¿Tienes una idea, una oportunidad o simplemente quieres conectar? Estoy a un mensaje de distancia.',
    email: 'Escríbeme', phone: 'WhatsApp', social: 'Encuéntrame en', cvText: 'También puedes conocer más sobre mi experiencia en mi CV.',
  },
  en: {
    nav: ['Home', 'About', 'Experience', 'Education', 'Skills', 'Certifications', 'Contact'],
    eyebrow: 'COMPUTER SCIENCE ENGINEER · QUITO, ECUADOR',
    hello: "Hi, I'm", role: 'AI & ML Engineer. Data Scientist.',
    intro: 'I turn complex ideas into useful solutions with artificial intelligence, data, and software.',
    view: 'Explore my journey', cv: 'Download résumé', selected: 'English', scroll: 'SCROLL',
    about: 'About me', aboutLead: 'Technical curiosity, human focus.',
    aboutText: "I'm passionate about solving complex problems and creating innovative solutions through programming. I have a strong foundation in algorithms, data, machine learning, and artificial intelligence. I aim to apply my knowledge in real environments, strengthen my skills, and build applications that create value.",
    experience: 'Experience', experienceLead: 'From data to real products.',
    education: 'Education', educationLead: 'A foundation for lifelong learning.', degrees: 'Degrees',
    skills: 'Technical skills', skillsLead: 'Tools to build with.',
    skillLabels: ['Areas of expertise', 'Programming languages', 'Web development', 'Operating systems'],
    certs: 'Certifications', certsLead: 'Always learning.', certLink: 'View credential',
    languages: 'Languages', spanish: 'Spanish', spanishLevel: 'Native · C2', english: 'English', englishLevel: 'Intermediate · B1',
    contact: 'Contact', contactLead: "Let's talk.", contactText: 'Have an idea, an opportunity, or just want to connect? I am one message away.',
    email: 'Email me', phone: 'WhatsApp', social: 'Find me on', cvText: 'You can also learn more about my experience in my résumé.',
  },
}

const experience = [
  { company: 'Banco Pichincha', date: { es: 'Mar – Sep 2024', en: 'Mar – Sep 2024' }, role: { es: 'Pasante Datos y Analítica', en: 'Data & Analytics Intern' }, points: [{ es: 'Automatización de procesos de seguros y migración a la nube de banca, realizado en el CoE de Datos y Analítica.', en: 'Automated insurance processes and migrated banking processes to the cloud at the Data & Analytics CoE.' }] },
  { company: 'Qikstarts AI', date: { es: 'Abr – Presente', en: 'Apr – Present' }, role: { es: 'Desarrollador de IA', en: 'AI Developer' }, points: [{ es: 'Desarrollo de una plataforma de IA especializada en fidelización y ventas.', en: 'Development of an AI platform specialized in loyalty and sales.' }] },
  { company: 'Innovadevs', date: { es: 'Ago 2025 – Jul 2026', en: 'Aug 2025 – Jul 2026' }, role: { es: 'Analista de software', en: 'Software Analyst' }, points: [{ es: 'Mantenimiento y desarrollo del software GIRA.', en: 'Maintenance and development of the GIRA software.' }] },
  { company: 'Fundación Favorita', date: { es: 'Oct 2025 – Ago 2026', en: 'Oct 2025 – Aug 2026' }, role: { es: 'Ingeniero Frontend & DevOps', en: 'Frontend & DevOps Engineer' }, points: [{ es: 'Desarrollo y diseño de aplicativo web para la administración de programas y proyectos de la fundación.', en: 'Developed and designed a web application to manage the foundation’s programs and projects.' }] },
]
const education = [
  { date: '2021 – 2025', place: 'Universidad Politécnica Salesiana', location: 'Quito, Ecuador', title: { es: 'Ingeniería en Ciencias de la Computación', en: 'Computer Science Engineering' } },
  { date: '2019 – 2020', place: 'Escuela Politécnica Nacional', location: 'Quito, Ecuador', title: { es: 'Ingeniería en Desarrollo de Software (incompleto)', en: 'Software Development Engineering (incomplete)' } },
  { date: '2013 – 2019', place: 'Unidad Educativa Municipal Fernández Madrid', location: 'Quito, Ecuador', title: { es: 'Bachiller en Ciencias', en: 'High School Diploma in Science' } },
  { date: '2005 – 2013', place: 'Centro Educativo Indira Gandhi', location: 'Quito, Ecuador', title: { es: 'Estudios primarios', en: 'Primary Studies' } },
]
const certificates = [
  { year: '2023', title: { es: 'Ganador del Datatón UPS', en: 'UPS Datathon Winner' }, url: 'https://drive.google.com/file/d/1E3iOwS-pB6Sa8p0fgHTrbvHLjcSbOj13/preview' },
  { year: '2024', title: { es: 'Stratio Generative AI Data Fabric: Business', en: 'Stratio Generative AI Data Fabric: Business' }, url: 'https://drive.google.com/file/d/1acOfcystTMZy11CDl4cXHEkMzq8Jok9-/preview' },
  { year: '2024', title: { es: 'Stratio Generative AI Data Fabric: Basics', en: 'Stratio Generative AI Data Fabric: Basics' }, url: 'https://drive.google.com/file/d/1rPM5-sLs4SPPzxQr_qvhKvAUoUbuMQsK/preview' },
  { year: '2024', title: { es: 'Stratio Generative AI Data Fabric: Operations', en: 'Stratio Generative AI Data Fabric: Operations' }, url: 'https://drive.google.com/file/d/1AYBBqF4uFZmKYKOX7iWYXAdg18N9N5MS/preview' },
  { year: '2025', title: { es: 'Curso completo de Haskell: de cero a experto', en: 'Complete Haskell Course: From Zero to Expert' }, url: 'https://www.udemy.com/certificate/UC-5e170aa5-36ee-43ce-9b48-c5293ec207d7/' },
  { year: '2025', title: { es: 'Google: Análisis Avanzado de Datos', en: 'Google Advanced Data Analytics' }, url: 'https://www.coursera.org/account/accomplishments/professional-cert/C9WULYDGBPX1' },
  { year: '2025', title: { es: 'Microsoft: Desarrollo en Python', en: 'Microsoft Python Development' }, url: 'https://coursera.org/verify/professional-cert/OAJRKATAXDSP' },
  { year: '2025', title: { es: 'IBM: Ciencia de Datos', en: 'IBM Data Science' }, url: 'https://coursera.org/verify/professional-cert/9494IVPRI3A5' },
  { year: '2025', title: { es: 'Microsoft: Ingeniería de IA y ML', en: 'Microsoft AI & ML Engineering' }, url: 'https://www.coursera.org/account/accomplishments/specialization/HIJZ5FYLQZ3N' },
  { year: '2025', title: { es: 'IBM: Ingeniería de IA', en: 'IBM AI Engineering' }, url: 'https://www.coursera.org/account/accomplishments/professional-cert/0IYEE2AQF4VL' },
  { year: '2025', title: { es: 'IBM: RAG y agentes de IA', en: 'IBM RAG and Agentic AI' }, url: 'https://www.coursera.org/account/accomplishments/specialization/B9R3Y3RLOSIA' },
]
const socials = [
  { label: 'GitHub', url: 'https://github.com/KevsWit', icon: Github },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/kevicast/', icon: Linkedin },
  { label: 'Instagram', url: 'https://www.instagram.com/kevgcastillo/', icon: Instagram },
  { label: 'X', url: 'https://x.com/kevgcastillo', mark: '𝕏' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@kg_castillo', mark: '♪' },
]
const sections = ['inicio', 'sobre-mi', 'experiencia', 'educacion', 'habilidades', 'certificaciones', 'contacto']

function Heading({ number, title, lead }) { return <div className="section-heading"><span className="section-number">{number} /</span><div><h2>{title}</h2><p>{lead}</p></div></div> }

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'es')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = copy[lang]
  const cvHref = lang === 'es' ? '/cvs/Kevin_Castillo_CV.pdf' : '/cvs/Kevin_Castillo_CV_ENG.pdf'
  useEffect(() => { document.documentElement.lang = lang; document.title = `${name} · Portfolio`; localStorage.setItem('portfolio-language', lang) }, [lang])
  return <>
    <header className="site-header"><div className="header-inner">
      <a className="brand" href="#inicio" onClick={() => setMenuOpen(false)} aria-label={`${name} - ${t.nav[0]}`}><span className="brand-mark">K<span>.</span></span><span className="brand-name">Kevin Gustavo<br />Castillo Onofa</span></a>
      <nav className={menuOpen ? 'navigation open' : 'navigation'} aria-label="Principal">{sections.map((id, i) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{t.nav[i]}</a>)}</nav>
      <div className="header-actions"><div className="lang-switch" role="group" aria-label="Language / Idioma"><button className={lang === 'es' ? 'active' : ''} onClick={() => setLang('es')} aria-pressed={lang === 'es'}>ES</button><span>/</span><button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button></div><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button></div>
    </div></header>

    <main>
      <section id="inicio" className="hero"><div className="hero-grid container"><div className="hero-copy"><p className="eyebrow"><span className="status-dot" />{t.eyebrow}</p><p className="hero-hello">{t.hello}</p><h1>Kevin Gustavo<br /><span>Castillo Onofa.</span></h1><p className="hero-role">{t.role}</p><p className="hero-intro">{t.intro}</p><div className="hero-buttons"><a className="button button-primary" href="#experiencia">{t.view}<ArrowRight size={18} /></a><a className="button button-outline" href={cvHref} download>{t.cv}<Download size={18} /></a></div><div className="hero-socials">{socials.map(s => <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>{s.icon ? <s.icon size={19} /> : <span>{s.mark}</span>}</a>)}</div></div><div className="hero-visual"><div className="portrait-frame"><img src="/images/kevpic.jpg" alt={name} /><div className="portrait-line" /></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="visual-label">AI · DATA · SOFTWARE</div></div></div><a href="#sobre-mi" className="scroll-cue" aria-label={t.about}><ArrowDown size={17} /><span>{t.scroll}</span></a></section>

      <section id="sobre-mi" className="section about-section"><div className="container"><Heading number="01" title={t.about} lead={t.aboutLead} /><div className="about-grid"><p className="about-text">{t.aboutText}</p><div className="about-aside"><div className="aside-icon"><Code2 size={27} /></div><p>AI / ML</p><p>DATA SCIENCE</p><p>SOFTWARE DEVELOPMENT</p></div></div></div></section>

      <section id="experiencia" className="section tinted"><div className="container"><Heading number="02" title={t.experience} lead={t.experienceLead} /><div className="timeline">{experience.map(item => <article className="timeline-item" key={item.company}><div className="timeline-date">{item.date[lang]}</div><div className="timeline-body"><span className="timeline-icon"><BriefcaseBusiness size={17} /></span><h3>{item.role[lang]}</h3><p className="company">{item.company} · Quito, Ecuador</p><ul>{item.points.map(point => <li key={point.es}>{point[lang]}</li>)}</ul></div></article>)}</div></div></section>

      <section id="educacion" className="section"><div className="container"><Heading number="03" title={t.education} lead={t.educationLead} /><div className="education-grid">{education.map(item => <article className="education-card" key={item.place}><span className="card-date">{item.date}</span><GraduationCap size={24} className="card-icon" /><h3>{item.title[lang]}</h3><p>{item.place}</p><small>{item.location}</small></article>)}</div><div className="degree-strip"><Award size={23} /><strong>{t.degrees}</strong><span>2019 · {lang === 'es' ? 'Bachiller en Ciencias' : 'High School Diploma in Science'} · UEMFM</span><span>2025 · {lang === 'es' ? 'Ingeniero en Ciencias de la Computación' : 'Computer Science Engineer'} · UPS</span></div></div></section>

      <section id="habilidades" className="section tinted"><div className="container"><Heading number="04" title={t.skills} lead={t.skillsLead} /><div className="skills-grid">{[
        lang === 'es' ? ['Ingeniería en IA y ML', 'Ciencia de datos', 'Desarrollo web', 'Aplicaciones de escritorio', 'Algoritmos'] : ['AI & ML engineering', 'Data science', 'Web development', 'Desktop applications', 'Algorithms'],
        ['C#', 'Python', 'R', 'JavaScript', 'C++', 'Java', 'SQL', 'Haskell'],
        ['HTML5', 'CSS', 'JavaScript'], ['Linux', 'Windows']
      ].map((items, i) => <div className="skill-group" key={i}><span className="skill-index">0{i + 1}</span><h3>{t.skillLabels[i]}</h3><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div><div className="language-bar"><Languages size={22} /><strong>{t.languages}</strong><span>{t.spanish} <b>{t.spanishLevel}</b></span><span>{t.english} <b>{t.englishLevel}</b></span></div></div></section>

      <section id="certificaciones" className="section"><div className="container"><Heading number="05" title={t.certs} lead={t.certsLead} /><div className="cert-grid">{certificates.map(cert => <a className="cert-card" href={cert.url} target="_blank" rel="noopener noreferrer" key={cert.url}><div><span className="cert-year">{cert.year}</span><ArrowUpRight size={19} /></div><h3>{cert.title[lang]}</h3><span className="cert-link">{t.certLink} <ArrowRight size={15} /></span></a>)}</div></div></section>

      <section id="contacto" className="contact-section"><div className="container"><Heading number="06" title={t.contact} lead={t.contactLead} /><div className="contact-grid"><div><p className="contact-text">{t.contactText}</p><div className="contact-actions"><a className="button button-light" href="mailto:Kgus.castillo@outlook.com"><Mail size={18} />{t.email}</a><a className="button button-ghost" href="https://wa.me/593988671223" target="_blank" rel="noopener noreferrer"><Phone size={18} />{t.phone}</a></div><a className="secondary-email" href="mailto:kev.gcastillo@outlook.com">kev.gcastillo@outlook.com</a></div><div className="contact-side"><p>{t.social}</p><div className="contact-socials">{socials.map(s => <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"><span>{s.icon ? <s.icon size={20} /> : s.mark}</span>{s.label}<ArrowUpRight size={16} /></a>)}</div><p className="contact-cv">{t.cvText}</p><a className="cv-inline" href={cvHref} download>{t.cv} <Download size={17} /></a></div></div></div></section>
    </main>
    <footer><div className="container footer-inner"><span>© {new Date().getFullYear()} {name}</span><a href="#inicio">↑ {t.nav[0]}</a></div></footer>
  </>
}

createRoot(document.getElementById('root')).render(<App />)
