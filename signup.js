import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image source={{ uri: 'https://example.com/campus-background.jpg' }} style={styles.backgroundImage} />

      {/* Form Container */}
      <ScrollView contentContainerStyle={styles.formContainer}>
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>
            DI<Text style={styles.linkText}>-LINK</Text>
          </Text>
          <Text style={styles.subtitle}>Way to connect with bright future</Text>
        </View>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Enter Your Full Name" placeholderTextColor="#aaa" />
          <TextInput style={styles.input} placeholder="Enter Your Varsity Email Address" placeholderTextColor="#aaa" />
          <TextInput style={styles.input} placeholder="Enter Your Mobile Number" placeholderTextColor="#aaa" keyboardType="phone-pad" />
          <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#aaa" secureTextEntry />
          <TextInput style={styles.input} placeholder="Your Department" placeholderTextColor="#aaa" />
          <TextInput style={styles.input} placeholder="Your Batch Initial" placeholderTextColor="#aaa" />
          <TextInput style={styles.input} placeholder="Enter Your Skill" placeholderTextColor="#aaa" />
          <TextInput style={styles.input} placeholder="Portfolio or Skill Example Link" placeholderTextColor="#aaa" />
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* OR Divider */}
        <Text style={styles.orText}>OR</Text>

        {/* Google Button */}
        <TouchableOpacity style={styles.googleButton}>
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png' }} style={styles.googleIcon} />
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        {/* Sign In Link */}
        <Text style={styles.signInText}>
          Already have an account? <Text style={styles.signInLink}>Sign In</Text>
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.7,
  },
  formContainer: {
    padding: 20,
    marginTop: 50,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#003366',
  },
  linkText: {
    color: '#007AFF',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 8,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  signupButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginBottom: 15,
    color: '#555',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    marginBottom: 15,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    color: '#555',
    fontSize: 16,
  },
  signInText: {
    textAlign: 'center',
    color: '#555',
  },
  signInLink: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});
