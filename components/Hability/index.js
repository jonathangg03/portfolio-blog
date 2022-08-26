import styles from '../../styles/Habilities.module.css'

const Hability = ({ number, Icon, name }) => {
  return (
    <div className={styles.hability} number={number}>
      <div className={styles.icon}>
        <Icon />
      </div>
      <div className={styles.description}>
        <h3 className={styles.name}>{name}</h3>
      </div>
    </div>
  )
}

export default Hability
