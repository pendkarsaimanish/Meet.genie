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
        user: User,
        file: File | null,
        isTranscribing: boolean,
        isSummarizing: boolean,
        fileError: string | null,
        handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
        handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    }

    type AudioTranscriptionProps = {
        error: string | null,
        isTranscribing: boolean,
        transcription: string | null,
        transcribe: (file: File) => Promise<void> | null;
    }

}

export { }