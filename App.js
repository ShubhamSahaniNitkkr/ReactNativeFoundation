// plugins
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
// components
import InputSection from './components/InputSection';
import Pallets from './components/Pallets';
import Goals from './components/Goals';
// styles
import styles from './styles';
const { screen } = styles;

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
      <InputSection
        mode={mode}
        goal={goal}
        setGoal={setGoal}
        addGoal={addGoal}
        resetGoals={resetGoals}
        onCancel={onCancel}
      />
      <Pallets goals={goals} />
      <Goals
        err={err}
        errIdx={errIdx}
        goals={goals}
        updateGoal={updateGoal}
        markDone={markDone}
      />
      <Pallets goals={completeGoals} />
      <Goals
        err={err}
        errIdx={errIdx}
        goals={completeGoals}
        deleteGoal={deleteGoal}
      />
    </ScrollView>
  );
}
