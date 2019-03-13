let _io;

const controller = {
    index: (req, res) => {                
        return res.render('pages/index');
    }
};


function init(io) {
        
    _io = io
    
    return controller;
}

module.exports = init;


