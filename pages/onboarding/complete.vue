<template>
  <div class="grid-standard flex flex-col items-center pt-[90px]">
    <div class="flex flex-col items-center mb-14 text-white">
      <IconsLogo class="w-full mx-[35px] mb-6" />
      <div class="infos bg-[#00000080] p-4 rounded mb-8">
        <h4 class="text-title-h4 text-left font-semibold">
          Il tuo Retex passport
        </h4>
        <p class="text-paragraph-info text-left mb-4">
          !l passaporto è la tua identità digitale Retex. Puoi aggiornarla in
          ogni momento nella tua area personale.
          <br />
          Vuoi scoprire gli altri continenti di Retex Land? Colleziona i timbri
          nel tuo passaporto.
        </p>
        <div class="textarea-fake">
          <p class="text-paragraph-info text-left font-semibold mb-1 w-full">
            Come posso aiutarti?
          </p>
          <div class="p-4 flex w-full bg-[#FFFFFFB2] border-white rounded">
            <p class="text-paragraph-info text-left text-black">
              Es: “Con quale strumento compilo il timesheet?”
            </p>
            <IconsMic />
          </div>
        </div>
      </div>
      <div class="other-worlds mx-4 w-full">
        <p class="text-paragraph-info mb-4">Esplora gli altri mondi</p>
        <div class="chips-container flex flex-wrap gap-1 justify-center">
          <NuxtLink
            to="/strumenti"
            class="border border-1 border-[#7CA1FF] flex gap-2 items-center rounded-full py-1 px-2"
          >
            <IconsComputer />
            <p class="text-paragraph-info font-semibold uppercase">
              Strumenti di lavoro
            </p>
          </NuxtLink>
          <NuxtLink
            to="/strumenti"
            class="border border-1 border-[#7CA1FF] flex gap-2 items-center rounded-full py-1 px-2"
          >
            <IconsSocial />
            <p class="text-paragraph-info font-semibold uppercase">
              Social&chat
            </p>
          </NuxtLink>
          <NuxtLink
            to="/strumenti"
            class="border border-1 border-[#7CA1FF] flex gap-2 items-center rounded-full py-1 px-2"
          >
            <IconsJournal />
            <p class="text-paragraph-info font-semibold uppercase">
              Progetti nel tempo
            </p>
          </NuxtLink>
          <NuxtLink
            to="/strumenti"
            class="border border-1 border-[#7CA1FF] flex gap-2 items-center rounded-full py-1 px-2"
          >
            <IconsPeople />
            <p class="text-paragraph-info font-semibold uppercase">
              Consulente del lavoro
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
