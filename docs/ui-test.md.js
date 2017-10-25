webpackJsonp([25],{1603:function(n,s){n.exports={content:["article",["p","UI \u6d4b\u8bd5\u662f\u9879\u76ee\u7814\u53d1\u6d41\u7a0b\u4e2d\u7684\u91cd\u8981\u4e00\u73af\uff0c\u6709\u6548\u7684\u6d4b\u8bd5\u7528\u4f8b\u53ef\u4ee5\u68b3\u7406\u4e1a\u52a1\u9700\u6c42\uff0c\u4fdd\u8bc1\u7814\u53d1\u7684\u8d28\u91cf\u548c\u8fdb\u5ea6\uff0c\u8ba9\u5de5\u7a0b\u5e08\u53ef\u4ee5\u653e\u5fc3\u7684\u91cd\u6784\u4ee3\u7801\u548c\u65b0\u589e\u529f\u80fd\u3002"],["p","Ant Design Pro \u5c01\u88c5\u4e86\u4e00\u5957\u7b80\u6d01\u6613\u7528\u7684 React \u5355\u5143\u6d4b\u8bd5\u548c E2E \u6d4b\u8bd5\u65b9\u6848\uff0c\u5728\u9879\u76ee\u6839\u76ee\u5f55\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5c31\u80fd\u8fd0\u884c\u6d4b\u8bd5\u7528\u4f8b\u3002"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> run test:all  // \u6267\u884c\u6240\u6709\u6d4b\u8bd5'},["code","$ npm run test:all  // \u6267\u884c\u6240\u6709\u6d4b\u8bd5"]],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KZNkLURmBJVomVJbZvHc.png",width:"700"}]],["p","\u4e0b\u9762\u7b80\u5355\u4ecb\u7ecd\u5982\u4f55\u5728\u9879\u76ee\u4e2d\u4e66\u5199\u4f60\u7684\u4e1a\u52a1\u6d4b\u8bd5\u7528\u4f8b\u3002"],["h2","\u5355\u5143\u6d4b\u8bd5"],["p","\u5355\u5143\u6d4b\u8bd5\u7528\u4e8e\u6d4b\u8bd5 React UI \u7ec4\u4ef6\u7684\u8868\u73b0\u3002\u6211\u4eec\u53c2\u8003\u4e86 ",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests"},"create-react-app"],"\uff0c\u4f7f\u7528 ",["a",{title:null,href:"http://facebook.github.io/jest/"},"jest"]," \u4f5c\u4e3a\u6d4b\u8bd5\u6846\u67b6\u3002"],["p","jest \u662f\u4e00\u4e2a node \u7aef\u8fd0\u884c\u7684\u6d4b\u8bd5\u6846\u67b6\uff0c\u4f7f\u7528\u4e86 jsdom \u6765\u6a21\u62df DOM \u73af\u5883\uff0c\u9002\u5408\u7528\u4e8e\u5feb\u901f\u6d4b\u8bd5 React \u7ec4\u4ef6\u7684\u903b\u8f91\u8868\u73b0\uff0c\u9700\u8981\u771f\u5b9e\u6d4f\u89c8\u5668\u53ef\u4ee5\u53c2\u8003 E2E \u6d4b\u8bd5\u90e8\u5206\u3002"],["h3","\u5199\u4e00\u4e2a\u7528\u4f8b"],["p","\u6bd4\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u5efa\u4e00\u4e2a\u6587\u4ef6 ",["code","src/routes/Result/Success.test.js"]," \u6765\u6d4b\u8bd5\u6210\u529f\u9875\u9762\u7ec4\u4ef6\u7684 UI \u8868\u73b0\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> shallow <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'enzyme\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Success <span class="token keyword">from</span> <span class="token string">\'./Success\'</span><span class="token punctuation">;</span>   <span class="token comment" spellcheck="true">// \u5f15\u5165\u5bf9\u5e94\u7684 React \u7ec4\u4ef6</span>\n\n<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'renders with Result\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">shallow</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Success</span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>                           <span class="token comment" spellcheck="true">// \u8fdb\u884c\u6e32\u67d3</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">\'Result\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                  <span class="token comment" spellcheck="true">// \u6709 Result \u7ec4\u4ef6</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">\'Result\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">\'type\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">\'success\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment" spellcheck="true">// Result \u7ec4\u4ef6\u7684\u7c7b\u578b\u662f\u6210\u529f</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import React from 'react';\nimport { shallow } from 'enzyme';\nimport Success from './Success';   // \u5f15\u5165\u5bf9\u5e94\u7684 React \u7ec4\u4ef6\n\nit('renders with Result', () => {\n  const wrapper = shallow(<Success />);                           // \u8fdb\u884c\u6e32\u67d3\n  expect(wrapper.find('Result').length).toBe(1);                  // \u6709 Result \u7ec4\u4ef6\n  expect(wrapper.find('Result').prop('type')).toBe('success');    // Result \u7ec4\u4ef6\u7684\u7c7b\u578b\u662f\u6210\u529f\n});"]],["p","\u8fd9\u91cc\u4f7f\u7528\u4e86 ",["a",{title:null,href:"http://airbnb.io/enzyme/docs/api/index.html"},"enzyme"]," \u4f5c\u4e3a\u6d4b\u8bd5\u5e93\uff0c\u5b83\u63d0\u4f9b\u4e86\u5927\u91cf\u5b9e\u7528\u7684 API \u6765\u5e2e\u52a9\u6211\u4eec\u6d4b\u8bd5 React \u7ec4\u4ef6\u3002\u65ad\u8a00\u90e8\u5206\u6cbf\u7528\u4e86 jest \u9ed8\u8ba4\u7684 ",["a",{title:null,href:"https://facebook.github.io/jest/docs/en/expect.html#content"},"jasmine2 expect \u8bed\u6cd5"],"\u3002"],["h3","\u672c\u5730\u6267\u884c"],["p","\u4f7f\u7528\u4ee5\u4e0b\u7684\u547d\u4ee4\u5c06\u7edf\u4e00\u641c\u7d22\u548c\u6267\u884c ",["code","src"]," \u4e0b ",["code","*.test.js"]," \u683c\u5f0f\u7684\u7528\u4f8b\u6587\u4ef6\u3002"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">test</span> .test.js'},["code","$ npm test .test.js"]],["h4","\u6267\u884c\u5355\u4e2a\u6216\u4e00\u7ec4\u7528\u4f8b"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">test</span> src/routes/Result/Success.test.js  // \u6d4b\u8bd5 Success.test.js\n$ <span class="token function">npm</span> <span class="token function">test</span> src/routes                         // \u6d4b\u8bd5 routes \u4e0b\u7684\u6240\u6709\u7528\u4f8b\u6587\u4ef6'},["code","$ npm test src/routes/Result/Success.test.js  // \u6d4b\u8bd5 Success.test.js\n$ npm test src/routes                         // \u6d4b\u8bd5 routes \u4e0b\u7684\u6240\u6709\u7528\u4f8b\u6587\u4ef6"]],["h3","\u6d4b\u8bd5 dva \u5305\u88c5\u7ec4\u4ef6"],["p","\u88ab dva ",["code","connect"]," \u7684 React \u7ec4\u4ef6\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u65b9\u5f0f\u8fdb\u884c\u6d4b\u8bd5\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> shallow <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'enzyme\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Dashboard <span class="token keyword">from</span> <span class="token string">\'./Dashboard\'</span><span class="token punctuation">;</span>\n\n<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'renders Dashboard\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// \u4f7f\u7528\u5305\u88c5\u540e\u7684\u7ec4\u4ef6</span>\n  <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">shallow</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dashboard.WrappedComponent</span> <span class="token attr-name">user</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> list<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">\'Table\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">props</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import React from 'react';\nimport { shallow } from 'enzyme';\nimport Dashboard from './Dashboard';\n\nit('renders Dashboard', () => {\n  // \u4f7f\u7528\u5305\u88c5\u540e\u7684\u7ec4\u4ef6\n  const wrapper = shallow(\n    <Dashboard.WrappedComponent user={{ list: [] }} />\n  );\n  expect(wrapper.find('Table').props().dataSource).toEqual([]);\n});"]],["h2","e2e \u6d4b\u8bd5"],["p","\u7aef\u5230\u7aef\u6d4b\u8bd5\u4e5f\u53eb\u5192\u70df\u6d4b\u8bd5\uff0c\u7528\u4e8e\u6d4b\u8bd5\u771f\u5b9e\u6d4f\u89c8\u5668\u73af\u5883\u4e0b\u524d\u7aef\u5e94\u7528\u7684\u6d41\u7a0b\u548c\u8868\u73b0\uff0c\u76f8\u5f53\u4e8e\u4ee3\u66ff\u4eba\u5de5\u53bb\u64cd\u4f5c\u5e94\u7528\u3002"],["p","\u6211\u4eec\u5f15\u5165\u4e86 ",["a",{title:null,href:"http://www.nightmarejs.org/"},"nightmare"]," \u4f5c\u4e3a E2E \u6d4b\u8bd5\u7684\u5de5\u5177\uff0cnightmare \u9ed8\u8ba4\u4f7f\u7528 electron \u4f5c\u4e3a\u6d4f\u89c8\u5668\u73af\u5883\u8fd0\u884c\u4f60\u7684\u5e94\u7528\uff0c\u5e76\u4e14\u63d0\u4f9b\u4e86\u975e\u5e38\u8bed\u4e49\u5316\u7684 API \u6765\u63cf\u8ff0\u4e1a\u52a1\u903b\u8f91\u3002"],["h3","\u5199\u4e00\u4e2a e2e \u7528\u4f8b"],["p","\u5047\u8bbe\u6709\u4e00\u4e2a\u9700\u6c42\uff0c\u7528\u6237\u5728\u767b\u5f55\u9875\u9762\u8f93\u5165\u9519\u8bef\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u70b9\u51fb\u767b\u5f55\u540e\uff0c\u51fa\u73b0\u9519\u8bef\u63d0\u793a\u6846\u3002"],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/oZeYewGOUJkmqXAPoOFC.gif",width:"400"}]],["p","\u6211\u4eec\u5199\u4e00\u4e2a\u7528\u4f8b\u6765\u4fdd\u969c\u8fd9\u4e2a\u6d41\u7a0b\u3002\u5728 ",["code","src/e2e/"]," \u76ee\u5f55\u4e0b\u5efa\u4e00\u4e2a ",["code","Login.e2e.js"]," \u6587\u4ef6\uff0c\u6309\u4e0a\u8ff0\u4e1a\u52a1\u9700\u6c42\u63cf\u8ff0\u6d4b\u8bd5\u7528\u4f8b\u3002"],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> Nightmare <span class="token keyword">from</span> <span class="token string">\'nightmare\'</span><span class="token punctuation">;</span>\n\n<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">\'Login\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should login with failure\'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> <span class="token function">Nightmare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span><span class="token string">\'http://localhost:8000/#/user/login\'</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">\'#userName\'</span><span class="token punctuation">,</span> <span class="token string">\'mockuser\'</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">\'#password\'</span><span class="token punctuation">,</span> <span class="token string">\'wrong_password\'</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token string">\'button[type="submit"]\'</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token string">\'.ant-alert-error\'</span><span class="token punctuation">)</span>  <span class="token comment" spellcheck="true">// should display error</span>\n      <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import Nightmare from 'nightmare';\n\ndescribe('Login', () => {\n  it('should login with failure', async () => {\n    await Nightmare().goto('http://localhost:8000/#/user/login')\n      .type('#userName', 'mockuser')\n      .type('#password', 'wrong_password')\n      .click('button[type=\"submit\"]')\n      .wait('.ant-alert-error')  // should display error\n      .end();\n  });\n});"]],["p","\u66f4\u591a nightmare \u7684\u65b9\u6cd5\u53ef\u4ee5\u53c2\u8003 ",["a",{title:null,href:"https://github.com/segmentio/nightmare#api"},"segmentio/nightmare#api"],"\u3002"],["h3","\u8fd0\u884c\u7528\u4f8b"],["p","\u8fd0\u884c\u4e0b\u5217\u547d\u4ee4\u5c06\u6267\u884c src \u4e0b\u6240\u6709\u7684 ",["code","*.e2e.js"]," \u7528\u4f8b\u6587\u4ef6\u3002"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">test</span> .e2e.js'},["code","$ npm test .e2e.js"]],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DoKrLMgtYgNJTnxqmgoN.png",width:"700"}]],["blockquote",["p","\u6ce8\u610f\uff0c\u672c\u5730\u6d4b\u8bd5 e2e \u7528\u4f8b\u9700\u8981\u542f\u52a8 ",["code","npm start"],"\uff0c\u5426\u5219\u4f1a\u62a5 ",["code","Failed: navigation error"]," \u7684\u9519\u8bef\u3002"]],["h2","watch \u6a21\u5f0f"],["pre",{lang:null,highlighted:'$ npm test <span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span>watch'},["code","$ npm test -- --watch"]],["p","\u6dfb\u52a0 ",["code","--watch"]," \u914d\u7f6e\u53ef\u4ee5\u8fdb\u5165 watch \u6a21\u5f0f\uff0c\u5f53\u4f60\u4fee\u6539\u548c\u4fdd\u5b58\u6587\u4ef6\u65f6\uff0cJest \u4f1a\u81ea\u52a8\u6267\u884c\u76f8\u5e94\u7528\u4f8b\u3002Jest \u7684\u547d\u4ee4\u884c\u5de5\u5177\u4e5f\u63d0\u4f9b\u4e86\u5404\u79cd\u65b9\u4fbf\u7684\u5feb\u6377\u952e\u6765\u6267\u884c\u4f60\u9700\u8981\u7684\u7528\u4f8b\u3002"],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/jdJnrFUtvMLoFOZebeou.png",width:"700"}]],["h2","\u6d4b\u8bd5\u8986\u76d6\u7387"],["pre",{lang:null,highlighted:'$ npm test <span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span>coverage'},["code","$ npm test -- --coverage"]],["p","\u6dfb\u52a0 ",["code","--coverage"]," \u914d\u7f6e\u53ef\u4ee5\u663e\u793a\u9879\u76ee\u7684\u6d4b\u8bd5\u8986\u76d6\u7387\u3002"],["p",["img",{src:"https://camo.githubusercontent.com/bd0bbda8e44ea747e4c199d0e212d40563ad2fcb/687474703a2f2f692e696d6775722e636f6d2f356246686e54532e706e67",width:"700"}]],["h2","\u805a\u7126\u548c\u5ffd\u7565\u7528\u4f8b"],["p","\u4f7f\u7528 ",["code","xit()"]," \u53d6\u4ee3 ",["code","it()"]," \u53ef\u4ee5\u6682\u65f6\u5ffd\u7565\u7528\u4f8b\uff0c",["code","fit()"]," \u53ef\u4ee5\u805a\u7126\u5f53\u524d\u7528\u4f8b\u5e76\u5ffd\u7565\u5176\u4ed6\u6240\u6709\u7528\u4f8b\u3002\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u53ea\u5173\u6ce8\u5f53\u524d\u9700\u8981\u7684\u7528\u4f8b\u3002"],["h2","\u63a5\u5165\u96c6\u6210\u6d4b\u8bd5\u670d\u52a1"],["p","\u5982\u679c\u9700\u8981\u63a5\u5165 travis\u3001CircleCI\u3001Gitlab CI \u7b49\u96c6\u6210\u6d4b\u8bd5\u73af\u5883\uff0c\u53ef\u4ee5\u53c2\u8003\u672c\u4ed3\u5e93\u63d0\u4f9b\u7684 ",["code",".travis.yml"],"\u3002"],["p","\u6ce8\u610f e2e \u6d4b\u8bd5\u9700\u8981\u96c6\u6210\u73af\u5883\u652f\u6301 electron\uff0c\u5982\u679c\u4e0d\u652f\u6301\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",["code","npm test .test.js"]," \u5355\u72ec\u8fd0\u884c\u5355\u5143\u6d4b\u8bd5\u3002"],["h2","\u53c2\u8003\u94fe\u63a5"],["p","\u66f4\u591a\u6d4b\u8bd5\u6280\u5de7\u548c\u529f\u80fd\u8bf7\u53c2\u8003\u4ee5\u4e0b\u94fe\u63a5\u3002"],["ul",["li",["p",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests"},"create-react-app tests"]]],["li",["p",["a",{title:null,href:"https://facebook.github.io/jest/"},"jest"]]],["li",["p",["a",{title:null,href:"http://airbnb.io/enzyme/"},"enzyme"]]],["li",["p",["a",{title:null,href:"http://www.nightmarejs.org/"},"nightmare"]]],["li",["p",["a",{title:null,href:"https://github.com/vigetlabs/jest-with-nightmare"},"jest-with-nightmare"]]]]],meta:{order:14,title:"UI \u6d4b\u8bd5",type:"\u8fdb\u9636",filename:"docs/ui-test.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u5355\u5143\u6d4b\u8bd5",title:"\u5355\u5143\u6d4b\u8bd5"},"\u5355\u5143\u6d4b\u8bd5"]],["li",["a",{className:"bisheng-toc-h2",href:"#e2e-\u6d4b\u8bd5",title:"e2e \u6d4b\u8bd5"},"e2e \u6d4b\u8bd5"]],["li",["a",{className:"bisheng-toc-h2",href:"#watch-\u6a21\u5f0f",title:"watch \u6a21\u5f0f"},"watch \u6a21\u5f0f"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6d4b\u8bd5\u8986\u76d6\u7387",title:"\u6d4b\u8bd5\u8986\u76d6\u7387"},"\u6d4b\u8bd5\u8986\u76d6\u7387"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u805a\u7126\u548c\u5ffd\u7565\u7528\u4f8b",title:"\u805a\u7126\u548c\u5ffd\u7565\u7528\u4f8b"},"\u805a\u7126\u548c\u5ffd\u7565\u7528\u4f8b"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u63a5\u5165\u96c6\u6210\u6d4b\u8bd5\u670d\u52a1",title:"\u63a5\u5165\u96c6\u6210\u6d4b\u8bd5\u670d\u52a1"},"\u63a5\u5165\u96c6\u6210\u6d4b\u8bd5\u670d\u52a1"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u53c2\u8003\u94fe\u63a5",title:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"]]]}}});