import Image from 'next/image';
export default function Techonligies() {
  return (
    <div className="technologies pt-3">
      <div
        className="slider mb-4"
        style={{
          ['--width']: '50px',
          ['--height']: '50px',
          ['--quantity']: '10',
        }}
      >
        <div className="list">
          <div
            className="item d-none d-md-block "
            style={{ ['--position']: '1' }}
          >
            <Image src="/images/tech/html.png" fill alt="html" />
          </div>
          <div
            className="item d-none d-md-block "
            style={{ ['--position']: '2' }}
          >
            <Image src="/images/tech/css.png" fill alt="html" />
          </div>
          <div
            className="item d-none d-md-block "
            style={{ ['--position']: '3' }}
          >
            <Image src="/images/tech/js.png" fill alt="html" />
          </div>
          <div
            className="item d-none d-md-block "
            style={{ ['--position']: '4' }}
          >
            <Image src="/images/tech/sass.png" fill alt="html" />
          </div>
          <div
            className="item d-none d-md-block "
            style={{ ['--position']: '5' }}
          >
            <Image src="/images/tech/boot.png" fill alt="html" />
          </div>
          <div className="item " style={{ ['--position']: '6' }}>
            <Image src="/images/tech/express.png" fill alt="html" />
          </div>
          <div className="item " style={{ ['--position']: '7' }}>
            <Image src="/images/tech/node.png" fill alt="html" />
          </div>
          <div className="item " style={{ ['--position']: '8' }}>
            <Image src="/images/tech/mongodb.png" fill alt="html" />
          </div>
          <div className="item " style={{ ['--position']: '9' }}>
            <Image src="/images/tech/react.png" fill alt="html" />
          </div>
          <div className="item " style={{ ['--position']: '10' }}>
            <Image src="/images/tech/github.png" fill alt="html" />
          </div>
        </div>
      </div>
      <div
        className="slider mb-4"
        reverse="true"
        style={{
          ['--width']: '50px',
          ['--height']: '50px',
          ['--quantity']: '10',
        }}
      >
        <div className="list">
          <div className="item " style={{ ['--position']: '1' }}>
            <Image src="/images/tech/html.png" fill alt="html" />
          </div>
          <div className="item " style={{ ['--position']: '2' }}>
            <Image src="/images/tech/css.png" fill alt="html" />
          </div>
          <div className="item " style={{ ['--position']: '3' }}>
            <Image src="/images/tech/js.png" fill alt="html" />
          </div>
          <div className="item " style={{ ['--position']: '4' }}>
            <Image src="/images/tech/sass.png" fill alt="html" />
          </div>
          <div className="item " style={{ ['--position']: '5' }}>
            <Image src="/images/tech/boot.png" fill alt="html" />
          </div>
          <div
            className="item d-none d-md-block  "
            style={{ ['--position']: '6' }}
          >
            <Image src="/images/tech/express.png" fill alt="html" />
          </div>
          <div
            className="item d-none d-md-block  "
            style={{ ['--position']: '7' }}
          >
            <Image src="/images/tech/node.png" fill alt="html" />
          </div>
          <div
            className="item d-none d-md-block  "
            style={{ ['--position']: '8' }}
          >
            <Image src="/images/tech/mongodb.png" fill alt="html" />
          </div>
          <div
            className="item d-none d-md-block  "
            style={{ ['--position']: '9' }}
          >
            <Image src="/images/tech/react.png" fill alt="html" />
          </div>
          <div
            className="item d-none d-md-block  "
            style={{ ['--position']: '10' }}
          >
            <Image src="/images/tech/github.png" fill alt="html" />
          </div>
        </div>
      </div>
    </div>
  );
}
