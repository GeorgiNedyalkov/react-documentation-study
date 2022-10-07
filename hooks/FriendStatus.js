import { useEffect, useState } from "react"

function FriendStatus({ friend }) {
  const [isOnline, setIsOnline] = useState(null)

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline)
    }

    ChatAPI.subscribetoFriendStatus(friend.id, handleStatusChange)

    return function cleanup() {
      ChatAPI.unsubscribeFrinFriendStatus(friend.id, handleStatusChange)
    }
  })

  if (isOnline == null) {
    return "Loading..."
  }
  return isOnline ? "Online" : "Offline"
}

export default FriendStatus
