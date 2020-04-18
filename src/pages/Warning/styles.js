import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FA',
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    flex: 1,
    padding: 15,
    backgroundColor: "#DFE6ED",
    borderRadius: 5,
    marginVertical: 15,
    maxHeight: 430,
  },
  textCard: {
    marginTop: 8,
    marginBottom: 25
  },
  aside: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  checkBoxText: {
    
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
    marginVertical: 8,
    marginHorizontal: 15,
  }

});