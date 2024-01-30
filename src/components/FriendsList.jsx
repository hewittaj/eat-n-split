import friends from '../initialFriends'
import Friend from './Friend'
function FriendsList() {
    return (
        <ul>
            {friends.map((friend) => (
                <Friend key={friend.id} friend={friend} />
            ))}
        </ul>
    )
}

export default FriendsList
