import React from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.scss'

const Typography = props => {
    const {tag, className} = props
    const classNames = cn({
        [styles.Title]: tag === 'h1' || tag === 'h2' || tag === 'h3',
        [styles.Title1]: tag === 'h1',
        [styles.Paragraph]: tag === 'p',
        [className]: className
    })

    return React.createElement(
        tag,
        {
            className: classNames
        },
        props.children
    )
}

export default Typography