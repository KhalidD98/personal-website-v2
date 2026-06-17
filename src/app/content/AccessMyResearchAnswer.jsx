export default function AccessMyResearchAnswer() {
  return (
    <div className="answer">
      <p className="meta">// jan 2020 — jun 2020 · intern software developer</p>

      <p>
        I implemented a fully functional <strong>chat system</strong> from initial design to
        completion for a web application that connects users with researchers. It supported both
        one-on-one and group conversations with real-time messaging.
      </p>
      <p>
        Messages were stored and retrieved using <strong>Firestore from Firebase</strong>, user
        names came from <strong>Amazon's AWS Cognito</strong>, and the interface was built with{' '}
        <strong>Vue.js</strong>.
      </p>

      <div className="callout">
        <h4>Why Firestore</h4>
        <p style={{ margin: 0 }}>
          We chose Firestore because it's easily scalable, schema-flexible, and supports real-time
          document listening. Its <span className="accent">onSnapshot()</span> method listens for
          document changes and runs for every user in a conversation, rendering new messages
          instantly for seamless chats.
        </p>
      </div>

      <h4>My role</h4>
      <p>
        On a two-person team, I developed all the functions that communicated with the Firestore
        database — querying usernames, past messages, and timestamps. Data was organized into a
        stack to maintain order, each message an object of sender, text, and timestamp. My teammate
        used these functions to render the conversation in Vue.
      </p>

      <h4>Biggest challenge</h4>
      <p>
        Accessing <strong>AWS Cognito</strong> to retrieve the display name for the logged-in user.
        Neither of us had used Cognito before, so we taught ourselves how it worked; once retrieved,
        the display name was assigned to the users collection for each conversation document.
      </p>

      <div className="tags">
        {['Vue.js', 'Firebase / Firestore', 'AWS Cognito', 'AWS Amplify'].map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
    </div>
  )
}
