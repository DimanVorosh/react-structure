import React from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.scss'
import SvgSprite from '../SvgSprite'

const Info = props => {
    const {title, children, theme, className} = props

    const themeMap = {danger: 'danger', warning: 'warn', success: 'success'}
    const spriteID = (theme === themeMap.warning || theme === themeMap.danger) ? 'warn' : theme === themeMap.success && 'success'

    const wrapperClassName = cn(
        'd-flex ai-start jc-start p-4 br-default',
        styles.Info,
        {
            [className]: className,
            [styles.Info_danger]: theme === themeMap.danger,
            [styles.Info_warning]: theme === themeMap.warning,
            [styles.Info_success]: theme === themeMap.success,
        }
    )

    return (
        <div {...props} className={wrapperClassName}>
            <SvgSprite spriteID={spriteID} className={cn('mr-4', styles.Info__Icon)}/>
            <div>
                <p className={cn('fw-bold', styles.Info__Title)}>{title}</p>
                {children && <p className={cn('mt-1', styles.Info__Content)}>{children}</p>}
            </div>
        </div>
    )
}

export default Info