import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { useEffect, useState } from 'react';

import { doc, getDoc } from 'firebase/firestore';

import { auth, db } from '../../firebase/firebase';

import estilos from './estilo';

export default function Perfil({ navigation }) {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarPerfil();
  }, []);

  async function carregarPerfil() {

    try {

      // Pega o usuário que está logado
      const usuarioLogado = auth.currentUser;

      // Se não tiver usuário logado, volta para o Login
      if (!usuarioLogado) {
        navigation.navigate('Login');
        return;
      }

      // E-mail do usuário logado
      setEmail(usuarioLogado.email);

      // Busca os dados no Firestore
      const referencia = doc(
        db,
        'usuarios',
        usuarioLogado.uid
      );

      const documento = await getDoc(referencia);

      if (documento.exists()) {

        const dados = documento.data();

        setNome(dados.nome || '');
        setUsuario(dados.usuario || '');

      }

    } catch (error) {

      console.log('Erro ao carregar perfil:', error);

    } finally {

      setCarregando(false);

    }
  }

  // Enquanto busca os dados
  if (carregando) {
    return (
      <View style={estilos.container}>
        <ActivityIndicator size="large" />
        <Text>Carregando perfil...</Text>
      </View>
    );
  }

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
          {nome}
        </Text>

        <Text style={estilos.email}>
          {email}
        </Text>

      </View>

      {/* Dados */}
      <View style={estilos.card}>

        <View style={estilos.item}>
          <Text style={estilos.label}>
            Nome
          </Text>

          <Text style={estilos.valor}>
            {nome}
          </Text>
        </View>

        <View style={estilos.linha} />

        <View style={estilos.item}>
          <Text style={estilos.label}>
            E-mail
          </Text>

          <Text style={estilos.valor}>
            {email}
          </Text>
        </View>

        <View style={estilos.linha} />

        <View style={estilos.item}>
          <Text style={estilos.label}>
            Usuário
          </Text>

          <Text style={estilos.valor}>
            {usuario}
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