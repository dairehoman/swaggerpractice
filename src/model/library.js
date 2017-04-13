import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let librarySchema = new Schema({
    library: String
});

export default librarySchema;

module.exports = mongoose.model('Library',librarySchema);