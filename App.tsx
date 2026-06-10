import React, { useState } from 'react';
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedLibrary, setSelectedLibrary] = useState<TestLibrary | null>(
    null,
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {selectedLibrary ? (
        <TestScreen
          library={selectedLibrary}
          onBack={() => setSelectedLibrary(null)}
        />
      ) : (
        <HomeScreen onSelect={setSelectedLibrary} />
      )}
    </SafeAreaView>
  );
}

function HomeScreen({ onSelect }: { onSelect: (library: TestLibrary) => void }) {
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

function TestScreen({
  library,
  onBack,
}: {
  library: TestLibrary;
  onBack: () => void;
}) {
  return (
    <View style={styles.screen}>
      <Pressable
        style={({ pressed }) => [
          styles.backButton,
          pressed && styles.buttonPressed,
        ]}
        onPress={onBack}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </Pressable>
      <Text style={styles.title}>{library.title}</Text>
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

export default App;
