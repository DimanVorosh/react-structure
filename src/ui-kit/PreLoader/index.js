import React from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.scss'

const PreLoader = props => {
    return (
        <div className={cn(styles.PreLoader__Wrapper, 'br-circle')}>
            <div className={cn(styles.PreLoader__Inner1, 'br-circle')}/>
            <div className={cn(styles.PreLoader__Inner2, 'br-circle')}/>
        </div>
    )
}

export default PreLoader