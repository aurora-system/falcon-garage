if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: 'mongodb+srv://falcon:Ftygvc55@falconcluster-yz6q6.mongodb.net/falcon?retryWrites=true&w=majority'
    }
}
else {
    module.exports = {
        mongoURI: 'mongodb://localhost/falcon'
        //mongoURI: 'mongodb+srv://falcon:Ftygvc55@falconcluster-yz6q6.mongodb.net/falcon?retryWrites=true&w=majority'
    }
}
