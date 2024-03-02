export type AtomsQuestionProps = {
    label: string,
    typing?: boolean
    type: 'user' | 'chatbot'
    file?: {
        label: string
        path: string    
    }
}