import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import estilos from './estilo';

export default function Editar({ navigation }) {
  return (
    <View style={estilos.container}>

      {/* Cabeçalho */}
      <View style={estilos.header}>
        <Text style={estilos.titulo}>
          Editar Perfil
        </Text>
      </View>

      {/* Formulário */}
      <View style={estilos.formulario}>

        <Text style={estilos.label}>
          Nome
        </Text>

        <TextInput
          style={estilos.input}
          placeholder="Digite seu nome"
          defaultValue="Fulano da Silva"
        />

        <Text style={estilos.label}>
          E-mail
        </Text>

        <TextInput
          style={estilos.input}
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          defaultValue="fulano@hotmail.com"
        />

        <Text style={estilos.label}>
          Usuário
        </Text>

        <TextInput
          style={estilos.input}
          placeholder="Digite seu usuário"
          defaultValue="fulano123"
        />

        {/* Salvar */}
        <TouchableOpacity
          style={estilos.botaoSalvar}
          onPress={() => {
            Alert.alert(
              'Sucesso',
              'Seus dados foram alterados!'
            );

            navigation.navigate('Perfil');
          }}
        >
          <Text style={estilos.textoBotao}>
            Salvar alterações
          </Text>
        </TouchableOpacity>

        {/* Cancelar */}
        <TouchableOpacity
          style={estilos.botaoCancelar}
          onPress={() => navigation.navigate('Perfil')}
        >
          <Text style={estilos.textoCancelar}>
            Cancelar
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}