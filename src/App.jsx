import LeftSide from './LeftSide'
import RightSide from './RightSide'

function App() {

  return (
    <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen w-screen overflow-y-auto lg:overflow-hidden">
      <LeftSide />
      <RightSide />
    </div>
  )
}

export default App
