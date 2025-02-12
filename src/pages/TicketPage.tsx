export default function TicketPage() {
  /* Placeholder Variables: */
  let name = 'Jonatan Kristof'
  let ghtag = '@jonatankristof0101'
  let ghlink = `https://github.com/${ghtag.split('@')[1]}`

  return (
    <section id="ticket">
      <div id="content">
        <div id="header">
          <div>
            <img src="*" alt="Coding Conf Logo" />
            <h1>Coding Conf</h1>
          </div>
          <div>
            <time dateTime="2025-01-01">Jan 31, 2025</time> /
            <address>Austin, TX</address>
          </div>
        </div>
        <div id="footer">
          <img src="**" alt={`${name}'s Avatar`} />
          <div>
            <h1>{name}</h1>
            <a href={ghlink}>
              <img src="***" alt="GitHub Icon" />
              <span>{ghtag}</span>
            </a>
          </div>
        </div>
      </div>
      <aside>
        <hr />
        <span>#01609</span>
      </aside>
    </section>
  )
}