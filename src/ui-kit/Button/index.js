import React from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.scss'

// ui kit
import SvgSprite from '../SvgSprite'

const Button = props => {
    const {primary, secondary, icon, className, hoverEffect, theme, middle, simple} = props
    const
        hoverEffectsMap = {
            default: 'default', opacity: 'opacity',
        },
        themeMap = {
            danger: 'danger', warning: 'warn', success: 'success'
        }

    const defaultHover = hoverEffect === hoverEffectsMap.default
    const opacityHover = hoverEffect === hoverEffectsMap.opacity

    const classNames = cn(
        'd-flex ai-center jc-center br-default p-2 py-3 fz-1 fw-bold',
        {
            [styles.Button_primary]: primary,
            [styles.Button_secondary]: secondary,
            [styles.Button_primary_hover]: defaultHover && primary,
            [styles.Button_secondary_hover]: defaultHover && secondary,
            [styles.Button_opacityHover]: opacityHover,
            [styles.Button_danger]: theme === themeMap.danger,
            [styles.Button_warning]: theme === themeMap.warning,
            [styles.Button_success]: theme === themeMap.success,
            [styles.Button_middle]: middle,
            [styles.Button_simple]: simple,
            [className]: className,
            'px-4': !icon
        },
    )

    return (
        <button
            type={'button'}
            {...props}
            className={classNames}
        >
            {(icon && !simple) && <SvgSprite className={cn({'mr-2': props.children}, styles.Button__Icon)} spriteID={icon}/>}
            {(icon && simple) && <SvgSprite className={cn({'mr-4': props.children})} spriteID={icon}/>}
            {props.children}
        </button>
    )
}

export default Button