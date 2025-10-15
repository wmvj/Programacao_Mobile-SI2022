import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Header } from '@/components/Header'
import { Title } from '@/components/Title'
import { ButtonIcon } from '@/components/ButtonIcon'

export function Product() {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <ButtonIcon
          name="arrow-circle-left"
          onPress={() => navigation.goBack()}
        />
        <Title>Product</Title>
      </Header>
    </View>
  )
}