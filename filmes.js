import React from 'react';
import { View, 
  Text, 
  StyleSheet, Image,
  TouchableOpacity,
  TouchableWithoutFeedback, 
  ScrollView, Dimensions} from 'react-native';


var { width, height} = Dimensions.get('window');
export function Filmes({title, data}) {
  let movieName ="Shark boy e Lava Girl"
  return (
    <View style={styles.container}>
         <View style={styles.containerTwo}>
            <Text style={styles.text}>{title}</Text>
            <TouchableOpacity>
                    <Text style={styles.textTwo}>Ver Tudo</Text>
            </TouchableOpacity>
           </View>
           
           <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal:15}}>
               {
                data.map((item, index)=>{
                  return(
                    <TouchableWithoutFeedback
                      key={index}
                      onPress={()=> NavigationPreloadManager.navigate('Movie', item)}
                    >
                      <View style={styles.containerImg}>
                          <Image 
                            source={require('../assets/movieTea.jpg')}
                            style={{width: width-300, height: height-500, borderRadius:10, margin:10}}
                            />
                          <Text style={styles.text}>
                            {
                            movieName.length>14 ? movieName.slice(0,14)+'...' : movieName
                            }
                          </Text>
                      </View>
                    </TouchableWithoutFeedback>               )
                })
               }
            </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#0D1D25",
      marginTop:20,
      padding:10,
    },

    containerTwo:{
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems: "center",
        paddingTop:50,
        marginLeft:10,
        marginRight: 10,
       
      },
      containerImg:{
        marginRight:12,
        
      },
      
      text:{
        color:"#fff",
        fontSize:16,
        fontWeight: "bold",
        alignSelf:'center'
        
      },

      textTwo:{
        color:"red",
        fontSize:16,
        fontWeight: "light",
        
      },
});
