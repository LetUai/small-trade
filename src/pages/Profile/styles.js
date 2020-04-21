import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    position: 'relative',
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: "#FFF",
    borderBottomWidth: 0.1,
    borderBottomColor: "#999",
    zIndex: 10,
  },
  menuIcon: {
    marginLeft: "auto",
    marginRight: 15,
    marginTop: 15,
  },
  profileContainer: {
    backgroundColor: "#FFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    minHeight: 135,
  },
  profile: {
    flexDirection: "row",
  },
  imgProfile: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
  },
  description: {
    lineHeight: 18,
    color: "#555",
  },


  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  favTitle: {
    fontSize: 20,
    marginVertical: 5,
    paddingLeft: 5,
  },
  itemContainer: {
    height: 150,
    flex: 1,
    margin: 5,
    padding: 5,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  }
})