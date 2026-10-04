import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },

  imagem: {
    width: 120,
    height: 120,
    marginBottom: 15,
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 20,
  },

  texto: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#1f2937',
    marginBottom: 5,
  },

  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
    fontSize: 15,
  },

  botao: {
    width: '100%',
    marginTop: 5,
  },

  login: {
    marginTop: 20,
    fontSize: 15,
    color: '#2563eb',
    fontWeight: 'bold',
  },

});

export default estilos;