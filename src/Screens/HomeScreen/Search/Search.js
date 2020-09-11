import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Posts from "../Posts/Posts";
import { Formik } from "formik";

class Search extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    fileredPostsData: [],
    isLoading: true,
    // nav: {},
  };

  fetchPosts = async () => {
    try {
      const fetchPostsData = await fetch(
        "http://skelet-rest-api.herokuapp.com/posts"
      );

      const data = await fetchPostsData.json();

      // const navigation = useNavigation(); // overloads ok?rm
      this.setState({
        fileredPostsData: data,
        isLoading: false,
        // nav: navigation,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchFilteredPosts = async (value) => {
    try {
      this.setState({
        isLoading: true,
      });

      const fetchFilteredPostsData = await fetch(
        `https://skelet-rest-api.herokuapp.com/posts/search/${value}`
      );
      const data = await fetchFilteredPostsData.json();

      this.setState({
        fileredPostsData: data,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.search_container}>
        <View style={styles.search_inputs}>
          <Formik
            style={styles.search_inputs_formik} //
            initialValues={{ search: "" }}
            // validationSchema = {}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);

              if (values.search !== "") {
                this.fetchFilteredPosts(values.search);
              }

              // resetForm();
              console.log(values.search);

              setSubmitting(false);
            }}
          >
            {({
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => {
              return (
                <View style={[styles.searchInputs, styles.centerFlex]}>
                  <View style={styles.searchInputs_search}>
                    <TextInput
                      style={styles.searchInputs_search_input}
                      onChangeText={handleChange("search")}
                      onBlur={handleBlur("search")}
                      values={values.search}
                      placeholder="Search"
                    />
                  </View>

                  <View style={styles.searchInputs_submit}>
                    <TouchableOpacity
                      style={[
                        styles.searchInputs_submit_input,
                        styles.centerFlex,
                      ]}
                      onPress={handleSubmit}
                    >
                      <Image
                        style={styles.searchInputs_submit_input_image}
                        source={require("../../../../assets/Profile/search.png")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          </Formik>
        </View>

        <View style={[styles.search_posts, styles.centerFlex]}>
          {this.state.isLoading ? (
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
            <Posts
              data={this.state.fileredPostsData}
              navigation={this.props.navigation}
            ></Posts>
          )}
        </View>
      </View>
    );
  }
}

export default Search;

// PROVIDE HIGH CODE ACCURANCY (css)
const styles = StyleSheet.create({
  centerFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  search_container: {
    width: "100%",
    height: "100%",
  },

  search_inputs: {
    width: "100%",
    height: "10%",
    // backgroundColor: "grey",
    backgroundColor: "#ebecec",
  },

  searchInputs: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },
  searchInputs_search: {
    width: "80%",
    height: "100%",
    padding: 10,
  },

  searchInputs_search_input: {
    width: "100%",
    height: "100%",
    fontSize: 16,
  },

  searchInputs_submit: {
    width: "20%",
    height: "100%",
  },
  searchInputs_submit_input: {
    width: "100%",
    height: "100%",
  },
  searchInputs_submit_input_image: {
    width: "100%",
    height: "75%",
    resizeMode: "contain",
  },

  search_posts: {
    width: "100%",
    height: "90%",
  },
});
