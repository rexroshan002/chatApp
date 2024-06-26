
export const Conversation = () => {
  return (
    <>
    <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-2 cursor-pointer">
    <div className="avatar online">
        <div className="w-12 rounded-full">
            <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png" alt="user avatar" />
        </div>
    </div>

    <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
            <p>Jhon Doe</p>
            <span className="text-xl">👻</span>
        </div>
    </div>
    </div>
    <div className="divider my-0 py-0 h-1"/>
    </>
  )
}
