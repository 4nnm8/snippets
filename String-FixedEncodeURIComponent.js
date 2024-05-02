String.prototype.FixedEncodeURIComponent = function() {
  return encodeURIComponent(this).replace(/[!'()*]/g, c => "%" + c.charCodeAt(0).toString(16))
}

// USAGE:

"https://github.com/4nnm8/snippets/blob/main/String-FixedEncodeURIComponent.js".FixedEncodeURIComponent();

// OUTPUT:

"https%3A%2F%2Fgithub.com%2F4nnm8%2Fsnippets%2Fblob%2Fmain%2FString-FixedEncodeURIComponent.js"
