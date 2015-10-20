var store = []

module.exports = {
  store: function (to, message) {
    message.id = store.length -1  // really really safe
    store.push({
      to: to,
      message: message
    })
    return message.id
  },
  get: function (messageId) {
    return store[messageId]
  },
  list: function (to) {
    var list = []
    store.forEach(function (message) {
      if (message.to.type === to.type && message.to.id === to.id) {
        list.push(message)
      }
    })
    return list
  },
  all: function () {
    return store
  }
}
