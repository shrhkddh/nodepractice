const mongodb   = require('mongodb').MongoClient;
const csvtojson = require('csvtojson');

csvtojson()
.fromFile('group9.csv')
.then(csvData => {
    console.log(csvData);

    mongodb.connect(process.env.MONGO_URL, {
        // useNewurlParser     : true,
        // useUnifieldTopology : true
    }, (err, client) => {
        if (err) throw err;

        client
        .db('wecodegroup')
        .collection('category')
        .insertMany(csvData, (err, res) => {
            if (err) throw err;

            console.log(`Inserted : ${res.insertedCount} rows`);
            client.close();
        });
    }
    );
});