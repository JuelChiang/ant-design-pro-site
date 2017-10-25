webpackJsonp([27],{1601:function(n,s){n.exports={content:["article",{},["h2","CSS Modules"],["p","\u5728\u6837\u5f0f\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u6709\u4e24\u4e2a\u95ee\u9898\u6bd4\u8f83\u7a81\u51fa\uff1a"],["ul",["li",["p","\u5168\u5c40\u6c61\u67d3 \u2014\u2014 CSS \u6587\u4ef6\u4e2d\u7684\u9009\u62e9\u5668\u662f\u5168\u5c40\u751f\u6548\u7684\uff0c\u4e0d\u540c\u6587\u4ef6\u4e2d\u7684\u540c\u540d\u9009\u62e9\u5668\uff0c\u6839\u636e build \u540e\u751f\u6210\u6587\u4ef6\u4e2d\u7684\u5148\u540e\u987a\u5e8f\uff0c\u540e\u9762\u7684\u6837\u5f0f\u4f1a\u5c06\u524d\u9762\u7684\u8986\u76d6\uff1b"]],["li",["p","\u9009\u62e9\u5668\u590d\u6742 \u2014\u2014 \u4e3a\u4e86\u907f\u514d\u4e0a\u9762\u7684\u95ee\u9898\uff0c\u6211\u4eec\u5728\u7f16\u5199\u6837\u5f0f\u7684\u65f6\u5019\u4e0d\u5f97\u4e0d\u5c0f\u5fc3\u7ffc\u7ffc\uff0c\u7c7b\u540d\u91cc\u4f1a\u5e26\u4e0a\u9650\u5236\u8303\u56f4\u7684\u6807\u8bc6\uff0c\u53d8\u5f97\u8d8a\u6765\u8d8a\u957f\uff0c\u591a\u4eba\u5f00\u53d1\u65f6\u8fd8\u5f88\u5bb9\u6613\u5bfc\u81f4\u547d\u540d\u98ce\u683c\u6df7\u4e71\uff0c\u4e00\u4e2a\u5143\u7d20\u4e0a\u4f7f\u7528\u7684\u9009\u62e9\u5668\u4e2a\u6570\u4e5f\u53ef\u80fd\u8d8a\u6765\u8d8a\u591a\u3002"]]],["p","\u4e3a\u4e86\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898\uff0c\u6211\u4eec\u7684\u811a\u624b\u67b6\u9ed8\u8ba4\u4f7f\u7528 CSS Modules \u6a21\u5757\u5316\u65b9\u6848\uff0c\u5148\u6765\u770b\u4e0b\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\u600e\u4e48\u5199\u6837\u5f0f\u3002"],["pre",{lang:"html",highlighted:'// example.js\nimport styles from \'./example.less\';\n\nexport default ({ title }) => <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span>{styles.title}</span><span class="token punctuation">></span></span>{title}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>;'},["code","// example.js\nimport styles from './example.less';\n\nexport default ({ title }) => <div className={styles.title}>{title}</div>;"]],["pre",{lang:"css",highlighted:'<span class="token selector">// example<span class="token class">.less</span>\n<span class="token class">.title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@heading-color</span><span class="token punctuation">;</span></span>\n  <span class="token property">font-weight</span><span class="token punctuation">:</span> <span class="token number">600</span><span class="token punctuation">;</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">16</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","// example.less\n.title {\n  color: @heading-color;\n  font-weight: 600;\n  margin-bottom: 16px;\n}"]],["p","less \u6587\u4ef6\u597d\u50cf\u6ca1\u4ec0\u4e48\u6539\u53d8\uff0c\u53ea\u662f\u7c7b\u540d\u6bd4\u8f83\u7b80\u5355\uff08\u5b9e\u9645\u9879\u76ee\u4e2d\u4e5f\u662f\u8fd9\u6837\uff09\uff0cjs \u6587\u4ef6\u7684\u6539\u53d8\u5c31\u662f\u5728\u8bbe\u7f6e className \u65f6\uff0c\u7528\u4e00\u4e2a\u5bf9\u8c61\u5c5e\u6027\u53d6\u4ee3\u4e86\u539f\u6765\u7684\u5b57\u7b26\u4e32\uff0c\u5c5e\u6027\u540d\u8ddf less \u6587\u4ef6\u4e2d\u5bf9\u5e94\u7684\u7c7b\u540d\u76f8\u540c\uff0c\u5bf9\u8c61\u4ece less \u6587\u4ef6\u4e2d\u5f15\u5165\u3002"],["p","\u5728\u4e0a\u9762\u7684\u6837\u5f0f\u6587\u4ef6\u4e2d\uff0c",["code",".title"]," \u53ea\u4f1a\u5728\u672c\u6587\u4ef6\u751f\u6548\uff0c\u4f60\u53ef\u4ee5\u5728\u5176\u4ed6\u4efb\u610f\u6587\u4ef6\u4e2d\u4f7f\u7528\u540c\u540d\u9009\u62e9\u5668\uff0c\u4e5f\u4e0d\u4f1a\u5bf9\u8fd9\u91cc\u9020\u6210\u5f71\u54cd\u3002\u4e0d\u8fc7\u6709\u7684\u65f6\u5019\uff0c\u6211\u4eec\u5c31\u662f\u60f3\u8981\u4e00\u4e2a\u5168\u5c40\u751f\u6548\u7684\u6837\u5f0f\u5462\uff1f\u53ef\u4ee5\u4f7f\u7528 ",["code",":global"],"\u3002"],["pre",{lang:"css",highlighted:'<span class="token selector">// example<span class="token class">.less</span>\n<span class="token class">.title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@heading-color</span><span class="token punctuation">;</span></span>\n  <span class="token property">font-weight</span><span class="token punctuation">:</span> <span class="token number">600</span><span class="token punctuation">;</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">16</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">/* \u5b9a\u4e49\u5168\u5c40\u6837\u5f0f */</span>\n<span class="token selector"><span class="token pseudo-class">:global(.text)</span> </span><span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">16</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">/* \u5b9a\u4e49\u591a\u4e2a\u5168\u5c40\u6837\u5f0f */</span>\n<span class="token selector"><span class="token pseudo-class">:global</span> </span><span class="token punctuation">{</span>\n  <span class="token selector"><span class="token class">.footer</span> </span><span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#ccc</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector"><span class="token class">.sider</span> </span><span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#ebebeb</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","// example.less\n.title {\n  color: @heading-color;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n\n/* \u5b9a\u4e49\u5168\u5c40\u6837\u5f0f */\n:global(.text) {\n  font-size: 16px;\n}\n\n/* \u5b9a\u4e49\u591a\u4e2a\u5168\u5c40\u6837\u5f0f */\n:global {\n  .footer {\n    color: #ccc;\n  }\n  .sider {\n    background: #ebebeb;\n  }\n}"]],["p","CSS Modules \u7684\u57fa\u672c\u539f\u7406\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u5bf9\u6bcf\u4e2a\u7c7b\u540d\uff08\u975e :global \u58f0\u660e\u7684\uff09\u6309\u7167\u4e00\u5b9a\u89c4\u5219\u8fdb\u884c\u8f6c\u6362\uff0c\u4fdd\u8bc1\u5b83\u7684\u552f\u4e00\u6027\u3002\u5982\u679c\u5728\u6d4f\u89c8\u5668\u91cc\u67e5\u770b\u8fd9\u4e2a\u793a\u4f8b\u7684 dom \u7ed3\u6784\uff0c\u4f60\u4f1a\u53d1\u73b0\u5b9e\u9645\u6e32\u67d3\u51fa\u6765\u662f\u8fd9\u6837\u7684\uff1a"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title___3TqAx<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>'},["code",'<div class="title___3TqAx">title</div>']],["p","\u7c7b\u540d\u88ab\u81ea\u52a8\u6dfb\u52a0\u4e86\u4e00\u4e2a hash \u503c\uff0c\u8fd9\u4fdd\u8bc1\u4e86\u5b83\u7684\u552f\u4e00\u6027\u3002"],["p","\u9664\u4e86\u4e0a\u9762\u7684\u57fa\u7840\u77e5\u8bc6\uff0c\u8fd8\u6709\u4e00\u4e9b\u5173\u952e\u70b9\u9700\u8981\u6ce8\u610f\uff1a"],["ul",["li",["p","CSS Modules \u53ea\u4f1a\u5bf9 ",["code","className"]," \u4ee5\u53ca ",["code","id"]," \u8fdb\u884c\u8f6c\u6362\uff0c\u5176\u4ed6\u7684\u6bd4\u5982\u5c5e\u6027\u9009\u62e9\u5668\uff0c\u6807\u7b7e\u9009\u62e9\u5668\u90fd\u4e0d\u8fdb\u884c\u5904\u7406\uff0c\u63a8\u8350\u5c3d\u91cf\u4f7f\u7528 className\u3002"]],["li",["p","\u7531\u4e8e\u4e0d\u7528\u62c5\u5fc3\u7c7b\u540d\u91cd\u590d\uff0c\u4f60\u7684 className \u53ef\u4ee5\u5728\u57fa\u672c\u8bed\u610f\u5316\u7684\u524d\u63d0\u4e0b\u5c3d\u91cf\u7b80\u5355\u4e00\u70b9\u513f\u3002"]]],["p","\u4e0a\u9762\u53ea\u5bf9 CSS Modules \u8fdb\u884c\u4e86\u6700\u57fa\u7840\u7684\u4ecb\u7ecd\uff0c\u6709\u5174\u8da3\u53ef\u4ee5\u53c2\u8003\u5176\u4ed6\u6587\u6863\uff1a"],["ul",["li",["p",["a",{title:null,href:"https://github.com/css-modules/css-modules"},"github/css-modules"]]],["li",["p",["a",{title:null,href:"http://www.ruanyifeng.com/blog/2016/06/css_modules.html"},"CSS Modules \u7528\u6cd5\u6559\u7a0b"]]],["li",["p",["a",{title:null,href:"https://github.com/camsong/blog/issues/5"},"CSS Modules \u8be6\u89e3\u53ca React \u4e2d\u5b9e\u8df5"]]]],["h2","\u6837\u5f0f\u6587\u4ef6\u7c7b\u522b"],["p","\u5728\u4e00\u4e2a\u9879\u76ee\u4e2d\uff0c\u6837\u5f0f\u6587\u4ef6\u6839\u636e\u529f\u80fd\u4e0d\u540c\uff0c\u53ef\u4ee5\u5212\u5206\u4e3a\u4e0d\u540c\u7684\u7c7b\u522b\u3002"],["h3","src/index.less"],["p","\u5168\u5c40\u6837\u5f0f\u6587\u4ef6\uff0c\u5728\u8fd9\u91cc\u4f60\u53ef\u4ee5\u8fdb\u884c\u4e00\u4e9b\u901a\u7528\u8bbe\u7f6e\uff0c\u6bd4\u5982\u811a\u624b\u67b6\u4e2d\u81ea\u5e26\u7684\uff1a"],["pre",{lang:"css",highlighted:'<span class="token selector">html, body, <span class="token pseudo-class">:global(#root)</span> </span><span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">body </span><span class="token punctuation">{</span>\n  <span class="token property">text-rendering</span><span class="token punctuation">:</span> optimizeLegibility<span class="token punctuation">;</span>\n  <span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span>\n  <span class="token property">-moz-osx-font-smoothing</span><span class="token punctuation">:</span> grayscale<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">// temporary font size patch\n<span class="token pseudo-class">:global(.ant-tag)</span> </span><span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">12</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","html, body, :global(#root) {\n  height: 100%;\n}\n\nbody {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n// temporary font size patch\n:global(.ant-tag) {\n  font-size: 12px;\n}"]],["blockquote",["p","\u56e0\u4e3a antd \u4e2d\u4f1a\u81ea\u5e26\u4e00\u4e9b\u5168\u5c40\u8bbe\u7f6e\uff0c\u5982\u5b57\u53f7\uff0c\u989c\u8272\uff0c\u884c\u9ad8\u7b49\uff0c\u6240\u4ee5\u5728\u8fd9\u91cc\uff0c\u4f60\u53ea\u9700\u8981\u5173\u6ce8\u81ea\u5df1\u7684\u4e2a\u6027\u5316\u9700\u6c42\u5373\u53ef\uff0c\u4e0d\u7528\u8fdb\u884c\u5927\u91cf\u7684 reset\u3002"]],["h3","src/utils/utils.less"],["p","\u8fd9\u91cc\u53ef\u4ee5\u653e\u7f6e\u4e00\u4e9b\u5de5\u5177\u51fd\u6570\u4f9b\u8c03\u7528\uff0c\u6bd4\u5982\u6e05\u9664\u6d6e\u52a8 ",["code",".clearfix"],"\u3002"],["h3","\u6a21\u5757\u6837\u5f0f"],["p","\u9488\u5bf9\u67d0\u4e2a\u6a21\u5757/\u9875\u9762\u751f\u6548\u7684\u6587\u4ef6\u3002"],["h4","\u901a\u7528\u6a21\u5757\u7ea7"],["p","\u4f8b\u5982 ",["code","src/layouts/BasicLayout.less"],"\uff0c\u91cc\u9762\u5305\u542b\u4e00\u4e9b\u57fa\u672c\u5e03\u5c40\u7684\u6837\u5f0f\uff0c\u88ab ",["code","src/layouts/BasicLayout.js"]," \u5f15\u7528\uff0c\u9879\u76ee\u4e2d\u4f7f\u7528\u8fd9\u79cd\u5e03\u5c40\u7684\u9875\u9762\u5c31\u4e0d\u9700\u8981\u518d\u5173\u5fc3\u6574\u4f53\u5e03\u5c40\u7684\u8bbe\u7f6e\u3002\u5982\u679c\u4f60\u7684\u9879\u76ee\u4e2d\u9700\u8981\u4f7f\u7528\u5176\u4ed6\u5e03\u5c40\uff0c\u4e5f\u5efa\u8bae\u5c06\u5e03\u5c40\u76f8\u5173\u7684 js \u548c less \u653e\u5728\u8fd9\u91cc ",["code","src/layouts"],"\u3002"],["h4","\u9875\u9762\u7ea7"],["p","\u5177\u4f53\u9875\u9762\u76f8\u5173\u7684\u6837\u5f0f\uff0c\u4f8b\u5982 ",["code","src/routes/Dashborad/Monitor.less"],"\uff0c\u91cc\u9762\u7684\u5185\u5bb9\u4ec5\u548c\u672c\u9875\u9762\u7684\u5185\u5bb9\u76f8\u5173\u3002\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u4e0d\u662f\u9875\u9762\u5185\u5bb9\u7279\u522b\u590d\u6742\uff0c\u6709\u4e86\u524d\u9762\u5168\u5c40\u6837\u5f0f\u3001\u901a\u7528\u6a21\u5757\u6837\u5f0f\u7684\u914d\u5408\uff0c\u8fd9\u91cc\u8981\u5199\u7684\u5e94\u8be5\u4e0d\u591a\u3002"],["h4","\u7ec4\u4ef6\u7ea7"],["p","\u8fd9\u4e2a\u4e5f\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u7ec4\u4ef6\u76f8\u5173\u7684\u6837\u5f0f\u4e86\uff0c\u6709\u4e00\u4e9b\u5728\u9875\u9762\u4e2d\u91cd\u590d\u4f7f\u7528\u7684\u7247\u6bb5\u6216\u76f8\u5bf9\u72ec\u7acb\u7684\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u63d0\u70bc\u6210\u7ec4\u4ef6\uff0c\u76f8\u5173\u7684\u6837\u5f0f\u4e5f\u5e94\u8be5\u63d0\u70bc\u51fa\u6765\u653e\u5728\u7ec4\u4ef6\u4e2d\uff0c\u800c\u4e0d\u662f\u6df7\u6dc6\u5728\u9875\u9762\u91cc\u3002"],["blockquote",["p","\u4ee5\u4e0a\u6837\u5f0f\u7c7b\u522b\u90fd\u662f\u9488\u5bf9\u72ec\u7acb\u7684\u6837\u5f0f\u6587\u4ef6\uff0c\u6709\u65f6\u6837\u5f0f\u914d\u7f6e\u7279\u522b\u7b80\u5355\uff0c\u4e5f\u6ca1\u6709\u91cd\u590d\u4f7f\u7528\uff0c\u4f60\u4e5f\u53ef\u4ee5\u7528\u5185\u8054\u6837\u5f0f ",["code","style={{ ... }}"]," \u6765\u8bbe\u7f6e\u3002"]],["h2","\u8986\u76d6\u7ec4\u4ef6\u6837\u5f0f"],["p","\u7531\u4e8e\u4e1a\u52a1\u7684\u4e2a\u6027\u5316\u9700\u6c42\uff0c\u6211\u4eec\u7ecf\u5e38\u4f1a\u9047\u5230\u9700\u8981\u8986\u76d6\u7ec4\u4ef6\u6837\u5f0f\u7684\u60c5\u51b5\uff0c\u8fd9\u91cc\u4e3e\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u3002"],["p","antd Select \u5728\u591a\u9009\u72b6\u6001\u4e0b\uff0c\u9ed8\u8ba4\u4f1a\u5c55\u793a\u6240\u6709\u9009\u4e2d\u9879\uff0c\u8fd9\u91cc\u6211\u4eec\u7ed9\u5b83\u52a0\u4e00\u4e2a\u9650\u5236\u9ad8\u5ea6\uff0c\u8d85\u8fc7\u6b64\u9ad8\u5ea6\u5c31\u51fa\u6eda\u52a8\u6761\u3002"],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">// TestPage.js</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">\'./TestPage.less\'</span>\n<span class="token keyword">const</span> Option <span class="token operator">=</span> Select<span class="token punctuation">.</span>Option<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">36</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Option key<span class="token operator">=</span><span class="token punctuation">{</span>i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Option<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>Select\n    mode<span class="token operator">=</span><span class="token string">"multiple"</span>\n    style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    placeholder<span class="token operator">=</span><span class="token string">"Please select"</span>\n    className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>customSelect<span class="token punctuation">}</span>\n  <span class="token operator">></span>\n    <span class="token punctuation">{</span>children<span class="token punctuation">}</span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>Select<span class="token operator">></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","// TestPage.js\nimport { Select } from 'antd';\nimport styles from './TestPage.less'\nconst Option = Select.Option;\n\nconst children = [];\nfor (let i = 10; i < 36; i++) {\n  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);\n}\n\nReactDOM.render(\n  <Select\n    mode=\"multiple\"\n    style={{ width: 300 }}\n    placeholder=\"Please select\"\n    className={styles.customSelect}\n  >\n    {children}\n  </Select>\n, mountNode);"]],["pre",{lang:"css",highlighted:'<span class="token selector">// TestPage<span class="token class">.less</span>\n<span class="token class">.customSelect</span> </span><span class="token punctuation">{</span>\n  <span class="token selector"><span class="token pseudo-class">:global</span> </span><span class="token punctuation">{</span>\n    <span class="token selector"><span class="token class">.ant-select-selection</span> </span><span class="token punctuation">{</span>\n      <span class="token property">max-height</span><span class="token punctuation">:</span> <span class="token number">51</span>px<span class="token punctuation">;</span>\n      <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","// TestPage.less\n.customSelect {\n  :global {\n    .ant-select-selection {\n      max-height: 51px;\n      overflow: auto;\n    }\n  }\n}"]],["p","\u65b9\u6cd5\u5f88\u7b80\u5355\uff0c\u6709\u4e24\u70b9\u9700\u8981\u6ce8\u610f\uff1a"],["ul",["li",["p","\u5f15\u5165\u7684 antd \u7ec4\u4ef6\u7c7b\u540d\u6ca1\u6709\u88ab CSS Module \u8f6c\u5316\uff0c\u6240\u4ee5\u88ab\u8986\u76d6\u7684\u7c7b\u540d ",["code",".ant-select-selection"]," \u5fc5\u987b\u653e\u5230 ",["code",":global"]," \u4e2d\u3002"]],["li",["p","\u56e0\u4e3a\u4e0a\u4e00\u6761\u7684\u5173\u7cfb\uff0c\u8986\u76d6\u662f\u5168\u5c40\u6027\u7684\uff0c\u4e3a\u4e86\u9632\u6b62\u5bf9\u5176\u4ed6 Select \u9020\u6210\u5f71\u54cd\uff0c\u53ef\u4ee5\u7ed9\u7ec4\u4ef6\u6dfb\u52a0 className\uff0c\u53ea\u5bf9\u8fd9\u7c7b\u7ec4\u4ef6\u8fdb\u884c\u8986\u76d6\uff0c\u4e5f\u53ef\u4ee5\u5229\u7528\u5916\u5c42\u7c7b\u540d\u5b9e\u73b0\u8fd9\u79cd\u9650\u5236\u3002"]]]],meta:{order:5,title:"\u6837\u5f0f",type:"\u5165\u95e8",filename:"docs/style.md"},description:["section",["p","\u8fd9\u7bc7\u6587\u6863\u4e3b\u8981\u9488\u5bf9\u5982\u4f55\u5728\u9879\u76ee\u4e2d\u4f7f\u7528\u548c\u89c4\u5212\u6837\u5f0f\u6587\u4ef6\u8fdb\u884c\u4ecb\u7ecd\uff0c\u5982\u679c\u60f3\u83b7\u53d6\u57fa\u7840\u7684 CSS \u77e5\u8bc6\u6216\u67e5\u9605\u5c5e\u6027\uff0c\u53ef\u4ee5\u53c2\u8003 ",["a",{title:null,href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference"},"MDN\u6587\u6863"],"\u3002"]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#CSS-Modules",title:"CSS Modules"},"CSS Modules"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6837\u5f0f\u6587\u4ef6\u7c7b\u522b",title:"\u6837\u5f0f\u6587\u4ef6\u7c7b\u522b"},"\u6837\u5f0f\u6587\u4ef6\u7c7b\u522b"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u8986\u76d6\u7ec4\u4ef6\u6837\u5f0f",title:"\u8986\u76d6\u7ec4\u4ef6\u6837\u5f0f"},"\u8986\u76d6\u7ec4\u4ef6\u6837\u5f0f"]]]}}});