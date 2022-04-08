import React, {useState} from 'react'
import cn from 'classnames'

// styles
import styles from './index.module.scss'

const RadioButtons = props => {
    const {className, values, getValue} = props
    const [value, setValue] = useState(values[0])

    function handleClick(val) {
        setValue(val)

        if (typeof getValue === 'function') {
            getValue(val)
        }
    }

    return (
        <div className={cn(styles.RadioButton__Wrapper, {[className]: className})}>
            {values && values.map(i => (
                <div key={i} {...props} onClick={() => handleClick(i)} className={cn('d-flex ai-center jc-start', styles.RadioButton)}>
                    <div className={cn('br-circle', styles.RadioButton__Flag, {[styles.RadioButton__Flag_active]: value === i})}>

                    </div>
                    <p className={'ml-2 fz-2'}>{i}</p>
                </div>
            ))}
        </div>
    )
}

export default RadioButtons