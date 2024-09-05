
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, Alert, TextInput, TouchableOpacity, initialState, ScrollView, Switch, FlatList, SectionList, ActivityIndicator} from 'react-native';

const personal = [
  {title:'Age', value: '23 years old'},
  {title:'Address', value: 'Iloilo City'},
  {title:'Nationality', value: 'Filipino'},
  {title:'Email', value: 'ja.nieves.psa@gmail.com'},


];

const educ = [
  {title:'Iloilo National High School', data: ['Junior High School','2015-2019','regular class']},
  {title:'Iloilo National High School', data: ['Senior High School','2019-2020','TVL-ICT']},
  {title:'Iloilo Science and Technology University', data: ['Bachelor of Science in Information Technology','2020-2024']},

]


export default function App() {
  const [value, setValue] = React.useState(initialState, '')
  const [switchValue, setSwitchValue] = React.useState(initialState, '')

  
  return (
    <SafeAreaView style={{
      width: '100%',
      height: '100%',
      alignItems:'center',
      marginTop: 50
    }}>
      <ScrollView style={{
        backgroundColor: 'white',
        width: '90%',
        height: '100%',  
        
      }}>
        <View >
          <View style={styles.intro}>
          <Image source={{ uri: 'https://cdna.artstation.com/p/assets/images/images/070/077/126/large/miraikitsu-chibi-gojo.jpg?1701711468'}}
                style={{
                  width: 100,
                  height: 100
                }}

            />
         
            <Text style={{fontSize: 25, fontWeight:'bold'}}>Jireh Antonette J. Nieves</Text>
            <Text>Information Systems Analyst I</Text>
          
          
          </View>
          
    
<View style={{width:'100%'}}>
          <Text style={{marginTop:30,fontSize:25, fontWeight:'bold'}}>Personal Details</Text>

          <FlatList
            data={personal}
            renderItem={({item}) => (
              <Text style={{
                margin: 3,
                fontSize: 16,                
              }}>{item.title}: {item.value}</Text>
            )} />

            <Text style={{marginTop:30,fontSize:25, fontWeight:'bold'}}>Education</Text>
            <SectionList
              style={{marginTop:10}}
              sections={educ}
              renderSectionHeader={({section: {title}}) => (
                <Text style={{
                  fontWeight:'bold',
                  fontSize: 20,
                  borderBottomWidth: 1
                }}>{title}</Text>
  )}
            renderItem={({item}) => (
              <Text style={{
                fontSize: 16
              }}>{item}</Text>
            )}  
            />
            </View>
<TouchableOpacity 
  onPress={() => Alert.alert('No more next page')}
  style={{
    paddingHorizontal: 24,
    paddingVertical:12,
    borderRadius: 10,
    margin: 20,
    alignSelf:'flex-end',
    width:'auto',
    backgroundColor: 'skyblue'
}}>
  <Text>Next Page</Text>
  </TouchableOpacity>

</View>


      </ScrollView>
     
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  intro:{
    padding: 20,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'lightblue'
  }
})