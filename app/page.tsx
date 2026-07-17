"use client";

import { useState } from "react";
import Image from "next/image";

const Arrow = () => <span aria-hidden="true">↗</span>;

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a className="brand" href="#home" aria-label="NISHTA IAS Academy home">
      <Image
        className={compact ? "brand-logo brand-logo-compact" : "brand-logo"}
        src="/nishta-logo.png"
        alt="NISHTA IAS — Empowering Minds, AGP Group"
        width={225}
        height={225}
        priority={!compact}
      />
    </a>
  );
}

const pillars = [
  {
    index: "01",
    title: "Interview-vetted mentors",
    body: "Direct one-to-one accountability led exclusively by mentors who have cleared the UPSC personality test stage.",
  },
  {
    index: "02",
    title: "Data-backed performance",
    body: "Daily study reports, strict accountability tracking, and diagnostics that turn every weak point into a clear next step.",
  },
  {
    index: "03",
    title: "One learning ecosystem",
    body: "Classroom depth meets remote preparation through cloud-synchronised mobile learning and continuously updated resources.",
  },
];

const appFeatures = [
  "Daily current affairs & faculty analysis",
  "Exclusive editorial article vaults",
  "Syllabus-aligned interactive MCQs",
  "Monthly magazines, Budget & Yojana summaries",
  "Hands-free text-to-speech learning",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="home">
      <header className="site-header">
        <div className="nav-shell">
          <Brand />
          <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a>
            <a href="#resources" onClick={() => setMenuOpen(false)}>Resources</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <a className="nav-cta" href="tel:+919187111424">Talk to a mentor <Arrow /></a>
          <button
            className="menu-button"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> UPSC CSE · 2027 / 2028</p>
            <h1 id="hero-title">Master the UPSC Civil Services Examination with <em>precision.</em></h1>
            <p className="hero-lede">
              Bengaluru&apos;s premier institute for tech-driven learning, rigorous mentorship, and custom exam programs—built around humility, discipline, and strategy.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#samagra">Explore Samagra <Arrow /></a>
              <a className="button button-secondary" href="#resources">Download NISHTHA App</a>
            </div>
          </div>

          <aside className="strategy-panel" aria-label="NISHTA preparation system">
            <div className="panel-topline">
              <span>Preparation protocol</span>
              <span className="live-dot">Live</span>
            </div>
            <div className="orbit-system" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="core">N</div>
              <span className="orbit-label label-one">Learn</span>
              <span className="orbit-label label-two">Apply</span>
              <span className="orbit-label label-three">Refine</span>
            </div>
            <div className="progress-row">
              <span>Mentorship loop</span>
              <strong>1:1</strong>
            </div>
            <div className="progress-track"><span /></div>
            <div className="panel-metrics">
              <div><strong>365</strong><span>day framework</span></div>
              <div><strong>300+</strong><span>optional target</span></div>
              <div><strong>24/7</strong><span>app access</span></div>
            </div>
          </aside>
        </div>
        <div className="hero-foot">
          <p>Chandra Layout · Bengaluru</p>
          <a href="#about">Discover our approach <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="trust-strip" aria-label="Core strengths">
        <div className="section-shell trust-grid">
          <p>Built for serious aspirants</p>
          <div><strong>01</strong><span>Interview-cleared mentors</span></div>
          <div><strong>02</strong><span>Daily accountability</span></div>
          <div><strong>03</strong><span>Technology-led learning</span></div>
        </div>
      </section>

      <section className="section-shell legacy section-pad" id="about">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow"><span /> Our foundation</p>
            <h2>Ambition, anchored<br />in humility.</h2>
          </div>
          <p>
            NISHTA IAS Academy was officially inaugurated in Chandra Layout by <strong>Dr. C.N. Manjunath</strong>, Hon&apos;ble Bangalore Rural MP—marking the beginning of a learning culture built on exacting standards and grounded leadership.
          </p>
        </div>
        <div className="legacy-stage">
          <div className="quote-card">
            <span className="quote-mark">“</span>
            <blockquote>
              True success emerges at the intersection of academic mastery, unwavering humility, strict personal discipline, and tireless continuous effort.
            </blockquote>
            <p>NISHTA core philosophy</p>
          </div>
          <div className="founders-card">
            <div className="founder-label">Founding leadership & patrons</div>
            <ul>
              <li><span>DC</span> Dr. Chandrashekar</li>
              <li><span>AY</span> Arun Y. C. <small>Ex-Army</small></li>
              <li><span>AD</span> Adesh</li>
              <li><span>GU</span> Guru</li>
              <li><span>JC</span> Jitendra Choudhary</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="dark-section section-pad" id="why-us">
        <div className="section-shell">
          <div className="section-heading dark-heading">
            <p className="eyebrow"><span /> Why NISHTA</p>
            <h2>A preparation system.<br />Not another classroom.</h2>
          </div>
          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <article className="pillar-card" key={pillar.index}>
                <span>{pillar.index}</span>
                <div className="pillar-icon" aria-hidden="true"><i /><i /><i /></div>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-pad" id="programs">
        <div className="section-heading programs-heading">
          <div>
            <p className="eyebrow"><span /> Academic cohorts</p>
            <h2>Choose your<br />path to mastery.</h2>
          </div>
          <p>Focused programs. Measurable progress. No fragmented preparation.</p>
        </div>
        <div className="program-stack">
          <article className="program-card">
            <div className="program-code">GS / 01</div>
            <div>
              <p className="program-kicker">Foundation cohort</p>
              <h3>General Studies Core</h3>
              <p>End-to-end Prelims-cum-Mains integration for aspirants who need a complete, structured preparation architecture.</p>
            </div>
            <ul>
              <li>Comprehensive syllabus tracking</li>
              <li>Current affairs mapping</li>
              <li>Core concept architecture</li>
              <li>Answer-writing foundations</li>
            </ul>
            <a href="tel:+919187111424" aria-label="Enquire about General Studies Core"><Arrow /></a>
          </article>
          <article className="program-card feature-program">
            <div className="program-code">ANT / 02</div>
            <div>
              <p className="program-kicker">Optional specialisation · Reddy Prakash</p>
              <h3>Anthropology Optional</h3>
              <p>A concept-driven framework engineered around total curriculum execution, evaluation, and high-frequency revision.</p>
            </div>
            <div className="score-seal"><strong>300+</strong><span>target<br />benchmark</span></div>
            <ul>
              <li>Complete syllabus execution</li>
              <li>Targeted Mains evaluation</li>
              <li>High-frequency revision</li>
            </ul>
            <a href="tel:+919110690179" aria-label="Enquire about Anthropology Optional"><Arrow /></a>
          </article>
        </div>
      </section>

      <section className="samagra-section section-pad" id="samagra">
        <div className="section-shell samagra-grid">
          <div className="samagra-copy">
            <p className="eyebrow"><span /> Flagship program</p>
            <h2>SAMAGRA</h2>
            <h3>One year. One system.<br />No blind spots.</h3>
            <p>
              A rigorous full-year test framework mapped explicitly for UPSC CSE 2027 and 2028—where daily discipline becomes measurable momentum.
            </p>
            <a className="button button-primary" href="tel:+919187111424">Reserve a mentorship call <Arrow /></a>
          </div>
          <div className="samagra-visual" aria-label="Samagra performance dashboard preview">
            <div className="dash-header"><span>Consistency index</span><strong>92.4</strong></div>
            <div className="bar-chart" aria-hidden="true">
              {[38, 52, 46, 68, 61, 78, 74, 88, 84, 96, 90, 100].map((height, i) => (
                <i style={{ height: `${height}%` }} key={i} />
              ))}
            </div>
            <div className="dash-labels"><span>Week 01</span><span>Week 12</span></div>
            <div className="dash-list">
              <div><span>01</span><p>One-to-one mentorship cycles</p><b>Active</b></div>
              <div><span>02</span><p>Daily performance reporting</p><b>Daily</b></div>
              <div><span>03</span><p>Mains keyword diagnostics</p><b>Mapped</b></div>
            </div>
          </div>
        </div>
      </section>

      <section className="app-section section-pad" id="resources">
        <div className="section-shell app-grid">
          <div className="phone-stage" aria-hidden="true">
            <div className="phone">
              <div className="phone-top"><Brand compact /><span>09:41</span></div>
              <p>Today&apos;s brief</p>
              <h3>India & the changing world order</h3>
              <div className="audio-wave"><i /><i /><i /><i /><i /><i /><i /></div>
              <div className="phone-card">
                <span>Daily MCQ</span>
                <strong>12 / 15</strong>
                <small>Excellent momentum</small>
              </div>
              <div className="phone-nav"><i /><i /><i /><i /></div>
            </div>
            <span className="float-chip chip-one">CA · Daily</span>
            <span className="float-chip chip-two">Text to speech</span>
          </div>
          <div className="app-copy">
            <p className="eyebrow"><span /> UPSC NISHTHA App</p>
            <h2>Your preparation.<br />Always within reach.</h2>
            <p>A single-source companion for serious aspirants across India, curated and managed directly by our expert faculty.</p>
            <ul>
              {appFeatures.map((feature, i) => (
                <li key={feature}><span>{String(i + 1).padStart(2, "0")}</span>{feature}</li>
              ))}
            </ul>
            <a className="button button-dark" href="https://play.google.com/store/search?q=UPSC%20NISHTHA&c=apps" target="_blank" rel="noreferrer">Get it on Google Play <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell contact-grid">
          <div className="contact-copy">
            <p className="eyebrow light-eyebrow"><span /> Visit the academy</p>
            <h2>Your UPSC dream deserves the right strategy.</h2>
            <p>S, No.26, near Davanagere Benne Dose, Nagarbhavi 1st Stage, Chandra Layout, Bengaluru, Karnataka 560040</p>
            <div className="contact-actions">
              <a href="tel:+919187111424"><small>Primary helpdesk</small><strong>+91 91871 11424</strong></a>
              <a href="tel:+919110690179"><small>Secondary helpdesk</small><strong>+91 91106 90179</strong></a>
            </div>
            <div className="social-links">
              <a href="https://t.me/Nishtaias" target="_blank" rel="noreferrer">Telegram <Arrow /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram <Arrow /></a>
            </div>
          </div>
          <div className="map-card">
            <iframe
              title="NISHTA IAS Academy location"
              src="https://www.google.com/maps?q=Davanagere+Benne+Dose+Nagarbhavi+1st+Stage+Bengaluru&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a href="https://www.google.com/maps/search/?api=1&query=Davanagere+Benne+Dose+Nagarbhavi+1st+Stage+Bengaluru" target="_blank" rel="noreferrer">
              Open in Maps <Arrow />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-grid">
          <div>
            <Brand />
            <p>Your UPSC dream deserves<br />the right strategy.</p>
          </div>
          <div className="footer-links">
            <div><strong>Explore</strong><a href="#about">About</a><a href="#programs">Programs</a><a href="#samagra">Samagra</a></div>
            <div><strong>Connect</strong><a href="https://t.me/Nishtaias">Telegram</a><a href="https://instagram.com">Instagram</a><a href="tel:+919187111424">Call us</a></div>
          </div>
        </div>
        <div className="section-shell footer-bottom">
          <span>© {new Date().getFullYear()} NISHTA IAS Academy</span>
          <span>Precision · Humility · Strategy</span>
        </div>
      </footer>
    </main>
  );
}
