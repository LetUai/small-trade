import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
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