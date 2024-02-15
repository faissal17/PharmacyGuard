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
    fontSize: 12,
    fontWeight: 'bold',
    paddingVertical: 23,
  },
});
