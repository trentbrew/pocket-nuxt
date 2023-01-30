migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bjvudlqikc6qeyc")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bjvudlqikc6qeyc")

  collection.listRule = null

  return dao.saveCollection(collection)
})
