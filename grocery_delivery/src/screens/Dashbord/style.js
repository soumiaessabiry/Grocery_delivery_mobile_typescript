import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  viewAllcategorie: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 20,
    borderRadius: 20,
  },
  viewcategorie: {
    width: 100,
    borderRadius: 10,
    height: 40,
    paddingVertical: 10,
    borderTopStartRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 15,
  },
  viewProduct: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    gap: 10,
  },
  viewproduit: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  produit: {
    width: 170,
    height: 280,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  imageproduit: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },
  titleproduit: {
    paddingVertical: 10,
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  TouchableOpacity: {
    backgroundColor: '#6b8e23',
    width: '50%',
    paddingVertical: 6,
    alignSelf: 'center',
    borderRadius: 5,
  },
  textTouchableOpacity: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 19,
  },
  textBackground: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default styles;
