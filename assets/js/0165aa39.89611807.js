"use strict";(self.webpackChunksecure_vault_doc=self.webpackChunksecure_vault_doc||[]).push([[4947],{6519:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"configure-backend/koa","title":"Koa Integration","description":"Installation","source":"@site/docs/configure-backend/koa.md","sourceDirName":"configure-backend","slug":"/configure-backend/koa","permalink":"/secure-vault/docs/configure-backend/koa","draft":false,"unlisted":false,"editUrl":"https://github.com/abdoulrasheed/securevault/tree/main/secure-vault-doc/docs/configure-backend/koa.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"FastAPI Integration","permalink":"/secure-vault/docs/configure-backend/fastapi"},"next":{"title":"Nest.js Integration","permalink":"/secure-vault/docs/configure-backend/nestjs"}}');var r=t(4848),o=t(8453);const c={sidebar_position:5},i="Koa Integration",s={},u=[{value:"Installation",id:"installation",level:2},{value:"Middleware Configuration",id:"middleware-configuration",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"koa-integration",children:"Koa Integration"})}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install koa-securevault\n"})}),"\n",(0,r.jsx)(n.h2,{id:"middleware-configuration",children:"Middleware Configuration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const Koa = require('koa');\nconst { SecureVault } = require('koa-securevault');\n\nconst app = new Koa();\n\napp.use(SecureVault({\n  botDetection: {\n    enabled: true,\n    threshold: 0.85\n  },\n  deviceFingerprint: {\n    lockToDevice: true\n  }\n}));\n\napp.use(async (ctx, next) => {\n  if (ctx.state.secureVault.isSecure) {\n    // Process secure request\n    await next();\n  } else {\n    ctx.status = 403;\n    ctx.body = { error: 'Security check failed' };\n  }\n});\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var a=t(6540);const r={},o=a.createContext(r);function c(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);