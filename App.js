import React, { useState } from 'react';
import { Icon } from 'react-native-elements';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  addTxt: {
    width: '100%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  btn: {
    width: '49%',
    marginTop: 10,
    marginVertical: 5,
    marginRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#43a047',
    borderRadius: 5,
    borderWidth: 0,
  },
  BgRed: { backgroundColor: '#e65100' },
  BgBlue: { backgroundColor: '#01579b' },
  BgGreen: { backgroundColor: '#43a047' },
  checkbox: {
    alignSelf: 'center',
    height: 15,
    width: 15,
    borderWidth: 2,
    borderColor: 'black',
  },
  doneTasks: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontWeight: 'bold',
  },
  dNone: {
    display: 'none',
  },
  errClr: {
    backgroundColor: 'pink',
  },
  errItem: {
    backgroundColor: 'pink',
    color: 'white',
    padding: 5,
  },
  fContainer: { flexDirection: 'row', marginTop: 5 },
  h15: { height: 15 },
  h30: { height: 30 },
  flexRow: {
    flexDirection: 'row',
  },
  flex1: { flex: 1, height: 5 },
  fs18: { fontSize: 18 },
  goalItem: { backgroundColor: 'gainsboro', padding: 5 },
  inputsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  justify: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mt5: { marginTop: 5 },
  mr10: { marginRight: 10 },
  screen: {
    paddingTop: 50,
    padding: 30,
  },
  successClr: {
    borderColor: '#32CD32',
    borderWidth: 2,
  },
});

const {
  addBtn,
  addTxt,
  btn,
  btnText,
  BgRed,
  BgBlue,
  BgGreen,
  checkbox,
  dNone,
  doneTasks,
  errClr,
  errItem,
  flex1,
  flexRow,
  fContainer,
  fs18,
  goalItem,
  inputsSection,
  justify,
  mt5,
  mr10,
  screen,
  successClr,
} = styles;

export default function App() {
  const [mode, setMode] = useState('ADD');
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);
  const [completeGoals, setCompleteGoals] = useState([]);
  const [err, setErr] = useState('');
  const [errIdx, setErrIdx] = useState(-1);

  const addGoal = () => {
    const goalIdx = goals.indexOf(goal);
    if (goalIdx !== -1) {
      setErrIdx(goalIdx);
      setErr('Goal already exist !');
      setTimeout(() => {
        setErrIdx(-1);
        setErr('');
      }, 4000);
    } else {
      setGoals([...goals, goal]);
      setGoal('');
      setMode('Add');
    }
  };

  const updateGoal = (goalItem) => {
    setGoal(goalItem);
    setMode('Edit');
    goals.splice(goals.indexOf(goalItem), 1);
    setGoals(goals);
  };

  const onCancel = () => {
    setMode('Add');
    if (goal !== '') {
      addGoal();
    }
  };

  const deleteGoal = (goal) => {
    completeGoals.splice(completeGoals.indexOf(goal), 1);
    setCompleteGoals([...completeGoals]);
  };

  const markDone = (goal) => {
    goals.splice(goals.indexOf(goal), 1);
    setGoals([...goals]);
    setCompleteGoals([...completeGoals, goal]);
  };

  const resetGoals = () => {
    setGoals([]);
    setGoal('');
    setCompleteGoals([]);
  };

  return (
    <ScrollView style={screen}>
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
      <View>
        <View style={[fContainer, goals.length ? '' : dNone]}>
          <View style={[BgRed, flex1, justify]}></View>
          <View style={[BgBlue, flex1, justify]}></View>
          <View style={[BgGreen, flex1, justify]}></View>
        </View>
        <View
          style={[BgRed, errItem, inputsSection, mt5, err !== '' ? '' : dNone]}
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
              errIdx === idx ? successClr : '',
            ]}
          >
            <Icon
              name='square-outline'
              type='ionicon'
              color='green'
              onPress={(e) => markDone(goal)}
            />
            <Text style={fs18}>{goal}</Text>
            <Text style={fs18} onPress={() => updateGoal(goal)}>
              Edit
            </Text>
          </View>
        ))}
      </View>
      <View>
        <View style={[fContainer, completeGoals.length ? '' : dNone]}>
          <View style={[BgRed, flex1, justify]}></View>
          <View style={[BgBlue, flex1, justify]}></View>
          <View style={[BgGreen, flex1, justify]}></View>
        </View>
        {completeGoals.map((goal, idx) => (
          <View
            key={idx}
            style={[
              goalItem,
              inputsSection,
              mt5,
              errIdx === idx ? successClr : '',
            ]}
          >
            <Icon
              name='checkbox'
              type='ionicon'
              color='green'
              onPress={(e) => deleteGoal(goal)}
            />
            <Text style={[fs18, doneTasks]}>{goal}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
