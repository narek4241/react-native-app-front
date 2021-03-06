// #task add Modals (error message), keyboardAvoiding nuance (1 lib installed,ok?rm)
import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
// import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid Email")
    .required("Email is Required")
    .max(30, "Email max length is 30"),
  password: Yup.string()
    .required("Password is Required")
    .min(6, "Password must be at least 6 characters"),
});

class Login extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isLogged: false,
  };

  fetchLogin = async (val) => {
    try {
      const fetchLoginData = await fetch(
        "https://skelet-rest-api.herokuapp.com/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(val),
        }
      );
      const data = await fetchLoginData.json();

      if (data.error) {
        alert(`${data.error}`);
      } else {
        await AsyncStorage.setItem("auth-token", data.auth_token);
        this.props.navigation.replace("Profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={[styles.container, styles.centerFlex]}>
        <View style={[styles.loginSocialNetwork, styles.centerFlex]}>
          <Text style={[styles.loginSocialNetwork_heading, styles.centerFlex]}>
            login with a social network
          </Text>
          <View style={[styles.loginSocialNetwork_icons, styles.centerFlex]}>
            <TouchableHighlight>
              <Image
                style={styles.loginSocialNetwork_icons_fb}
                source={{
                  uri:
                    "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1598776936/login-fb-icon_q91lip.png",
                }}
              />
            </TouchableHighlight>
            <TouchableHighlight>
              <Image
                style={styles.loginSocialNetwork_icons_google}
                source={{
                  uri:
                    "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1598776936/login-google-icon_e72ptm.png",
                }}
              />
            </TouchableHighlight>
          </View>
          <Text style={[styles.loginSocialNetwork_text, styles.centerFlex]}>
            or use email address
          </Text>
        </View>

        <Formik
          initialValues={{ email: "", password: "" }}
          // validationSchema={LoginValidationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            this.fetchLogin(values);
            // resetForm({}); // doesnt work properly
            setSubmitting(false);
          }}
        >
          {(props) => (
            <View style={styles.loginInputs}>
              <TextInput
                style={styles.loginInputs_email}
                onChangeText={props.handleChange("email")}
                onBlur={props.handleBlur("email")}
                values={props.values.email}
                placeholder="Email"
              />
              {/* {props.errors.email ? alert(props.errors.email) : null} */}
              {/* make errorMessages with MODAL */}
              {/* <Text style={styles.loginInputs_email_error}>
                {props.errors.email}
              </Text> */}

              <TextInput
                style={styles.loginInputs_password}
                onChangeText={props.handleChange("password")}
                onBlur={props.handleBlur("password")}
                values={props.values.password}
                secureTextEntry={true}
                placeholder="Password"
              />
              {/* {props.errors.email ? alert(props.errors.password) : null} */}
              {/* <Text style={styles.loginInputs_password_error}>
                {props.errors.password}
              </Text> */}

              <TouchableOpacity
                style={[styles.loginInputs_submit, styles.centerFlex]}
                onPress={props.handleSubmit}
              >
                <Text style={styles.loginInputs_submit_text}>login</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>

        <View style={[styles.loginRegistration]}>
          <Text style={styles.loginRegistration_text}>no account yet?</Text>

          <TouchableOpacity
            style={[styles.loginRegistration_button, styles.centerFlex]}
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={styles.loginRegistration_button_text}>
              registration
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;

// needs 0.5 overview for being more Accurate((❎to✅))

const styles = StyleSheet.create({
  centerFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },

  loginSocialNetwork: {
    width: "100%",
    height: "30%",
    // marginTop: "30%", ///
  },
  loginSocialNetwork_heading: {
    width: "100%",
    height: "30%",
    fontSize: 16,
    textTransform: "capitalize", // #try only 1st char
    textAlignVertical: "center",
    textAlign: "center",
    color: "grey",
  },
  loginSocialNetwork_icons: {
    width: "100%",
    height: "40%",
    flexDirection: "row",
  },
  loginSocialNetwork_icons_fb: {
    width: 75,
    height: "65%",
    resizeMode: "contain",
  },
  loginSocialNetwork_icons_google: {
    width: 75,
    height: "65%",
    resizeMode: "contain",
  },
  loginSocialNetwork_text: {
    width: "100%",
    height: "30%",
    textTransform: "capitalize",
    textAlignVertical: "center",
    textAlign: "center",
    color: "grey",
    fontSize: 14,
  },

  loginInputs: {
    width: "100%",
    height: "35%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 26,
  },
  loginInputs_email: {
    width: "75%",
    height: "25%",
    backgroundColor: "#ebecec",
    fontSize: 16,
    paddingLeft: "5%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  loginInputs_password: {
    width: "75%",
    height: "25%",
    backgroundColor: "#ebecec",
    fontSize: 16,
    paddingLeft: "5%",
    borderTopWidth: 0.35,
    borderTopColor: "lightgrey",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  loginInputs_submit: {
    width: "70%",
    height: "20%",
    backgroundColor: "blue",
    marginTop: "5%",
    borderRadius: 10,
  },
  loginInputs_submit_text: {
    fontSize: 16,
    color: "#fff",
    textTransform: "capitalize",
  },

  loginRegistration: {
    width: "100%",
    height: "35%",
    display: "flex",
    alignItems: "center",
  },
  loginRegistration_text: {
    width: "100%",
    height: "15%",
    fontSize: 16,
    textTransform: "capitalize",
    textAlignVertical: "center",
    textAlign: "center",
    color: "grey",
    fontSize: 14,
  },
  loginRegistration_button: {
    width: "76%",
    height: "20%",
    backgroundColor: "#fff",
    marginTop: "5%",
    borderRadius: 5,

    borderWidth: 1,
    borderColor: "blue",
  },
  loginRegistration_button_text: {
    fontSize: 16,
    color: "blue",
    textTransform: "capitalize",
  },
});
