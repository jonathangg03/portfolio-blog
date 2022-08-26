import styles from '../../styles/Habilities.module.css'

const Hability = ({ number, Icon, name }) => {
  return (
    <div className={styles.hability} number={number}>
      <div className={styles.titles}>
        <div className={styles.icon}>
          <Icon />
        </div>
        <h3 className={styles.name}>{name}</h3>
      </div>
      <div className={styles.description}>
        <p>
          Elñsdflñslñdkñlksdks kdsfsdkfñ dsfkñlsdfkñlsdñflñlk kdsjmfñkskdñfkñl
        </p>
      </div>
    </div>
  )
}

export default Hability
