import "firebase/auth";

class AuthService {
  constructor(firebase, onAuthStateChanged) {
    this.auth = firebase.auth();
    this.auth.onAuthStateChanged(user => onAuthStateChanged(user));
  }

  

  login = async (email, password) => {
    try {
      const result = await this.auth.signInWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      return error.code;
    }
  };

}
export default AuthService;
