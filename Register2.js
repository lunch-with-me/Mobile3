import React from "react";


import {ScrollView,View, Text, Picker,StatusBar,TextInput,ImageBackground,TouchableOpacity,StyleSheet} from 'react-native';
import DatePicker from 'react-native-datepicker';
import RadioForm, {
  RadioButton, 
  RadioButtonInput, 
  RadioButtonLabel
} from 'react-native-simple-radio-button';

let gender=[
    {label:"female",value:0},
    {label:"male",value:1},
    {label:"other",value:2}
  ]
export  class Test extends React.Component {
    constructor(props){
        super(props);
     
        this.state = {
           job: "default occupation",
           date:"01-01-2019",
           
           
     }
    }
     
      static navigationOptions = {
        header: null
    }
  render() {
    return (
        <ScrollView>
        <View style={styles5.container}>
        <ImageBackground source={require('./Images/back.jpg')} blurRadius={10} style={{width: '100%', height: '100%'}}>
          <Text style={styles5.txtH}>Create Account</Text>
          
        <Text style={styles5.txt}>Full Name*</Text>
        <TextInput style={styles5.txt2}
         
          placeholder="Enter Full Name"
          //secureTextEntry={true}
          //onChangeText={text =>this.setState({confirmpassword : text})}
          placeholderTextColor="#D5AFAF"
          />
          
          <Text style={styles5.txt}>Gender*</Text>
         
          <RadioForm
          radio_props={gender}
          initial={-1}
          onPress={(value)=>{}}
          buttonSize={12}
          selectedButtonColor={'black'}
          buttonColor={'grey'}
          //labelColor={'#fffffb'}
          labelStyle={{fontSize: 15, color: '#fffffb',fontWeight:"bold"}}
          //buttonOuterSize={12}
          />
    
    
         
        
    
          
    
    
    <Text style={styles5.txt}>Date of Birth*</Text>
    
          <DatePicker
              style={{width: 200}}
              date={this.state.date} //initial date from state
              mode="date" //The enum of date, datetime and time
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate="01-01-2016"
              maxDate="01-01-2019"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                  //color:'#fffffb'
                },
                dateText: {
                  fontSize: 14,
                  color: '#D5AFAF'
              }
              }}
              onDateChange={(date) => {this.setState({date: date})}}
            />
    
    
    
    <Text style={styles5.txt}>Description about yourself*</Text>
    <TextInput style={styles5.txt2}
     
      placeholder="Self Description"
      //secureTextEntry={true}
      //onChangeText={text =>this.setState({confirmpassword : text})}
      placeholderTextColor="#D5AFAF"
      />
    
         
          
    <Text style={styles5.txt}>Mobile Number* </Text>
      <TextInput style={styles5.txt2}
      //style={styles2.input}
      placeholder="Mobile Number"
      //secureTextEntry={true}
      //onChangeText={text =>this.setState({confirmpassword : text})}
      placeholderTextColor="#D5AFAF"
      />
      
      <Text style={styles5.txt}>Select Occupation*</Text>
    <Picker
      selectedValue={this.state.job}
      style={{height: 50, width: 150,color:"#D5AFAF"}}
      onValueChange={(itemValue, itemIndex) =>
        this.setState({job: itemValue})
      }>
      <Picker.Item label="student" value="std" />
      <Picker.Item label="software Developer" value="sd" />
      <Picker.Item label="Doctor" value="d" />
      <Picker.Item label="Professor" value="p" />
      <Picker.Item label="Other" value="o" />
    </Picker>
    <TouchableOpacity >
    <Text style={styles5.btn}>click to select a profile picture</Text>
    </TouchableOpacity>
    <Text>Fill the preference for better service</Text>
    <TouchableOpacity
   onPress={() => this.props.navigation.navigate('Preference')}
    >
        <View style={{width:'30%',height:30,backgroundColor:'tomato'}}>
        <Text style={{color:'white'}}>Preferences</Text>
        </View>
    </TouchableOpacity>
    </ImageBackground>
    </View>

    </ScrollView>
    );
  }
}


const styles5 =StyleSheet.create({
    container: {
      flex:1,
      //backgroundColor:'rgb(230, 204, 179)',
      backgroundColor:'#C89696',
      width:"100%",
      height:"100%",
      //borderWidth: 3,
      //borderColor: '#000000',
      justifyContent: 'center',
      alignItems: 'center',
     
    },
  
  
  txtH:{
   color:"#fffffb",
    //textAlign:"center",
    marginTop:10,
    fontWeight:"bold",
    fontSize: 25
  
  },
  txt:{
    color:"#fffffb",
     //textAlign:"center",
     marginTop:15,
     fontWeight:"bold",
     fontSize: 20,
     paddingBottom:15
  
   },
   txtt:{
    color:"#fffffb",
     //textAlign:"center",
     marginTop:15,
     fontWeight:"bold",
     fontSize: 20,
     paddingBottom:20
  
   },
   txt2:{
    color:"#fffffb",
     //textAlign:"center",
     //marginTop:15,
     fontWeight:"bold",
     fontSize: 15
  
   },
   input:{
    borderColor:'#fffffb',
    //backgroundColor:'rgba(240,208,193,0.5)' ,
    height:40,
    width:150,
    marginBottom:10,
    marginTop:10,
    color:'#fffffb',
    //borderRadius:20,
    fontWeight:'bold',
    paddingLeft:20,
   },
   btn:{
    //backgroundColor: '#DDDDDD',
    color:"#D5AFAF",
    padding: 10,
    fontWeight:"bold",
     fontSize: 20,
   }
  
  
  
  
  
  });
  