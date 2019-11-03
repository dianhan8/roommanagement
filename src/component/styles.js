import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    borderRadius: 5,
    padding: 10,
    height: 100,
  },
  itemName: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft:10,
    marginTop: 20,
  },
  titleR: {
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft:10,
  },
  modal:{
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    margin: 30,
  },
  scrollableModal: {
    height: 300,
  },
  scrollableModalContent1: {
    height: 200,
    backgroundColor: '#87BBE0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText1: {
    fontSize: 20,
    color: 'white',
  },
  scrollableModalContent2: {
    height: 200,
    backgroundColor: '#A9DCD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText2: {
    fontSize: 20,
    color: 'white',
  },
  customBackdrop: {
    flex: 1,
    backgroundColor: '#87BBE0',
    alignItems: 'center',
  },
  customBackdropText: {
    marginTop: 10,
    fontSize: 17,
  },
  itemadd:{
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 0
  },
  addtext:{
    backgroundColor: 'grey',
    marginBottom: 10,
    color: '#fff'
  },
  addbutton: {
    marginLeft: 20,
    marginBottom: 10,
    backgroundColor: '#2ecc71',
    color: '#fff',
    padding:0,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end'
  },
  login: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  activity: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  editroom:{
    margin: 10,
    alignSelf: 'flex-start'
  },
  titleEdit:{
    fontSize: 20,
  },
  nameC: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  idcardC: {
    fontSize: 16,
  },
  phonenumberC: {
    fontSize: 16
  },
  cardright: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 0,
  },
  btnRoom: {
    backgroundColor: '#3d3d3d',
    width: 130,
    alignSelf: 'flex-end'
  },
  center: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  titleModal: {
    color: '#3d3d3d',
    fontSize: 30,
    fontWeight: '600',
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: '#3d3d3d'
  },
  modalGeneral: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  btnclose: {
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    top: 0,
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowColor: '#fff'
  },
  inputLight:{
    backgroundColor: '#fff',
    color: '#3d3d3d',
    fontWeight: 'bold',
    paddingLeft: 10,
    borderRadius: 10,
    borderColor: '#3d3d3d',
    borderWidth: 0.5
  },
  item: {
    borderBottomWidth: 0,
    height:80,
    marginLeft: 0,
  },
  margin: {
    marginTop:0,
    color: '#3d3d3d',
    fontWeight: 'bold'
  },
  colorWhite: {
    color: '#3d3d3d',
    backgroundColor: '#fff',
    fontWeight: 'bold',
  },
  nodata: {
    margin:20,
    fontSize: 15
  },
  btnreport:{
    alignContent: 'flex-start',
    backgroundColor:'#3d3d3d',
    justifyContent: 'flex-start',
    height: 60
  }
})