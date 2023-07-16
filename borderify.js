alert('heello')
var iframe = document.createElement('iframe')
iframe.style.height = '100%'
iframe.style.width = '0px'
iframe.style.position = 'fixed'
iframe.style.top = '0px'
iframe.style.right = '0px'
iframe.style.zIndex = '99999999999'
iframe.style.border = 'thick solid #0000FF' 
iframe.setAttribute('allow', '')
iframe.src = chrome.runtime.getURL('index.html')
iframe.style.width = '400px'
document.body.appendChild(iframe)
