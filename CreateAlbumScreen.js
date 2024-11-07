import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const CreateAlbumScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');

  const saveAlbum = () => {
    // Guardar el álbum (podrías usar un estado o base de datos aquí)
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nombre del Álbum"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <Button title="Guardar Álbum" onPress={saveAlbum} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  input: { width: '80%', padding: 10, marginVertical: 10, borderWidth: 1, borderColor: '#ddd' },
});

export default CreateAlbumScreen;
