import React from 'react'

interface IMessage {
    message: string
    author_id: number
}

const user = 1

const Message = ({message, author_id} : IMessage) => {

    if (author_id !== user) {
        return (
            <div className='text-left w-[250px] bg-gray-300 rounded p-2 text-black'>{message}</div> 
        )
    }
    else {
        return (
            <div className='text-right w-[250px] bg-primary rounded p-2 text-white'>{message}</div>
        )
    }
}

export default Message