function AccessMyResearchModalContent() {
  return (
    <>
      {/* Overview */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Implemented a fully functional chat system from initial design to completion for a web application designed to connect users with researchers. The chat system supported both one-on-one and group conversations with real-time messaging capabilities.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Messages were stored and retrieved using <span className="font-bold text-blue-600">Firestore from Firebase</span>, user names were obtained from <span className="font-bold text-blue-600">Amazon's AWS Cognito</span>, and the interface was built with <span className="font-bold text-blue-600">Vue.js</span>.
        </p>
      </div>

      {/* The Goal */}
      <div className="rounded-2xl p-8 mb-8" style={{ background: 'linear-gradient(to right, #eff6ff, #f0fdf4)' }}>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">The Goal</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The primary goal was to implement a fully functional chat system feature on both the front end and back end of the website. We chose <span className="font-bold text-blue-600">Firestore from Firebase</span> as the cloud-hosted NoSQL database because it is easily scalable, has a multi-model structure, and provides real-time document listening capabilities.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Unlike relational databases that store data in a fixed and predefined structure, NoSQL databases like Firestore provide more flexibility. There's no requirement to design a schema before beginning development, and it doesn't restrict the types of data you can store together.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          NoSQL databases are built on a masterless, peer-to-peer architecture, making them easy to scale by simply adding new clusters to the server. This improves performance and allows for continuous availability.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Firestore's <span className="font-bold text-blue-600">onSnapshot()</span> method allows real-time listening to document changes. When a new message is created, the method runs for every user in the conversation, rendering new messages instantly and creating seamless conversations.
        </p>
      </div>



      {/* My Role */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">My Role</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our team had two members. I developed all the functions used to communicate with the Firestore Database. My teammate used these functions to display information from the database using the Vue.js Framework.
        </p>
        <p className="text-gray-700 leading-relaxed">
          These functions queried information such as usernames, past messages, and message timestamps from Firestore. The data was organized into a stack to maintain message order, with each message held in an object containing the sender, text, and timestamp. My teammate then created a loop displaying each message in chronological order with reformatted timestamps.
        </p>
      </div>

      {/* Biggest Challenge */}
      <div className="rounded-2xl p-8 mb-8" style={{ background: 'linear-gradient(to right, #eff6ff, #f0fdf4)' }}>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Biggest Challenge</h3>
        <p className="text-gray-700 leading-relaxed">
          The biggest challenge was accessing <span className="font-bold text-blue-600">AWS Cognito</span> to retrieve the display name for the logged-in user. Neither my teammate nor I had prior experience with AWS Cognito, so we quickly taught ourselves how it worked. Once I retrieved the display name, it was assigned to the users collection for each conversation document.
        </p>
      </div>

      {/* Dependencies */}
      <div className="bg-gray-900 text-gray-100 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4 text-blue-400">Dependencies Used:</h3>
        <div className="font-mono text-sm space-y-1">
          <p>{"{"}</p>
          <div className="pl-4 space-y-1">
            <p>"<span className="text-blue-400">firebase</span>": "^3.1.0",</p>
            <p>"<span className="text-blue-400">vue</span>": "^2.6.12",</p>
            <p>"<span className="text-blue-400">aws-amplify</span>": "^3.3.14",</p>
            <p>"<span className="text-blue-400">aws-amplify-vue</span>": "^2.1.3",</p>
            <p>"<span className="text-blue-400">axios</span>": "^0.21.1"</p>
          </div>
          <p>{"}"}</p>
        </div>
      </div>
    </>
  )
}

export default AccessMyResearchModalContent

