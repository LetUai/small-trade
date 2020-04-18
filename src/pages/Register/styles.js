import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "space-between"
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 50,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 18,
  },
  input: {
    padding: 5,
    borderWidth: 0.6,
    borderRadius: 5,
    marginTop: 4,
    height: 45,
  },
  link: {
    textAlign: "center",
    marginVertical: 40,
    color: "#6558F5",
    textDecorationLine: "underline"
  },
  footer: {
    bottom: 30,
  },
  button: {
    backgroundColor: "#009688",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  textButton: {
    color: "#FFF",
    fontWeight: "bold",
  }
})