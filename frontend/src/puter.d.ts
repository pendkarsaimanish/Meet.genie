interface PuterAuth {
    signIn(): Promise<User>
    signOut(): Promise<void>
    isSignedIn(): Promise<boolean>
    getUser(): Promise<User>

}

type models =
    "gpt-5-2025-08-07" | "gpt-5" | "gpt-5-mini-2025-08-07" | "gpt-5-mini" |
    "gpt-5-nano-2025-08-07" |
    "gpt-5-nano" |
    "gpt-5-chat-latest" |
    "gpt-4o" |
    "gpt-4o-mini" |
    "o1" |
    "o1-mini" |
    "o1-pro" |
    "o3" |
    "o3-mini" |
    "o4-mini" |
    "gpt-4.1" |
    "gpt-4.1-mini" |
    "gpt-4.1-nano" |
    "gpt-4.5-preview" |
    "claude-sonnet-4-5-20250929" |
    "claude-sonnet-4.5" |
    "claude-sonnet-4-5" |
    "claude-opus-4-1-20250805" |
    "claude-opus-4-1" |
    "claude-opus-4-20250514" |
    "claude-opus-4" |
    "claude-opus-4-latest" |
    "claude-sonnet-4-20250514" |
    "claude-sonnet-4" |
    "claude-sonnet-4-latest" |
    "claude-3-7-sonnet-20250219" |
    "claude-3-7-sonnet-latest" |
    "claude-3-5-sonnet-20241022" |
    "claude-3-5-sonnet-latest" |
    "claude-3-5-sonnet-20240620" |
    "claude-3-haiku-20240307" |
    "cartesia/sonic" |
    "cartesia/sonic-2" |
    "togethercomputer/MoA-1" |
    "gemini-1.5-flash" |
    "gemini-2.0-flash" |
    "openrouter:google/gemini-2.5-flash" |
    "openrouter:google/gemini-2.5-flash-preview-09-2025" |
    "openrouter:google/gemini-2.5-flash-lite-preview-09-2025" |
    "openrouter:google/gemini-2.5-flash-image-preview" |
    "openrouter:google/gemini-2.0-flash-exp:free";

interface ChatMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

interface ChatOptions {
    model?: models;
    stream?: boolean;
    max_tokens?: number;
    temperature?: number;
    tools?: {
        type: "function";
        function: {
            name: string;
            description: string;
            parameters: object;
            strict?: boolean;
        };
    }[];
    imageURL?: string;
    imageURLArray?: string[];
}

interface PuterAI {
    chat(prompt: string | ChatMessage[], options?: ChatOptions, testMode: boolean): Promise<any>
}

declare global {
    const puter: {
        auth: PuterAuth;
        ai: PuterAI;
    }
}

export { }