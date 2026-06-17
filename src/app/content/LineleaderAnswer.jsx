export default function LineleaderAnswer() {
  return (
    <div className="answer">
      <p className="meta">// jun 2023 — present · full stack web developer</p>

      <p>
        Lineleader is a software platform that simplifies marketing, registration, payment
        processing, and operations for early education.
      </p>
      <ul>
        <li>
          <strong>Led the successful refactoring of a critical reporting feature</strong>,
          eliminating recurring weekly bugs and significantly improving performance —{' '}
          <strong>zero bug reports post-implementation</strong>.
        </li>
        <li>
          Collaborated with a cross-functional team to{' '}
          <strong>implement data segregation for the nation's largest after-school childcare
          organization</strong>, building a secure isolated environment in AWS that improved
          privacy, performance, and scale.
        </li>
        <li>
          Develop and ship new features while maintaining existing functionality using{' '}
          <strong>Meteor JS, Vue JS</strong>, with automated testing in <strong>Cypress and
          Jest</strong>.
        </li>
      </ul>

      <div className="tags">
        {['Meteor JS', 'Vue.js', 'AWS', 'Cypress', 'Jest'].map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
    </div>
  )
}
