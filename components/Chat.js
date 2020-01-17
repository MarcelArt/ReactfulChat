import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TextInput,
  TouchableOpacity,
  ImageBackgrounds,
  Image,
  Keyboard
} from 'react-native';
import { withNavigation } from 'react-navigation';


class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enteredText: "",
            messages: [
                {
                    "incoming" : false,
                    "message" : "Halo Nuge"
                },
                {
                    "incoming" : true,
                    "message" : "Halo Juga"
                }, 
                {
                    "incoming" : false,
                    "message" : "Ngumpul yuk, udah lama nih nggak bareng"
                }, 
                {
                    "incoming" : true,
                    "message" : "Males ah, karena ngumpul itu hanya sebuah mitos yang akan angker pada waktunya"
                }
            ]        
        };
    }

    static navigationOptions = {
        headerTitle: () => <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 20 }}>Whatsapp</Text>
    };

    chatStyling = function(incoming) {
        if(incoming) {
            return {
                borderWidth: 1,
                borderRadius: 10,
                alignSelf: 'flex-start',
                margin: 10,
                fontSize: 16,
                padding: 10,
                maxWidth: 300,
                backgroundColor: '#FFFFFF'
            }
        }
        else {
            return {
                borderWidth: 1,
                borderRadius: 10,
                alignSelf: 'flex-end',
                margin: 10,
                fontSize: 16,
                padding: 10,
                maxWidth: 300,
                backgroundColor: '#DCF8C6'
            }
        }
    }

    componentDidMount(){
        // console.log('messages ' + this.state.messages);
        
        // this.setState({
        //     dataSource: this.state.messages
        // }, function(){

        // });
    }

    onPress = () => {
        if(this.state.enteredText!="") {
            this.setState({
                enteredText: "",
                messages: [...this.state.messages, { "incoming": false, "message": this.state.enteredText }]
            });
        }
        Keyboard.dismiss();
    }

    sendText = function() {
        console.log('messages ', this.state.messages);
        // this.setState({
        //     messages: [...this.state.messages, { "incoming": false, "message": this.state.enteredText }]
        // });
        // this.state.messages.push({ "incoming": false, "message": this.state.enteredText })
    }

    render() {
                                // console.log('cekData', this.state.messages.messages)

        return (
            <View style={{ flex: 1, backgroundColor: '#ECE5DD' }}>
                <FlatList
                    style={styles.container}
                    data={this.state.messages}
                    renderItem={
                        ({item}) => <Text style={this.chatStyling(item.incoming)}>{item.message}</Text>
                    }
                    keyExtractor={(item, index) => (`message-${index}`)} />
                {/* <Text>Text</Text> */}
                <View style={{ flexDirection: 'row' }} >
                    <TextInput
                        style={ styles.textBox }
                        value={this.state.enteredText}
                        onChangeText={(enteredText) => this.setState({enteredText}) } 
                        placeholder='Type a message' />
                    <TouchableOpacity style={ styles.sendButton } onPress={ this.onPress } >
                        <Image
                            source= {require('../assets/send.png')}
                            style={ styles.sendIcon } />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        padding: 20
    },
    textBox: {
        margin: 10,
        borderRadius: 15,
        flex: 0.8,
        backgroundColor: '#FFFFFF'
    },
    sendButton: {
        alignItems: 'center',
        flex: 0.2,
        backgroundColor: '#075E54',
        borderRadius: 100,
        height: 50
    },
    sendIcon: {
        marginTop: 9,
        height: 30,
        width: 30
    }
})

export default withNavigation(Chat);