export default function KadinceAnswer() {
  return (
    <div className="answer">
      <p className="meta">// feb 2022 — dec 2022 · full stack web developer</p>

      <p>
        Kadince is a web application that helps banks organize and manage community involvement —
        events, donations, loans, investments, and more.
      </p>
      <ul>
        <li>
          <strong>Developed new functionality and features</strong> in line with functional
          specifications and business requirements.
        </li>
        <li>
          <strong>Interacted with the sales team to resolve customer issues</strong>, including
          teaching new features and solving bugs.
        </li>
        <li>
          Used <strong>Ruby on Rails, GraphQL, and PostgreSQL</strong> on the back end to organize
          customer data, and <strong>React JS, Redux, and Material UI</strong> on the front end.
        </li>
      </ul>

      <div className="tags">
        {['Ruby on Rails', 'GraphQL', 'PostgreSQL', 'React.js', 'Redux', 'Material UI'].map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
    </div>
  )
}
