import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home2() {
  return (
    <View style={[styles.container, styles.centerFlex]}>
      {/* <Text>Hello World</Text> */}
      <View style={styles.header}>
        <View style={styles.headerLf}>
          <View style={styles.headerLfELem}>
            <Text style={styles.headerLfELemTop}>tonight</Text>
            <Text style={styles.headerLfELemBottom}>monday, november 25</Text>
          </View>
        </View>
        <View style={styles.headerRg}>
          <View style={styles.headerRgELem}>
            <Text style={styles.headerRgELemText}>$32</Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.contentNav}>
          <View style={styles.contentNavElem}>
            <Text style={[styles.contentNavElemText, styles.grey1pxborder]}>promotion</Text>
          </View>
          <View style={styles.contentNavElem}>
            <Text style={[styles.contentNavElemText,]}>free drink</Text>
          </View>
          <View style={styles.contentNavElem}>
            <Text style={[styles.contentNavElemText,]}>happy hour</Text>
          </View>
        </View>
        <View style={styles.contentPost}>
          <View style={styles.post}>
            <Image
              style={styles.postBgImg}
              source={{ uri: 'https://thelovenerds.com/wp-content/uploads/2017/12/Berry-Champagne-Cocktail_-8.jpg', }}
            />
            <View style={styles.postHeader}>
              <View style={styles.postHeaderElem}>
                  <Text style={styles.postHeaderElemTop}>30%</Text>
                  <Text style={styles.postHeaderElemBottom}>Overflow</Text>
              </View>
            </View>
            <View style={styles.postContent}></View>
            <View style={styles.postFooter}>
              <View style={styles.postFooterElem}>
                <Text style={styles.postFooterElemTop}>blackberry</Text>
                <Text style={styles.postFooterElemBottom}>fresh drink</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.navigation}>
        <View style={styles.nav}>
          <View style={[styles.navElem, styles.navElemHome]}>
            <Image style={styles.navElemHomeImg} source={{uri: 'https://www.pngkit.com/png/full/31-316559_white-home-icon-no-background.png'}}></Image>
            <Text style={styles.navElemHomeText}>Home</Text>
          </View>
          <View style={[styles.navElem, styles.navElemContact]}>
            <Image style={styles.navElemContactImg} source={{uri: 'https://cdn2.iconfinder.com/data/icons/web-icons/512/Contacts_Book-512.png'}}></Image>
          </View>
          <View style={[styles.navElem, styles.navElemSearch]}>
            <Image style={styles.navElemSearchImg} source={{uri: 'https://icon-library.com/images/search-icon-transparent-background/search-icon-transparent-background-8.jpg'}}></Image>
          </View>
        </View>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  // #style #dirty styles to be improved 
  // mixin like
  centerFlex: {
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  grey1pxborder: {
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#312f3d',
    padding: 12.5,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e1e2c',
  },
    header: {
      width: '100%',
      height: '21.5%',
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#1e1e2c'
    },
      headerLf: {
        width: '65%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
        headerLfELem: {
          width: '70%',
          height: '35%',
          display: 'flex',
          marginBottom: '10%',
          marginRight: '10%',
          justifyContent: 'center',
          alignItems: 'center',
        },
          headerLfELemTop: {
            width: '100%',
            height: '60%',
            textTransform: 'capitalize',
            color: '#fff',
            fontSize: 35,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingBottom: 15,
          },
          headerLfELemBottom: {
            width: '100%',
            height: '40%',
            textTransform: 'capitalize',
            color: '#fff',
            color: 'grey',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          },
    headerRg: {
      width: '35%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
      headerRgELem: {
        width: '60%',
        height: '70%',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#312f3d',
        borderRadius: 15,
      },
        headerRgELemText: {
          color: '#fff',
          fontSize: 24,
          marginTop: '25%'
        },
  content: {
    width: '100%',
    height: '66%',
    display: 'flex',
    alignItems: 'center',
  },
    contentNav: {
      width: '85%', 
      height: '11.5%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
      contentNavElem: {
        width: '29%', 
        height: '80%',
        display: 'flex',
        borderRadius: 75,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
        contentNavElemText: {
          color: '#fff',
          textTransform: 'capitalize',
        },
    contentPost: {
      width: '100%', 
      height: '88.5%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
      post: {
        width: '85%', 
        height: '90%',
        display: 'flex',
        overflow: 'hidden',
        borderRadius: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#312f3d',
        position: 'relative',
      },
        postBgImg: {
          width: '100%', 
          height: '100%', 
          resizeMode: 'cover',
          position: 'absolute',
          zIndex: 1,
        },  
        postHeader: {
          width: '100%', 
          height: '25%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          zIndex: 2,
        },
          postHeaderElem: {
            width: '20%',   
            height: '60%',
            display: 'flex',
            borderRadius: 15,
            marginLeft: '7.5%',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#312f3d',
            backgroundColor: '#1e1e2c',
            alignItems: 'center',
            justifyContent: 'center',
          },
            postHeaderElemTop: {
              color: '#fff',
              fontSize: 16,
            },
            postHeaderElemBottom: {
              color: 'grey',
              fontSize: 14,
            },
        postContent: {
          width: '100%', 
          height: '50%',
          justifyContent: 'flex-start',
          alignItems: 'center',
          zIndex: 2,
        },
        postFooter: {
          width: '100%', 
          height: '25%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          zIndex: 2,
        },
          postFooterElem: {
            width: '45%', 
            height: '60%',
            display: 'flex',
            borderRadius: 15,
            marginLeft: '7.5%',
          },
            postFooterElemTop: {
              color: '#fff',
              fontSize: 24,
              textTransform: 'capitalize',
            },
            postFooterElemBottom: {
              color: 'grey',
              fontSize: 14,
              textTransform: 'capitalize',
            },

  navigation: {
    width: '100%',
    height: '12.5%',
    display: 'flex',
  },
    nav: {
      width: '100%', 
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'red',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      backgroundColor: '#0d0d12'
    },
      navElem: {
        width: '100%', 
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'red',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
      },
      navElem: {
        height: '40%',
        display: 'flex',
        borderRadius: 15,
        flexDirection: 'row',
      },
      navElemHome: {
        width: '27%',
        display: 'flex', 
        justifyContent: 'center', 
        alignContent: 'center',
        backgroundColor: '#41404e',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#312f3d',
        alignItems: 'center',
      },
        navElemHomeImg: {
          width: '50%', 
          height: '60%',
          resizeMode: 'contain',
        },
        navElemHomeText: {
          width: '50%', 
          height: '100%',
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
        },
      navElemContact: {
        width: '17%',
        display: 'flex',
        alignItems: 'center',
      },
        navElemContactImg: {
          width: '100%', 
          height: '60%',
          resizeMode: 'contain',
        },
      navElemSearch: {
        width: '17%',
        display: 'flex',
        alignItems: 'center',
      },
        navElemSearchImg: {
          width: '100%', 
          height: '60%',
          resizeMode: 'contain',
        },
});
