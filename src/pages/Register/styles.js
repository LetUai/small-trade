import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "space-between"
  },
  header: {
    height: 100,
    justifyContent: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  content: {

  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
  },
  input: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 4,
  },
  link: {
    textAlign: "center",
    marginVertical: 40,
    color: "#6558F5",
    textDecorationLine: "underline"
  },
  footer: {
    bottom: 0,
  },
  button: {
    backgroundColor: "#009688",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#FFF",
    fontWeight: "bold",
    marginVertical: 10,
    marginHorizontal: 15,
  }
})