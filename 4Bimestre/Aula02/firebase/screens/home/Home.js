import { Text, View, TouchableOpacity } from 'react-native';
import estilos from './estilo';

export default function Home({ navigation }) {
  return (
    <View style={estilos.container}>

      {/* Cabeçalho */}
      <View style={estilos.header}>
        <Text style={estilos.titulo}>
          Meu Aplicativo
        </Text>

        <Text style={estilos.subtitulo}>
          Bem-vindo!
        </Text>
      </View>

      {/* Conteúdo */}
      <View style={estilos.conteudo}>

        <Text style={estilos.tituloMenu}>
          Menu Principal
        </Text>

        {/* Botão Perfil */}
        <TouchableOpacity
          style={estilos.menuItem}
          onPress={() => navigation.navigate('Perfil')}
        >
          <Text style={estilos.icone}>👤</Text>

          <View>
            <Text style={estilos.menuTitulo}>
              Meu Perfil
            </Text>

            <Text style={estilos.menuDescricao}>
              Visualize e edite seu perfil
            </Text>
          </View>
        </TouchableOpacity>

        {/* Botão Configurações */}
        <TouchableOpacity
          style={estilos.menuItem}
          onPress={() => navigation.navigate('Editar')}
        >
          <Text style={estilos.icone}>⚙️</Text>

          <View>
            <Text style={estilos.menuTitulo}>
              Editar
            </Text>

            <Text style={estilos.menuDescricao}>
              Altere os dados
            </Text>
          </View>
        </TouchableOpacity>

        {/* Botão Sobre */}
        <TouchableOpacity
          style={estilos.menuItem}
          onPress={() => navigation.navigate('Sobre')}
        >
          <Text style={estilos.icone}>ℹ️</Text>

          <View>
            <Text style={estilos.menuTitulo}>
              Sobre
            </Text>

            <Text style={estilos.menuDescricao}>
              Informações sobre o aplicativo
            </Text>
          </View>
        </TouchableOpacity>

        {/* Botão Sair */}
        <TouchableOpacity
          style={estilos.botaoSair}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={estilos.textoSair}>
            Sair
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}