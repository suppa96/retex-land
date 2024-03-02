export type User = {
  email: string;
  name: string;
  gender: "m" | "f" | "nb";
  hash: string;
  surname: string;
  newProfile: boolean;
  data?: {
    personal?: Data[] | null;
    passions?: Data[] | null;
    skills?: Data[] | null;
  };
};

type Data = {
  [x: string]: string | string[];
};

export const useUsersStore = defineStore("users", () => {
  const users: Ref<User[]> = ref([
    {
      email: "giorgia.carini@atoms.retexspa.com",
      hash: "1fb3b75e28dc98f0424e289fd16c0fde",
      name: "Giorgia",
      surname: "Carini",
      gender: "f",
      newProfile: true,
    },
    {
      email: "ida.mandolini@atoms.retexspa.com",
      hash: "f2858703622f57ac4a81905d4afd72cf",
      name: "Ida",
      surname: "Mandolini",
      gender: "m",
      newProfile: false,
      data: {
        personal: null,
        passions: null,
        skills: null,
      },
    },
  ]);

  const retrieveUserByEmail = (email: string) => {
    return users.value.find((user) => user.email === email) ?? null;
  };

  const retrieveUserByHash = (hash: string) => {
    return users.value.find((user) => user.hash === hash) ?? null;
  };

  const updateUserInfo = (
    type: "personal" | "passions" | "skills",
    email: string,
    data: any
  ) => {
    try {
      users.value = users.value.map((user) => {
        if (user.email === email) {
          if (user.data && !!user.data[type]?.length) {
            return {
              ...user,
              data: {
                ...user.data,
                [type]: data.push(data),
              },
            };
          }

          return {
            ...user,
            data: {
              ...user.data,
              [type]: data,
            },
          };
        }
        return user;
      });
      return true;
    } catch {
      return true;
    }
  };

  return {
    users,
    retrieveUserByEmail,
    retrieveUserByHash,
    updateUserInfo,
  };
});

// @ts-ignore
if (import.meta.hot)
  // @ts-ignore
  import.meta.hot.accept(acceptHMRUpdate(useUsersStore, import.meta.hot));
