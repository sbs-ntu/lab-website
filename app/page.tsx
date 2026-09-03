import Image from "next/image";

const navigation = [
  ["About", "#about"],
  ["People", "#people"],
  ["Equipment", "#equipment"],
  ["Research", "#research"],
  ["Courses", "#courses"],
  ["Contact", "#contact"],
] as const;

const students = [
  { name: "Sam Fisher", chinese: "翁益寧", role: "PhD student", image: "/img/people/sam.jpg" },
  { name: "Ray Chen", chinese: "陳博煒", role: "MA student", image: "/img/people/ray.jpg" },
  { name: "Benson Huang", chinese: "黃柏瑄", role: "MA student", image: "/img/people/benson.jpg" },
  { name: "Willy Wang", chinese: "王麒瑋", role: "MA student", image: "/img/people/willy.jpg" },
  { name: "Hess Huang", chinese: "黃建誌", role: "MA student", image: "/img/people/hess.jpg" },
];

const equipment = [
  {
    title: "Recording room",
    description: "A controlled environment for high-quality acoustic recording.",
    image: "/img/equipments/room.jpeg",
    label: "Sound-proof",
  },
  {
    title: "Ultrasonography",
    description: "Real-time imaging for observing tongue movement during speech.",
    image: "/img/equipments/us.jpg",
    label: "Articulation",
  },
  {
    title: "Electroglottography",
    description: "Non-invasive measurement of vocal-fold contact patterns.",
    image: "/img/equipments/egg.jpg",
    label: "Phonation",
  },
  {
    title: "Electromyography",
    description: "Electrical measurements that reveal speech-related muscle activity.",
    image: "/img/equipments/emg.jpg",
    label: "Motor control",
  },
];

const projects = [
  {
    number: "01",
    title: "Acoustic–articulatory correspondence",
    text: "How vowel acoustics, tongue posture, and speech motor control change across different head angles.",
  },
  {
    number: "02",
    title: "Mandarin high-vowel rounding",
    text: "Automated extraction and analysis of lip postures from speech-production data.",
  },
  {
    number: "03",
    title: "Phonetic detail in speech plans",
    text: "How musical training and physiological constraints shape duration, pitch, and planned responses.",
  },
  {
    number: "04",
    title: "Auditory perturbation",
    text: "The roles of feedforward and feedback control in planning and executing speech.",
  },
  {
    number: "05",
    title: "Taiwan Mandarin sound merger",
    text: "The contribution of tongue posture to nasal and sibilant mergers in Taiwan Mandarin.",
  },
  {
    number: "06",
    title: "Secondary articulation in Horpa",
    text: "The articulatory mechanisms involved in secondary articulation in vowels.",
  },
];

const courses = [
  {
    label: "Required",
    title: "Core linguistics",
    items: ["Introduction to Phonology 聲韻學", "Linguistic Fieldwork 語言學田野調查"],
  },
  {
    label: "Elective",
    title: "Speech science",
    items: [
      "Physiological Bases of Speech Production",
      "Speech Perception and Production",
      "Speech Motor Control",
      "Ultrasound for Linguistic Research",
    ],
  },
  {
    label: "General education",
    title: "Language in context",
    items: ["Speech Behaviors and Speech Sciences 發音、行為與科學", "Uncovering Languages 探索語言"],
  },
];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Speech Behavior and Science Lab home">
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span>
        <strong>SBS Lab</strong>
        <small>National Taiwan University</small>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {navigation.map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid page-shell">
            <div className="hero-copy">
              <p className="eyebrow">Speech · Body · Computation</p>
              <h1 id="hero-title">
                See speech.
                <br />
                <em>Understand people.</em>
              </h1>
              <p className="hero-lede">
                We study how speech is produced and perceived—from the larynx and tongue to the lips,
                face, and mind—through imaging, physiological measurement, and data science.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#research">
                  Explore our research <span aria-hidden="true">↘</span>
                </a>
                <a className="text-link" href="#people">
                  Meet the lab <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Speech research equipment in the SBS Lab">
              <div className="hero-image-main">
                <Image
                  src="/img/equipments/room.jpeg"
                  alt="The SBS Lab sound-proof recording room"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 48vw"
                />
              </div>
              <div className="hero-image-small">
                <Image
                  src="/img/equipments/us.jpg"
                  alt="Ultrasound equipment used for speech research"
                  fill
                  priority
                  sizes="(max-width: 700px) 42vw, 18vw"
                />
              </div>
              <div className="signal-card">
                <span>Live signal</span>
                <svg viewBox="0 0 180 50" role="img" aria-label="Stylized acoustic waveform">
                  <path d="M0 25h18l6-10 8 25 9-34 8 37 10-23 8 11 9-19 10 26 8-14 12 1 8-16 10 30 8-23 9 9h20" />
                </svg>
              </div>
            </div>
          </div>
          <div className="hero-index page-shell" aria-hidden="true">
            <span>NTU · GIL</span>
            <span>25.0173° N</span>
            <span>Taipei, Taiwan</span>
          </div>
        </section>

        <section className="about-section page-shell" id="about">
          <div className="about-number" aria-hidden="true">
            /01
          </div>
          <div className="about-copy">
            <SectionHeading eyebrow="About the lab" title="Speech is movement made meaningful." />
            <div className="about-columns">
              <p>
                Our research brings together acoustic and articulatory phonetics, speech perception,
                motor control, and computation. We use ultrasound imaging to track movement and
                electrical measures to record activity across the speech system.
              </p>
              <p>
                The resulting signals become data for statistical analysis, pattern recognition, and
                machine learning—helping us uncover the psychological and physiological mechanisms
                behind human communication.
              </p>
            </div>
          </div>
        </section>

        <section className="film-section" aria-labelledby="film-title">
          <div className="page-shell film-grid">
            <div>
              <p className="eyebrow">Inside SBS Lab</p>
              <h2 id="film-title">Research in motion</h2>
              <p>Watch a short introduction to our questions, methods, and people.</p>
            </div>
            <div className="video-frame">
              <iframe
                src="https://www.youtube-nocookie.com/embed/8EV_7EfK4VE"
                title="Introduction to the Speech Behavior and Science Lab"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="people-section page-shell" id="people">
          <SectionHeading
            eyebrow="People"
            title="A team listening closely."
            intro="We connect experimental phonetics, linguistic theory, and computational methods."
          />

          <article className="director-card">
            <div className="director-image">
              <Image
                src="/img/people/chenhao.png"
                alt="Professor Chenhao Chiu"
                fill
                sizes="(max-width: 720px) 100vw, 34vw"
              />
            </div>
            <div className="director-copy">
              <p className="eyebrow">Lab director</p>
              <h3>Chenhao Chiu <span>邱振豪</span></h3>
              <p className="credential">PhD in Linguistics · University of British Columbia</p>
              <ul className="tag-list" aria-label="Research interests">
                <li>Acoustic & articulatory phonetics</li>
                <li>Speech perception & production</li>
                <li>Speech motor control</li>
                <li>Computational modeling</li>
                <li>Automated data analytics</li>
              </ul>
              <a
                className="text-link"
                href="https://sites.google.com/site/chiuchenhao/"
                target="_blank"
                rel="noreferrer"
              >
                View profile <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <div className="student-grid">
            {students.map((student, index) => (
              <article className="person-card" key={student.name}>
                <div className="person-image">
                  <Image
                    src={student.image}
                    alt={`${student.name} ${student.chinese}`}
                    fill
                    sizes="(max-width: 600px) 86vw, (max-width: 1000px) 42vw, 22vw"
                  />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>
                  {student.name} <span>{student.chinese}</span>
                </h3>
                <p>{student.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="equipment-section" id="equipment">
          <div className="page-shell">
            <SectionHeading
              eyebrow="Equipment"
              title="Tools that make speech visible."
              intro="From carefully controlled recordings to real-time images and physiological signals."
            />
            <div className="equipment-grid">
              {equipment.map((item) => (
                <article className="equipment-card" key={item.title}>
                  <div className="equipment-image">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 720px) 100vw, 50vw"
                    />
                    <span>{item.label}</span>
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="research-section page-shell" id="research">
          <SectionHeading
            eyebrow="Research projects"
            title="Questions across scales."
            intro="We move between muscle, movement, acoustics, perception, and computation."
          />
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row" key={project.number}>
                <span className="project-number">{project.number}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="courses-section" id="courses">
          <div className="page-shell">
            <SectionHeading eyebrow="Teaching" title="From fundamentals to the research frontier." />
            <div className="course-grid">
              {courses.map((course) => (
                <article className="course-card" key={course.title}>
                  <p className="eyebrow">{course.label}</p>
                  <h3>{course.title}</h3>
                  <ul>
                    {course.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="connect-section page-shell" aria-labelledby="connect-title">
          <div className="connect-heading">
            <p className="eyebrow">Connect with the lab</p>
            <h2 id="connect-title">Participate. Learn. Build.</h2>
          </div>
          <div className="connect-grid">
            <article>
              <span>01</span>
              <h3>Participant recruitment</h3>
              <p>Find current opportunities to take part in our experiments.</p>
              <a
                className="text-link"
                href="https://sbs-ntu.github.io/participant-recruitment/"
                target="_blank"
                rel="noreferrer"
              >
                View opportunities <b aria-hidden="true">↗</b>
              </a>
            </article>
            <article>
              <span>02</span>
              <h3>Events</h3>
              <p>Revisit the 2021 Ultrasound in Linguistics Workshop.</p>
              <a
                className="text-link"
                href="https://sbs-ntu.github.io/2021-ultrasound-workshop/"
                target="_blank"
                rel="noreferrer"
              >
                Visit the workshop <b aria-hidden="true">↗</b>
              </a>
            </article>
            <article>
              <span>03</span>
              <h3>Open resources</h3>
              <p>Explore tools for ultrasound contouring and speech analysis.</p>
              <div className="resource-links">
                <a href="https://github.com/mktiede/GetContours" target="_blank" rel="noreferrer">
                  GetContours
                </a>
                <a href="https://github.com/WeirongChen/DeepEdge" target="_blank" rel="noreferrer">
                  DeepEdge
                </a>
                <a href="https://christophercarignan.github.io/TRACTUS/" target="_blank" rel="noreferrer">
                  TRACTUS
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-shell contact-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let&apos;s talk about speech.</h2>
            </div>
            <div>
              <p>
                Questions about our research, teaching, facilities, or opportunities to collaborate
                are always welcome.
              </p>
              <a className="email-link" href="mailto:sbslab.ntu@gmail.com">
                sbslab.ntu@gmail.com <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-grid">
          <Brand />
          <div className="institution-logos" aria-label="Affiliated institutions">
            <a href="https://www.ntu.edu.tw/" target="_blank" rel="noreferrer">
              <Image src="/img/logo/ntu.png" alt="National Taiwan University" width={52} height={52} />
            </a>
            <a href="https://linguistics.ntu.edu.tw/" target="_blank" rel="noreferrer">
              <Image
                src="/img/logo/gil.png"
                alt="Graduate Institute of Linguistics, NTU"
                width={52}
                height={52}
              />
            </a>
          </div>
          <p>
            © {new Date().getFullYear()} Speech Behavior and Science Lab
            <br />
            Graduate Institute of Linguistics, National Taiwan University
          </p>
        </div>
      </footer>
    </>
  );
}
