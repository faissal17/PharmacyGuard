import { StyleSheet } from 'react-native';

export const LoginScreenStyle = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  Logo: {
    width: '80%',
    maxWidth: 300,
    maxHeight: 300,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export const customInputStyle = StyleSheet.create({
  conatiner: {
    backgroundColor: '#F1FFF7',
    width: '100%',

    borderColor: '#e8e8e8',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
});

export const CustomButtonStyle = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container_primary: { backgroundColor: '#3B71F3', color: 'white' },
  container_sec: { fontWeight: 'bold', color: '#000000' },
  container_third: { fontWeight: 'bold', color: '#5F9EA0', padding: 2 },
});

export const HomeScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbar: {
    flex: 1,
  },
  Logo: {
    width: '80%',
    maxWidth: 300,
    maxHeight: 300,
  },
});

export const PharmacyListsScreenStyle = StyleSheet.create({
  conatiner: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '80%',
    maxWidth: 300,
    maxHeight: 300,
  },
  text: {
    color: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingVertical: 15,
  },
});

export const CustomTableStyle = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const FavoritesScreenStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '80%',
    maxWidth: 300,
    maxHeight: 300,
  },
  text: {
    color: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingVertical: 15,
  },
});

export const SettingScreenStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '80%',
    maxWidth: 300,
    maxHeight: 300,
  },
  text: {
    color: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingVertical: 15,
  },
});

export const PharmacyDetailsScreenStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '80%',
    maxWidth: 300,
    maxHeight: 300,
  },
  text: {
    color: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingVertical: 15,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  distance: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  servicesContainer: {
    marginBottom: 10,
  },
  servicesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  service: {
    backgroundColor: '#eee',
    padding: 5,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 5,
  },
  openingHoursContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  openingHours: {
    marginLeft: 5,
    fontSize: 16,
    color: '#333',
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
});
