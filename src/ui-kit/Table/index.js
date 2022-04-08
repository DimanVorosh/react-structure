import React, {useRef} from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.scss'

// ui-kit
import SvgSprite from '../SvgSprite'
import ReactTooltip from 'react-tooltip'

export const Table = props => {
    return <table {...props} className={cn(styles.Table)}/>
}

export const THead = props => {
    return <thead {...props} className={cn('ta-l', styles.Table__THead)}/>
}

export const Head = props => {
    return <th {...props} className={cn('ta-l pl-4 py-3', styles.Table__Header)}/>
}

export const Row = props => {
    const {clickable, onClick} = props

    function handleClick({target}) {
        if (typeof onClick === 'function' && target.classList.value.split(' ').includes('clickable')) {
            onClick()
        }
    }

    return (
        <tr {...props} onClick={handleClick} className={cn(styles.Table__Row, {[styles.Table__Col_clickable]: clickable})}>
            {props.children && props.children.length >= 35 ? props.children.substr(0, 32) + '...' : props.children}
            {/*<td className={cn('pl-4 py-3', styles.Table__IconWrapper)}><SvgSprite className={styles.Table__Icon} spriteID={icon ? icon : 'more'}/></td>*/}
        </tr>
    )
}

export const Col = props => {
    return (
        <td>
            <div {...props} className={cn(
                'd-flex ai-center jc-start p-3 pl-4 pr-0',
                styles.Table__Col,
                {
                    [styles.Table__Col_highlight]: props.highlight,
                    [styles.Table__Col_ntf]: props.ntf,
                    [styles.nonHighlighting]: props.nonHighlighting,
                    ['clickable']: !props.nonClickable
                })}
            >
                {props.children}
            </div>
        </td>
    )
}