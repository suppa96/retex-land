export const useQuestionsSetting = () => {

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
        console.log('set questions')
        questions.value = questionsGET.default ?? []
        console.log('questions.value', questions.value)
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
}
