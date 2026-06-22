import {
  Button,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { pick } from '@react-native-documents/picker';
import { DocumentPickerResponse } from '@react-native-documents/picker/src/types.ts';
import Pdf from 'react-native-pdf';

type TestLibrary = {
  id: string;
  title: string;
};

export function TestScreen({
  library,
  onBack,
}: {
  library: TestLibrary;
  onBack: () => void;
}) {
  const [tempFile, setTempFile] = React.useState<DocumentPickerResponse | null>(
    null,
  );

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
      <Button
        title="open file"
        onPress={async () => {
          try {
            // const [result] = await pick({
            //   mode: 'open',
            // });
            // setTempFile(result);
          } catch (err) {
            // see error handling
          }
        }}
      />
      {tempFile && (
        <Pdf
          source={{
            uri: tempFile.uri,
          }}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={styles.pdf}
        />
      )}

      {/*<Pressable onPress={() => {}}>*/}
      {/*  <Text>{JSON.stringify(tempFile)}</Text>*/}
      {/*</Pressable>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7f9',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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
