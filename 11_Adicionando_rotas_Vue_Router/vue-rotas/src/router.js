import Vue from 'vue'
import VueRouter from 'vue-router'

import Contatos from "./views/contatos/Contatos"
import ContatoDetalhes from "./views/contatos/ContatoDetalhes"
import ContatosHome from "./views/contatos/ContatosHome"
import ContatoEditar from "./views/contatos/ContatoEditar"
import Home from "./views/Home"

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    linkActiveClass: "active",
    routes: [{
        path: "/contatos",
        component: Contatos,
        children: [
            {
                path: ":id",
                component: ContatoDetalhes,
                name: "contato"
            }, {
                path: ":id/editar",
                components: {
                    default: ContatoEditar,
                    'contato-detalhe': ContatoDetalhes
                },
            }, {
                path: "",
                component: ContatosHome
            }
        ]
    }, {
        path: "/",
        component: Home
    }]
})
