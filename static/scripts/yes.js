function reload() {
  const iframeContainer = document.getElementById('iframe-container')
  const iframes = Array.from(iframeContainer.querySelectorAll('iframe'))
  const activeIframe = iframes.find((iframe) => iframe.classList.contains('active'))
  activeIframe.src = activeIframe.src
}

function expand() {
  const iframeContainer = document.getElementById('iframe-container')
  const iframes = Array.from(iframeContainer.querySelectorAll('iframe'))
  const activeIframe = iframes.find((iframe) => iframe.classList.contains('active'))
  activeIframe.requestFullscreen()
}

function goBack() {
  const iframeContainer = document.getElementById('iframe-container')
  const iframes = Array.from(iframeContainer.querySelectorAll('iframe'))
  const activeIframe = iframes.find((iframe) => iframe.classList.contains('active'))
  activeIframe.contentWindow.history.back()
}

function goForward() {
  const iframeContainer = document.getElementById('iframe-container')
  const iframes = Array.from(iframeContainer.querySelectorAll('iframe'))
  const activeIframe = iframes.find((iframe) => iframe.classList.contains('active'))
  activeIframe.contentWindow.history.forward()
}
function erudaToggle() {
  const iframeContainer = document.getElementById('iframe-container')
  const iframes = Array.from(iframeContainer.querySelectorAll('iframe'))
  const activeIframe = iframes.find((iframe) => iframe.classList.contains('active'))

  const proccyWindow = activeIframe.contentWindow
  const proccyDocument = activeIframe.contentDocument

  if (!proccyWindow || !proccyDocument) return

  if (proccyWindow.eruda?._isInit) {
    proccyWindow.eruda.destroy()
  } else {
    let script = proccyDocument.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/eruda'
    script.onload = function () {
      if (!proccyWindow) return
      proccyWindow.eruda.init()
      proccyWindow.eruda.show()
    }
    proccyWindow.document?.head?.appendChild(script) || proccyDocument.head.appendChild(script)
  }
}
