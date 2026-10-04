import {  Text,  View,  TextInput,  Button,  Image,  TouchableOpacity} from 'react-native';

import estilos from './estilo';

export default function Cadastro({ navigation }) {
  return (
    <View style={estilos.container}>

      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={estilos.imagem}
      />

      <Text style={estilos.titulo}>
        Criar uma conta
      </Text>

      <Text style={estilos.texto}>
        Nome
      </Text>

      <TextInput
        placeholder="Digite seu nome"
        style={estilos.input}
      />

      <Text style={estilos.texto}>
        E-mail
      </Text>

      <TextInput
        placeholder="fulano@hotmail.com"
        keyboardType="email-address"
        style={estilos.input}
      />

      <Text style={estilos.texto}>
        Senha
      </Text>

      <TextInput
        placeholder="Digite sua senha"
        secureTextEntry={true}
        style={estilos.input}
      />

      <Text style={estilos.texto}>
        Confirmar senha
      </Text>

      <TextInput
        placeholder="Digite a senha novamente"
        secureTextEntry={true}
        style={estilos.input}
      />

      <View style={estilos.botao}>
        <Button
          title="Cadastrar"
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={estilos.login}>
          Já possui uma conta? Entrar
        </Text>
      </TouchableOpacity>

    </View>
  );
}