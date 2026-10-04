import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  imagem: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },

  texto: {
    alignSelf: 'flex-start',
    fontSize: 16,
    marginBottom: 5,
  },

  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  botao: {
    width: '100%',
    marginTop: 10,
  },
});

export default estilos;