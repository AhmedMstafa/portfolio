import Spline from '@splinetool/react-spline/next';

export default function Hero() {
  return (
    <section className="hero vh-100">
      <div className="container ps-4 pe-4 h-100 d-flex flex-column justify-content-center ">
        <div className="greet fs-5 fs-md-4">
          <span>HELLO THERE!</span>
        </div>
        <div className="title pt-4 pb-4 ">
          <span>
            I&apos;m Ahmed Mostafa,
            <br />a creative Frontend <br />
            developer.
          </span>
        </div>
      </div>
    </section>
  );
}
