const Hability = ({ number, Icon, name, description }) => {
  return (
    <div className='hability' number={number}>
      <div className='titles'>
        <div className='icon'>
          <Icon />
        </div>
        <h3 className='name'>{name}</h3>
      </div>
      <div className='description'>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Hability
