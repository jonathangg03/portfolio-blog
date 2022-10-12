const EntryContent = () => {
  return (
    <section className="section_spacer">
      <h1 className="entry__title">Este es el titulo</h1>
      <h2 className="entry__subtitle">Este es el subtitulo</h2>
      <h3 className="entry__section-title">Este es el subtitulo</h3>
      <p className="entry__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <a href="/sdfd" className="entry__link">Ve a este enlace</a>
      </p>
      <img src="https://images.unsplash.com/photo-1665425827673-58796f9c8949?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" className="vertical image" />
      <img src="https://images.unsplash.com/photo-1665425827673-58796f9c8949?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" className="horizontal image" />
      <img src="https://images.unsplash.com/photo-1665425827673-58796f9c8949?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" className="square image" />
      <iframe className="entry__video" width="560" height="315" src="https://www.youtube.com/embed/RSEu2VDxi9Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
  )
}

export default EntryContent