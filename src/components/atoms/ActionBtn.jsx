import React from 'react'

function ActionBtn( {action, onEdit} ) {
  return (
    <button
      className={`px-3 font-medium rounded-md transition-all active:opacity-80 ${action === "Edit" ? 'text-[--blue-color] bg-[--light-blue-color] hover:bg-[--blue-color] hover:text-[--light-blue-color]' : 'text-[--red-color] bg-[--light-red-color] hover:bg-[--red-color] hover:text-[--light-red-color]'}`}
      onClick={onEdit}
    >
      {action}
    </button>
  )
}

export default ActionBtn