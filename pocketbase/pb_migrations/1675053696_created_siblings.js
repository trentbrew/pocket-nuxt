migrate((db) => {
  const collection = new Collection({
    "id": "bjvudlqikc6qeyc",
    "created": "2023-01-30 04:41:36.534Z",
    "updated": "2023-01-30 04:41:36.534Z",
    "name": "siblings",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mudwi0u6",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "sjpvsuig",
        "name": "age",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "nryo6yt6",
        "name": "lives_in_chicago",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bjvudlqikc6qeyc");

  return dao.deleteCollection(collection);
})
