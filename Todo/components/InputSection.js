import React from 'react';
import { Button, TextInput, View } from 'react-native';
import styles from '../styles';
const { addTxt, btn, BgRed, flexRow, fs18, inputsSection } = styles;

const InputSection = (props) => {
  const { mode, goal, setGoal, addGoal, resetGoals, onCancel } = props;
  return (
    <React.Fragment>
      <View style={inputsSection}>
        <TextInput
          placeholder='Type your goal here ...'
          style={[addTxt, fs18]}
          value={goal}
          onChangeText={(value) => setGoal(value)}
        />
      </View>
      <View style={flexRow}>
        <View style={btn}>
          <Button
            title={mode}
            color='white'
            onPress={goal ? addGoal : null}
            raised={true}
          />
        </View>
        <View style={[btn, BgRed]}>
          <Button
            title={mode === 'Add' ? 'RESET' : 'Cancel'}
            color='white'
            onPress={() => (mode === 'Add' ? resetGoals() : onCancel())}
            raised={true}
          />
        </View>
      </View>
    </React.Fragment>
  );
};

export default InputSection;
