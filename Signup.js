import React from'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { View, Text, Link} from 'react-native';
import { Octicons , Fontisto} from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
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


const Signup = () => {
    return (
<StyledContainer>
    <StatusBar style="dark" />
    <InnerContiner>
        <PagTitle>CINEMA TICKETING APP</PagTitle>
        <SubTitle>Acount Signup</SubTitle>
        <Formik 
        initialValues={{email:"", password:""}}
        onSubmit={(values) => {
            console.log(values);
        }}>
            
            { ({handleChange, handleSubmit,handleBlur ,values})=>
         <StyledFormArea>
              <MyTextInput
                        icon="person"
                        label="Full Name"  
                        placeholder="aweke adisie " 
                        keyboardType="fullName" 
                        onChangeText={handleChange("fullName")} 
                        onBlur={handleBlur("fullName")}
                        values={values.fullName} />
                   <MyTextInput
                        icon="mail"
                        label="Email"  
                        placeholder="Enter your email " 
                        keyboardType="email-address" 
                        onChangeText={handleChange("email")} 
                        onBlur={handleBlur("email")}
                        values={values.email}/>
                  <MyTextInput
                        icon="calendar"
                        label="date of birth"  
                        placeholder="yyy-mmm- day "                       
                        onChangeText={handleChange("dateOfBurth")} 
                        onBlur={handleBlur("email")}
                        values={values.dateOfBurth}/>
              

                <MyTextInput 
                        icon="lock"
                        label="password"   
                        placeholder="* * * * * *  * * * * *" 
                        keyboardType="password" 
                        secureTextEntry={true}
                        onChangeText={handleChange("password")} 
                        onBlur={handleBlur("password")}
                        values={values.password} />
                <MyTextInput 
                        icon="lock"
                        label="confirm password"   
                        placeholder="* * * * * *  * * * * *" 
                        keyboardType="password" 
                        secureTextEntry={true}
                        onChangeText={handleChange("confirmPassword")} 
                        onBlur={handleBlur("confirmPassword")}
                        values={values.confirmPassword}/> 
               <StyledButton onPress={handleSubmit}>
                <StyledButtonText>
                    Signup
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

export default Signup;
















