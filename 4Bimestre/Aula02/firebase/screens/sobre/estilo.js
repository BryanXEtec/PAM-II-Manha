import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },

  header: {
    backgroundColor: '#2563eb',
    paddingTop: 55,
    paddingBottom: 25,
    paddingHorizontal: 20,
  },

  titulo: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: 'bold',
  },

  conteudo: {
    padding: 20,
    alignItems: 'center',
  },

  nomeAplicativo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: 10,
  },

  versao: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 5,
    marginBottom: 20,
  },

  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 3,
  },

  tituloSecao: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 10,
  },

  texto: {
    fontSize: 15,
    color: '#4b5563',
    lineHeight: 23,
    marginBottom: 10,
  },

  nome: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2563eb',
    marginTop: 5,
  },

  direitos: {
    fontSize: 13,
    color: '#9ca3af',
    marginTop: 5,
    marginBottom: 15,
  },

  botao: {
    width: '100%',
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default estilos;