import React from'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { View, Text, Link} from 'react-native';
import { Octicons , Fontisto} from '@expo/vector-icons';

import{

    StyledContainer,
    InnerContiner,
    PagTitle,
    PagLogo,
    StyledFormArea,
    SubTitle,
    StyledTextInput,
    StyledInputLabel,
    StyledButton,
    StyledButtonText,
    colors,
    LeftIcon,
    StyledLink,
    StyledLinkText
} from  "../components/styles";


const Login = () => {
    return (
<StyledContainer>
    <StatusBar style="dark" />
    <InnerContiner>
        <PagLogo resisedMode="cover"  source ={ require("../../assets/images/image copy.png")}/>
        <PagTitle>CINEMA TICKETING APP</PagTitle>
        <SubTitle>Acount Login</SubTitle>
        <Formik 
        initialValues={{email:"", password:""}}
        onSubmit={(values) => {
            console.log(values);
        }}>
            
            { ({handleChange, handleSubmit,handleBlur ,values})=>
         <StyledFormArea>
                <MyTextInput
                        icon="mail"
                        label="Email"  
                        placeholder="Enter your email " 
                        keyboardType="email-address" />

                <MyTextInput 
                        icon="lock"
                        label="password"   
                        placeholder="* * * * * *  * * * * *" 
                        keyboardType="password" 
                        secureTextEntry={true} />
               <StyledButton onPress={handleSubmit}>
                <StyledButtonText>
                    Login
                </StyledButtonText>
                </StyledButton>      


                <StyledButton google={true} onPress={handleSubmit}>
                <Fontisto name="google" size={24} color={colors.primary} />
                <StyledButtonText google={true}> 
                    sign up with google
                </StyledButtonText> 
                </StyledButton> 
                <StyledLink ><StyledLinkText>Signup</StyledLinkText></StyledLink>         
         </StyledFormArea>
            }
        </Formik>
        
   </InnerContiner>
</StyledContainer>
    );
}
const MyTextInput =({icon,label,... props})=>{
    return(
        <View>
            <LeftIcon>
                    <Octicons name={icon} size={24} color={colors.brand} />
            </LeftIcon>
              <StyledInputLabel>{label}</StyledInputLabel>
              <StyledTextInput {...props} />
        </View>
    );
}; 

export default Login;


