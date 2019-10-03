import React, {Component} from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import AppStyles from '../../global';
import TextArea from '../Inputs/TextArea';

export default class ModalRequestLoan extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
}
  toggleModal() {
    this.props.onChangeState();
  }
  render() {
    const { resource, show } = this.props;
    return (
      <Modal animationType = {"fade"} transparent = {true} visible = {show}>
          <View style = {styles.modal}>
              <View style={styles.container}>
                <Text style={styles.title}>Pedido de Empréstimo</Text>

                {resource.type == "key" &&
                  <Text style={styles.textContent}>
                    Tem certeza que deseja solicitar o empréstimo da
                    <Text style={styles.textFocus}>{" Chave "+resource.title}</Text>?
                  </Text>
                }

                {resource.type == "resource" &&
                  <Text style={styles.textContent}>
                    Tem certeza que deseja solicitar o empréstimo do recurso
                    <Text style={styles.textFocus}>{" "+resource.title}</Text>?
                  </Text>
                }
                
                <TextArea placeholder="Alguma observação?" textColor={AppStyles.colour.text} />
                
                <View style={styles.viewButtons}>
                  <TouchableOpacity>
                    <Text style={styles.textButton}>Sim</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.toggleModal}>
                    <Text style={styles.textButton}>Não</Text>
                  </TouchableOpacity>
                </View>

              </View>
          </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create ({
  modal: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'rgba(0, 0, 0, 0.5)',
     padding: 16
  },
  container:{
    backgroundColor: '#FFF',
    width: '100%',
    borderRadius: 10,
    padding: 16
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    color: AppStyles.colour.text,
    textAlign: 'center',
    marginBottom: 16
  },
  textContent: {
    fontSize: 16,
    color: AppStyles.colour.text
  },
  textFocus:{
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    color: AppStyles.colour.primaryColor
  },
  viewButtons:{
    flexDirection: 'row-reverse',
    marginTop: 16
  },
  textButton:{
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: AppStyles.colour.secundaryColor,
    paddingLeft: 32
  }

})