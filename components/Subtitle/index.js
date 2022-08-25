import styles from '../../styles/Components.module.css'

const Subtitle = ({ subtitle }) => {
  return (<h2 className={styles.subtitle}>{`< ${subtitle} />`}</h2>)
}

export default Subtitle