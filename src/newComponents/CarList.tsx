// import {
//   Platform,
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   TextInput,
//   View,
// } from 'react-native';
// import React from 'react';
//
// export const CarList = () => {
//   return (
//     // <View style={styles.bottomBox}>
//     //   {/* First box with 5 car icons */}
//     //   <View style={styles.carBox}>
//     //     <Icon name="car" size={20} style={styles.carIcon} />
//     //     <Icon name="car" size={20} style={styles.carIcon} />
//     //     <Icon name="car" size={20} style={styles.carIcon} />
//     //     <Icon name="car" size={20} style={styles.carIcon} />
//     //     <Icon name="car" size={20} style={styles.carIcon} />
//     //   </View>
//     <SafeAreaView style={styles.container}>
//       <View style={styles.navbar}>
//         {/* Icon Container */}
//         <View style={styles.iconContainer}>
//           {/* You can place your search icon component here */}
//         </View>
//         {/* Search Bar */}
//         <View style={styles.searchContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Search..."
//             onChangeText={text => {
//               // Handle search functionality here
//               console.log('Search query:', text);
//             }}
//           />
//         </View>
//         {/* Right Container (optional) */}
//         <View style={styles.rightContainer}></View>
//       </View>
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Adjust for status bar on Android
//   },
//   navbar: {
//     backgroundColor: 'white', // White background color
//     paddingVertical: 10, // Add padding vertically
//     paddingHorizontal: 20, // Add padding horizontally
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderRadius: 10, // Border radius
//     height: 88,
//     marginTop: 350,
//     marginLeft: 5,
//     marginRight: 5,
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000', // Shadow color
//         shadowOffset: {width: 0, height: 2}, // Shadow offset
//         shadowOpacity: 0.25, // Shadow opacity
//         shadowRadius: 3, // Shadow radius
//       },
//       android: {
//         elevation: 5, // For Android shadow
//         shadowColor: '#000', // Shadow color
//         shadowOffset: {width: 0, height: 1}, // Shadow offset
//         shadowOpacity: 0.3, // Shadow opacity
//         shadowRadius: 2, // Shadow radius
//       },
//     }),
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     marginLeft: 10,
//     marginRight: 10,
//     borderRadius: 5,
//     padding: 5,
//   },
//   searchContainer: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: 'lightgrey',
//     borderRadius: 5,
//     flexDirection: 'row',
//     alignItems: 'center',
//     height: 40,
//     width: 50,
//     marginBottom: 20,
//   },
//   //   bottomBox: {
//   //   backgroundColor: 'white',
//   //   paddingVertical: 20,
//   //   paddingHorizontal: 20,
//   //   borderTopLeftRadius: 20,
//   //   borderTopRightRadius: 20,
//   //   marginTop: 280, // Pushes the box to the bottom of the screen
//   // },
//   //   carBox: {
//   //   flexDirection: 'row',
//   //   justifyContent: 'space-around',
//   //   marginBottom: 20,
//   // },
//   icon: {
//     color: 'green', // Change icon color if needed
//   },
//   searchText: {
//     fontSize: 22, // Increase font size
//     color: 'black', // Set text color
//   },
//   iconContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 5,
//     backgroundColor: 'lightgreen',
//     marginLeft: 10, // Adjusted marginLeft to add space between the left icon and the green circle
//   },
//   rightContainer: {
//     alignItems: 'flex-end', // Align items to the right
//   },
//   rightIcon: {
//     marginRight: 10, // Margin on the right side
//   },
// });
// export default CarList;

import React from 'react';
import {Platform, StatusBar, StyleSheet, TextInput, View} from 'react-native';

export const CarList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            onChangeText={text => {
              // Handle search functionality here
              console.log('Search query:', text);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Adjust for status bar on Android
  },
  navbar: {
    backgroundColor: 'white', // White background color
    // paddingVertical: 10, // Add padding vertically
    paddingHorizontal: 20, // Add padding horizontally
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10, // Border radius
    height: 88,
    marginLeft: 5,
    marginRight: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#000', // Shadow color
        shadowOffset: {width: 0, height: 2}, // Shadow offset
        shadowOpacity: 0.25, // Shadow opacity
        shadowRadius: 3, // Shadow radius
      },
      android: {
        elevation: 5, // For Android shadow
        shadowColor: '#000', // Shadow color
        shadowOffset: {width: 0, height: 1}, // Shadow offset
        shadowOpacity: 0.3, // Shadow opacity
        shadowRadius: 2, // Shadow radius
      },
    }),
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    padding: 5,
  },
  searchContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    // marginBottom: 20,
  },
});

export default CarList;
