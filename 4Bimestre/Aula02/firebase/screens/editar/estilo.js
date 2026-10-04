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

  formulario: {
    padding: 20,
  },

  label: {
    fontSize: 16,
    color: '#1f2937',
    fontWeight: '600',
    marginBottom: 7,
  },

  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },

  botaoSalvar: {
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  botaoCancelar: {
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  textoCancelar: {
    color: '#ef4444',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default estilos;