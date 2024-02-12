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
});

export const customInputStyle = StyleSheet.create({
  conatiner: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#e8e8e8',
    padding: 10,
    borderWidth: 3,
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
  },
  container_primary: { backgroundColor: '#3B71F3', color: 'white' },
  container_sec: { fontWeight: 'bold', color: '#000000' },
});
