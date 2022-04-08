import React from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.scss'

export const UserAvatar = props => {
    const {size /* px */, className} = props

    return (
        <img
            {...props}
            style={{width: `${size}px`, height: `${size}px`}}
            className={cn(
                'br-circle',
                styles.User__Avatar,
                {[className]: className}
            )}
            alt={'Фотография'}
        />
    )
}

export const UserEditAvatar = props => {
    const {className} = props

    return (
        <div {...props} className={cn(styles.User__EditAvatar, {[className]: className})}/>
    )
}
