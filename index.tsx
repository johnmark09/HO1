import React, {useState} from "react";
import {
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";



const { width } = Dimensions.get("window");

export default function Form() {

  const [lastName, setLastName] = useState(``);
  const [firstName, setFirstName] = useState(``);
  const [sectionName, setSection] = useState(``);
  const [statusName, setStatus] = useState(``);
  const [message,SetMessage] = useState(``);

  const [locallastName, setlocalLastName] = useState(``); 
  const [localfirstName, setlocalFirstName] = useState(``);
  const [localsectionName, setlocalSection] = useState(``);
  const [localstatusName, setlocalStatus] = useState(``);
  const [localmessage,SetlocalMessage] = useState(``);




  const handlePresent = async()=> {
    setStatus("Present");
    const fullMessage = `Submitting Present: Name: ${lastName}, ${firstName} | Section: ${sectionName}`;
    SetMessage(fullMessage);
  };

  const handleAbsent = async()=> {
    setStatus("Absent");
    const fullMessage = `Submitting Absent: Name: ${lastName}, ${firstName} | Section: ${sectionName}`;
    SetMessage(fullMessage);
  };


  return (
    <ImageBackground
      source={require("../assets/images/wavy.jpg")}
      style={styles.backgroundimg}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1, width: "100%" }}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.container}>
              <View style={styles.titleCon}>
                <Text style={styles.title}>Attendance Form</Text>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Last Name</Text>
                <TextInput
                  value= {lastName}
                  onChangeText={setLastName}
                  style={styles.input}
                  placeholder="Enter first name"
                  placeholderTextColor="#64748b"
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>First Name</Text>
                <TextInput
                  value= {firstName}
                  onChangeText={setFirstName}
                  style={styles.input}
                  placeholder="Enter last name"
                  placeholderTextColor="#64748b"
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Section</Text>
                <TextInput
                  value= {sectionName}
                  style={styles.input}
                  onChangeText={setSection}
                  placeholder="Enter section" 
                />
              </View>

                <Text style={styles.message}>{message}</Text>

                {statusName !== "" &&(
                  <Text style={styles.status}>
                    Status: {statusName}
                  </Text>
                )}

              <View style={styles.buttonGroup}>
                <TouchableOpacity onPress={handlePresent} style={styles.button}>
                  <Text style={styles.buttonText}>Present</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAbsent} style={[styles.button, styles.absentButton]}>
                  <Text style={styles.buttonText}>Absent</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundimg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  overlay: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },

  container: {
    width: "100%",
    maxWidth: 400,
    padding: 30,
    backgroundColor: "rgba(248, 250, 252, 0.9)",
    borderWidth: 2,
    borderColor: "#60a5fa",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    alignSelf: "center",
  },

  titleCon: {
    alignItems: "center",
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 10,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0284c7",
  },

  inputGroup: {
    marginBottom: 18,
  },

  label: {
    fontSize: 16,
    color: "#334155",
    marginBottom: 5,
    paddingLeft: 2,
  },

  input: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    fontSize: 16,
    backgroundColor: "#f1f5f9",
    borderColor: "#94a3b8",
    borderWidth: 1,
    borderRadius: 10,
    color: "#0f172a",
  },

  buttonGroup: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    flex: 1,
    backgroundColor: "#16a34a",
    paddingVertical: 12,
    borderRadius: 30,
    marginHorizontal: 6,
    alignItems: "center",
  },

  absentButton: {
    backgroundColor: "#dc2626",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  message: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',   
  },
  status: {
    marginTop: 5,
    fontWeight: 'bold',
    color: '#000',
    fontSize: 14,
    textAlign: 'center',   
  },
});

