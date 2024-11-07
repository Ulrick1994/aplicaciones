import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const albums = [
    { id: '1', title: 'Vacaciones' },
    { id: '2', title: 'Familia' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={albums}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button
            title={item.title}
            onPress={() => navigation.navigate('Album', { albumId: item.id })}
          />
        )}
      />
      <Button title="Crear Nuevo Álbum" onPress={() => navigation.navigate('CreateAlbum')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default HomeScreen;