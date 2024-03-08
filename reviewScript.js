const firebaseConfig = {
  apiKey: "AIzaSyCaIFpjA5ZIFH1zx4oacd_nG0jp3oRt8cE",
  authDomain: "review-6a8c7.firebaseapp.com",
  databaseURL: "https://review-6a8c7-default-rtdb.firebaseio.com",
  projectId: "review-6a8c7",
  storageBucket: "review-6a8c7.appspot.com",
  messagingSenderId: "475647470119",
  appId: "1:475647470119:web:f84e862202b692fcf5fc02"
};



firebase.initializeApp(firebaseConfig);

const reviewFormDB = firebase.database().ref("reviewForm");


const getElementVal = (id) => {
  return document.getElementById(id).value;
};


const saveReview = (firstName, lastName, email, rating, feedback) => {
  const newReviewForm = reviewFormDB.push();

  newReviewForm.set({
    firstName: firstName,
    lastName: lastName,
    email: email,
    rating: rating,
    feedback: feedback,
  });
};

document.getElementById("reviewForm").addEventListener("submit", function (e) {
  e.preventDefault();

  
  const firstName = getElementVal("firstName");
  const lastName = getElementVal("lastName");
  const email = getElementVal("email");
  const rating = getElementVal("rating");
  const feedback = getElementVal("feedback");

  
  saveReview(firstName, lastName, email, rating, feedback);


  document.getElementById("reviewForm").reset();
});


