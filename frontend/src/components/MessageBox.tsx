import React from 'react'

type props={
    variant?: 'success' | 'danger' | 'info',
    children: React.ReactNode
}
export default function MessageBox(props: props) {
    return (
        <div className={`alert alert-${props.variant || 'info'}`}>
            {props.children}
        </div>
    )
}
