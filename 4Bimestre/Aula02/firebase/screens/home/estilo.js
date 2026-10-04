import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },

  // Cabeçalho
  header: {
    backgroundColor: '#2563eb',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  subtitulo: {
    fontSize: 16,
    color: '#dbeafe',
    marginTop: 5,
  },

  // Conteúdo
  conteudo: {
    padding: 20,
  },

  tituloMenu: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 20,
  },

  // Itens do menu
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 15,
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

  icone: {
    fontSize: 30,
    marginRight: 15,
  },

  menuTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1f2937',
  },

  menuDescricao: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 4,
  },

  // Botão sair
  botaoSair: {
    backgroundColor: '#ef4444',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  textoSair: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default estilos;