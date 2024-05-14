const [visible, setVisible] = useState(false)
const theme = useColorScheme();

function handleShowAlert(){
Alert.alert(
  'Atenção',
  'Bloquear usuario fara que ele perca acesso ao sistema',
  [
    {
      text: 'Bloquear',
      onPress: () => console.log('Bloquear usuario'),

    },
    {
      text: 'Cancelar',
      onPress: () => console.log('Bloquear usuario')
    },
    {
      text: 'Depois',
      onPress: () => console.log('Bloquear usuario')
    },
],
  {
    cancelable: true,
    onDismiss: () => {
      console.log('Alert Dsimissed!')
    },
  
  }
)}

// style={[
//   styles.container,
//   {
//     backgroundColor: theme ==='dark' ? '#000' : '#fff'
//   }
// ]}
// >
//  <Button onPress={() => setVisible(true)}>
//    Abrir Modal
//  </Button>
 
//  <Button onPress={handleShowAlert}>
//    Mostrar Alerta
//  </Button>

{/* <Modal
animationType="fade"
visible={visible}
statusBarTranslucent
transparent
onRequestClose={()=> {
  setVisible(false);
}}
>
<StatusBar barStyle='light-content' animated/>

 <View style={styles.modalOverlay}>
  <View style={styles.modalContainer}>
  <Text style={{marginBottom: 16}}>
    Este é o conteudo do Modal!
  </Text>

  <Button
   style={{paddingHorizontal: 20,}}
   onPress={() => setVisible(false)}
   >
    Fechar
  </Button>
  </View>
 </View>
</Modal> */}