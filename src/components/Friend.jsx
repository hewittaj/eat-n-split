/* eslint-disable react/prop-types */
import Button from './Button'
function Friend(props) {
    const { friend } = props
    return (
        <li>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
                <p className='red'>
                    You owe {friend.name} ${friend.balance * -1}
                </p>
            )}
            {friend.balance > 0 && (
                <p className='green'>
                    {friend.name} owes you ${friend.balance * 1}
                </p>
            )}
            {friend.balance === 0 && <p>You and {friend.name} are even</p>}
            <Button>Select</Button>
        </li>
    )
}

export default Friend
