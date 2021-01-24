import React, { useState } from 'react';
import {
  Button,
  CheckBox,
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
    color: 'black',
  },
  dNone: {
    display: 'none',
  },
  errClr: {
    backgroundColor: 'pink',
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
  errClr,
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
    setGoals([...goals, goal]);
    setGoal('');
  };

  const updateGoal = (goal) => {
    setGoal(goal);
    setMode('Edit');
    completeGoals.splice(completeGoals.indexOf(goal), 1);
    setCompleteGoals([...completeGoals]);
  };

  const deleteGoal = (goal) => {
    completeGoals.splice(completeGoals.indexOf(goal), 1);
    setCompleteGoals([...completeGoals]);
  };

  const markDone = () => {};

  const resetGoals = () => {
    setGoals([]);
    setCompleteGoals([]);
  };

  // const updateGoals = () => {
  //   const existIdx = goals.indexOf(goal);
  //   if (existIdx === -1) {
  //     setGoals([...goals, goal]);
  //   } else {
  //     setErr('Goal already exist !');
  //     setErrIdx(existIdx);
  //     setTimeout(() => {
  //       setErr('');
  //       setErrIdx('');
  //     }, 8000);
  //   }
  //   setGoal('');
  // };

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
            title='RESET'
            color='white'
            onPress={resetGoals}
            raised={true}
          />
        </View>
      </View>
      <View>
        <View style={fContainer}>
          <View style={[BgRed, flex1, justify]}></View>
          <View style={[BgBlue, flex1, justify]}></View>
          <View style={[BgGreen, flex1, justify]}></View>
        </View>
        {goals.map((goal, idx) => (
          <>
            <View
              key={idx}
              style={[
                goalItem,
                inputsSection,
                mt5,
                errIdx === idx ? successClr : '',
              ]}
            >
              <CheckBox
                value={false}
                onValueChange={(e) => deleteGoal(goal)}
                style={[checkbox, mr10]}
              />
              <Text style={fs18}>{goal}</Text>
            </View>
          </>
        ))}
      </View>
      <View>
        <View style={fContainer}>
          <View style={[BgRed, flex1, justify]}></View>
          <View style={[BgBlue, flex1, justify]}></View>
          <View style={[BgGreen, flex1, justify]}></View>
        </View>
        {completeGoals.map((goal, idx) => (
          <>
            <View
              key={idx}
              style={[
                goalItem,
                inputsSection,
                mt5,
                errIdx === idx ? successClr : '',
              ]}
            >
              <CheckBox
                value={false}
                onValueChange={(e) => deleteGoal(goal)}
                style={[checkbox, mr10]}
              />
              <Text style={fs18}>{goal}</Text>
            </View>
          </>
        ))}
      </View>
    </ScrollView>
  );
}
