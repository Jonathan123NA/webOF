import './App.css'
import { Content } from './components/Content'
import { Sidebar } from './components/SideBar'

function App() {
  return (
    <div className='flex min-h-screen flex-row bg-gray-100 dark:bg-zinc-700'>
      <Sidebar />
      <Content />
    </div>
  )
}

export default App
