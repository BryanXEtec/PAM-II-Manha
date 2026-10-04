import {
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';

import estilos from './estilo';

export default function Login({ navigation }) {
  return (
    <View style={estilos.container}>

      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={estilos.imagem}
      />

      <Text style={estilos.texto}>
        Digite o e-mail
      </Text>

      <TextInput
        placeholder="fulano@hotmail.com"
        style={estilos.input}
      />

      <Text style={estilos.texto}>
        Senha
      </Text>

      <TextInput
        placeholder="abc@123"
        secureTextEntry={true}
        style={estilos.input}
      />

      <View style={estilos.botao}>
        <Button
          title="Entrar"
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      {/* Cadastro */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={estilos.cadastro}>
          Não possui uma conta? Cadastre-se
        </Text>
      </TouchableOpacity>

    </View>
  );
}