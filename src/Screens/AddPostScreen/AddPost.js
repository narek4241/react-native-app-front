// #task finish addPost (underConstruction)
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Picker,
} from "react-native";
import { Formik, Field } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid Email")
    .required("Email is Required")
    .max(30, "Email max length is 30"),
  password: Yup.string()
    .required("Password is Required")
    .min(6, "Password must be at least 6 characters"),
});

// add AddPost here (use react-app-front material)
const AddPost = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState(false);
  // return (
  //   <View>
  //     <Picker
  //       selectedValue={selectedValue}
  //       style={{ height: 50, width: 150, paddingTop: 200, }}
  //       onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
  //     >
  //       <Picker.Item label="Java" value="java" />
  //       <Picker.Item label="JavaScript" value="js" />
  //     </Picker>
  //   </View>
  // );

  return (
    <View style={[styles.container, styles.centerFlex]}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          actions.resetForm({});
          console.log(values);
        }}
      >
        {(props) => (
          <View style={[styles.loginInputs]}>
            <TextInput
              style={styles.loginInputs_email}
              onChangeText={props.handleChange("email")}
              onBlur={props.handleBlur("email")}
              values={props.values.email}
              placeholder="Email" //
            />
            {/* <Field
              name="cat"
              as="select"
              // onChange={handleChange}
              // onBlur={handleBlur}
              className="add-post-field"
            >
              <option defaultValue>Խնդրում ենք ընտրել</option>
              <optgroup label="Marketplace">
                <option value="real-estate">Անշարժ գույք</option>
                <option value="vehicles">Տրանսպորտ</option>
                <option value="electronics">Էլեկտրոնիկա</option>
                <option value="appliances">Կենցաղային տեխնիկա</option>
                <option value="household">Ամեն ինչ տան համար</option>
                <option value="clothing-and-fashion">
                  Նորաձևություն եւ ոճ
                </option>
                <option value="baby-and-kids">Մանկական աշխարհ</option>
                <option value="culture-and-hobby">Մշակույթ և հոբբի</option>
                <option value="tools-and-materials">Գործիքներ և նյութեր</option>
                <option value="pets-and-plants">Կենդանիներ և բույսեր</option>
                <option value="food-and-beverages">Մթերք և ըմպելիքներ</option>
                <option value="other">Այլ</option>
              </optgroup>
            </Field> */}

            {/* <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker> */}

            <Picker
              value={props.values["status"]}
              selectedValue={"1"}
              onValueChange={(value) => {
                props.setFieldValue("status", value);
              }}
            >
              <Picker.Item label="New" value="0" />
              <Picker.Item label="Requested" value="1" />
              <Picker.Item label="Responded" value="2" />
              <Picker.Item label="Closed" value="3" />
            </Picker>

            <TextInput
              style={styles.loginInputs_password}
              onChangeText={props.handleChange("password")}
              onBlur={props.handleBlur("password")}
              values={props.values.password}
              placeholder="Password" //
            />

            {/*  */}
            <TextInput
              style={styles.loginInputs_password}
              onChangeText={props.handleChange("password")}
              onBlur={props.handleBlur("password")}
              values={props.values.password}
              placeholder="Password" //
            />
            <TextInput
              style={styles.loginInputs_password}
              onChangeText={props.handleChange("password")}
              onBlur={props.handleBlur("password")}
              values={props.values.password}
              placeholder="Password" //
            />
            <TextInput
              style={styles.loginInputs_password}
              onChangeText={props.handleChange("password")}
              onBlur={props.handleBlur("password")}
              values={props.values.password}
              placeholder="Password" //
            />
            <TextInput
              style={styles.loginInputs_password}
              onChangeText={props.handleChange("password")}
              onBlur={props.handleBlur("password")}
              values={props.values.password}
              placeholder="Password" //
            />
            <TextInput
              style={styles.loginInputs_password}
              onChangeText={props.handleChange("password")}
              onBlur={props.handleBlur("password")}
              values={props.values.password}
              placeholder="Password" //
            />
            <TextInput
              style={styles.loginInputs_password}
              onChangeText={props.handleChange("password")}
              onBlur={props.handleBlur("password")}
              values={props.values.password}
              placeholder="Password" //
            />

            <TouchableOpacity
              style={[styles.loginInputs_submit, styles.centerFlex]}
              onPress={() => props.handleSubmit()}
            >
              <Text style={styles.loginInputs_submit_text}>add post</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddPost;

// needs 0.5 overview for being more Accurate((❎to✅))

const styles = StyleSheet.create({
  centerFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cont: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
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
  },
  loginInputs_password: {
    width: "75%",
    height: "25%",
    backgroundColor: "#ebecec",
    fontSize: 16,
    paddingLeft: "5%",
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
