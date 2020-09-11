// #task (like in Login.js) add Modals (error message), keyboardAvoiding nuance (1 lib installed,ok?rm)
import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const phoneRegExp = /^[+374]{4}[0-9]{8}/;

const RegisterSchema = Yup.object({
  firstname: Yup.string()
    .required("Firstname is Required")
    .max(30, "Firstname max length is 30")
    .min(2, "Firstname min length is 2"),
  lastname: Yup.string().min(2, "Lastname min length is 2"),
  email: Yup.string()
    .email("Must be a valid Email")
    .required("Email is Required")
    .max(30, "Email max length is 30"),
  contact: Yup.string()
    .required("contact Number is Required")
    .matches(phoneRegExp, "Must be a valid contact Number"),
  password: Yup.string()
    .required("Password is Required")
    .min(6, "Password must be at least 6 characters"),
  passwordConf: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});

class Register extends Component {
  constructor(props) {
    super(props);
  }

  fetchRegister = async (val) => {
    const fetchRegisterData = await fetch(
      "https://skelet-rest-api.herokuapp.com/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(val),
      }
    );

    const data = await fetchRegisterData.json();
    if (data.error) {
      alert(data.error);
    } else {
      this.props.navigation.navigate("Login");
    }
  };

  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.registerLogo, styles.centerFlex]}>
          <Image
            style={styles.registerLogo_image}
            source={{
              uri:
                "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1596690168/main-logo_rpzuag.png",
            }}
          />
        </View>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            contact: "",
            email: "",
            password: "",
            confPassword: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            this.fetchRegister(values);
          }}
        >
          {(props) => (
            <View style={[styles.registerInputs, styles.centerFlex]}>
              <TextInput
                style={[
                  styles.registerInputs_input,
                  styles.registerInputs_firstname,
                ]}
                onChangeText={props.handleChange("firstname")}
                onBlur={props.handleBlur("firstname")}
                values={props.values.firstname}
                placeholder="Firstname"
              />
              {/* <Text>{props.errors.Firstname}</Text> */}

              <TextInput
                style={[
                  styles.registerInputs_input,
                  styles.registerInputs_lastname,
                ]}
                onChangeText={props.handleChange("lastname")}
                onBlur={props.handleBlur("lastname")}
                values={props.values.lastname}
                placeholder="Lastname"
              />
              {/* <Text>{props.errors.fullname}</Text> */}

              <TextInput
                style={[
                  styles.registerInputs_input,
                  styles.registerInputs_contact,
                ]}
                onChangeText={props.handleChange("contact")}
                onBlur={props.handleBlur("contact")}
                values={props.values.contact}
                placeholder="Contact"
              />
              {/* <Text>{props.errors.fullname}</Text> */}

              <TextInput
                style={[
                  styles.registerInputs_input,
                  styles.registerInputs_email,
                ]}
                onChangeText={props.handleChange("email")}
                onBlur={props.handleBlur("email")}
                values={props.values.email}
                placeholder="Email"
              />
              {/* <Text>{props.errors.email}</Text> */}

              <TextInput
                style={[
                  styles.registerInputs_input,
                  styles.registerInputs_password,
                ]}
                onChangeText={props.handleChange("password")}
                onBlur={props.handleBlur("password")}
                values={props.values.password}
                secureTextEntry={true}
                placeholder="Password"
              />
              {/* <Text>{props.errors.password}</Text> */}

              <TextInput
                style={[
                  styles.registerInputs_input,
                  styles.registerInputs_confPassword,
                ]}
                onChangeText={props.handleChange("confPassword")}
                onBlur={props.handleBlur("confPassword")}
                values={props.values.confPassword}
                secureTextEntry={true}
                placeholder="Confirm Password"
              />
              {/* <Text>{props.errors.confPassword}</Text> */}

              <View style={styles.registerTerms}>
                <Text style={styles.registerTerms_text}>
                  I agree to the Posting Rules and SkeletInc Terms of Service
                </Text>
              </View>
              <TouchableOpacity
                style={[
                  styles.registerInputs_input,
                  styles.registerInputs_submit,
                  styles.centerFlex,
                ]}
                onPress={() => props.handleSubmit()}
              >
                <Text style={styles.registerInputs_submit_text}>register</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

const Register2 = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.registerLogo, styles.centerFlex]}>
        <Image
          style={styles.registerLogo_image}
          source={{
            uri:
              "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1596690168/main-logo_rpzuag.png",
          }}
        />
      </View>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          contact: "",
          email: "",
          password: "",
          confPassword: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log(values);
        }}
      >
        {(props) => (
          <View style={styles.registerInputs}>
            <TextInput
              style={[
                styles.registerInputs_input,
                styles.registerInputs_firstname,
              ]}
              onChangeText={props.handleChange("firstname")}
              onBlur={props.handleBlur("firstname")}
              values={props.values.firstname}
              placeholder="Firstname" //
            />
            {/* <Text>{props.errors.Firstname}</Text> */}

            <TextInput
              style={[
                styles.registerInputs_input,
                styles.registerInputs_lastname,
              ]}
              onChangeText={props.handleChange("lastname")}
              onBlur={props.handleBlur("lastname")}
              values={props.values.lastname}
              placeholder="Lastname" //
            />
            {/* <Text>{props.errors.fullname}</Text> */}

            <TextInput
              style={[
                styles.registerInputs_input,
                styles.registerInputs_contact,
              ]}
              onChangeText={props.handleChange("contact")}
              onBlur={props.handleBlur("contact")}
              values={props.values.contact}
              placeholder="Contact" //
            />
            {/* <Text>{props.errors.fullname}</Text> */}

            <TextInput
              style={[styles.registerInputs_input, styles.registerInputs_email]}
              onChangeText={props.handleChange("email")}
              onBlur={props.handleBlur("email")}
              values={props.values.email}
              placeholder="Email" //
            />
            {/* <Text>{props.errors.email}</Text> */}

            <TextInput
              style={[
                styles.registerInputs_input,
                styles.registerInputs_password,
              ]}
              onChangeText={props.handleChange("password")}
              onBlur={props.handleBlur("password")}
              values={props.values.password}
              placeholder="Password" //
            />
            {/* <Text>{props.errors.password}</Text> */}

            <TextInput
              style={[
                styles.registerInputs_input,
                styles.registerInputs_confPassword,
              ]}
              onChangeText={props.handleChange("confPassword")}
              onBlur={props.handleBlur("confPassword")}
              values={props.values.confPassword}
              placeholder="Confirm Password" //
            />
            {/* <Text>{props.errors.confPassword}</Text> */}

            <View style={styles.registerTerms}>
              <Text style={styles.registerTerms_text}>
                I agree to the Posting Rules and SkeletInc Terms of Service
              </Text>
            </View>
            <TouchableOpacity
              style={[
                styles.registerInputs_input,
                styles.registerInputs_submit,
                styles.centerFlex,
              ]}
              onPress={() => props.handleSubmit()}
            >
              <Text style={styles.registerInputs_submit_text}>register</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Register;

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
    display: "flex",
    alignItems: "center",
  },

  registerLogo: {
    width: "100%",
    height: "20%",
  },
  registerLogo_image: {
    width: "50%",
    height: "65%",
    resizeMode: "contain",
  },

  registerInputs: {
    width: "100%",
    height: "70%",
  },
  registerInputs_input: {
    width: "72.5%",
    height: "12.5%",
    backgroundColor: "#ebecec",
    fontSize: 16,
    paddingLeft: "5%",
    borderTopWidth: 0.35,
    borderTopColor: "lightgrey",
  },

  registerInputs_firstname: {
    borderTopWidth: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  registerInputs_confPassword: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  registerInputs_submit: {
    backgroundColor: "blue",
    borderRadius: 10,
  },
  registerInputs_submit_text: {
    fontSize: 16,
    color: "#fff",
    textTransform: "capitalize",
  },

  registerTerms: {
    width: "75%",
    height: "12.5%",
    padding: "2%",
    marginVertical: "2.5%",
  },
  registerTerms_text: {
    fontSize: 14,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
