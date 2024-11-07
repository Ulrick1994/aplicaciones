import React, { useState } from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const AlbumScreen = ({ route }) => {
  const { albumId } = route.params;
  const [photos, setPhotos] = useState([]);

  const addPhoto = () => {
    ImagePicker.launchCamera({}, (response) => {
      if (!response.didCancel) {
        setPhotos([...photos, response.assets[0].uri]);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text>Álbum ID: {albumId}</Text>
      <FlatList
        data={photos}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Image source={{ uri: item }} style={styles.photo} />}
      />
      <Button title="Agregar Foto" onPress={addPhoto} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  photo: { width: 100, height: 100, margin: 10 },
});

export default AlbumScreen;