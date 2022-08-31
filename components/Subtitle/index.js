import styles from '../../styles/Components.module.css'

const Subtitle = ({ subtitle, id }) => {
  return <h2 className={styles.subtitle} id={id}>{`${subtitle}`}</h2>
}

export default Subtitle
