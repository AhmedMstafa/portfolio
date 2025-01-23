export default function Footer() {
  return (
    <footer id="work-with-me" className="work-with-me mt-5">
      <div className="container ps-4 pe-4 text-light">
        <div className="section-header p-0 ">
          <div className="content">
            <p className=" fs-5 text-end lh-sm p-3">
              &quot;改善.&quot; kaizen. continual improvement.
              <br />
              always learning, open to critique.
              <br />
              coded with 🤍
            </p>
          </div>
          <div className="line p-0">
            <span></span>
          </div>
        </div>
        <div className="nav-wrapper row pt-5 pb-5  ps-lg-5 gi">
          <div className="nav-col col-sm12 col-md-6 col-lg-4 pt-5 pb-5">
            <p className="footer-heading lh-base fs-5 pb-2 text-center text-lg-start">
              let&apos;s snag coffee , <br /> or get a lift in
            </p>
            <ul className="footer-nav">
              <li className="footer-link email fs-6 fw-bold text-center text-lg-start">
                <a href="mailto:ahmed.mostafa.mail.1@gmail.com">
                  ahmed.mostafa.mail.1@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-col col-sm12 col-md-6 col-lg-4  pt-5 pb-5 text-center text-lg-end ">
            <p className="footer-heading lh-base fs-5 pb-2 ">
              find me
              <br /> let&apos;s connect
            </p>
            <ul className="footer-nav d-flex justify-content-center justify-content-lg-end">
              <li className="footer-link fs-5 fw-bold position-relative ps-4 pe-4 linked-in">
                <a
                  href="https://www.linkedin.com/in/ahmed-mostafa-profile"
                  target="_blank"
                >
                  in
                </a>
              </li>
              <li className="footer-link fs-5 fw-bold position-relative ps-4 pe-4 x">
                <a href="https://x.com/AhmedMosta4086" target="_blank">
                  x
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-col col-sm12 col-md-6 col-lg-4 pt-5 pb-5 text-center text-lg-end">
            <p className="footer-heading lh-base fs-4 pb-2 ">peek my code</p>
            <ul className="footer-nav ">
              <li className="footer-link fs-4 fw-bold ">
                <a href="https://github.com/AhmedMstafa" target="_blank">
                  git
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
