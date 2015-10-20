var store = []

module.exports = {
  store: function (message) {
    message.id = store.length  // really really safe
    store.push(message)
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
