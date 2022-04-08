import {Store} from 'react-notifications-component'

export default function useNtf () {
    return function (title, message, type, duration = 5000, container = "top-right") {
        Store.addNotification({
            title,
            message,
            type,
            insert: "top",
            container,
            width: 400,
            dismiss: {
                duration,
                onScreen: true
            }
        })
    }
}