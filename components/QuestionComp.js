import { Text, View, SafeAreaView } from 'react-native'
import React from 'react'

function QuestionComp(props) {
    question = props.question,
    options = props.options
    correctOption = props.correctOption
    showAnswer = props.showAnswer

    return (
    <SafeAreaView style = {{alignItems: 'center',}}>
        <Text style = {{color: '#ffbf00', fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>{question}</Text>
        <View style={{margin: 20}}>{showOptions(options)}</View>
    </SafeAreaView>
    );

    function showOptions(arr) {
        if (showAnswer == true) {
            i = 0;
            return arr.map(obj => {
                i++;
                if (i == correctOption) {
                    return <Text style = {{color: '#2ef262', fontSize: 16, fontWeight: 'bold'}} key={i}>{obj}</Text>;
                }
                else {
                    return <Text style = {{color: 'white', fontSize: 16}} key={i}>{obj}</Text>;
                }
              });
        }
        else {
            i = 0;
            return arr.map(obj => {
                i++;
                return <Text style = {{color: 'white', fontSize: 16}} key={i}>{obj}</Text>;
              });
        }
      }
}


export default QuestionComp;