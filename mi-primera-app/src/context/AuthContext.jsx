import { createContext} from "react";
import { auth } from "../firebase/config";
import { useContext } from "react";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup,
    signOut
} from "firebase/auth";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    return context
}


export const AuthProvider = ({children}) => {

    const register = async(email, password) => {
        const response = await createUserWithEmailAndPassword(auth, email, password)
    }
    const login = async(email, password) => {
        const response = await signInWithEmailAndPassword(auth, email, password)
    }
    const loginWithGoogle = async() => {
        const responseGoogle = new GoogleAuthProvider()
        return signInWithPopup(auth, responseGoogle)
    }
    const logout = async() => {
        const response = await signOut(auth)
    }
  return (
        <authContext.Provider 
            value={{
                register,
                login,
                loginWithGoogle,
                logout
            }}>
            {children}
        </authContext.Provider>
    )
}

