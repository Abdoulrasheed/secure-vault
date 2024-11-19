"use strict";(self.webpackChunksecure_vault_doc=self.webpackChunksecure_vault_doc||[]).push([[5030],{8447:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"clients/apisauce","title":"ApiSauce Integration","description":"Installation","source":"@site/docs/clients/apisauce.md","sourceDirName":"clients","slug":"/clients/apisauce","permalink":"/secure-vault-doc/build/docs/clients/apisauce","draft":false,"unlisted":false,"editUrl":"https://github.com/abdoulrasheed/securevault/tree/main/secure-vault-doc/docs/clients/apisauce.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Configure Client (Interceptor)","permalink":"/secure-vault-doc/build/docs/category/configure-client-interceptor"},"next":{"title":"Axios Interceptor","permalink":"/secure-vault-doc/build/docs/clients/axios"}}');var a=t(4848),r=t(8453);const c={sidebar_position:1},s="ApiSauce Integration",o={},l=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"apisauce-integration",children:"ApiSauce Integration"})}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install securevault-apisauce\n"})}),"\n",(0,a.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import { create } from 'apisauce';\nimport { SecureVault } from 'securevault-apisauce';\n\nconst api = create({\n  baseURL: 'https://api.example.com'\n});\n\nconst securedApi = SecureVault.wrap(api, {\n  botDetection: true,\n  deviceFingerprint: {\n    enabled: true,\n    lockToDevice: true\n  },\n  challengeResponse: {\n    enabled: true\n  }\n});\n\n// Use like normal ApiSauce\nsecuredApi.get('/protected')\n  .then(response => {\n    // Secured response handling\n  });\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var i=t(6540);const a={},r=i.createContext(a);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);