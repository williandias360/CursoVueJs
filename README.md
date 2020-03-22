# CursoVueJs
Curso de VueJs
Vue JS - Guia Completo (Vue CLI, Vue Router, Vuex e GraphQL - Udemy
Link do curos: https://www.udemy.com/course/vue-js-guia-completo/
Instrutor: Plínio Naves

Anotações:
1 - Prefira o uso de computed properts ao inves de methods sempre que possível.
Pois o VueJS "cachea" as computed properts evitando que o mesmo valor seja renderizado novamente.
Só acontecerá uma nova renderização quando o objeto data atrelado a computed properts for modificado.
As computed properts funcionam como propriedades getters, ou seja, sempre retornam um valor e o retorno deve ser um valor síncrono.
2 - Watch: Funcionamento semelhante as computed properts, porém é mais verboso o seu uso.
Quando usar Watch: Quando a situação precisa ser reagida a alteração de outros dados e executar uma operação asincronas.
3 - Two way data bind: dado pela diretiva v-bind="nomeDaPropriedade". Sempre que a propriedade sofrer uma alteração, a mesma será refletida nos elementos que possuem o bind da propriedade vinculado

