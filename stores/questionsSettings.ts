  export const useQuestionsSettings = defineStore("questionsSetting", () => {

    const questions = ref()

    const getRandomObjectFromArray = (arr: Array<any>) => {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    const setQuestions = async () => {
      try {
        const questionsGET = await import(
          `../static/questions.json`
        )
        questions.value = questionsGET.default ?? []
      } catch (err) {
        throw createError({
          statusCode: 500,
          statusMessage: 'Questions not found...',
        })
      }
    }

    const randomQuestion = computed(() => questions.value ? getRandomObjectFromArray(questions.value) : null)

  return {
    // DATA 
    questions,
    randomQuestion,

    // METHODS 
    setQuestions,
  }
  });
  
  // @ts-ignore
  if (import.meta.hot)
  // @ts-ignore
    import.meta.hot.accept(acceptHMRUpdate(useQuestionsSettings, import.meta.hot))
  