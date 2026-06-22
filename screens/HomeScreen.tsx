import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
type TestLibrary = {
  id: string;
  title: string;
};

const testLibraries: TestLibrary[] = [
  {
    id: 'react-native-pdf',
    title: 'react-native-pdf',
  },
  {
    id: 'react-native-skia',
    title: 'react-native-skia',
  },
];

export function HomeScreen({ onSelect }: { onSelect: (library: TestLibrary) => void }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>React Native Laboratory</Text>
      <View style={styles.buttonList}>
        {testLibraries.map(library => (
          <Pressable
            key={library.id}
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => onSelect(library)}
          >
            <Text style={styles.buttonText}>{library.title}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7f9',
  },
  screen: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  title: {
    color: '#111827',
    fontSize: 24,
    fontWeight: '700',
  },
  buttonList: {
    gap: 12,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#d1d5db',
    borderRadius: 8,
    borderWidth: 1,
    minHeight: 52,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '600',
  },
  backButton: {
    alignSelf: 'flex-start',
    borderColor: '#d1d5db',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  backButtonText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '600',
  },
});
