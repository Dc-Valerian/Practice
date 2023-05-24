import React, { PropsWithChildren } from 'react'

const ChildrenState: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <div>This is class</div>
            <div>{children}</div>
        </div>
    )
}

export default ChildrenState