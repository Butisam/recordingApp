
  
  import { useState } from "react";
  import {
    SafeAreaView,
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    secureTextEntry
  } from "react-native";
  
  const Register = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [firstname, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");
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
        // const isContainsSymbol =
        //   /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
        // if (!isContainsSymbol.test(value)) {
        //   return 'Password must contain at least one Special Symbol.';
        // }
    
        else setResponse("");
      };

    return (
      <SafeAreaView style={styles.container}>
            <Image
        style={{width:160,height:160,marginTop:20,marginLeft:"auto",marginRight:"auto"}}
        source={require("../assets/R(1).JPG")}
      />
          <View style={styles.wrap}>
          <Text style={styles.logIn}>Register</Text>
       
        <View style={styles.email}>
         {/* <FontAwesomeIcon icon={faUser} size={25} style={{ color: "#ECECEC" }} /> */}
         <TextInput
           onChangeText={setFirstName}
           style={{
             color: "#ECECEC",
             width: "90%",
             paddingLeft: 20,
             height: 40,
           }}
           placeholder="First Name"
           placeholderTextColor="#ECECEC"
         />
       </View>
       
       <View style={styles.email}>
         {/* <FontAwesomeIcon icon={faUserPen} size={25} style={{ color: "#ECECEC" }} /> */}
         <TextInput
           onChangeText={setLastName}
           style={{
             color: "#ECECEC",
             width: "90%",
             paddingLeft: 20,
             height: 40,
           }}
           placeholder="Last Name"
           placeholderTextColor="#ECECEC"
         />
       </View>

       <View style={styles.email}>
         {/* <FontAwesomeIcon icon={faPhone} size={25} style={{ color: "#ECECEC" }} /> */}
         <TextInput
           onChangeText={setNumber}
           style={{
             color: "#ECECEC",
             width: "90%",
             paddingLeft: 20,
             height: 40,
           }}
           placeholder="Phone No."
           placeholderTextColor="#ECECEC"
         />
       </View>

       <View style={styles.email}>
         {/* <FontAwesomeIcon icon={faEnvelope} size={25} style={{ color: "#ECECEC" }} /> */}
         <TextInput
           onChangeText={(text)=>handleCheckEmail(text)}
           value={email}
           style={{
             color: "#ECECEC",
             width: "90%",
             paddingLeft: 20,
             height: 40,
           }}
           placeholder="Email"
           placeholderTextColor="#ECECEC"
         />
         
       </View>
       {emailValid ? (<Text style={{color:"#Ff0000"}}>Email addres is invalid</Text>):(<Text></Text>)}
       <View style={styles.password}>
         {/* <FontAwesomeIcon icon={faLock} size={25} style={{ color: "#ECECEC" }} /> */}
         <TextInput
           secureTextEntry={setPass}
           value={pass}
          onChangeText={text => handleCheckPass(text)}
           style={{
             color: "#ECECEC",
             width: "90%",
             paddingLeft: 20,
             height: 40,
           }}
           placeholder="Password"
           placeholderTextColor="#ECECEC"
         />
        
       </View>
       <Text style={{color:"#Ff0000",marginTop:10}}>{response}</Text>
       <Text style={{ color: "#ECECEC", marginTop: 20 }}onPress={()=>{(navigation.navigate('login'))}}>
         Alrady have an account?
       </Text>
       <Text style={{ color: "#ECECEC", marginTop: 15 }} >Forgot password?</Text>
 
       <TouchableOpacity
         style={styles.btn}
         onPress={() => {
           navigation.navigate("home");
         }}
       >
        <Text>Register</Text> 
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
        height:700,
        bottom:0,
        paddingTop:0,
        backgroundColor:"#2B2C34",
        alignItems: "center",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignContent:'center',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
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
        color: "#ECECEC",
        height: 40,
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        backgroundColor: "#54555E",
        borderRadius: 10,
        height: 50,
        textAlign:"center"
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
      backgroundColor: "#54555E",
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
      backgroundColor:"#00cc66",
      marginTop: 15,
    },
  });
  
  export default Register;
  