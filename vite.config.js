import {resolve} from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src")
const outDir = resolve(__dirname, "dist")

export default defineConfig({
    base:"/exemple-vite-ts/",
    root: root, 
    build: {
        outDir: outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: resolve(root, "index.html"),
                tarefaList: resolve(root, "tarefas/tarefa.list.html"),
                tarefaCreate: resolve(root, "tarefas/tarefa.create.html"),
                contatoList: resolve(root, "contatos/contato.list.html"),
                contatoCreate: resolve(root, "contatos/contato.create.html"),
            }
        }
    },
    publicDir: "../public"
});