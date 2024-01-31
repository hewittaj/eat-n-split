import { useState } from 'react'
import FriendsList from './components/FriendsList'
import FormAddFriend from './components/FormAddFriend'
import Button from './components/Button'
import FormSplitBill from './components/FormSplitBill'
import initialFriends from './initialFriends'

function App() {
    const [friends, setFriends] = useState(initialFriends)
    const [showAddFriend, setShowAddFriend] = useState(false)
    const [selectedFriend, setSelectedFriend] = useState(null)

    function handleShowAddFriend() {
        setShowAddFriend((prevShow) => !prevShow)
    }

    function handleAddFriend(friend) {
        setFriends((prevFriends) => [...prevFriends, friend])
        setShowAddFriend(false)
    }

    function handleSelection(friend) {
        setSelectedFriend((prevSelected) =>
            prevSelected?.id === friend.id ? null : friend
        )
    }

    return (
        <div className='app'>
            <div className='sidebar'>
                <FriendsList
                    friends={friends}
                    onSelection={handleSelection}
                    selectedFriend={selectedFriend}
                />

                {showAddFriend && (
                    <FormAddFriend onAddFriend={handleAddFriend} />
                )}

                <Button onClick={handleShowAddFriend}>
                    {showAddFriend ? 'Close' : 'Add friend'}
                </Button>
            </div>
            {selectedFriend && (
                <FormSplitBill selectedFriend={selectedFriend} />
            )}
        </div>
    )
}

export default App
