import { useState } from 'react'
import FriendsList from './components/FriendsList'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className='app'>
            <div className='sidebar'>
                <FriendsList />
            </div>
        </div>
    )
}

export default App
