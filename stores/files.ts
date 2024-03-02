  export const useFiles = defineStore("files", () => {

    const files = ref()

    const setFiles = async () => {
      try {
        const filesGET = await import(
          `../static/files.json`
        )
        files.value = filesGET.default ?? []
      } catch (err) {
        throw createError({
          statusCode: 500,
          statusMessage: 'Files not found...',
        })
      }
    }

    const findFileById = (id: string) => files.value ? files.value.find(file => file.id) : null

  return {
    // DATA 
    files,

    // METHODS 
    setFiles,
    findFileById
  }
  });
  
  // @ts-ignore
  if (import.meta.hot)
  // @ts-ignore
    import.meta.hot.accept(acceptHMRUpdate(useFiles, import.meta.hot))
  