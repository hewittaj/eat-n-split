/* eslint-disable react/prop-types */
import Friend from './Friend'
function FriendsList(props) {
    const { friends, onSelection, selectedFriend } = props
    return (
        <ul>
            {friends.map((friend) => (
                <Friend
                    key={friend.id}
                    friend={friend}
                    onSelection={onSelection}
                    selectedFriend={selectedFriend}
                />
            ))}
        </ul>
    )
}

export default FriendsList
