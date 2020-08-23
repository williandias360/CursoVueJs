import Vue from "vue";
import VueRouter from "vue-router";

//import Contatos from "./views/contatos/Contatos";
//import ContatoDetalhes from "./views/contatos/ContatoDetalhes";
//import ContatosHome from "./views/contatos/ContatosHome";
//import ContatoEditar from "./views/contatos/ContatoEditar";
import Erro404 from "./views/Erro404";
import Erro404Contatos from "./views/contatos/Erro404Contatos";
import Login from "./views/login/Login";

const Contatos = () =>
  import(/*webpackChunkName: "contatos"*/ "./views/contatos/Contatos.vue");
const ContatoEditar = () =>
  import(/*webpackChunkName: "contatos"*/ "./views/contatos/ContatoEditar");
const ContatosHome = () =>
  import(/*webpackChunkName: "contatos"*/ "./views/contatos/ContatosHome");
const ContatoDetalhes = () =>
  import(/*webpackChunkName: "contatos"*/ "./views/contatos/ContatoDetalhes");
const Home = () => import("./views/Home");

import EventBus from "./event-bus";

Vue.use(VueRouter);

const extrairParametroId = (route) => ({
  id: +route.params.id,
});

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    {
      path: "/contatos",
      component: Contatos,
      alias: ["/meus-contatos", "/lista-de-contatos"],
      props: (route) => {
        const busca = route.query.busca;
        return busca ? { busca } : {};
      },
      children: [
        {
          path: ":id(\\d+)",
          component: ContatoDetalhes,
          name: "contato",
          props: extrairParametroId,
          //props: true
          // props: {
          //     id: 10
          // }
        },
        {
          //path: ":id(\\d+)/editar/:opcional?",
          //   path: ":id(\\d+)/editar/:zeroOuMais*",
          //path: ":id(\\d+)/editar/:umOuMais+",
          path: ":id(\\d+)/editar",
          alias: ":id(\\d+)/alterar",
          meta: { requerAutenticacao: true },
          beforeEnter: (to, from, next) => {
            console.log("beforeEnter");
            next(); //Continuando a navegação
            //next(true);//Continuando a navegação
            //next(false); //Bloqueando a navegação
            //next("/contatos");//Redirecionando a navegação
            //next({ name: "contato" }); //Redirecionar a navegação
            // next(
            //   new Error(
            //     `Permissões insuficientes para acessar o recurso "${to.fullPath}"`
            //   )
            // ); //Lançar uma mensagem de erro
          },
          components: {
            default: ContatoEditar,
            "contato-detalhe": ContatoDetalhes,
          },
          props: {
            default: extrairParametroId,
            "contato-detalhe": extrairParametroId,
          },
        },
        {
          path: "",
          component: ContatosHome,
          name: "contatos",
        },
        { path: "*", component: Erro404Contatos },
      ],
    },
    { path: "/home", component: Home },
    { path: "/login", component: Login },
    //{ path: "/", redirect: "/contatos" }
    {
      path: "/",
      redirect: () => {
        //return "/contatos"
        return { name: "contatos" };
      },
    },
    { path: "*", component: Erro404 },
  ],
});

router.beforeEach((to, from, next) => {
  console.log("beforeEach");
  console.log("Requer autenticação?", to.meta.requerAutenticacao);
  const estaAutenticado = EventBus.autenticado;
  console.log("Está autenticado", estaAutenticado);
  if (to.matched.some((rota) => rota.meta.requerAutenticacao)) {
    if (!estaAutenticado) {
      next({ path: "/login", query: { redirecionar: to.fullPath } });
      return;
    }
  }
  next();
});

router.afterEach(() => {
  console.log("afterEach");
});

router.beforeResolve((to, from, next) => {
  console.log("beforeResolve");
  next();
});

router.onError((erro) => {
  console.log(erro);
});

export default router;
