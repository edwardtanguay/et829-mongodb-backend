# Mongo Db

## _**PROJECTS**_

### Library API - Books | Users | Authors

### Bus API - Routes | Travels | Employees | Customers

## _**VERZEICHNIS**_  

### **Tag 1 | Library API - Messages :** Einleitung - Installation - CRUD in mongosh:

#### Einleitung

- Was ist MongoDb und mongoose | haupte Eigenschaften
- Welche Technologien werden wir nutzen (Express, postman, mongoose, Terminal | MongoDBCompas | VSC Extension)

#### Installation

#### CRUD in mongosh

_aber..._ **wofür?**

- Grundlage
- db Administration: data migration, untersuchen, verwalten, testing ....
- scripting
- prototyping

#### Using compass for mongoDB (quick overview)

### **Tag 2 | Library API - Users :** Schema I - Model

- Ab heute geht's realistich: MongoDb mit Express
- Introduction : ODM and ORM
- Schema design principles
- Planning our collection schema: Class diagrams
- Schema options - Specifying a type the long way: { type: <field type> }

### **Tag 3 | Library API - Authors and Books :** Schema II - Moar Model

- Sub Documents - Nesting objects in a Schema
- Retrieve I: updating our project's controllers - Getting all documents in collection: await <model name>.find({});
- Retrieve II: updating our project's controllers - Route params: Processing variables in the path, req.params
- Update & Delete: updating our project's controllers - Updating a document: await <model name>.findByIdAndUpdate(id, <data>);
- Relationship types: One to One, One to Many, Many to Many
- Populate and Select: updating our project's controllers - Populating results: Query.prototype.populate(<ref field>)

### **Tag 4 | Library API:** Mock Data

Generating fake data using faker: faker api docs

### **Tag 5 | ?API :** CRUD Im Express

### **Tag 6 | ?API :** Aggregation

Updating our project controllers - Filtering results using criteria chain:

