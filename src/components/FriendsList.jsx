/* eslint-disable react/prop-types */
import Friend from './Friend'
function FriendsList(props) {
    const { friends } = props
    return (
        <ul>
            {friends.map((friend) => (
                <Friend key={friend.id} friend={friend} />
            ))}
        </ul>
    )
}

export default FriendsList
