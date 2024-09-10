const newman = require ('newman'); 
require(' dotenv' ) . config(); 

newman. run ({
    collection :`https://api.postman.com/collections/37996569-5f01c986-1329-4a7d-be2a-322da69cf0b4?access_key= ${process.env.secretKey}`,
    reporters: 'htmlextra', 
    iterationCount : 1, 
    reporter: { 
        htmlextra: { 
            export:'./Reports/report.html',
        }
    }
}, function (err) { 
    if (err) { throw err; }
    console.log('collection run complete!');
    
});