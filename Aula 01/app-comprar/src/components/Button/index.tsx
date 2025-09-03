import {Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps &{
    title: string
}

export function Button({...rest}:Props ){
    return (
        <TouchableOpacity {...rest}>
            <Text></Text>
        </TouchableOpacity>
    )
}
