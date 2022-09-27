
  
  import { useState } from "react";
  import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
  } from "react-native";
  
  const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [pass, setPass] = useState("");
    const [response,setResponse]=useState("");

    
    const handleCheckEmail = (text) => {
        let re = /\S+@\S+\.\S+/;
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    
        setEmail(text);
        if (re.test(text) || regex.test(text)) {
          setEmailValid(false);
        } else {
          setEmailValid(true);
        }
        }
        const handleCheckPass= (value) => {
            setPass(value);
            const isNonWhiteSpace = /^\S*$/;
            const isContainsUppercase = /^(?=.*[A-Z]).*$/;
            const isContainsLowercase = /^(?=.*[a-z]).*$/;
            const isContainsNumber = /^(?=.*[0-9]).*$/;
            const isValidLength = /^.{8,16}$/;
            if (!isNonWhiteSpace.test(value)) {
              setResponse('Password must not contain Whitespaces.');
            }
        
            else if (!isContainsUppercase.test(value)) {
              setResponse('Password must have atleast one Uppercase Character.');
            }
        
            else if (!isContainsLowercase.test(value)) {
              setResponse('Password must have atleast one Lowercase Character.');
            }
        
            else if (!isContainsNumber.test(value)) {
              setResponse('Password must contain atleast one Digit.');
            }
          
            else if (!isValidLength.test(value)) {
              setResponse('Password must be 8-16 Characters Long.');
            }
      
            else setResponse("");
          };
    return (
      <SafeAreaView style={styles.container}>
         <Image
        style={{width:200,borderColor:"black",borderWidth:"5px",borderRadius:"100px",height:200,marginTop:70,marginLeft:"auto",marginRight:"auto"}}
        source={require("../assets/R(1).JPG")}
      />
      <Text style={{alignItems:"center", position:"absolute", width: "200px", fontSize:"xx-large", fontStyle:"bold" }}>Rec-App</Text>
          <View style={styles.wrap}>
          <Text style={styles.logIn}>Log-In</Text>
       
       <View style={styles.email}>
         <TextInput
            onChangeText={(text)=>handleCheckEmail(text)}
            value={email}
            placeholder="Email"
           style={{
             color: "#ECECEC",
             width: "90%",
             paddingLeft: 20,
             height: 40,
           }}
           placeholderTextColor="#ECECEC"
         />
       </View>
       {emailValid ? (<Text style={{color:"#Ff0000"}}>Email addres is invalid</Text>):(<Text></Text>)}
       <View style={styles.password}>
         <TextInput
           secureTextEntry={setPass}
           value={pass}
           placeholder="Password"
          onChangeText={text => handleCheckPass(text)}
           style={{
             color: "#ECECEC",
             width: "90%",
             paddingLeft: 20,
             height: 40,
           }}
           placeholderTextColor="#ECECEC"
         />
       </View>
       <Text style={{ color: "#ECECEC", marginTop: 20 }}onPress={()=>{(navigation.navigate('register'))}}>
         Dont have an account?
       </Text>
       <Text style={{ color: "#ECECEC", marginTop: 15 }} >Forgot password?</Text>
 
       <TouchableOpacity
         style={styles.btn}
         onPress={() => {
           navigation.navigate("home");
         }}
       >
        <Text>Login</Text> 
       </TouchableOpacity>
          </View>
        
      </SafeAreaView>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      overflowX: "hidden",
    },
    wrap: {
        position:"absolute",
        width:"100%",
        height:500,
        bottom:0,
        paddingTop:0,
        backgroundColor:"#0000CD",
        alignItems: "center",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignContent:'center',
        borderTopLeftRadius:100,
        borderBottomRightRadius:100,
        borderTopRightRadius:0
    },
    logIn: {
      color: "white",
      fontSize: 24,
      fontWeight: 700,
    },
    email: {
        marginTop: 30,
        borderBottomWidth: 3,
        borderBottomColor: "#ECECEC",
        width: "85%",
        paddingLeft: 8,
        color: "#000000",
        height: 40,
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 10,
        height: 50,
      },
    password: {
      marginTop: 30,
      borderBottomWidth: 3,
      borderBottomColor: "#ECECEC",
      width: "85%",
      paddingLeft: 8,
      color: "#ECECEC",
      height: 40,
      flexDirection: "row",
      gap: 5,
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 10,
      height: 50,
    },
    btn: {
      width: "45%",
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      color:"#ECECEC",
      backgroundColor:"white",
      marginTop: 15,

    },
  });
  
  export default Login;
  