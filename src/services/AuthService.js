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

  logout = async () => {
    try {
      const result = await this.auth.signOut();
      return result;
    } catch (error) {
      return error.code;
    }
  };

  register = async (name, email, phone, password ) => {
    try {
    const userCredential = await this.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (userCredential) {
        try {
          await userCredential.user.updateProfile({
            displayName: name,
            eb: phone
          });
          return userCredential.user;
        } catch (error) {
          return error;
        }
    }
      console.log("heya");
      return userCredential.user;
  }catch (error) {
    return error.code;
  }
}
   

}
export default AuthService;
