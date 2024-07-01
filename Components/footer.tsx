import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="copyright">© {new Date().getFullYear()} Anders Jefsen</p>
      </div>

      <div className="spacer"></div>
      <div className="links">
        <ul>
          <li className="li-header">Find me on</li>
          <li>
            <a href="https://github.com/AndersJefsen">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/anders-jefsen-7a689a1b5/">
              Linkedin
            </a>
          </li>
          <li>
            <a href="">CV</a>
          </li>
        </ul>

        <ul>
          <li className="li-header">Contact</li>
          <li>
            <a href="mailto:andersjeff397@gmail.com">E-mail</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
