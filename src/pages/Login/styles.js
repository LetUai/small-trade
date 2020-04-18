import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
  header: {
    
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
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