import { promiseTimeout } from '@vueuse/core'

export const useConversation = () => {
    const conversation = useState('conversation-texting', () => [])
    const enableTexting = useState('enable-setting', () => false)
    const userInput = useState('user-input', () => '')

    const storeQuestions = useQuestionsSettings()
    const { randomQuestion } = storeToRefs(storeQuestions)

    const storeFiles = useFiles()
    const { findFileById } = storeFiles
    const { files } = storeToRefs(storeFiles)

    const containsAnyWord = (string, words) => {
        const label = string.toLowerCase()
        for (let i = 0; i < words.length; i++) {
            if (label.includes(words[i])) {
                return true; 
            }
        }
        return false
    }

    const initConversation = async () => {
        conversation.value.push({
            label: "Ciao Giorgia",
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
            label: randomQuestion.value.question,
            type: 'chatbot'
        })
        await promiseTimeout(300)
        enableTexting.value = true
    }

    const loadingChatbotResponse = async () => {
        conversation.value.push({
            label: '',
            typing: true,
            type: 'chatbot'
        })
        await promiseTimeout(500)
        conversation.value.pop()
    }

    const resetUserInput = () => {
        userInput.value = ''
        enableTexting.value = false
    }

    const addUserResponse = async () => {
        conversation.value.push({
            label: userInput.value,
            type: 'user'
        })
        const labelValue = userInput.value ?? ''
        resetUserInput()
        await promiseTimeout(300)
        if(containsAnyWord(labelValue, randomQuestion.value.casesNegative)) {
            const labelResponse = randomQuestion.value.file.response
            const idFile = randomQuestion.value.file.id
            const file = await findFileById(idFile)

            await loadingChatbotResponse()

            conversation.value.push({
                label: labelResponse,
                type: 'chatbot'
            })
            console.log('file', file, randomQuestion.value.file.id)
            if(file) {
                conversation.value.push({
                    label: 'Allegato',
                    type: 'chatbot',
                    file: {
                        label: file.file.name,
                        path: file.file.origin
                    }
                })
                startConversation(false)
                return
            } else {
                conversation.value.push({
                    label: 'Oh no! Non ho trovato le informazioni che stavi cercando...',
                    type: 'chatbot',
                })
                startConversation(false)
                return;
            }
        } else {
            startConversation(true)
            return;
        }
    }

    const startConversation = (initToStart: boolean) => {
        conversation.value.push({
            label: initToStart ? 'Come posso esserti utile ?' : 'Posso fare altro per te ?',
            type: 'chatbot',
        })
        enableTexting.value = true
    }

    const continueConversation = async () => {
        conversation.value.push({
            label: userInput.value,
            type: 'user'
        })
        const labelValue = userInput.value ?? ''
        resetUserInput()
        if(!containsAnyWord(labelValue, randomQuestion.value.casesNegative)) {
            await loadingChatbotResponse()
            conversation.value.push({
                label: 'risposta con file .....',
                type: 'user',
            })
            startConversation(false)
        }else {
            await loadingChatbotResponse()
            conversation.value.push({
                label: 'Spero di esserti stat* utile! Buona giornata e buon lavoro!',
                type: 'chatbot',
            })
        }
    }

    return {
        conversation,
        userInput,
        initConversation,
        enableTexting,
        addUserResponse,
        continueConversation
    }
}