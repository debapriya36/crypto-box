import styles from "@/styles/Team.module.css";
import Navbar from "../components/Navbar/TeamNavbar";
import { DEBAPRIYA, GAURAV, RITAM , AVIRAL } from "@/components/constants";

export default function Team() {
  const TeamCard = ({
    name,
    bio,
    image,
    linkedin,
    github,
    email,
  }) => {
    return (
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img className={styles.profileImage} src={image} />
          <div className={styles.profileDetails}>
            <h2 className={styles.name}>{name}</h2>
            <div className={styles.socialLinks}>
              {email && (
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}`}
                  className={styles.socialIcon}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-envelope-at-fill"></i>
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  className={styles.socialIcon}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              )}
              {github && (
                <a
                  href={github}
                  className={styles.socialIcon}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>
              )}
            </div>

            <p className={styles.bio}>{bio}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <main className="main">
   

        <Navbar activePage="Team" />

        <div className={styles.body}>

          
        <TeamCard
            name="Prof. Debamita Saha"
            image="./ds.jpg"
            bio={"Assistant Professor, Department of Information Technology, JGEC"}
            // linkedin={GAURAV.LINKEDIN}
            // twitter={GAURAV.TWITTER}
            // instagram={GAURAV.INSTAGRAM}
            email={GAURAV.EMAIL}
          />

          <TeamCard
            name="Debapriya Chandra"
            image="./dc.jpeg"
            bio={DEBAPRIYA.BIO}
            linkedin={DEBAPRIYA.LINKEDIN}
            github={DEBAPRIYA.GITHUB}
            email={DEBAPRIYA.EMAIL}
          />
          <TeamCard
            name="Gaurav Agarwal"
            image="./ga.jpeg"
            bio={GAURAV.BIO}
            linkedin={GAURAV.LINKEDIN}
            twitter={GAURAV.TWITTER}
            instagram={GAURAV.INSTAGRAM}
            email={GAURAV.EMAIL}
          />
          <TeamCard
            name="Ritam Samanto"
            image="./rs.jpeg"
            bio={RITAM.BIO}
            linkedin={RITAM.LINKEDIN}
            email={RITAM.EMAIL}
            github={RITAM.GITHUB}
          />
        </div>
      </main>
    </>
  );
}
