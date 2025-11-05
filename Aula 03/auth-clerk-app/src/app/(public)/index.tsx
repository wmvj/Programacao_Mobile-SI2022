import { Button } from "@/components/Button";
import { useState } from "react";
import { Text, View } from "react-native";
import {useAuth} from "@clerk/clerk-expo"

export default function SingIn(){

    const [isLoading, setIsLoading] = useState()
    const googleAuth =  useAuth({strategy: "oauth_google"})

    async function signInWithGoogle() {
        try {
            // resolver a criação desta função para usar a conta do google com clerk
        } catch (error) {
            
        }
    }


    return(
        <View>
            <Text></Text>
            <Button
                icon="logo-google"
                title="Entrar com o Google"
                onPress={signInWithGoogle}
                isLoading={isLoading}
            />           
        </View>
    )
}