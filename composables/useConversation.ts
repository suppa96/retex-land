import { promiseTimeout } from '@vueuse/core'

export const useConversation = () => {
    const conversation = useState('conversation-texting', () => [])
    const enableTexting = useState('enable-setting', () => false)

    const store = useQuestionsSettings()
    const { randomQuestion } = storeToRefs(store)

    const initConversation = async () => {

        console.log('randomQuestion', randomQuestion.value)
        conversation.value.push({
            label: "Ciao Mattia",
            type: 'chatbot'
        })
        await promiseTimeout(600)
        conversation.value.push({
            label: "Sono Marialuisa Pes, responsabile HR!",
            type: 'chatbot'
        })
        await promiseTimeout(600)
        conversation.value.push({
            label: "Ti do il benvenuto nel mondo della burocrazia di Retex.",
            type: 'chatbot'
        })
        await promiseTimeout(600)
        conversation.value.push({
            label: "Segui le tappe e affidati a me. Hai delle domande prima di iniziare?",
            type: 'chatbot'
        })
        await promiseTimeout(300)
        enableTexting.value = true
    }

    const addUserResponse = (label: string) => {
        conversation.value.push({
            label: label,
            type: 'user'
        })
        enableTexting.value = false
    }

    return {
        conversation,
        initConversation,
        enableTexting,
        addUserResponse
    }
}