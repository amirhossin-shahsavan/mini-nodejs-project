const Notfind = (res)=>{
    res.writeHead(404,{
        'Content-Type':'application/json'
    }); 
    res.write(JSON.stringify({
        message:'Route Not Find'
    }))
    res.end()
}

const NotfindProduct = (res)=>{
    res.writeHead(404,{
        'Content-Type':'application/json'
    }); 
    res.write(JSON.stringify({
        message:'Not Find Any Product'
    }))
    res.end()
}

const ErrorHandler = {
    Notfind,
    NotfindProduct
}

module.exports = ErrorHandler;  