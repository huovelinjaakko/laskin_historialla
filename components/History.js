import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function History({ route }) {

    return(
      <View style={styles.container}>
        <FlatList style={styles.list}
        data={route.params}
        renderItem={({ item }) =>
          <Text>{item}</Text>
        }
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 50,
      alignItems: 'center',
      justifyContent: 'flex-start',
    }
});

