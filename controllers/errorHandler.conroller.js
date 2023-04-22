const Notfind = (res)=>{
    res.writeHead(404,{
        'Content-Type':'application/json'
    }); 
    res.write(JSON.stringify({
        message:'Route Not Find'
    }))
    res.end()
}

const ErrorHandler = {
    Notfind
};

module.exports = ErrorHandler;  