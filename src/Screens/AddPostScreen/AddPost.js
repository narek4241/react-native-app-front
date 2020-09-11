import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Picker,
  TouchableOpacity,
  Text,
  AsyncStorage,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Navigation from "../../Navigation/Navigation";

const phoneRegExp = /^[+374]{4}[0-9]{8}$/;
const priceRegExp = /^[1-9][0-9]*/;
const urlRegExp = /^(http)(s?)(:\/\/)/;

const AddPostValidationSchema = Yup.object().shape({
  cat: Yup.string().required("Category is required"),
  region: Yup.string(),
  type: Yup.string(),
  state: Yup.string(),
  price: Yup.string()
    .matches(priceRegExp, "Must be a valid Price")
    .max(15, "Price max. length is 15"),
  currency: Yup.string(),
  title: Yup.string()
    .required("Title is required")
    .min(2, "Title min. length is 2")
    .max(100, "Title max. length is 2"),
  desc: Yup.string()
    .min(2, "Description min. length is 2")
    .max(5000, "Description max. length is 5000"),
  imgUrl: Yup.string()
    .matches(urlRegExp, "Must be a valid Url (ImgUrl 1)")
    .max(5000, "Image Url max. length is 5000"),
  imgUrl2: Yup.string()
    .matches(urlRegExp, "Must be a valid Url (ImgUrl 2)")
    .max(5000, "Image Url 2 max. length is 5000"),
  imgUrl3: Yup.string()
    .matches(urlRegExp, "Must be a valid Url (ImgUrl 3)")
    .max(5000, "Image Url 3 max. length is 5000"),
  imgUrl4: Yup.string()
    .matches(urlRegExp, "Must be a valid Url (ImgUrl 4)")
    .max(5000, "Image Url 4 max. length is 5000"),
  imgUrl5: Yup.string()
    .matches(urlRegExp, "Must be a valid Url (ImgUrl 5)")
    .max(5000, "Image Url 5 max. length is 5000"),
  role: Yup.string(),
  contact: Yup.string()
    .required("Phone Number is required")
    .matches(phoneRegExp, "Must be a valid Phone Number (ARM)(+374CCNNNNNN)"),
});

const AddPost = (props) => {
  const fetchAddPost = async (val) => {
    const fetchAddPostData = await fetch(
      "http://skelet-rest-api.herokuapp.com/posts/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": await AsyncStorage.getItem("auth-token"),
        },
        body: JSON.stringify(val),
      }
    );

    const data = await fetchAddPostData.json();
    if (!data.error) {
      props.navigation.navigate("My Posts");
    } else {
      alert(data.error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Formik
        initialValues={{
          cat: "",
          region: "",
          type: "offer",
          state: "",
          price: "",
          currency: "usd",
          title: "",
          desc: "",
          imgUrl: "",
          imgUrl2: "",
          imgUrl3: "",
          imgUrl4: "",
          imgUrl5: "",
          role: "owner",
          contact: "",
        }}
        // validationSchema={AddPostValidationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          setSubmitting(true);
          resetForm({});
          fetchAddPost(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          setFieldValue,
          touched,
          isValid,
          handleBlur,
          handleSubmit,
        }) => (
          <View style={[styles.addPostInputs, styles.centerFlex]}>
            <Picker
              style={[styles.addPostInputs_input, styles.addPostInputs_picker]}
              // mode="dropdown"
              prompt={"Select Category"}
              selectedValue={values.cat}
              onValueChange={(itemValue, itemIndex) => {
                setFieldValue("cat", itemValue);
              }}
            >
              <Picker.Item label="Select Category" value={null} />
              <Picker.Item label="Անշարժ գույք" value={"estate"} />
              <Picker.Item label="Տրանսպորտ" value={"vehicles"} />
              <Picker.Item label="Էլեկտրոնիկա" value={"electronics"} />
              <Picker.Item label="Կենցաղային տեխնիկա" value={"appliances"} />
              <Picker.Item label="Ամեն ինչ տան համար" value={"household"} />
              <Picker.Item
                label="Նորաձևություն եւ ոճ"
                value={"clothing-and-fashion"}
              />
              <Picker.Item label="Մանկական աշխարհ" value={"baby-and-kids"} />
              <Picker.Item
                label="Մշակույթ և հոբբի"
                value={"culture-and-hobby"}
              />
              <Picker.Item
                label="Գործիքներ և նյութեր"
                value={"tools-and-materials"}
              />
              <Picker.Item
                label="Կենդանիներ և բույսեր"
                value={"pets-and-plants"}
              />
              <Picker.Item
                label="Մթերք և ըմպելիքներ"
                value={"food-and-beverages"}
              />
              <Picker.Item label="Այլ" value={"other"} />
            </Picker>

            <Picker
              style={[styles.addPostInputs_input, styles.addPostInputs_picker]}
              // mode="dropdown"
              prompt={"Select Region"}
              selectedValue={values.region}
              onValueChange={(itemValue, itemIndex) => {
                setFieldValue("region", itemValue);
              }}
            >
              <Picker.Item label="Select Region" value={null} />
              {/* <Picker.Item label="Երևան" value={"Երևան"} /> */}
              <Picker.Item label="Աջափնյակ" value={"Երևան,Աջափնյակ"} />
              <Picker.Item label="Արաբկիր" value={"Երևան,Արաբկիր"} />
              <Picker.Item label="Ավան" value={"Երևան,Ավան"} />
              <Picker.Item label="Դավիթաշեն" value={"Երևան,Դավիթաշեն"} />
              <Picker.Item label="Էրեբունի" value={"Երևան,Էրեբունի"} />
              <Picker.Item
                label="Քանաքեռ Զեյթուն"
                value={"Երևան,Քանաքեռ Զեյթուն"}
              />
              <Picker.Item label="Կենտրոն" value={"Երևան,Կենտրոն"} />
              <Picker.Item
                label="Մալաթիա Սեբաստիա"
                value={"Երևան,Մալաթիա Սեբաստիա"}
              />
              <Picker.Item label="Նոր Նորք" value={"Երևան,Նոր Նորք"} />
              <Picker.Item label="Նորք Մարաշ" value={"Երևան,Նորք Մարաշ"} />
              <Picker.Item label="Նուբարաշեն" value={"Երևան,Նուբարաշեն"} />
              <Picker.Item label="Շենգավիթ" value={"Երևան,Շենգավիթ"} />

              <Picker.Item label="Արթիկ " value={"Արթիկ,Շիրակ}"} />
              <Picker.Item label="Գյումրի" value={"Գյումրի,Շիրակ"} />
              <Picker.Item label="Մարալիկ" value={"Մարալիկ,Շիրակ"} />
            </Picker>

            <Picker
              style={[styles.addPostInputs_input, styles.addPostInputs_picker]}
              mode="dropdown"
              prompt={"Select Type"}
              selectedValue={values.type}
              onValueChange={(itemValue, itemIndex) => {
                setFieldValue("type", itemValue);
              }}
            >
              <Picker.Item label="Select Type" value={null} />
              <Picker.Item label="Offer" value={"offer"} />
              <Picker.Item label="Exchange" value={"exchange"} />
              <Picker.Item label="Search" value={"search"} />
            </Picker>

            <Picker
              style={[styles.addPostInputs_input, styles.addPostInputs_picker]}
              mode="dropdown"
              prompt={"Select State"}
              selectedValue={values.state}
              onValueChange={(itemValue, itemIndex) => {
                setFieldValue("state", itemValue);
              }}
            >
              <Picker.Item label="Select State" value={null} />
              <Picker.Item label="New" value={"new"} />
              <Picker.Item label="Used" value={"used"} />
            </Picker>

            <Picker
              style={[styles.addPostInputs_input, styles.addPostInputs_picker]}
              mode="dropdown"
              prompt={"Select Role"}
              selectedValue={values.role}
              onValueChange={(itemValue, itemIndex) => {
                setFieldValue("role", itemValue);
              }}
            >
              <Picker.Item label="Select Role" value={null} />
              <Picker.Item label="Owner" value={"owner"} />
              <Picker.Item label="Organization" value={"organization"} />
            </Picker>

            <View style={styles.addPostInputs_price_currency}>
              <TextInput
                style={[styles.addPostInputs_input, styles.addPostInputs_price]}
                onChangeText={handleChange("price")}
                onBlur={handleBlur("price")}
                values={values.price}
                placeholder="Price"
                keyboardType={"numeric"}
              />

              <Picker
                style={[
                  styles.addPostInputs_input,
                  styles.addPostInputs_currency,
                ]}
                mode="dropdown"
                prompt={"Select Currency"}
                selectedValue={values.currency}
                onValueChange={(itemValue, itemIndex) => {
                  setFieldValue("currency", itemValue);
                }}
              >
                <Picker.Item label="USD" value={"usd"} />
                <Picker.Item label="AMD" value={"amd"} />
                <Picker.Item label="RUB" value={"rub"} />
                <Picker.Item label="EUR" value={"eur"} />
              </Picker>
            </View>

            <TextInput
              style={styles.addPostInputs_input}
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              values={values.title}
              placeholder="Title"
            />

            <TextInput
              style={styles.addPostInputs_input}
              multiline={true}
              numberOfLines={4}
              onChangeText={handleChange("desc")}
              onBlur={handleBlur("desc")}
              values={values.desc}
              placeholder="Desc"
            />

            {/* imgUrls */}
            <TextInput
              style={styles.addPostInputs_input}
              onChangeText={handleChange("imgUrl")}
              onBlur={handleBlur("imgUrl")}
              values={values.imgUrl}
              placeholder="ImgUrl"
            />
            <TextInput
              style={styles.addPostInputs_input}
              onChangeText={handleChange("imgUrl2")}
              onBlur={handleBlur("imgUrl2")}
              values={values.imgUrl2}
              placeholder="ImgUrl2 (optional)"
            />
            <TextInput
              style={styles.addPostInputs_input}
              onChangeText={handleChange("imgUrl3")}
              onBlur={handleBlur("imgUrl3")}
              values={values.imgUrl3}
              placeholder="ImgUrl3 (optional)"
            />
            <TextInput
              style={styles.addPostInputs_input}
              onChangeText={handleChange("imgUrl4")}
              onBlur={handleBlur("imgUrl4")}
              values={values.imgUrl4}
              placeholder="ImgUrl4 (optional)"
            />
            <TextInput
              style={styles.addPostInputs_input}
              onChangeText={handleChange("imgUrl5")}
              onBlur={handleBlur("imgUrl5")}
              values={values.imgUrl}
              placeholder="ImgUrl5 (optional)"
            />

            <TextInput
              style={[styles.addPostInputs_input, styles.addPostInputs_contact]}
              onChangeText={handleChange("contact")}
              onBlur={handleBlur("contact")}
              values={values.contact}
              placeholder="Contact: +374CCNNNNNN"
            />

            <TouchableOpacity
              style={[
                styles.addPostInputs_input,
                styles.addPostInputs_submit,
                styles.centerFlex,
              ]}
              onPress={handleSubmit}
            >
              <Text style={styles.addPostInputs_submit_text}>add post</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default AddPost;

// PROVIDE HIGH ACCURACY
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

  addPostInputs: {
    width: "75%",
    display: "flex",
    alignSelf: "center",
    marginTop: "7.5%",
  },

  addPostInputs_input: {
    width: "100%",
    height: 60,
    backgroundColor: "#ebecec",
    borderLeftWidth: 3,
    borderColor: "grey",
    padding: 15,
    fontSize: 16,
    borderTopWidth: 0.35,
    borderTopColor: "lightgrey",
  },

  addPostInputs_picker: {
    marginVertical: 1,
  },

  addPostInputs_price_currency: {
    width: "100%",
    marginTop: 3,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addPostInputs_price: {
    width: "64.75%",
    borderTopLeftRadius: 5,
  },
  addPostInputs_currency: {
    width: "35%",
  },

  addPostInputs_contact: {
    borderBottomLeftRadius: 5,
  },

  addPostInputs_submit: {
    width: "90%",
    height: 50,
    backgroundColor: "blue",
    borderRadius: 10,
    borderLeftWidth: 0,
    marginVertical: "10%",
  },
  addPostInputs_submit_text: {
    fontSize: 16,
    color: "#fff",
    textTransform: "capitalize",
  },
});
