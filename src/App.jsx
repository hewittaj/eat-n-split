import { useState } from 'react'
import FriendsList from './components/FriendsList'
import FormAddFriend from './components/FormAddFriend'
import Button from './components/Button'
import FormSplitBill from './components/FormSplitBill'
import initialFriends from './initialFriends'

function App() {
    const [friends, setFriends] = useState(initialFriends)
    const [showAddFriend, setShowAddFriend] = useState(false)

    function handleShowAddFriend() {
        setShowAddFriend((prevShow) => !prevShow)
    }

    function handleAddFriend(friend) {
        setFriends((prevFriends) => [...prevFriends, friend])
        setShowAddFriend(false)
    }

    return (
        <div className='app'>
            <div className='sidebar'>
                <FriendsList friends={friends} />
                {showAddFriend && (
                    <FormAddFriend onAddFriend={handleAddFriend} />
                )}
                <Button onClick={handleShowAddFriend}>
                    {showAddFriend ? 'Close' : 'Add friend'}
                </Button>
            </div>
            <FormSplitBill />
        </div>
    )
}

export default App
