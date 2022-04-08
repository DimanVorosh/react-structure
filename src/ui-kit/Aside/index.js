import React from 'react'
import cn from 'classnames'

// images
import logo from  '../../assets/img/logo.svg'

// styles
import styles from './index.module.scss'

// ui-kit
import {NavLink} from 'react-router-dom'
import SvgSprite from '../SvgSprite'

const Aside = props => {
    return (
        <aside {...props} className={cn(styles.Aside, {[props.className]: props.className})}>
            <div className={'d-flex ai-start jc-center mt-10 full-w'}>
                <img src={logo} alt={'Мой доктор'}/>
            </div>
            <div className={cn('d-flex fd-col ai-start jc-between full-h full-w', styles.Aside__content)}>
                {props.children}
            </div>
        </aside>
    )
}

export const Item = props => {
    return (
        <NavLink
            {...props}
        >
            {({isActive}) => (
                <div
                    className={cn(
                        'd-flex ai-center jc-start ta-l mt-2 br-default',
                        styles.Aside__Item_main,
                        {
                            [styles.Aside__Item_main_active]: isActive
                        }
                    )}
                >
                    <div className={cn('ml-5', styles.Aside__ItemIconBox)}>
                        <SvgSprite spriteID={props.icon && props.icon} className={cn(styles.Aside__ItemIcon)}/>
                    </div>
                    <p className={'mt-2 mb-2 mr-6 ml-4'}>{props.children}</p>
                </div>
            )}
        </NavLink>
    )
}

// export const ItemAsButton = props => {
//     return (
//         <button
//             type={'button'}
//             {...props}
//         >
//             <div
//                 className={cn(
//                     'd-flex ai-center jc-start ta-l fz-2 p-2',
//                     styles.Aside__Item_main
//                 )}
//             >
//                 {props.children}
//             </div>
//         </button>
//     )
// }

export default Aside