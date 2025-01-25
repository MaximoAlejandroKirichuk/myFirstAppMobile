import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View, TextInput, StyleSheet,FlatList,TouchableOpacity, Modal } from 'react-native';


export default function App() {
  const [textItem, setTextItem] = useState("") 
  const [itemList, setItemList] = useState([]) 

  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState({})

  const handleChangeText = (text) => setTextItem(text)
  const handleModal = (item) => {
    setItemSelected(item)
    setModalVisible(true)
  }

  const handleDelete = () => {
    const filter = itemList.filter(item => item.id !== itemSelected.id)
    setItemList(filter)
    setModalVisible(false)
  }

  const handleCancelModal = () => {
    setModalVisible(false);
    setItemSelected({})
  }


  const addProduct = () => {
    if(textItem.trim() <= 0) return;
    const newProduct = {
      id: Math.random(),
      value: textItem.trim(),
    }; 
    setItemList([newProduct,...itemList]);
    setTextItem("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My First App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={textItem}
          onChangeText={handleChangeText}
          placeholder='Insert a product'
        />
        <Button title="Agregar" color="#5555ff" onPress={addProduct} />
      </View>
      <View style={styles.productsContainer}>
        <FlatList
          style={styles.flatlist}
          data={itemList}
          keyExtractor={task => task.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.product}
              onPress={() => handleModal(item)}
            >
              <Text style={styles.productText}>{item.value}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <Modal visible={modalVisible} animationType='slide' transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.textContainer}>
            <Text>Estas seguro que queres borrar</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textModal} > {itemSelected.value}</Text>
          </View>
          <View style={styles.btnContainer}>
            <Button title="Borrar" color="#ff5555" onPress={handleDelete} />
            <Button title="Cancelar" color="#55ff55" onPress={handleCancelModal} />
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 64,
  },
  inputContainer: {
    alignItems: "center",
    
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    fontSize: 24,
    width: 300,
    textAlign: "center",
  },
  productsContainer: {
    width: "90%",
  },
  product: {
    alignItems: "center",
    backgroundColor: "#cccccc",
    borderRadius: 5,
    justifyContent: "center",
    marginVertical: 1,
    paddingVertical: 15,
    width: "100%",

  },

  productText: {
    fontSize: 10,
    fontWeight: "bold", 
  },  
  modalContainer: {
    backgroundColor: "white",
    width: "80%",
    marginHorizontal: "10%",
    marginTop: "50%",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    gap: 20,
    paddingVertical: 20,
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 20,
    color: "white",
  },
  textModal: {
    fontWeight: "bold",
    fontSize: 20,
  },

});