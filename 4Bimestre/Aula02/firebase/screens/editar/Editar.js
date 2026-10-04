import {  Text,  View,  TextInput,  TouchableOpacity,  Alert,  ActivityIndicator,} from 'react-native';

import { useEffect, useState } from 'react';

import { doc, getDoc, updateDoc } from 'firebase/firestore';

import { auth, db } from '../../firebase/firebase';

import estilos from './estilo';

export default function Editar({ navigation }) {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarDados();
  }, []);

  async function carregarDados() {

    try {

      const usuarioLogado = auth.currentUser;

      if (!usuarioLogado) {
        navigation.navigate('Login');
        return;
      }

      // E-mail vem do Authentication
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

      console.log('Erro ao carregar dados:', error);

      Alert.alert(
        'Erro',
        'Não foi possível carregar seus dados.'
      );

    } finally {

      setCarregando(false);

    }
  }

  async function salvarAlteracoes() {

    if (!nome || !usuario) {
      Alert.alert(
        'Atenção',
        'Preencha o nome e o usuário.'
      );
      return;
    }

    try {

      const usuarioLogado = auth.currentUser;

      if (!usuarioLogado) {
        navigation.navigate('Login');
        return;
      }

      // Referência do documento do usuário
      const referencia = doc(
        db,
        'usuarios',
        usuarioLogado.uid
      );

      // Atualiza os dados no Firestore
      await updateDoc(referencia, {
        nome: nome,
        usuario: usuario,
      });

      navigation.navigate('Perfil');

    } catch (error) {

      console.log('Erro ao salvar:', error);

      Alert.alert(
        'Erro',
        'Não foi possível salvar as alterações.'
      );
    }
  }

  if (carregando) {
    return (
      <View style={estilos.container}>
        <ActivityIndicator size="large" />
        <Text>Carregando dados...</Text>
      </View>
    );
  }

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
          value={nome}
          onChangeText={setNome}
        />

        <Text style={estilos.label}>
          E-mail
        </Text>

        <TextInput
          style={estilos.input}
          placeholder="Seu e-mail"
          value={email}
          editable={false}
        />

        <Text style={estilos.label}>
          Usuário
        </Text>

        <TextInput
          style={estilos.input}
          placeholder="Digite seu usuário"
          value={usuario}
          onChangeText={setUsuario}
          autoCapitalize="none"
        />

        {/* Salvar */}
        <TouchableOpacity
          style={estilos.botaoSalvar}
          onPress={salvarAlteracoes}
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