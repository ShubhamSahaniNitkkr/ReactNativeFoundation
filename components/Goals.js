import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../styles';
const {
  BgRed,
  errItem,
  doneTasks,
  dNone,
  fs18,
  goalItem,
  inputsSection,
  mt5,
  successClr,
} = styles;

const Pallet = (props) => {
  const { err, errIdx, goals, updateGoal, updateModal, markDone } = props;
  return (
    <View>
      <View
        style={[
          BgRed,
          errItem,
          inputsSection,
          mt5,
          err !== '' && updateGoal ? '' : dNone,
        ]}
      >
        <Text>{err}</Text>
      </View>
      {goals.map((goal, idx) => (
        <View
          key={idx}
          style={[
            goalItem,
            inputsSection,
            mt5,
            errIdx === idx && updateGoal ? successClr : '',
          ]}
        >
          {updateGoal ? (
            <Icon
              name='checkbox'
              type='ionicon'
              color='green'
              onPress={(e) => markDone(goal)}
            />
          ) : (
            <Icon
              name='trash'
              type='ionicon'
              color='red'
              onPress={(e) => updateModal(true, goal)}
            />
          )}

          <Text style={[fs18, updateGoal ? '' : doneTasks]}>{goal}</Text>
          {updateGoal ? (
            <Text style={fs18} onPress={() => updateGoal(goal)}>
              Edit
            </Text>
          ) : null}
        </View>
      ))}
    </View>
  );
};

export default Pallet;
