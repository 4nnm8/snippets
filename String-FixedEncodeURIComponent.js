String.prototype.FixedEncodeURIComponent() {
  return encodeURIComponent(this).replace(/[!'()*]/g, c => "%" + c.charCodeAt(0).toString(16))
}
