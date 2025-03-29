'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Project({ title, img, github, link, design }) {
  return (
    <>
      <div className="box col-sm-12 col-lg-6 mb-5">
        <p className="title">{title}</p>
        <div className="content rounded ">
          <div className="img-box">
            <div className="image">
              <img
                src={img}
                alt="project image"
                className="img-fluid"
                loading="lazy"
              />
            </div>
          </div>
          <div className="links ">
            <a href={github} target="_blank">
              <i className="fa-brands fa-github"></i>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            {design && (
              <a href={design} target="_blank">
                <FontAwesomeIcon icon={faFigma} />
              </a>
            )}
            <a href={link} target="_blank">
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
