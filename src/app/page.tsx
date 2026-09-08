"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Download,
  Code2,
  Smartphone,
  Database,
  Terminal,
} from "lucide-react";

const projects = [
  {
    number: "01",
    type: "WEB",
    title: "Portfolio Website",
    text: "A responsive developer portfolio built around clear typography, simple navigation, and a warm editorial visual system.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    image: "/project-portfolio.png",
    github: "https://github.com/Abhay1777/Portfolio",
    live: "https://abhay1777.github.io/Portfolio/",
  },
  {
    number: "02",
    type: "ANDROID",
    title: "Tic Tac Toe",
    text: "A native Android game with win detection, score persistence, and a straightforward mobile-first interface.",
    stack: ["Java", "Android Studio", "XML"],
    image: "/project-tictactoe.png",
    github: "https://github.com/Abhay1777",
    live: null,
  },
  {
    number: "03",
    type: "ANDROID",
    title: "Precision Stopwatch",
    text: "A native stopwatch app focused on accurate timing, lap tracking, and practical Android UI patterns.",
    stack: ["Java", "Android SDK", "MediaPlayer"],
    image: "/project-stopwatch.png",
    github: "https://github.com/Abhay1777",
    live: null,
  },
];

const skills = [
  { icon: Code2, title: "Web", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { icon: Smartphone, title: "Android", items: ["Java", "Android Studio", "XML", "Firebase"] },
  { icon: Database, title: "Backend & Tools", items: ["Node.js", "Git", "GitHub", "REST APIs"] },
  { icon: Terminal, title: "Core", items: ["C", "C++", "Java", "DSA", "Problem Solving"] },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="site-header">
        <Link href="#home" className="brand" onClick={closeMenu} aria-label="Abhay Dubey home">
          <span className="brand-mark">AD</span>
          <span className="brand-name">Abhay Dubey</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <a className="header-resume" href="/Abhay_Dubey_CV.pdf" download>
          <Download size={15} />
          Resume
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <Link href="#about" onClick={closeMenu}>About</Link>
            <Link href="#skills" onClick={closeMenu}>Skills</Link>
            <Link href="#projects" onClick={closeMenu}>Projects</Link>
            <Link href="#contact" onClick={closeMenu}>Contact</Link>
            <a href="/Abhay_Dubey_CV.pdf" download onClick={closeMenu}>Download Resume</a>
          </nav>
        )}
      </header>

      <section id="home" className="hero-editorial">
        <div className="hero-copy">
          <p className="eyebrow">IT ENGINEERING STUDENT · MUMBAI</p>
          <h1>
            I build
            <span>useful things</span>
            for the web & mobile.
          </h1>
          <p className="hero-intro">
            I&apos;m Abhay — a second-year Information Technology student who enjoys turning ideas into
            working interfaces, Android apps, and clean code.
          </p>

          <div className="hero-actions">
            <Link href="#projects" className="button button-dark">
              See my work <ArrowUpRight size={17} />
            </Link>
            <a href="mailto:abhaydubey1177@gmail.com" className="text-link">
              Let&apos;s talk <ArrowDownRight size={17} />
            </a>
          </div>

          <div className="hero-meta">
            <span>OPEN TO INTERNSHIPS</span>
            <span>2026</span>
          </div>
        </div>

        <div className="hero-art">
          <div className="portrait-frame">
            <Image
              src="/profile.jpg"
              alt="Abhay Dubey"
              fill
              priority
              sizes="(max-width: 900px) 80vw, 42vw"
              className="portrait"
            />
          </div>
          <div className="art-note art-note-top">
            <span>Currently learning</span>
            React · Next.js · DSA
          </div>
          <div className="art-note art-note-bottom">
            <span>Based in</span>
            Mumbai, India
          </div>
        </div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDownRight size={16} />
        </div>
      </section>

      <section id="about" className="editorial-section about-section">
        <div className="section-index">01</div>
        <div className="section-heading">
          <p className="eyebrow">ABOUT</p>
          <h2>Still learning.<br /><em>Already building.</em></h2>
        </div>

        <div className="about-content">
          <p className="lead-copy">
            I&apos;m studying Information Technology and spending most of my time outside class actually
            building things. I like software that feels simple to use and code that stays understandable
            six months later.
          </p>
          <p>
            My current focus is full-stack web development, Android development, and getting much better
            at data structures and problem solving. I&apos;ve also had early industry exposure through an
            internship at V2VEDtech.
          </p>

          <div className="about-facts">
            <div><strong>15+</strong><span>GitHub repos</span></div>
            <div><strong>3+</strong><span>Android projects</span></div>
            <div><strong>BE IT</strong><span>Second year</span></div>
          </div>
        </div>
      </section>

      <section id="skills" className="editorial-section skills-section">
        <div className="section-index">02</div>
        <div className="section-heading">
          <p className="eyebrow">SKILLS</p>
          <h2>Tools I use<br /><em>to make things work.</em></h2>
        </div>

        <div className="skills-grid">
          {skills.map(({ icon: Icon, title, items }) => (
            <article key={title} className="skill-block">
              <div className="skill-topline">
                <Icon size={19} strokeWidth={1.8} />
                <span>{title}</span>
              </div>
              <div className="skill-items">
                {items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="editorial-section project-section">
        <div className="section-index">03</div>
        <div className="section-heading project-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>A few things<br /><em>I&apos;ve shipped.</em></h2>
          <p>Small, practical projects that show how I think, build, and learn.</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-image-wrap">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 900px) 92vw, 45vw"
                  className="project-image"
                />
              </div>

              <div className="project-details">
                <div className="project-top">
                  <span>{project.number}</span>
                  <span>{project.type}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="project-tags">
                  {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live site <ArrowUpRight size={15} /></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-band">
        <div>
          <p className="eyebrow">04 · CONTACT</p>
          <h2>Have something<br /><em>worth building?</em></h2>
        </div>
        <div className="contact-side">
          <p>Internship, project, collaboration, or just a good conversation. I&apos;m happy to hear from you.</p>
          <a className="contact-email" href="mailto:abhaydubey1177@gmail.com">
            abhaydubey1177@gmail.com <ArrowUpRight size={18} />
          </a>
          <div className="social-row">
            <a href="https://github.com/Abhay1777" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
            <a href="https://www.linkedin.com/in/abhay-dubey-67753a312/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
            <a href="mailto:abhaydubey1177@gmail.com" aria-label="Email"><Mail size={19} /></a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Abhay Dubey</span>
        <span>Designed & built with intent.</span>
        <Link href="#home">Back to top ↑</Link>
      </footer>
    </main>
  );
}
