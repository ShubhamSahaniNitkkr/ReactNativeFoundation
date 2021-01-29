import React from 'react';
import { Button, View, Modal, Text } from 'react-native';
import styles from '../styles';
const { BgRed, flexRow, fs20, btn, modalContainer, txtBold } = styles;

const DeleteModal = (props) => {
  const {
    modal: { visible, goal },
    updateModal,
    deleteGoal,
  } = props;
  return (
    <Modal animationType='fade' visible={visible}>
      <View style={modalContainer}>
        <Text style={fs20}>
          Are you sure want to delete <Text style={txtBold}>{goal}</Text> ?
        </Text>
        <View style={flexRow}>
          <View style={btn}>
            <Button
              title='Yes'
              color='white'
              onPress={() => deleteGoal(goal)}
              raised={true}
            />
          </View>
          <View style={[btn, BgRed]}>
            <Button
              title='No'
              color='white'
              onPress={() => updateModal(false)}
              raised={true}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModal;
