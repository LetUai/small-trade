import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 25,
  },
  search: {
    flex: 1,
    height: 37,
  },
  searchIcon: {
    marginHorizontal: 8,
  },
  trade: {
    backgroundColor: "#FFF",
    padding: 12,
    marginVertical: 8,
    borderRadius: 5,
    minHeight: 135,
  },
  profileContainer: {
    flexDirection: "row",
  },
  imgProfile: {
    width: 46,
    height: 46,
    borderRadius: 50,
    marginRight: 10,
    marginBottom: 10,
  },
  companyName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
  },
  tags: {
    fontSize: 13,
    fontStyle: "italic",
    color: "#999",
    width: 250,
  },
  description: {
    lineHeight: 18,
    color: "#555",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },
  detailsText: {
    color: "#009688"
  },
})