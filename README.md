# Ejercicio 1 Vue, Crear proyecto

- Crea un proyecto de Vue 3, llamado vue-exercises que tenga `Pinia, Eslint, Prettier, TypeScript, scss`
- Borra todos los componentes y Views (menos `App.vue`)
- Elimina de `router/index.ts` la ruta `about` y `home`
- Elimina el archivo `stores/counter.ts`
- Elimina los archivos `/assets/base.css` y `/assets/main.css` y crea tu propio `reset.css` añadiendo variables
- Instala una fuente

# Ejercicio 2 Vue, Crea tu primer componente

- Crea un componente llamado `TheTitle.vue`. Este componente tendrá un `<h2>` con unos estilos de tu elección
- El contenido del `<h2>` será `Título estático`
- Invoca este componente en `app.vue`

# Ejercicio 3 Vue, props

- Pasar como prop a `TheTitle.vue` el título, el prop se llamará `propTitle`

# Ejercicio 4, slot

Vamos a modificar el componente `TheTitle.vue`, quitaremos el prop, y haremos que el texto del título entre por `slot`

# Ejercicio 5 Vue, contador

Crea un componente llamado `TheCounter.vue` que tendrá:

- Un título usando el componente `TheTitle.vue`
- Dos `<button>` `Increment` y `Decrement` que incrementarán o decrementarán en 1 el contador
- ¿Hay alguna forma de mejorar el código?

# Ejercicio 6 Vue, Directivas condicionales

- Cuando el valor de `counter` llegue a 0 hacemos que el botón `Decrease` desaparezca
- Cuando el valor de `counter` sea mayor o igual a 10 hacemos que el botón `Increase` desaparezca

# Ejercicio 7, List rendering

- Crea un componente `ProductCard.vue` que tenga `image, title, description, price, button`. El diseño a tu elección
- Crea un `data/mock.ts` para simular los datos, mínimo 3 productos
- Crea una página llamada `catalogo` en la que vas a pintar de 3 cards usando el componente `ProductCard.vue`, usando los datos del `mock`
- Crea una página `home` que tendrá todo lo que hemos hecho hasta ahora en `App.vue`
- Añade tanto en la página `home` como en `catalogo` un botón que rediriga a la página contraria
- Usa todo lo aprendido hasta ahora, teniendo en cuenta el `html, css, etc`

# Ejercicio 8 Vue, emit

Crea dos componentes `ChildComponent.vue` y `ParentComponent.vue`, y haz que el hijo emita un evento saludando al componente padre mediante un botón

# Ejercicio 9 Vue, Inject + Provide

Envia un mensaje del componente `ParentComponent.vue` a `ChildComponent.vue`

# Ejercicio 10 Vue, Composables

- Traspasa toda la lógica que tiene `counter` a un composable y utilízalo

# Ejercicio 11, preguntas sorpresa

1. ¿Qué es un linter?
   Es una herramienta que esta a cargo de la mejora del codigo a traver de la identificacion de fallos o problemas del sistema.
2. ¿Qué es Husky?
   Automatizaar tareas personalizadas como pruebas automaticas o analisis estático.
3. ¿Qué es la reactividad?
   la parte de codigo que responde a un evento o cambio de estado en otra parte del código.
4. ¿Desde dónde hay que crear todas las ramas para los desarrollos?
   De la rama main
5. ¿Cuándo se puede utilizar la rama main?
   Nunca
6. ¿Qué son las custom properties?
   en css, son las variables.
7. Diferencias entre v-if y v-show
   v-if no renderiza el componente si no cumple la condicion y v-show simplemente añade un display none condicionalmente.
8. ¿Cuáles son los valores de falsy?
   null, 0, "", undefined
9. ¿Qué es Nullish Coalescing Operator?
   ?? : es el operador que define el valor de una variable dependiendo si da falsi la primera parte del operador.
10. ¿Para que se utiliza TypeScript?
    Para tipar el codigo de JavaScript, de esta manera se solucionan los problemas que podrian haber al recibir y usar datos de servicios externos.

# Ejercicio 12 Vue, Estilos dinámicos

- Haz que cuando el contador de `TheCounter.vue` llegue a `10` su color cambie a verde

# Ejercicio 13 Vue, computed

- En `TheCounter.vue` implementa otro título que tenga un contador que multiplique `*2` el valor de `counter`

# Ejercicio 14 Vue, Watchers

En `TheCounter.vue` añade en el título un texto, su contenido cambiará dependiendo del resultado:

- Si el valor es `0` - `Estás en el valor mínimo`
- Si el valor es `10` - `Estás en el valor máximo`
- Si el valor está entre 1 y 9 - `Estás en los parámetros adecuados`

# Ejercicio 15 Vue, Soluciona los errores

En estos fragmentos de código puede que encuentres algún error, solucionalos y justifica el cambio.

1.

```ts
// composables/useCounter.ts
import { ref } from 'vue'

export function useCounter() {
  const count = ref(0)

  function increment() {
    count.value++
  }
  return { count, increment } // Añadi el return, que si es un composable si o si necesita un return.
}
```

2.

```vue
<script setup>
import { ref } from 'vue'

const items = ref(['Apple', 'Banana', 'Cherry'])
//item en items no deberia usar un index definido, no seria ideal por motivos de reutilizacion, si los elementos cambian, no se identificarian adecuadamente.
</script>
<template>
  <ul>
    <li v-for="item in items" :key="item">
      {{ item }}
    </li>
  </ul>
</template>
```

3.

```vue
<!-- no hay ningun problema -->
<template>
  <ul>
    <TheComponent v-for="item in items" :key="item.id" :dataUser="item" />
  </ul>
</template>
```

4.

```vue
<script setup lang="ts">
import TheTitle from '@/components/TheTitle.vue'
import TheButton from '@/components/TheButton.vue'
import { useCounterStore } from '@/stores/counter'

const { count, message, incrementCounter, decrementCounter, doubleCounter } = useCounterStore()
</script>
<template>
  <TheTitle :class="count === 10 ? 'active' : 'inactive'"
    >Contador: {{ count }} - {{ message }}</TheTitle
  >
  <TheTitle>Contador doble: {{ doubleCounter }}</TheTitle>

  <TheButton v-if="count < 10" aria-label="Incrementar contador" @click="incrementCounter"
    >Increase</TheButton
  >
  <TheButton v-if="count > 0" aria-label="Decrementar contador" @click="decrementCounter"
    >Decrease</TheButton
  >
</template>
```

```vue
<!-- supuesta solucion -->
<script setup lang="ts">
import TheTitle from '@/components/TheTitle.vue'
import TheButton from '@/components/TheButton.vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const { count, message, doubleCounter } = storeToRefs(store)
const { incrementCounter, decrementCounter } = store
</script>
<template>
  <TheTitle :class="count === 10 ? 'active' : 'inactive'">
    Contador: {{ count }} - {{ message }}
  </TheTitle>
  <TheTitle>Contador doble: {{ doubleCounter }}</TheTitle>

  <TheButton v-if="count < 10" aria-label="Incrementar contador" @click="incrementCounter">
    Increase
  </TheButton>
  <TheButton v-if="count > 0" aria-label="Decrementar contador" @click="decrementCounter">
    Decrease
  </TheButton>
</template>
```

# Ejercicio 16 Vue, Pinia

- Traslada toda la funcionalidad del contador a una Store de Pinia
- Pinta también el contador en la página `catálogo` para ver que el estado de count es global

# Ejercicio 11 Vue, Refactor a TS

Refactoriza `ProductCard.vue` para tipar sus datos, modifica todos los archivos necesarios

# Ejercicio 18 Vue, Componentes dinámicos

Muestra mediante un bucle `v-for` 2 iconos, imagina que estás haciendo el menú y quieres mostrar los iconos de `RRSS`
