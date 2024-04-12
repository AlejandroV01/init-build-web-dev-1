import React, { ReactNode, useRef } from 'react'

const PopupParent = ({
  active = true,
  children,
  handlePopoverClose,
  mt = 'mt-56',
}: {
  active: boolean
  children: ReactNode
  handlePopoverClose: () => void
  mt?: string
}) => {
  const ref = useRef(null)
  const handleMouseDown = () => {
    document.body.style.overflow = 'auto'
    handlePopoverClose()
  }
  return (
    <div
      className={`${!active && 'hidden'} fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center z-50`}
      onMouseDown={e => ref && ref.current && !ref.current.contains(e.target) && handleMouseDown()}
    >
      <div className={`w-fit bg-background rounded-lg p-3 h-fit ${mt}`} ref={ref}>
        {children}
      </div>
    </div>
  )
}

export default PopupParent
