import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<AuthContextProps>(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                setLoading(true);
                const isSignedIn = await puter.auth.isSignedIn();
                if (isSignedIn) {
                    const userInfo = await puter.auth.getUser();
                    if (userInfo) {
                        setUser(userInfo);
                    }
                }
            } catch (e) {
                setError(String(e));
            } finally {
                setLoading(false);
            }
        }
        getUser();
    }, [])

    const signInUser = async () => {
        const userInfo = await puter.auth.signIn();
        setUser(userInfo);
        return userInfo;
    }

    const signOutUser = async () => {
        try {
            setLoading(true);
            await puter.auth.signOut();
            setUser(null);
            setError(null);
        } catch (e) {
            setError(String(e));
        } finally {
            setLoading(false);
        }
    }


    return (
        <AuthContext.Provider value={{ user, loading, error, signInUser, signOutUser }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider")
    return context
}