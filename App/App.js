import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

import t from 'tcomb-form-native';
const Form = t.form.Form;
import { LoginStruct, LoginOptions } from './app/components/forms/testForm';

export default function App() {

  constructor(){
    super();
    this.state = {
      testFormValue: {
        user: "",
        password: ""
      }
    };
  }

  onChange = ( testFormValue ) => {
    console.log(testFormValue);
  }

  sendFormTest = () => {
    console.log('Enviando...');
    console.log(this.state.testFormValue);
  }

render(){
  const { testFormValue } = this.state;

    return (
		<View style = { styles.container }>
			<Form ref = "formTest"
            type = { LoginStruct }
            options = { LoginOptions }
            value = { testFormValue }
            onChange = { v=> this.onChange(v) }
      />
      <Button title="Login"
              onPress={ this.sendFormTest.bind(this) }/>
		</View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
