declare global {
    type User = {
        uuid: string,
        username: string,
        email_confirmed: boolean
    }

    type AuthContextProps = {
        user: User | null,
        loading: boolean,
        error: string | null,
        signInUser: () => Promise<User>,
        signOutUser: () => Promise<void>
    }

    type AudioInputFileProps = {
        file: File | null,
        fileError: string | null,
        handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
        handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
        user: User
    }

}

export { }