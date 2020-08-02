import React from 'react'
import { useSelector } from 'react-redux'
import { ReactComponent as SuccessIcon } from '../../img/icons/checkmark-outline.svg'
import { ReactComponent as MenuIcon } from '../../img/icons/ellipsis-horizontal-outline.svg'

const ParseResult = () => {
  const { currentFile } = useSelector(state => state.file)
  const errors =
    currentFile.messages && currentFile.messages.length ? currentFile.messages.length : 0
  return (
    <section className="flex flex-col flex-1">
      <div className="flex flex-row justify-between">
        <div className="flex items-center">
          {currentFile.data.hasErrors ? (
            <>
              <span className="h-6 w-6 mr-2 flex items-center justify-center rounded-full bg-red-500 text-gray-100">
                {errors}
              </span>
              <span>Parse failed</span>
            </>
          ) : (
            <>
              <span className="h-6 w-6 mr-2 flex items-center justify-center rounded-full bg-green-500">
                <SuccessIcon />
              </span>
              <span>Parsed successfully</span>
            </>
          )}
        </div>
        <button className="mr-2">
          <MenuIcon />
        </button>
      </div>
      <div>
        {currentFile.messages && currentFile.messages.length > 0 ? (
          <div className="flex flex-col p-2 text-gray-300 text-sm font-normal">
            {currentFile.messages.map(message => (
              <span className="my-1">{`${message.position.line} , ${message.position.char} - ${message.text}`}</span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

const FileStatusBar = () => {
  const { currentFile } = useSelector(state => state.file)
  return currentFile ? (
    <div className="flex items-center m-2 mt-0 p-2 rounded-full text-xs font-bold text-gray-300">
      <ParseResult />
    </div>
  ) : null
}

export default FileStatusBar
