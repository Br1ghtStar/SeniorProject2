const firebaseConfig = {
    apiKey: "AIzaSyD0nfjlGL9q9JgUkiXewXBzYlV9SEKAN6I",
    authDomain: "reviewform-sp.firebaseapp.com",
    databaseURL: "https://reviewform-sp-default-rtdb.firebaseio.com",
    projectId: "reviewform-sp",
    storageBucket: "reviewform-sp.appspot.com",
    messagingSenderId: "498306699144",
    appId: "1:498306699144:web:ef07c654d20fabc986f43d"
  };

  firebase.initializeApp(firebaseConfig);


  var reviewFormDB = firebase.database().ref("reviewForm");

  document.getElementById("reviewForm").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();
  
    var firstName = getElementVal("firstName");
    var lastName = getElementVal("lastName");
    var email = getElementVal("email");
    var rating = getElementVal("rating");
    var feedback = getElementVal("feedback");

    saveMessages = (firstName, lastName, email, rating, feedback )

  }

  const saveMessages = (firstName, lastName, email, rating, feedback ) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      firstName: firstName,
      lastName: lastName,
      email: email,
      name: name,
      rating: rating,
      feedback: feedback,
    });
  };