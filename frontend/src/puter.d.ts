interface PuterAuth {
    signIn(): Promise<User>
    signOut(): Promise<void>
    isSignedIn(): Promise<boolean>
    getUser(): Promise<User>

}

declare global {
    const puter: {
        auth: PuterAuth;
    }
}

export { }