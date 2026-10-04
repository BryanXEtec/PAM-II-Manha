import {  Text,  View,  Image,  TouchableOpacity,} from 'react-native';

import estilos from './estilo';

export default function Perfil({ navigation }) {
  return (
    <View style={estilos.container}>

      {/* Cabeçalho */}
      <View style={estilos.header}>
        <Text style={estilos.titulo}>
          Meu Perfil
        </Text>
      </View>

      {/* Foto */}
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={estilos.foto}
      />

      {/* Informações */}
      <View style={estilos.info}>

        <Text style={estilos.nome}>
          Fulano da Silva
        </Text>

        <Text style={estilos.email}>
          fulano@hotmail.com
        </Text>

      </View>

      {/* Dados */}
      <View style={estilos.card}>

        <View style={estilos.item}>
          <Text style={estilos.label}>
            Nome
          </Text>

          <Text style={estilos.valor}>
            Fulano da Silva
          </Text>
        </View>

        <View style={estilos.linha} />

        <View style={estilos.item}>
          <Text style={estilos.label}>
            E-mail
          </Text>

          <Text style={estilos.valor}>
            fulano@hotmail.com
          </Text>
        </View>

        <View style={estilos.linha} />

        <View style={estilos.item}>
          <Text style={estilos.label}>
            Usuário
          </Text>

          <Text style={estilos.valor}>
            fulano123
          </Text>
        </View>

      </View>

      {/* Botão voltar */}
      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={estilos.textoBotao}>
          Voltar
        </Text>
      </TouchableOpacity>

    </View>
  );
}