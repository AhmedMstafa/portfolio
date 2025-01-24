import Image from 'next/image';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
  return (
    <nav className="nav navbar navbar-expand-lg background-transparent position-absolute w-100">
      <div className="container  pt-2 ps-4 pe-4">
        <div className="navbar-brand logo-image ms-2 mb-1">
          <Image
            src="/images/logo.jpg"
            width="50"
            height="50"
            alt="logo"
            className="rounded-circle "
          />
        </div>
        <div className="navbar-brand title me-auto">
          <div className="name fs-5 text-light ms-0">Ahmed Mostafa</div>
          <div className="status avilable fs-6 position-relative ms-3">
            avilable
          </div>
        </div>
        <button
          className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div
          className="collapse navbar-collapse mt-4 mt-lg-0 bg-black bg-transparent-lg border border-white border-0-lg"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-items navbar-nav fs-5 gap-3 ms-lg-auto p-4 p-lg-0 ">
            <a className="nav-link" href="#">
              Home
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#works">
              Projects
            </a>
            <a
              className="nav-link d-flex align-items-center "
              href="#work-with-me"
            >
              Work with me
              <span className="position-relative d-inline-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faArrowRight} />
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
