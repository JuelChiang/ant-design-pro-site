webpackJsonp([30],{1598:function(e,s){e.exports={content:["article",{},["h2","Step1 \u65b0\u589e js\u3001less \u6587\u4ef6"],["p","\u5728 ",["code","src/routes"]," \u4e0b\u65b0\u5efa\u9875\u9762\u7684 js \u53ca less \u6587\u4ef6\uff0c\u5982\u679c\u76f8\u5173\u9875\u9762\u6709\u591a\u4e2a\uff0c\u53ef\u4ee5\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\u6765\u653e\u7f6e\u76f8\u5173\u6587\u4ef6\u3002"],["p",["img",{width:"300",alt:"\u65b0\u589e\u9875\u9762",src:"https://gw.alipayobjects.com/zos/rmsportal/hjDyFTVOgRwDzAIHApMO.png"}]],["p",["br"]],["p","\u6837\u5f0f\u6587\u4ef6\u9ed8\u8ba4\u4f7f\u7528 CSS Modules\uff0c\u5982\u679c\u9700\u8981\uff0c\u4f60\u53ef\u4ee5\u5728\u6837\u5f0f\u6587\u4ef6\u7684\u5934\u90e8\u5f15\u5165 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"},"antd \u6837\u5f0f\u53d8\u91cf\u6587\u4ef6"],"\uff1a"],["pre",{lang:"css",highlighted:'<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"~antd/lib/style/themes/default.less"</span><span class="token punctuation">;</span></span>'},["code",'@import "~antd/lib/style/themes/default.less";']],["p","\u8fd9\u6837\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u83b7\u53d6 antd \u6837\u5f0f\u53c2\u6570\u5e76\u5728\u4f60\u7684\u6587\u4ef6\u91cc\u4f7f\u7528\uff0c\u6709\u5229\u4e8e\u4fdd\u6301\u9875\u9762\u7684\u4e00\u81f4\u6027\uff0c\u4e5f\u65b9\u4fbf\u5b9e\u73b0\u5b9a\u5236\u4e3b\u9898\u3002"],["h2","Step2 \u5c06\u6587\u4ef6\u52a0\u5165\u83dc\u5355\u3001\u8def\u7531"],["p","\u52a0\u5165\u83dc\u5355\u548c\u8def\u7531\u7684\u65b9\u5f0f\u8bf7\u53c2\u7167 ",["a",{title:null,href:"/docs/router-and-nav#\u6dfb\u52a0\u8def\u7531/\u83dc\u5355"},"\u8def\u7531\u548c\u83dc\u5355 - \u6dfb\u52a0\u8def\u7531/\u83dc\u5355"]," \u4e2d\u7684\u4ecb\u7ecd\u5b8c\u6210\u3002\u52a0\u597d\u540e\uff0c\u8bbf\u95ee ",["code","http://localhost:8000/#/new"]," \u5c31\u53ef\u4ee5\u770b\u5230\u65b0\u589e\u7684\u9875\u9762\u4e86\u3002"],["p",["img",{width:"600",alt:"\u65b0\u589e\u9875\u9762",src:"https://gw.alipayobjects.com/zos/rmsportal/xZIqExWKhdnzDBjajnZg.png"}]],["p",["br"]],["h2","Step3 \u65b0\u589e model\u3001service"],["p","\u5e03\u5c40\u53ca\u8def\u7531\u90fd\u914d\u7f6e\u597d\u4e4b\u540e\uff0c\u56de\u5230\u4e4b\u524d\u65b0\u5efa\u7684 ",["code","NewPage.js"],"\uff0c\u53ef\u4ee5\u5f00\u59cb\u5199\u4e1a\u52a1\u4ee3\u7801\u4e86\uff01\u5982\u679c\u9700\u8981\u7528\u5230 ",["a",{title:null,href:"https://github.com/dvajs/dva/"},"dva"]," \u4e2d\u7684\u6570\u636e\u6d41\uff0c\u8fd8\u9700\u8981\u5728 ",["code","src/models"]," ",["code","src/services"]," \u4e2d\u5efa\u7acb\u76f8\u5e94\u7684 model \u548c service\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003\u811a\u624b\u67b6\u5185\u7f6e\u9875\u9762\u7684\u5199\u6cd5\u3002"]],meta:{order:3,title:"\u65b0\u589e\u9875\u9762",type:"\u5165\u95e8",filename:"docs/new-page.md"},description:["section",["p","\u8fd9\u91cc\u7684\u300e\u9875\u9762\u300f\u6307\u914d\u7f6e\u4e86\u8def\u7531\uff0c\u80fd\u591f\u901a\u8fc7\u94fe\u63a5\u76f4\u63a5\u8bbf\u95ee\u7684\u6a21\u5757\uff0c\u8981\u65b0\u5efa\u4e00\u4e2a\u9875\u9762\uff0c\u901a\u5e38\u53ea\u9700\u8981\u5728\u811a\u624b\u67b6\u7684\u57fa\u7840\u4e0a\u8fdb\u884c\u7b80\u5355\u7684\u914d\u7f6e\u3002"]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Step1-\u65b0\u589e-js\u3001less-\u6587\u4ef6",title:"Step1 \u65b0\u589e js\u3001less \u6587\u4ef6"},"Step1 \u65b0\u589e js\u3001less \u6587\u4ef6"]],["li",["a",{className:"bisheng-toc-h2",href:"#Step2-\u5c06\u6587\u4ef6\u52a0\u5165\u83dc\u5355\u3001\u8def\u7531",title:"Step2 \u5c06\u6587\u4ef6\u52a0\u5165\u83dc\u5355\u3001\u8def\u7531"},"Step2 \u5c06\u6587\u4ef6\u52a0\u5165\u83dc\u5355\u3001\u8def\u7531"]],["li",["a",{className:"bisheng-toc-h2",href:"#Step3-\u65b0\u589e-model\u3001service",title:"Step3 \u65b0\u589e model\u3001service"},"Step3 \u65b0\u589e model\u3001service"]]]}}});