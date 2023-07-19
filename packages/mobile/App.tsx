import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {msg, logFxn, add, sub, mul, div, module, apicall} from 'shared';

type Props = {};

const App = (props: Props) => {
  const [num1, setNum1] = useState<number>();
  const [num2, setNum2] = useState<number>();
  const [addresult, setAddresult] = useState<number>();
  const [diffresult, setDiffresult] = useState<number>();
  const [mulresult, setMulresult] = useState<number>();
  const [modresult, setModresult] = useState<number>();
  const [divresult, setDivresult] = useState<number>();
  const [apiresponse, setApiresponse] = useState<any>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    apicall().then(res => setApiresponse(res));
  }, []);

  const calcullate = () => {
    if (num1 && num2) {
      const add_value: number = add(num1, num2);
      const sub_value: number = sub(num1, num2);
      const mul_value: number = mul(num1, num2);
      const mod_value: number = module(num1, num2);
      const div_value: number = div(num1, num2);
      setAddresult(add_value);
      setDiffresult(sub_value);
      setMulresult(mul_value);
      setModresult(mod_value);
      setDivresult(div_value);
    } else {
      Alert.alert('Please input number');
    }
  };

  type Listprops = {
    title: String;
    id: String;
  };

  const Item = (props: Listprops) => (
    <View style={styles.eachItem}>
      <Text style={[styles.textItem, {marginLeft: 0}]}>{props.id}</Text>
      <Text style={styles.textItem}>{props.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{msg}</Text>
      <Text style={styles.subheader}>Input first number</Text>
      <TextInput
        style={styles.inputContainer}
        onChangeText={e => setNum1(Number(e))}
        placeholder="Input number 1"
      />
      <Text style={styles.subheader}>Input second number</Text>
      <TextInput
        onChangeText={e => setNum2(Number(e))}
        placeholder="Input number 2"
        style={styles.inputContainer}
      />
      <Pressable style={styles.button} onPress={calcullate}>
        <Text style={{color: 'white', fontSize: 14, fontWeight: '500'}}>
          Press and see result
        </Text>
      </Pressable>
      {addresult && (
        <View style={styles.resultContainer}>
          <View style={styles.resultView}>
            <Text style={styles.resulttext}>Add</Text>
            <Text style={styles.resulttext}>Difference</Text>
            <Text style={styles.resulttext}>Multiply</Text>
            <Text style={styles.resulttext}>Module</Text>
            <Text style={styles.resulttext}>Division</Text>
          </View>
          <View style={styles.resultView}>
            <Text style={styles.resulttext}>{addresult}</Text>
            <Text style={styles.resulttext}>{diffresult}</Text>
            <Text style={styles.resulttext}>{mulresult}</Text>
            <Text style={styles.resulttext}>{modresult}</Text>
            <Text style={styles.resulttext}>{divresult}</Text>
          </View>
        </View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{fontSize: 14, fontWeight: '500'}}>Api data</Text>
            <FlatList
              data={apiresponse}
              renderItem={({item}) => <Item title={item.title} id={item.id} />}
              keyExtractor={item => item.id}
              style={{width: 300}}
            />
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{color: 'white', fontSize: 14, fontWeight: '500'}}>
                Close
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={{color: 'white', fontSize: 14, fontWeight: '500'}}>
          View Api data
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
  },
  header: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  inputContainer: {
    borderWidth: 1,
    margin: 10,
    borderColor: 'black',
    fontSize: 12,
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 5,
    fontWeight: '500',
  },
  subheader: {
    fontSize: 14,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#262525',
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  resultContainer: {
    flexDirection: 'row',
    backgroundColor: '#800000',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  resultView: {
    margin: 10,
  },
  resulttext: {
    paddingVertical: 5,
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  eachItem: {
    flexDirection: 'row',
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
  textItem: {
    fontSize: 12,
    marginLeft: 10,
    paddingVertical: 5,
  },
});

export default App;
