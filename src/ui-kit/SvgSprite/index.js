import React from 'react'
import cn from 'classnames'
import sprite from '../../assets/img/sprite.svg'

// styles
import styles from './index.module.scss'

const SvgSprite = props => {
    const {spriteID, className} = props

    return (
        <svg {...props} className={cn({[className]: className, [styles.SvgSprite_disabled]: props.disabled})}>
            <use xlinkHref={`${sprite}#${spriteID}`}/>
        </svg>
    )
}

export default SvgSprite