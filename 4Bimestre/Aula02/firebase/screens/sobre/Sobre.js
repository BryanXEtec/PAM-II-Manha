import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import estilos from './estilo';

export default function Sobre({ navigation }) {
  return (
    <View style={estilos.container}>

      {/* Cabeçalho */}
      <View style={estilos.header}>
        <Text style={estilos.titulo}>
          Sobre Nós
        </Text>
      </View>

      {/* Conteúdo */}
      <View style={estilos.conteudo}>

        <Text style={estilos.nomeAplicativo}>
          Meu Aplicativo
        </Text>

        <Text style={estilos.versao}>
          Versão 1.0.0
        </Text>

        <View style={estilos.card}>

          <Text style={estilos.tituloSecao}>
            Sobre o aplicativo
          </Text>

          <Text style={estilos.texto}>
            Este aplicativo foi desenvolvido com o objetivo
            de oferecer uma experiência simples, prática e
            agradável para seus usuários.
          </Text>

          <Text style={estilos.texto}>
            Aqui você pode gerenciar seu perfil, consultar
            suas informações e utilizar os recursos
            disponíveis no aplicativo.
          </Text>

        </View>

        <View style={estilos.card}>

          <Text style={estilos.tituloSecao}>
            Nossa equipe
          </Text>

          <Text style={estilos.texto}>
            Desenvolvido por:
          </Text>

          <Text style={estilos.nome}>
            Sua Equipe
          </Text>

        </View>

        <Text style={estilos.direitos}>
          © 2026 Meu Aplicativo
        </Text>

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

    </View>
  );
}