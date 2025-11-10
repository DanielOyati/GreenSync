// This version works directly in the browser with Firebase loaded via <script> tags

const firebaseConfig = {
    apiKey: "AIzaSyAn2DugUsH_41SPvwr93xu3ZV3QCkj1PQU",
    authDomain: "greensync-default.firebaseapp.com",
    databaseURL: "https://greensync-default-rtdb.firebaseio.com",
    projectId: "greensync-default",
    storageBucket: "greensync-default.appspot.com",
    messagingSenderId: "68680398941",
    appId: "1:68680398941:web:8de047630a33919ff075b4"
  };
  
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  const chatRef = db.ref("greensync_messages"); // Updated reference for GreenSync
  
  // Send message to EcoBot Community
document.getElementById("sendBtn").addEventListener("click", () => {
  const input = document.getElementById("chatInput");
  const message = input.value.trim();

  if (message) {
    chatRef.push({ 
      text: message, 
      timestamp: Date.now(),
      user: "Organization" // Default user label
    });
    console.log("✅ Message sent to EcoBot Community:", message);
    input.value = "";
  } else {
    console.log("⚠️ Empty message not sent.");
  }
});

// Show incoming messages from EcoBot Community
chatRef.on("child_added", (snapshot) => {
  const msg = snapshot.val();
  console.log("📥 Message received from EcoBot Community:", msg);

  const p = document.createElement("p");
  p.className = "mb-2 p-2 bg-[#1a1a1a] rounded text-sm";
  p.innerText = `${msg.user || "Community"}: ${msg.text}`;
  document.getElementById("chatBox").appendChild(p);
  // Auto-scroll to bottom
  const chatBox = document.getElementById("chatBox");
  chatBox.scrollTop = chatBox.scrollHeight;
});


  