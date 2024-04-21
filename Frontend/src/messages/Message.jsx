
const Message = () => {
  return (
    <div className=" chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png" alt="user avatar" />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hi!, What is up?</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
    </div>
  )
}

export default Message