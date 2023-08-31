// const handleNotFound = (req, res, next) => {
//     res.status(400).json({msg: 'Not Found'});
// };

// const handleError = (err, req, res, next) => {
//     console.log(err);
//     res.status(500).json({msg: 'Server error'});
// };

// module.exports = {
//     handleNotFound,
//     handleError
// };

function errorHandeling(err, req, res, next) {
    if(err) {
        console.log(err.message)
        let status = err.status || 500
        res.json({
            status, 
            msg: "An error has occured"
        })
    }
    next()
}

module.exports  = errorHandeling