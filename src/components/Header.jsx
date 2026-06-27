import styles from "../styles/Header.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const socials = [
  { label: "github", href: "https://github.com/20SHADOW05", icon: FaGithub },
  { label: "linkedin", href: "https://linkedin.com/in/yourprofile", icon: FaLinkedin },
  { label: "email", href: "mailto:your@email.com", icon: IoMdMail },
];

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Name block */}
      <div className={styles.nameBlock}>
        <h1 className={styles.name}>Ankababu</h1>
        <span className={styles.handle}>[ shadow_05 ]</span>
      </div>

      {/* Two-col: socials + summary */}
      <div className={styles.intro}>
        <div className={styles.left}>
          <div className={styles.socialsLabel}>find me</div>
          <ul className={styles.socials}>
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className={styles.socialLink}
                >
                  <s.icon size={20}/>
                  <span>{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.right}>
          <p className={styles.summary}>
            CSE student passionate about backend and low-level systems, with a keen interest in how systems work behind the scenes. Interested in developer
            tooling, graph visualizations, and backend systems.
          </p>

          <div className={styles.facts}>
            <div className={styles.fact}>
              <span className={styles.factKey}>status</span>
              <span className={styles.factVal}>
                <span className={styles.dot} /> student · open to internships
              </span>
            </div>
            <div className={styles.fact}>
              <span className={styles.factKey}>focus</span>
              <span className={styles.factVal}>full-stack · backend systems</span>
            </div>
            <div className={styles.fact}>
              <span className={styles.factKey}>building</span>
              <span className={styles.factVal}>depGraph — npm dependency viz</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
