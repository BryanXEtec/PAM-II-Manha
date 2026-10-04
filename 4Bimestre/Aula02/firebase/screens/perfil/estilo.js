import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    alignItems: 'center',
  },

  header: {
    width: '100%',
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

  foto: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginTop: -20,
    borderWidth: 4,
    borderColor: '#ffffff',
  },

  info: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 25,
  },

  nome: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#1f2937',
  },

  email: {
    fontSize: 15,
    color: '#6b7280',
    marginTop: 5,
  },

  card: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 3,
  },

  item: {
    paddingVertical: 8,
  },

  label: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 5,
  },

  valor: {
    fontSize: 16,
    color: '#1f2937',
    fontWeight: '500',
  },

  linha: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 10,
  },

  botao: {
    width: '90%',
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default estilos;