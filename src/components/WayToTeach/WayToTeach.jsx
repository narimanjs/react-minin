import styles from './WayToTeach.module.css';
export default function WayToTeach(props) {
  return (
    <li>
      <p>
        <strong>{props.title}</strong>
        {props.description}
      </p>
    </li>
  );
}
