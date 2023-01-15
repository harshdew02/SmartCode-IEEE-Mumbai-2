
// Firebase importation start
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
const firebaseConfig = {
  apiKey: 'AIzaSyAz3d_xBg_2S4hBOxEd7gRT13cYrPVKbDs',
  authDomain: 'fire9db-e1c0c.firebaseapp.com',
  projectId: 'fire9db-e1c0c',
  storageBucket: 'fire9db-e1c0c.appspot.com',
  messagingSenderId: '170442699980',
  appId: '1:170442699980:web:5dee1fbe5516b6d828fe69',
}
const app = initializeApp(firebaseConfig)
import {
  getDatabase,
  get,
  ref,
  set,
  child,
  update,
  remove,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

const db = getDatabase()
// Firebase importation Ends


// Importing the elements START
var fname = document.getElementById('Filename')
// var edt = document.getElementById('editor')

var edtcontainer = document.getElementById('code')
let lan = document.getElementById("language");
var editor = ace.edit("editor");
editor.setTheme("ace/theme/cobalt");

var insBtn = document.getElementById('Insbtn')
var selBtn = document.getElementById('Selbtn')
var updBtn = document.getElementById('Updbtn')
var delBtn = document.getElementById('Delbtn')
// Importing the elements END


// Creating the funtions
let k;
function write() {
  k = lan.value;
  editor.session.setMode("ace/mode/" + k);

  let m = editor.getValue();
  // editor.setValue(m);

  console.log(m);
}
write();



function InsertData() {

  let data = editor.getValue();

  set(ref(db, 'CODE/' + fname.value), {
    code: data,
  })
    .then(() => {
      alert('data stored successfully')
    })
    .catch((error) => {
      alert('unsuccessful, error' + error)
    })
}

function SelectData() {
  const dbref = ref(db)
  get(child(dbref, 'CODE/' + fname.value))
    .then((snapshot) => {
      if (snapshot.exists()) {
        editor.setValue(snapshot.val().code)
        alert('hi')
      } else {
        alert('No data found')
      }
    })
    .catch((error) => {
      alert('unsuccessful, error' + error)
    })
}

function UpdateData() {
  let data = editor.getValue();
  update(ref(db, 'CODE/' + fname.value), {
    code: data,
  })
    .then(() => {
      alert('data Updated successfully')
    })
    .catch((error) => {
      alert('unsuccessful, error' + error)
    })
}

function DeleteData() {
  remove(ref(db, 'CODE/' + fname.value))
    .then(() => {
      alert("data is removed successfully");
    })
    .catch((error) => {
      alert("unsuccesful , error" + error);
    });
}

lan.addEventListener('click', write);
insBtn.addEventListener('click', InsertData);
selBtn.addEventListener('click', SelectData);
updBtn.addEventListener('click', UpdateData);
delBtn.addEventListener('click', DeleteData);