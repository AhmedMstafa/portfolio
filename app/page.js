import styles from './page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
export default function Home() {
  return <FontAwesomeIcon className="d-inline" icon={faHouse} />;
}
