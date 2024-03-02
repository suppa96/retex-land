import { promiseTimeout } from '@vueuse/core'

export const useConversation = () => {
    const conversation = useState('conversation-texting', () => [])
    const enableTexting = useState('enable-setting', () => false)
    const userInput = useState('user-input', () => '')
    const messages = computed(() => conversation.value.length ?? 0)

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

    const findBestMatch = (prompt: string) => {
        let bestMatch = null;
        let maxScore = 0;
        
        files.value.forEach(item => {
            const keywords = item.keywords || [];
            const fileName = item.file.name;
            
            // Combine keywords and file name into a single string for matching
            const combinedKeywords = keywords.join(' ') + ' ' + fileName;
            
            // Calculate match score based on the number of matching keywords
            const matchScore = keywords.reduce((score, keyword) => {
                const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
                return score + (prompt.match(regex) || []).length;
            }, 0);
            
            if (matchScore > maxScore) {
                maxScore = matchScore;
                bestMatch = item;
            }
        });
        
        return bestMatch;
    }

    const initConversation = async () => {
        conversation.value.push({
            label: "Ciao Giorgia",
            type: 'chatbot'
        })
        await promiseTimeout(600)
        conversation.value.push({
            label: "Sono Francesco",
            type: 'chatbot'
        })
        await promiseTimeout(600)
        conversation.value.push({
            label: "Hai presente quali sono gli strumenti principali ?",
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
        await promiseTimeout(1500)
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
            const findFile = await findBestMatch(labelValue)
            if(findFile){
                await loadingChatbotResponse()
                conversation.value.push({
                    label: 'Certo, ti allego il documento a cui puoi fare riferimento',
                    type: 'chatbot',
                })
                conversation.value.push({
                    label: 'Allegato',
                    type: 'chatbot',
                    file: {
                        label: findFile.file.name,
                        path: findFile.file.origin
                    }
                })
                startConversation(false)
                return
            }else {
                await loadingChatbotResponse()
                conversation.value.push({
                    label: 'Oh no! Non ho trovato le informazioni che stavi cercando...',
                    type: 'chatbot',
                })
                startConversation(false)
                return;
                return
            }
        }else {
            await loadingChatbotResponse()
            conversation.value.push({
                label: 'Spero di esserti stato utile! Buona giornata e buon lavoro!',
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
        continueConversation,
        messages
    }
}